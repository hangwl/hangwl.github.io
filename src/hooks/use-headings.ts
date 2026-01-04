import { useEffect, useState, useRef } from 'react'
import type { TOCItem } from '@/components/table-of-contents'

// Compare two TOCItem arrays for equality
function areHeadingsEqual(a: TOCItem[], b: TOCItem[]): boolean {
  if (a.length !== b.length) return false
  return a.every((item, i) => item.id === b[i].id && item.title === b[i].title && item.level === b[i].level)
}

export function useHeadings() {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const lastHeadingsRef = useRef<TOCItem[]>([])
  const extractedOnceRef = useRef(false)

  useEffect(() => {
    // Extract headings from the DOM after MDX content is rendered
    const extractHeadings = () => {
      const headingElements = document.querySelectorAll('article h1, article h2, article h3, article h4, article h5, article h6')
      const items: TOCItem[] = []

      headingElements.forEach((heading) => {
        const level = parseInt(heading.tagName.charAt(1))
        const title = heading.textContent || ''
        
        // Generate or use existing ID
        let id = heading.id
        if (!id) {
          id = title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '')
          
          // Ensure uniqueness
          let counter = 1
          let uniqueId = id
          while (document.getElementById(uniqueId)) {
            uniqueId = `${id}-${counter}`
            counter++
          }
          
          heading.id = uniqueId
          id = uniqueId
        }

        items.push({
          id,
          title,
          level,
        })
      })

      // Only update state if headings actually changed
      if (!areHeadingsEqual(items, lastHeadingsRef.current)) {
        lastHeadingsRef.current = items
        setHeadings(items)
        extractedOnceRef.current = true
      }
    }

    // Extract headings after a short delay to ensure MDX content is rendered
    const timer = setTimeout(extractHeadings, 100)

    // Only observe for changes if we haven't extracted yet (initial load)
    // This prevents constant re-extraction on scroll/interaction
    const observer = new MutationObserver(() => {
      if (!extractedOnceRef.current) {
        extractHeadings()
      }
    })
    const articleElement = document.querySelector('article')
    
    if (articleElement) {
      observer.observe(articleElement, {
        childList: true,
        subtree: true,
      })
    }

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return headings
}
