export interface NoteFrontmatter {
  title: string
  description?: string
  date?: string
  tags?: string[]
  published?: boolean
  showcase?: boolean
}

export interface Note extends NoteFrontmatter {
  slug: string
}

const noteModules = import.meta.glob('/src/content/notes/*.mdx', {
  eager: false,
}) as Record<string, () => Promise<{ default: any; frontmatter: NoteFrontmatter }>>

export async function getNote(slug: string) {
  const path = `/src/content/notes/${slug}.mdx`
  const module = noteModules[path]
  
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
      const slug = path.replace('/src/content/notes/', '').replace('.mdx', '')
      const { frontmatter } = await moduleLoader()
      
      return {
        slug,
        ...frontmatter,
      }
    })
  )
  
  // Filter out unpublished notes and sort by date (newest first)
  const publishedNotes = notes
    .filter(note => note.published !== false)
    .sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      if (a.date) return -1
      if (b.date) return 1
      return (a.title || '').localeCompare(b.title || '')
    })
  
  return publishedNotes
}

export async function getShowcasedNotes(): Promise<Note[]> {
  const publishedNotes = await getAllNotes();
  return publishedNotes
    .filter(note => note.showcase === true)
    .sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      if (a.date) return -1
      if (b.date) return 1
      return (a.title || '').localeCompare(b.title || '')
    })
}
