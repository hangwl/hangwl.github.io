import { ReactNode } from 'react'
import { TableOfContents, type TOCItem } from './table-of-contents'
import { cn } from '@/lib/utils'

interface ProjectLayoutProps {
  children: ReactNode
  tocItems: TOCItem[]
  className?: string
}

export function ProjectLayout({ children, tocItems, className }: ProjectLayoutProps) {
  const hasTOC = tocItems.length > 0

  return (
    <div className={cn('mx-auto px-12 pt-24 pb-24', className)}>
      <div className={cn(
        'grid gap-8 mx-auto',
        hasTOC
          ? 'lg:grid-cols-[1fr_240px] max-w-7xl'
          : 'max-w-4xl',
      )}>

        {/* Main Content */}
        <main className="min-w-0">
          {children}
        </main>

        {/* Right Sidebar - Table of Contents */}
        {hasTOC && (
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents
                items={tocItems}
                className="max-h-[calc(100vh-7rem)]"
              />
            </div>
          </aside>
        )}
      </div>
    </div>
  )

}
