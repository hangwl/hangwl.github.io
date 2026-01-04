import { Link, useLocation } from '@tanstack/react-router'
import type { AnchorHTMLAttributes } from 'react'

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string
}

/**
 * Resolve a relative path against a base path.
 * e.g., resolveRelativePath('/notes/a/b/c', '../d/e') => '/notes/a/b/d/e'
 */
function resolveRelativePath(basePath: string, relativePath: string): string {
  // Get the directory of the current path (remove the last segment)
  const baseDir = basePath.split('/').slice(0, -1)
  
  // Split the relative path into segments
  const relativeSegments = relativePath.split('/')
  
  // Process each segment
  for (const segment of relativeSegments) {
    if (segment === '..') {
      // Go up one directory
      baseDir.pop()
    } else if (segment !== '.' && segment !== '') {
      // Add the segment
      baseDir.push(segment)
    }
  }
  
  return baseDir.join('/')
}

/**
 * Custom anchor component for MDX that uses TanStack Router's Link
 * for internal navigation (no full page reload).
 */
export default function Anchor({ href, children, ...props }: AnchorProps) {
  const location = useLocation()
  
  // External links, anchors, mailto, etc. use regular <a>
  if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }

  // Resolve relative paths to absolute paths
  let to = href
  
  if (href.startsWith('./') || href.startsWith('../')) {
    // Resolve relative path against current URL
    to = resolveRelativePath(location.pathname, href)
  } else if (!href.startsWith('/')) {
    // Bare filename (e.g., "lessons-learned") - treat as same directory
    to = resolveRelativePath(location.pathname, './' + href)
  }

  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  )
}
