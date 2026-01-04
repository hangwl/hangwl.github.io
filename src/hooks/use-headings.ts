import { useEffect, useState } from 'react'
import type { TOCItem } from '@/components/table-of-contents'

export function useHeadings() {
  const [headings, setHeadings] = useState<TOCItem[]>([])

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

      setHeadings(items)
    }

    // Extract headings after a short delay to ensure MDX content is rendered
    const timer = setTimeout(extractHeadings, 100)

    // Also listen for content changes (in case of dynamic content)
    const observer = new MutationObserver(extractHeadings)
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
