import type { TOCItem } from '@/components/table-of-contents'
import extractedLinks from '@/generated/note-links.json'

// Type for the extracted links map
const noteLinkMap = extractedLinks as Record<string, string[]>

export interface NoteFrontmatter {
  title?: string
  links?: string[]
  hide?: boolean
}

export interface Note {
  slug: string        // Full path (e.g., "ai/rag/chunking")
  folder: string      // Parent folder path (e.g., "ai/rag")
  filename: string    // Just the filename (e.g., "chunking")
  title: string
  links: string[]
  hide?: boolean
}

// MDX component props type
interface MDXProps {
  components?: Record<string, React.ComponentType<any>>
}

// Support nested folders with **/*
const noteModules = import.meta.glob('/src/content/notes/**/*.{md,mdx}', {
  eager: false,
}) as Record<string, () => Promise<{ default: React.ComponentType<MDXProps>; frontmatter: NoteFrontmatter; toc: TOCItem[] }>>

export async function getNote(slug: string) {
  const pathMdx = `/src/content/notes/${slug}.mdx`
  const pathMd = `/src/content/notes/${slug}.md`
  const module = noteModules[pathMdx] || noteModules[pathMd]
  
  if (!module) {
    return null
  }
  
  const { default: Component, frontmatter, toc } = await module()
  return { 
    Component, 
    frontmatter: frontmatter as NoteFrontmatter,
    toc: toc || [],
    slug 
  }
}

// Helper to convert slug to title
function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export async function getAllNotes(): Promise<Note[]> {
  const notes = await Promise.all(
    Object.entries(noteModules).map(async ([path, moduleLoader]) => {
      // slug includes full path: "ai/rag/chunking"
      const slug = path
        .replace('/src/content/notes/', '')
        .replace(/\.(mdx|md)$/i, '')
      
      // Extract folder and filename
      const parts = slug.split('/')
      const filename = parts.pop() || slug
      const folder = parts.join('/')
      
      const { frontmatter } = await moduleLoader()
      const title = frontmatter?.title || slugToTitle(filename)
      
      // Merge frontmatter links with extracted links from content
      const frontmatterLinks = frontmatter?.links || []
      const extractedLinksForNote = noteLinkMap[slug] || []
      const links = [...new Set([...frontmatterLinks, ...extractedLinksForNote])]

      return {
        slug,
        folder,
        filename,
        title,
        links,
        hide: frontmatter?.hide,
      }
    }),
  )

  // Filter out hidden notes and sort by folder then title
  const visibleNotes = notes
    .filter((note) => note.hide !== true)
    .sort((a, b) => {
      if (a.folder !== b.folder) {
        return a.folder.localeCompare(b.folder)
      }
      return a.title.localeCompare(b.title)
    })

  return visibleNotes
}

export async function getNotesGraph() {
  const notes = await getAllNotes();

  const nodeSet = new Set(notes.map(n => n.slug));

  const nodes = notes.map(n => ({
    id: n.slug,
    title: n.title,
  }));

  const links: { source: string; target: string }[] = [];

  notes.forEach(n => {
    n.links?.forEach(target => {
      if (nodeSet.has(target)) {
        links.push({ source: n.slug, target });
      }
    });
  });

  return { nodes, links };
}

// Item in a folder - can be a note or a subfolder
export interface FolderItem {
  id: string
  title: string
  type: 'note' | 'folder'
  noteCount?: number // Only for folders
  links?: string[] // Only for notes
}

// Build hierarchical folder graph data for the notes index page
export async function getFolderGraphData() {
  const notes = await getAllNotes();

  // Group notes by top-level folder, tracking subfolders
  const folderMap = new Map<string, {
    items: FolderItem[]
    subfolders: Set<string>
  }>();

  notes.forEach(note => {
    const parts = note.folder.split('/').filter(Boolean);
    const topFolder = parts[0] || 'uncategorized';
    
    if (!folderMap.has(topFolder)) {
      folderMap.set(topFolder, { items: [], subfolders: new Set() });
    }
    
    const folderData = folderMap.get(topFolder)!;
    
    // Check if this note is in a subfolder
    if (parts.length > 1) {
      // Note is in a subfolder - track the immediate subfolder
      const subfolder = parts[1];
      folderData.subfolders.add(subfolder);
    }
    
    // Add the note with its relative path info and links
    folderData.items.push({
      id: note.slug,
      title: note.title,
      type: 'note',
      links: note.links,
    });
  });

  // Convert to array format with subfolder info
  const folders = Array.from(folderMap.entries()).map(([name, data]) => {
    // Build items list: subfolders first, then direct notes
    const subfolderItems: FolderItem[] = Array.from(data.subfolders).map(sf => {
      // Count notes in this subfolder
      const subfolderPrefix = `${name}/${sf}`;
      const noteCount = data.items.filter(item => 
        item.id.startsWith(subfolderPrefix)
      ).length;
      
      return {
        id: `${name}/${sf}`,
        title: sf.replace(/-/g, ' ').toUpperCase(),
        type: 'folder' as const,
        noteCount,
      };
    });
    
    // Direct notes (not in subfolders)
    const directNotes = data.items.filter(item => {
      const itemParts = item.id.split('/');
      return itemParts.length === 2; // topFolder/noteName
    });
    
    return {
      name,
      noteCount: data.items.length,
      items: [...subfolderItems.sort((a, b) => a.title.localeCompare(b.title)), 
              ...directNotes.sort((a, b) => a.title.localeCompare(b.title))],
      // Notes array with id, title, and links for graph rendering
      notes: data.items.map(item => ({
        id: item.id,
        title: item.title,
        links: item.links || [],
      })),
    };
  });

  // Sort folders alphabetically
  folders.sort((a, b) => a.name.localeCompare(b.name));

  return { folders };
}

