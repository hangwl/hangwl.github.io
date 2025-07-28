import { createFileRoute, notFound } from '@tanstack/react-router'
import { Suspense, useEffect } from 'react'
import { getProject } from '@/lib/projects'
import { ProjectLayout } from '@/components/project-layout'
import { useHeadings } from '@/hooks/use-headings'
import { useTOC } from '@/context/toc-context'
import { Button } from '@/components/ui/button'
import Pre from '@/components/mdx/Pre'

export const Route = createFileRoute('/projects/$slug')({
  loader: async ({ params }) => {
    const project = await getProject(params.slug)
    if (!project) {
      throw notFound()
    }
    return project
  },
  component: ProjectPage,
  notFoundComponent: () => <div>Project not found</div>,
})

function ProjectPage() {
  const { Component, frontmatter } = Route.useLoaderData()
  const headings = useHeadings()
  const { setTocItems } = useTOC()

  useEffect(() => {
    setTocItems(headings)
    return () => {
      setTocItems([])
    }
  }, [headings, setTocItems])
  
  return (
    <ProjectLayout tocItems={headings}>
      {/* Project Header */}
      <header className="p-4 mb-12 border border-border rounded-lg bg-card">
        {frontmatter.image && (
          <div className="mb-8 overflow-hidden rounded-lg p-4">
            <img
              src={frontmatter.image}
              alt={frontmatter.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
        {frontmatter.description && (
          <p className="text-xl text-muted-foreground mb-6">
            {frontmatter.description}
          </p>
        )}
        
        {/* Project Metadata */}
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
          {frontmatter.date && (
            <time dateTime={frontmatter.date} className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(frontmatter.date).toLocaleDateString()}
            </time>
          )}
          
          {frontmatter.status && (
            <span className={`flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ${
              frontmatter.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
              frontmatter.status === 'in-progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
              'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                frontmatter.status === 'completed' ? 'bg-green-500' :
                frontmatter.status === 'in-progress' ? 'bg-blue-500' :
                'bg-gray-500'
              }`} />
              {frontmatter.status.charAt(0).toUpperCase() + frontmatter.status.slice(1).replace('-', ' ')}
            </span>
          )}
        </div>
        
        {/* Tags */}
        {frontmatter.tags && (
          <div className="flex flex-wrap gap-2 mb-6">
            {frontmatter.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Project Links */}
        {(frontmatter.github || frontmatter.website || frontmatter.demo) && (
          <div className="flex flex-wrap gap-4">
            {frontmatter.github && (
              <Button asChild>
                <a
                  href={frontmatter.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </a>
              </Button>
            )}
            {frontmatter.website && (
              <Button asChild variant="outline">
                <a
                  href={frontmatter.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit Website
                </a>
              </Button>
            )}
            {frontmatter.demo && (
              <Button asChild variant="outline">
                <a
                  href={frontmatter.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        )}
      </header>
      
      {/* Project Content */}
      <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-20">
        <Suspense fallback={<div className="animate-pulse">Loading content...</div>}>
          <Component components={{ pre: Pre }} />
        </Suspense>
      </article>
    </ProjectLayout>
  )
}
