import { createFileRoute } from '@tanstack/react-router';
import { useEffect, lazy, Suspense } from 'react';
import { getFolderGraphData } from '@/lib/notes';
import { PageLoader } from '@/components/page-loader';
import { generateSEO } from '@/lib/seo';

const NoteGraph = lazy(() => import('@/components/note-graph'));

export const Route = createFileRoute('/notes/')({
  loader: getFolderGraphData,
  head: () =>
    generateSEO({
      title: 'Notes',
      description: 'Technical notes and knowledge base on AI/ML, data engineering, and software development',
      url: 'https://hangwl.github.io/notes',
    }),
  component: NotesIndex,
  pendingComponent: () => <PageLoader message="Loading notes graph..." />,
  staleTime: Infinity,
});

function NotesIndex() {
  const data = Route.useLoaderData();

  useEffect(() => {
    document.title = "notes | ...";
  }, []);

  return (
    <div className="flex flex-col h-full p-6 pb-24">
      <header className="flex-shrink-0">
        <p className="text-xl text-muted-foreground mb-4">
          Inspired by <a href="https://chanjunren.github.io/" className="underline" target="_blank" rel="noopener noreferrer">CJR</a>
        </p>
      </header>
      <div className="flex-1 min-h-0">
        <Suspense fallback={<PageLoader message="Loading graph..." fullScreen={false} />}>
          <NoteGraph data={data} />
        </Suspense>
      </div>
    </div>
  );
}
