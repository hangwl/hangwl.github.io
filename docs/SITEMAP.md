# Sitemap Generation

This project uses a custom sitemap generator to create `sitemap.xml` for SEO.

## How It Works

1. **Script**: `scripts/generate-sitemap.ts`
   - Reads all MDX files from `src/content/projects/` and `src/content/notes/`
   - Parses frontmatter to extract metadata
   - Generates XML sitemap with proper priorities and change frequencies

2. **Output**: `public/sitemap.xml`
   - Automatically copied to `dist/sitemap.xml` during build

3. **Robots.txt**: `public/robots.txt`
   - References the sitemap for search engine crawlers

## Usage

### Automatic Generation (Recommended)

The sitemap is **automatically regenerated** on every build:

```bash
pnpm build
```

**Build Process:**
1. `prebuild` - Generates fresh sitemap from current content
2. `build` - Compiles TypeScript and builds with Vite
3. `postbuild` - Copies sitemap to `dist/`

### Manual Generation (Optional)

If you want to generate the sitemap without building:

```bash
pnpm run sitemap:generate
```

### Deploy

```bash
pnpm run deploy
```

This runs `pnpm build` first, which automatically regenerates the sitemap.

## Sitemap Structure

### Static Routes
- `/` - Homepage (priority: 1.0, weekly)
- `/notes` - Notes index (priority: 0.9, weekly)
- `/lab` - Lab index (priority: 0.7, monthly)
- `/lab/*` - Lab demos (priority: 0.5, monthly)

### Dynamic Routes
- `/projects/{slug}` - Project pages (priority: 0.8-0.9, monthly)
  - Featured projects get priority 0.9
  - Includes `lastmod` from frontmatter date
- `/notes/{slug}` - Note pages (priority: 0.8, weekly)

## Frontmatter Support

The generator reads these frontmatter fields:

**Projects:**
```yaml
---
title: "Project Title"
date: "2025-01-01"
featured: true
hide: false
---
```

**Notes:**
```yaml
---
title: "Note Title"
hide: false
---
```

## Customization

Edit `scripts/generate-sitemap.ts` to:
- Add/remove static routes
- Change priorities or frequencies
- Modify URL structure
- Add custom logic

## SEO Best Practices

✅ **Implemented:**
- XML sitemap with proper structure
- Priority values (0.5-1.0)
- Change frequency hints
- Last modified dates for projects
- Referenced in robots.txt
- Hidden content excluded (`hide: true`)
- **Automatic regeneration on every build**

## Google Search Console Setup

### One-Time Setup (Required)

1. **Add Property**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add property: `https://hangwl.github.io`
   - Verify ownership (use HTML file method for GitHub Pages)

2. **Submit Sitemap** (One time only)
   - Navigate to "Sitemaps" in left sidebar
   - Enter: `sitemap.xml`
   - Click "Submit"

### After Initial Setup

✅ **No manual resubmission needed!**
- Google automatically recrawls your sitemap periodically
- Your sitemap is regenerated on every `pnpm build`
- Google detects changes automatically
- You can manually request recrawl in Search Console if urgent

### Also Submit To:
- Bing Webmaster Tools: https://www.bing.com/webmasters
- Yandex Webmaster: https://webmaster.yandex.com

## Verification

After deployment, verify your sitemap:
```
https://hangwl.github.io/sitemap.xml
https://hangwl.github.io/robots.txt
```

Test with Google's sitemap validator:
```
https://www.xml-sitemaps.com/validate-xml-sitemap.html
```
