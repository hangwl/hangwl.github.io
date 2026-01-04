import { writeFileSync, readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const SITE_URL = 'https://hangwl.github.io';

interface ProjectFrontmatter {
  title: string;
  date?: string;
  featured?: boolean;
  hide?: boolean;
}

interface NoteFrontmatter {
  title: string;
  hide?: boolean;
}

// Parse frontmatter from MDX files
function parseFrontmatter(content: string): Record<string, any> {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  
  const frontmatter: Record<string, any> = {};
  const lines = match[1].split('\n');
  
  for (const line of lines) {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      const value = valueParts.join(':').trim();
      // Remove quotes
      const cleanValue = value.replace(/^["']|["']$/g, '');
      // Parse booleans
      if (cleanValue === 'true') frontmatter[key.trim()] = true;
      else if (cleanValue === 'false') frontmatter[key.trim()] = false;
      else frontmatter[key.trim()] = cleanValue;
    }
  }
  
  return frontmatter;
}

// Get all projects
function getAllProjects() {
  const projectsDir = join(process.cwd(), 'src/content/projects');
  const files = readdirSync(projectsDir).filter(f => f.endsWith('.mdx'));
  
  return files.map(file => {
    const content = readFileSync(join(projectsDir, file), 'utf-8');
    const frontmatter = parseFrontmatter(content) as ProjectFrontmatter;
    const slug = file.replace('.mdx', '');
    
    return { ...frontmatter, slug };
  });
}

// Get all notes
function getAllNotes() {
  const notesDir = join(process.cwd(), 'src/content/notes');
  const files = readdirSync(notesDir).filter(f => f.endsWith('.mdx') || f.endsWith('.md'));
  
  return files.map(file => {
    const content = readFileSync(join(notesDir, file), 'utf-8');
    const frontmatter = parseFrontmatter(content) as NoteFrontmatter;
    const slug = file.replace(/\.(mdx|md)$/, '');
    
    return { ...frontmatter, slug };
  });
}

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

function generateSitemap() {
  const urls: SitemapUrl[] = [];

  // Static routes
  urls.push(
    { loc: `${SITE_URL}/`, changefreq: 'weekly', priority: 1.0 },
    { loc: `${SITE_URL}/notes`, changefreq: 'weekly', priority: 0.9 },
    { loc: `${SITE_URL}/lab`, changefreq: 'monthly', priority: 0.7 },
    { loc: `${SITE_URL}/lab/spinning-cube`, changefreq: 'monthly', priority: 0.5 },
    { loc: `${SITE_URL}/lab/snake-3d`, changefreq: 'monthly', priority: 0.5 },
    { loc: `${SITE_URL}/lab/ts-demo`, changefreq: 'monthly', priority: 0.5 },
    { loc: `${SITE_URL}/lab/research-agent`, changefreq: 'monthly', priority: 0.5 },
  );

  // Dynamic project routes
  const projects = getAllProjects();
  projects
    .filter(p => !p.hide)
    .forEach(project => {
      urls.push({
        loc: `${SITE_URL}/projects/${project.slug}`,
        lastmod: project.date || new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: project.featured ? 0.9 : 0.8,
      });
    });

  // Dynamic note routes
  const notes = getAllNotes();
  notes
    .filter(n => !n.hide)
    .forEach(note => {
      urls.push({
        loc: `${SITE_URL}/notes/${note.slug}`,
        changefreq: 'weekly',
        priority: 0.8,
      });
    });

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    url => `  <url>
    <loc>${url.loc}</loc>${url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : ''}${url.changefreq ? `\n    <changefreq>${url.changefreq}</changefreq>` : ''}${url.priority ? `\n    <priority>${url.priority}</priority>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`;

  // Write to public/sitemap.xml
  writeFileSync('public/sitemap.xml', sitemap);
  console.error('✅ Sitemap generated successfully at public/sitemap.xml');
  console.error(`📄 Total URLs: ${urls.length}`);
}

generateSitemap();
