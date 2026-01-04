import fs from 'node:fs'
import path from 'node:path'
import { glob } from 'glob'

interface NoteLinkMap {
  [slug: string]: string[]
}

// Check if a link is to an image or other non-note asset
function isAssetLink(link: string): boolean {
  const assetExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico', '.pdf']
  const lowerLink = link.toLowerCase()
  return assetExtensions.some(ext => lowerLink.endsWith(ext)) || 
         lowerLink.startsWith('images/') ||
         lowerLink.startsWith('assets/')
}

// Extract links from frontmatter YAML (looks for links: array)
function extractLinksFromFrontmatter(content: string, currentSlug: string, allSlugs: Set<string>): string[] {
  const links: string[] = []
  const currentDir = path.dirname(currentSlug)
  
  // Match frontmatter block
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!fmMatch) return links
  
  const frontmatter = fmMatch[1]
  
  // Match links array in frontmatter (handles both inline and multiline)
  const linksMatch = frontmatter.match(/links:\s*\n((?:\s+-\s*['"]?[^'"\n]+['"]?\n?)+)/m)
  if (linksMatch) {
    // Extract individual link items
    const linkItems = linksMatch[1].matchAll(/^\s+-\s*['"]?([^'"\n]+?)['"]?\s*$/gm)
    for (const item of linkItems) {
      const link = item[1].trim()
      if (link && !isAssetLink(link)) {
        const resolved = resolveLink(link, currentDir, allSlugs)
        if (resolved) links.push(resolved)
      }
    }
  }
  
  return links
}

// Extract links from markdown content (looks for [[link]] or [text](./link) patterns)
function extractLinksFromContent(content: string, currentSlug: string, allSlugs: Set<string>): string[] {
  const links: string[] = []
  const currentDir = path.dirname(currentSlug)
  
  // Match [[wiki-style-links]]
  const wikiLinkRegex = /\[\[([^\]]+)\]\]/g
  let match
  while ((match = wikiLinkRegex.exec(content)) !== null) {
    const link = match[1].trim()
    if (!isAssetLink(link)) {
      // Wiki links are typically just the note name - try to find matching slug
      const resolved = resolveLink(link, currentDir, allSlugs)
      if (resolved) links.push(resolved)
    }
  }
  
  // Match relative markdown links like [text](./other-note) or [text](other-note.md)
  const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  while ((match = mdLinkRegex.exec(content)) !== null) {
    let link = match[2].trim()
    
    // Skip external links, anchors, mailto, and asset links
    if (link.startsWith('http') || link.startsWith('#') || link.startsWith('mailto:') || isAssetLink(link)) {
      continue
    }
    
    // Remove .md/.mdx extension and leading ./
    link = link.replace(/\.(mdx?|md)$/i, '').replace(/^\.\//, '')
    
    // Resolve relative path
    const resolved = resolveLink(link, currentDir, allSlugs)
    if (resolved) links.push(resolved)
  }
  
  return [...new Set(links)] // Remove duplicates
}

// Resolve a link to an actual note slug
function resolveLink(link: string, currentDir: string, allSlugs: Set<string>): string | null {
  // If link is already a valid slug, return it
  if (allSlugs.has(link)) return link
  
  // Try resolving relative to current directory
  const resolved = path.posix.normalize(path.posix.join(currentDir, link))
  if (allSlugs.has(resolved)) return resolved
  
  // Try finding by filename only (for wiki-style links)
  const filename = path.basename(link)
  for (const slug of allSlugs) {
    if (slug.endsWith('/' + filename) || slug === filename) {
      return slug
    }
  }
  
  return null // Link doesn't match any known note
}

async function main() {
  const notesDir = path.resolve(process.cwd(), 'src/content/notes')
  const outputPath = path.resolve(process.cwd(), 'src/generated/note-links.json')
  
  // Find all markdown files
  const files = await glob('**/*.{md,mdx}', { cwd: notesDir })
  
  // Build set of all slugs first for link resolution
  const allSlugs = new Set<string>(
    files.map(file => file.replace(/\.(mdx?|md)$/i, ''))
  )
  
  const linkMap: NoteLinkMap = {}
  
  for (const file of files) {
    // Convert file path to slug (e.g., "ai/rag/chunking.mdx" -> "ai/rag/chunking")
    const slug = file.replace(/\.(mdx?|md)$/i, '')
    
    // Read file content
    const filePath = path.join(notesDir, file)
    const content = fs.readFileSync(filePath, 'utf-8')
    
    // Extract links from both frontmatter and content
    const frontmatterLinks = extractLinksFromFrontmatter(content, slug, allSlugs)
    const contentLinks = extractLinksFromContent(content, slug, allSlugs)
    const links = [...new Set([...frontmatterLinks, ...contentLinks])]
    
    if (links.length > 0) {
      linkMap[slug] = links
    }
  }
  
  // Ensure output directory exists
  const outputDir = path.dirname(outputPath)
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }
  
  // Write JSON file
  fs.writeFileSync(outputPath, JSON.stringify(linkMap, null, 2))
  
  const totalLinks = Object.values(linkMap).flat().length
  const notesWithLinks = Object.keys(linkMap).length
  
  console.log(`✅ Note links extracted successfully`)
  console.log(`📄 Notes with links: ${notesWithLinks}`)
  console.log(`🔗 Total links: ${totalLinks}`)
  console.log(`📁 Output: ${outputPath}`)
}

main().catch(console.error)
