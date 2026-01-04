export interface SEOConfig {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  tags?: string[]
}

const SITE_NAME = "hangwl's digital gallery"
const SITE_URL = 'https://hangwl.github.io'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`
const DEFAULT_DESCRIPTION = "hangwl's digital gallery - AI/ML projects and technical notes"

export function generateSEO(config: SEOConfig) {
  const {
    title,
    description,
    image = DEFAULT_IMAGE,
    url = SITE_URL,
    type = 'website',
    publishedTime,
    tags,
  } = config

  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`

  return {
    title: fullTitle,
    meta: [
      { name: 'description', content: description },
      // Open Graph
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:site_name', content: SITE_NAME },
      ...(publishedTime ? [{ property: 'og:article:published_time', content: publishedTime }] : []),
      ...(tags?.map(tag => ({ property: 'og:article:tag', content: tag })) || []),
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
    links: [{ rel: 'canonical', href: url }],
  }
}

export function generateNoteSEO(title: string, slug: string) {
  return generateSEO({
    title,
    description: `Technical notes on ${title}`,
    url: `${SITE_URL}/notes/${slug}`,
    type: 'article',
  })
}

export function generateProjectSEO(
  title: string,
  description: string,
  slug: string,
  image?: string,
  date?: string,
  tags?: string[]
) {
  return generateSEO({
    title,
    description,
    url: `${SITE_URL}/projects/${slug}`,
    image: image ? `${SITE_URL}${image}` : undefined,
    type: 'article',
    publishedTime: date,
    tags,
  })
}

export const DEFAULT_SEO = generateSEO({
  title: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
})
