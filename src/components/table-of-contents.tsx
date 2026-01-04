
import { cn } from '@/lib/utils'

export interface TOCItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  items: TOCItem[]
  className?: string
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 96 // Corresponds to sticky top-24 (24 * 4px)
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  if (items.length === 0) {
    return null
  }

  return (
    <nav className={cn('space-y-2 overflow-y-auto', className)}>
      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide sticky top-0 bg-background pb-2 z-10">
        On This Page
      </h3>
      <ul className="space-y-1 border-l border-border">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={cn(
                'block w-full text-left text-sm transition-colors duration-200 py-1',
                'text-muted-foreground hover:text-foreground',
                {
                  'pl-4': item.level <= 2,
                  'pl-7': item.level === 3,
                  'pl-10': item.level === 4,
                  'pl-12': item.level === 5,
                  'pl-14': item.level >= 6,
                }
              )}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

// Utility function to extract TOC from MDX content
export function extractTOCFromContent(content: string): TOCItem[] {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm
  const items: TOCItem[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const title = match[2].trim()
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')

    items.push({
      id,
      title,
      level,
    })
  }

  return items
}
