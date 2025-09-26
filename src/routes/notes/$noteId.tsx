import { createFileRoute, notFound } from '@tanstack/react-router';
import { useEffect } from 'react';
import { getNote } from '@/lib/notes';
import { NoteLayout } from '@/components/note-layout';
import { useHeadings } from '@/hooks/use-headings';
import { useTOC } from '@/context/toc-context';
import Pre from '@/components/mdx/Pre';

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
  const { noteId } = Route.useParams();
  const headings = useHeadings();
  const { setTocItems } = useTOC();

  useEffect(() => {
    const fallback = (noteId || '').replace(/-/g, ' ').trim().toLowerCase();
    const name = (frontmatter?.title?.toString().trim().toLowerCase()) || fallback;
    if (name) {
      document.title = `notes | ${name}`;
    }
  }, [frontmatter?.title, noteId]);

  useEffect(() => {
    setTocItems(headings);
    return () => {
      setTocItems([]);
    };
  }, [headings, setTocItems]);

  return (
    <NoteLayout>
      <h1 className="text-4xl font-bold mb-8 italic" id={frontmatter.title.toLowerCase().replace(/\s+/g, '-')}>{frontmatter.title}</h1>
      <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-24">
        <Component components={{ pre: Pre }} />
      </article>
    </NoteLayout>
  );
}
