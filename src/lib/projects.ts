export interface ProjectFrontmatter {
  title: string
  description?: string
  date?: string
  tags?: string[]
  featured?: boolean
  image?: string
  github?: string
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

export async function getAllProjects(): Promise<Project[]> {
  const projects = await Promise.all(
    Object.entries(projectModules).map(async ([path, moduleLoader]) => {
      const slug = path.replace('/src/content/projects/', '').replace('.mdx', '')
      const { frontmatter } = await moduleLoader()
      
      return {
        slug,
        ...frontmatter,
      }
    })
  )
  
  // Sort by date (newest first), then by featured status, then by title
  return projects.sort((a, b) => {
    // Featured projects first
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    
    // Then by date
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    if (a.date) return -1
    if (b.date) return 1
    
    // Finally by title
    return (a.title || '').localeCompare(b.title || '')
  })
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const allProjects = await getAllProjects()
  return allProjects.filter(project => project.featured)
}

export async function getProjectsByTag(tag: string): Promise<Project[]> {
  const allProjects = await getAllProjects()
  return allProjects.filter(project => 
    project.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
  )
}
