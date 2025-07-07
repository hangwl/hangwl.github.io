import { createFileRoute, notFound } from '@tanstack/react-router';
import { Suspense, useEffect } from 'react';
import { getNote } from '@/lib/notes';
import { NoteLayout } from '@/components/note-layout';
import { useHeadings } from '@/hooks/use-headings';
import { useTOC } from '@/context/toc-context';

export const Route = createFileRoute('/notes/$noteId')({
  loader: async ({ params }) => {
    const note = await getNote(params.noteId);
    if (!note) {
      throw notFound();
    }
    return note;
  },
  component: NotePage,
  notFoundComponent: () => <div>Note not found</div>,
});

function NotePage() {
  const { Component, frontmatter } = Route.useLoaderData();
  const headings = useHeadings();
  const { setTocItems } = useTOC();

  useEffect(() => {
    setTocItems(headings);
    return () => {
      setTocItems([]);
    };
  }, [headings, setTocItems]);

  return (
    <NoteLayout>
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4" id={frontmatter.title.toLowerCase().replace(/\s+/g, '-')}>{frontmatter.title}</h1>
        {frontmatter.description && (
          <p className="text-xl text-muted-foreground mb-6">
            {frontmatter.description}
          </p>
        )}
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
          {frontmatter.date && (
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString()}
            </time>
          )}
        </div>
        {frontmatter.tags && (
          <div className="flex flex-wrap gap-2 mb-6">
            {frontmatter.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-24">
        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      </article>
    </NoteLayout>
  );
}
