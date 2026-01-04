import { visit } from 'unist-util-visit'
import type { Root, Link } from 'mdast'

/**
 * Remark plugin to transform relative markdown links to proper app routes.
 * Converts links like ./file.md or ../folder/file.mdx to ./file or ../folder/file
 */
export function remarkFixLinks() {
  return (tree: Root) => {
    visit(tree, 'link', (node: Link) => {
      const url = node.url
      
      // Only process relative links (not external, not anchors)
      if (url.startsWith('http') || url.startsWith('#') || url.startsWith('mailto:')) {
        return
      }
      
      // Remove .md or .mdx extension from relative links
      if (url.endsWith('.md') || url.endsWith('.mdx')) {
        node.url = url.replace(/\.(mdx?|md)$/i, '')
      }
    })
  }
}
