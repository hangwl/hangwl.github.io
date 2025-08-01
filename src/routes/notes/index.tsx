import { createFileRoute } from '@tanstack/react-router';
import NoteGraph from '@/components/note-graph';
import { getNotesGraph } from '@/lib/notes';

export const Route = createFileRoute('/notes/')({
  loader: getNotesGraph,
  component: NotesIndex,
});

function NotesIndex() {
  const graph = Route.useLoaderData();

  return (
    <div className="p-6">
      <header>
        <p className="text-xl text-muted-foreground mb-4">
          Inspired by <a href="https://chanjunren.github.io/" className="underline" target="_blank" rel="noopener noreferrer">CJR</a>
        </p>
      </header>
      <div className="mx-auto">
        <NoteGraph graph={graph} />
      </div>
    </div>
  );
}
