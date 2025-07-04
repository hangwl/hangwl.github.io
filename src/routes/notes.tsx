import { Outlet, createFileRoute } from '@tanstack/react-router';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import NotesHeader from '@/components/notes-header';

export const Route = createFileRoute('/notes')({
  component: () => (
    <SidebarProvider>
      <AppSidebar />
      <main className="relative flex flex-col flex-1 min-w-0">
        <NotesHeader />
        <Outlet />
      </main>
    </SidebarProvider>
  ),
})
