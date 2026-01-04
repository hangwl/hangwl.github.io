export interface NoteFrontmatter {
  title: string
  links?: string[]
  hide?: boolean
}

export interface Note extends NoteFrontmatter {
  slug: string
}

const noteModules = import.meta.glob('/src/content/notes/*.{md,mdx}', {
  eager: false,
}) as Record<string, () => Promise<{ default: any; frontmatter: NoteFrontmatter }>>

export async function getNote(slug: string) {
  const pathMdx = `/src/content/notes/${slug}.mdx`
  const pathMd = `/src/content/notes/${slug}.md`
  const module = noteModules[pathMdx] || noteModules[pathMd]
  
  if (!module) {
    return null
  }
  
  const { default: Component, frontmatter } = await module()
  return { 
    Component, 
    frontmatter: frontmatter as NoteFrontmatter,
    slug 
  }
}

export async function getAllNotes(): Promise<Note[]> {
  const notes = await Promise.all(
    Object.entries(noteModules).map(async ([path, moduleLoader]) => {
      const slug = path
        .replace('/src/content/notes/', '')
        .replace(/\.(mdx|md)$/i, '')
      const { frontmatter } = await moduleLoader()

      return {
        slug,
        ...frontmatter,
      }
    }),
  )

  // Filter out hidden notes and sort by title
  const visibleNotes = notes
    .filter((note) => note.hide !== true)
    .sort((a, b) => (a.title || '').localeCompare(b.title || ''))

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

