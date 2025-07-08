export interface ProjectFrontmatter {
  title: string
  description?: string
  date?: string
  tags?: string[]

  image?: string
  github?: string
  website?: string
  demo?: string
  status?: 'completed' | 'in-progress' | 'archived'
}

export interface Project extends ProjectFrontmatter {
  slug: string
}

// Get all project modules
const projectModules = import.meta.glob('/src/content/projects/*.mdx', {
  eager: false,
}) as Record<string, () => Promise<{ default: any; frontmatter: ProjectFrontmatter }>>

export async function getProject(slug: string) {
  const path = `/src/content/projects/${slug}.mdx`
  const module = projectModules[path]
  
  if (!module) {
    return null
  }
  
  const { default: Component, frontmatter } = await module()
  return { 
    Component, 
    frontmatter: frontmatter as ProjectFrontmatter,
    slug 
  }
}
