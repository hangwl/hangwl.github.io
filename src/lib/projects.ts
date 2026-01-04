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
  
  // Timeline display options
  featured?: boolean // Show on homepage timeline
  order?: number // Display order (lower = earlier in timeline)
  hide?: boolean // Hide from all listings
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
      const slug = path
        .replace('/src/content/projects/', '')
        .replace(/\.mdx$/i, '')
      const { frontmatter } = await moduleLoader()

      return {
        slug,
        ...frontmatter,
      }
    }),
  )

  // Filter out hidden projects and sort by order/date
  const visibleProjects = projects
    .filter((project) => project.hide !== true)
    .sort((a, b) => {
      // Sort by order first (if specified)
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order
      }
      if (a.order !== undefined) return -1
      if (b.order !== undefined) return 1
      
      // Then by date (newest first)
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      if (a.date) return -1
      if (b.date) return 1
      
      // Finally by title
      return (a.title || '').localeCompare(b.title || '')
    })

  return visibleProjects
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const allProjects = await getAllProjects()
  return allProjects.filter((project) => project.featured === true)
}
