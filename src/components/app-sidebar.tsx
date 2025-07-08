import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,

  SidebarHeader,
} from "@/components/ui/sidebar";
import { Note } from "@/lib/notes";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface AppSidebarProps {
  notes?: Note[];
}

export function AppSidebar({ notes }: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className="text-lg font-semibold tracking-tight">Notes</h2>
      </SidebarHeader>
      <SidebarContent>
        {notes && notes.length > 0 ? (
          <SidebarGroup>
            <div className="flex flex-col gap-1">
              {notes.map((note) => (
                <Link
                  key={note.slug}
                  to="/notes/$noteId"
                  params={{ noteId: note.slug }}
                  className={cn(
                    "px-3 py-1.5 text-sm rounded-md transition-colors",
                    "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  activeProps={{
                    className: "bg-primary/10 text-primary font-semibold",
                  }}
                >
                  {note.title}
                </Link>
              ))}
            </div>
          </SidebarGroup>
        ) : (
          <>
            <SidebarGroup />
            <SidebarGroup />
          </>
        )}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}