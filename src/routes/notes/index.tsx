import { createFileRoute, Link } from '@tanstack/react-router';
import { getAllNotes } from '@/lib/notes';

export const Route = createFileRoute('/notes/')({
  loader: getAllNotes,
  component: NotesIndex,
});

function NotesIndex() {
  const notes = Route.useLoaderData();

  return (
    <div className="pt-24 p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold tracking-tighter mb-4">Notes</h1>
          <p className="text-xl text-muted-foreground">A collection of thoughts and learnings.</p>
        </header>
        <div className="space-y-8">
          {notes.map((note) => (
            <Link
              key={note.slug}
              to="/notes/$noteId"
              params={{ noteId: note.slug }}
              className="block group"
            >
              <article className="p-6 border rounded-xl hover:bg-muted/50 transition-colors duration-200">
                <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {note.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {note.description}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  {note.date && (
                    <time dateTime={note.date}>
                      {new Date(note.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {note.tags?.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-muted rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
