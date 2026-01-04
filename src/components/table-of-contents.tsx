import { cn } from '@/lib/utils'
import { useEffect, useState, useRef } from 'react'

export interface TOCItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  items: TOCItem[]
  className?: string
}

function getInitialHash(): string {
  if (typeof window !== 'undefined') {
    return window.location.hash.slice(1)
  }
  return ''
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(getInitialHash)
  const isClickScrollingRef = useRef(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Mark that we're doing a click-initiated scroll
      isClickScrollingRef.current = true
      setActiveId(id)
      
      const headerOffset = 96 // Corresponds to sticky top-24 (24 * 4px)
      const elementPosition = element.getBoundingClientRect().top
      const targetY = Math.max(0, elementPosition + window.pageYOffset - headerOffset)

      // Instant scroll (no smooth behavior to avoid scrollend timing issues)
      window.scrollTo({
        top: targetY,
        behavior: 'instant',
      })
      
      // Update URL hash without triggering scroll
      window.history.pushState(null, '', `#${id}`)
      
      // Reset the flag after scroll completes
      requestAnimationFrame(() => {
        isClickScrollingRef.current = false
      })
    }
  }

  useEffect(() => {
    if (items.length === 0) return

    // Find the topmost visible heading
    const findActiveHeading = (): string => {
      const headingElements = items
        .map(({ id }) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)

      // First heading that's at or below the top threshold
      for (const el of headingElements) {
        const rect = el.getBoundingClientRect()
        if (rect.top >= -20 && rect.top <= window.innerHeight * 0.3) {
          return el.id
        }
      }
      
      // If none in the zone, find the last one that's above the viewport
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const rect = headingElements[i].getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.3) {
          return headingElements[i].id
        }
      }
      
      return headingElements[0]?.id || ''
    }

    // Listen for hash changes (clicking TOC links or external navigation)
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1)
      if (newHash) {
        setActiveId(newHash)
      }
    }

    // Listen for scroll end to update highlight (only for manual scrolls)
    const handleScrollEnd = () => {
      // Skip if this was a click-initiated scroll
      if (isClickScrollingRef.current) return
      
      // Update based on scroll position
      const newActiveId = findActiveHeading()
      if (newActiveId) setActiveId(newActiveId)
    }

    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('scrollend', handleScrollEnd)

    // Set initial active heading after a short delay (wait for DOM)
    const initTimeout = setTimeout(() => {
      const initialId = findActiveHeading()
      if (initialId) setActiveId(initialId)
    }, 150)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('scrollend', handleScrollEnd)
      clearTimeout(initTimeout)
    }
  }, [items])

  if (items.length === 0) {
    return null
  }

  return (
    <nav className={cn('space-y-2 overflow-y-auto', className)}>
      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide sticky top-0 bg-background pb-2 z-10">
        On This Page
      </h3>
      <ul className="space-y-1 border-l border-border ml-0">
        {items.map((item) => (
          <li key={item.id} className="relative">
            <button
              onClick={() => scrollToSection(item.id)}
              className={cn(
                'block w-full text-left text-sm transition-colors duration-200 py-1 border-l -ml-px',
                {
                  'pl-4': item.level <= 2,
                  'pl-7': item.level === 3,
                  'pl-10': item.level === 4,
                  'pl-12': item.level === 5,
                  'pl-14': item.level >= 6,
                },
                activeId === item.id
                  ? 'text-blue-600 dark:text-blue-400 font-medium border-blue-600 dark:border-blue-400'
                  : 'text-muted-foreground hover:text-foreground border-transparent'
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
