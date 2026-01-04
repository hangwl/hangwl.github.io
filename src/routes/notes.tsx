import { Outlet, createFileRoute } from '@tanstack/react-router';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import NotesHeader from '@/components/notes-header';
import { TOCProvider } from '@/context/toc-context';
import { getAllNotes } from '@/lib/notes';

export const Route = createFileRoute('/notes')({
  loader: getAllNotes,
  component: NotesLayoutComponent,
});

function NotesLayoutComponent() {
  const notes = Route.useLoaderData();

  return (
    <SidebarProvider>
      <AppSidebar notes={notes} />
      <TOCProvider>
        <main className="relative flex flex-col flex-1 min-w-0 min-h-0">
          <NotesHeader />
          <div className="flex-1 min-h-0">
            <Outlet />
          </div>
        </main>
      </TOCProvider>
    </SidebarProvider>
  );
}
