import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import { getNote } from '@/lib/notes';
import { NoteLayout } from '@/components/note-layout';
import { useTOC } from '@/context/toc-context';
import Pre from '@/components/mdx/Pre';
import Table from '@/components/mdx/Table';
import Anchor from '@/components/mdx/Anchor';
import { SkeletonNote } from '@/components/skeleton-loader';
import { generateNoteSEO } from '@/lib/seo';
import { NoteNotFound } from '@/components/not-found';

export const Route = createFileRoute('/notes/$')({
  loader: async ({ params }) => {
    // Splat param contains the full nested path (e.g., "ai/rag/chunking")
    const notePath = params._splat;
    if (!notePath) {
      return { notFound: true } as const;
    }
    const note = await getNote(notePath);
    if (!note) {
      return { notFound: true } as const;
    }
    return { ...note, notFound: false } as const;
  },
  head: ({ loaderData }) => {
    if (!loaderData || loaderData.notFound) return {};
    return generateNoteSEO(loaderData.frontmatter.title || '', loaderData.slug);
  },
  component: NotePage,
  pendingComponent: () => (
    <NoteLayout>
      <SkeletonNote />
    </NoteLayout>
  ),
});

function NotePage() {
  const loaderData = Route.useLoaderData();
  const { _splat: notePath } = Route.useParams();
  const { setTocItems } = useTOC();

  const isNotFound = loaderData.notFound;
  const Component = isNotFound ? null : loaderData.Component;
  const frontmatter = isNotFound ? null : loaderData.frontmatter;
  const toc = isNotFound ? [] : loaderData.toc;

  // Sync TOC to context (for mobile header etc)
  useEffect(() => {
    if (isNotFound) return;
    setTocItems(toc);
    return () => {
      setTocItems([]);
    };
  }, [toc, setTocItems, isNotFound]);

  useEffect(() => {
    if (isNotFound || !frontmatter) return;
    const fallback = (notePath || '').split('/').pop()?.replace(/-/g, ' ').trim().toLowerCase() || '';
    const name = (frontmatter?.title?.toString().trim().toLowerCase()) || fallback;
    if (name) {
      document.title = `notes | ${name}`;
    }
  }, [frontmatter, notePath, isNotFound]);

  if (isNotFound) {
    return <NoteNotFound />;
  }

  return (
    <NoteLayout noteId={notePath} toc={toc}>
      <h1 className="text-4xl font-bold mb-8 italic" id={(frontmatter?.title || '').toLowerCase().replace(/\s+/g, '-')}>{frontmatter?.title}</h1>
      <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-24">
        {Component && <Component components={{ pre: Pre, table: Table, a: Anchor }} />}
      </article>
    </NoteLayout>
  );
}
