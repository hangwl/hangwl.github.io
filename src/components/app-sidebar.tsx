import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Note } from "@/lib/notes";
import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, FolderOpen, FileText } from "lucide-react";
import { useState, useMemo, useEffect } from "react";

interface AppSidebarProps {
  notes?: Note[];
}

interface FolderNode {
  name: string;
  path: string;
  notes: Note[];
  children: Map<string, FolderNode>;
}

// Build folder tree from flat notes list
function buildFolderTree(notes: Note[]): FolderNode {
  const root: FolderNode = { name: "", path: "", notes: [], children: new Map() };

  for (const note of notes) {
    const folderParts = note.folder.split("/").filter(Boolean);
    let current = root;

    // Navigate/create folder path
    let currentPath = "";
    for (const part of folderParts) {
      currentPath = currentPath ? `${currentPath}/${part}` : part;
      if (!current.children.has(part)) {
        current.children.set(part, {
          name: part,
          path: currentPath,
          notes: [],
          children: new Map(),
        });
      }
      current = current.children.get(part)!;
    }

    // Add note to final folder
    current.notes.push(note);
  }

  return root;
}

// Format folder name for display (all caps)
function formatFolderName(name: string): string {
  return name.replace(/-/g, " ").toUpperCase();
}

interface FolderItemProps {
  folder: FolderNode;
  depth?: number;
  activePath: string;
}

function FolderItem({ folder, depth = 0, activePath }: FolderItemProps) {
  // Check if this folder contains the active note
  const isInActivePath = activePath.startsWith(folder.path + '/') || activePath === folder.path;
  const [isOpen, setIsOpen] = useState(isInActivePath);
  
  // Update open state when active path changes
  useEffect(() => {
    if (isInActivePath) {
      setIsOpen(true);
    }
  }, [isInActivePath]);
  const hasContent = folder.notes.length > 0 || folder.children.size > 0;

  if (!hasContent) return null;

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-left rounded-md transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
      >
        <FolderOpen className="h-4 w-4 shrink-0" />
        <span className="flex-1 font-medium">{formatFolderName(folder.name)}</span>
        {isOpen ? (
          <ChevronDown className="h-4 w-4 shrink-0" />
        ) : (
          <ChevronRight className="h-4 w-4 shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className={cn("border-l border-border ml-5 pl-2")}>
          {/* Render child folders */}
          {Array.from(folder.children.values()).map((child) => (
            <FolderItem key={child.path} folder={child} depth={depth + 1} activePath={activePath} />
          ))}
          {/* Render notes in this folder */}
          {folder.notes.map((note) => (
            <Link
              key={note.slug}
              to="/notes/$"
              params={{ _splat: note.slug }}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors",
                "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
              activeProps={{
                className: "!text-blue-600 dark:!text-blue-400 font-medium bg-muted",
              }}
            >
              <FileText className="h-4 w-4 shrink-0" />
              <span>{note.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function AppSidebar({ notes }: AppSidebarProps) {
  const location = useLocation();
  
  // Extract the note path from the URL (e.g., /notes/ai/rag/chunking -> ai/rag/chunking)
  const activePath = useMemo(() => {
    const match = location.pathname.match(/^\/notes\/(.+)$/);
    return match ? match[1] : '';
  }, [location.pathname]);
  
  const folderTree = useMemo(() => {
    if (!notes) return null;
    return buildFolderTree(notes);
  }, [notes]);

  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className="text-lg font-semibold tracking-tight">Notes</h2>
      </SidebarHeader>
      <SidebarContent>
        {folderTree && folderTree.children.size > 0 ? (
          <SidebarGroup>
            <div className="flex flex-col gap-0.5">
              {Array.from(folderTree.children.values()).map((folder) => (
                <FolderItem key={folder.path} folder={folder} activePath={activePath} />
              ))}
              {/* Root-level notes (no folder) */}
              {folderTree.notes.map((note) => (
                <Link
                  key={note.slug}
                  to="/notes/$"
                  params={{ _splat: note.slug }}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors",
                    "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  activeProps={{
                    className: "!text-blue-600 dark:!text-blue-400 font-medium bg-muted",
                  }}
                >
                  <FileText className="h-4 w-4 shrink-0" />
                  <span>{note.title}</span>
                </Link>
              ))}
            </div>
          </SidebarGroup>
        ) : (
          <SidebarGroup>
            <p className="text-sm text-muted-foreground px-3">No notes available</p>
          </SidebarGroup>
        )}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}