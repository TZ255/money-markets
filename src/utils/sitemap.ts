// Sitemap Utility Functions
// Helper functions for generating dynamic sitemaps

export interface SitemapEntry {
  url: string
  lastmod?: Date
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
  images?: {
    url: string
    title?: string
    caption?: string
  }[]
}

/**
 * Generate sitemap entry with proper defaults
 */
export function createSitemapEntry(url: string, options: Partial<SitemapEntry> = {}): SitemapEntry {
  return {
    url,
    lastmod: options.lastmod || new Date(),
    changefreq: options.changefreq || 'weekly',
    priority: options.priority || 0.5,
    images: options.images || []
  }
}

/**
 * Get priority based on page type
 */
export function getPagePriority(url: string): number {
  if (url === '' || url === '/') return 1.0
  if (url.includes('/blog') && !url.includes('/blog/')) return 0.9
  if (url.includes('/blog/')) return 0.8
  if (url.includes('/tags/') || url.includes('/categories/')) return 0.7

  return 0.6
}

/**
 * Get change frequency based on page type
 */
export function getChangeFreq(url: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  if (url === '' || url === '/') return 'daily'
  if (url.includes('/blog') && !url.includes('/blog/')) return 'daily'
  if (url.includes('/blog/')) return 'weekly'
  if (url.includes('/login') || url.includes('/register')) return 'monthly'

  return 'weekly'
}

/**
 * Format date for sitemap (ISO 8601)
 */
export function formatSitemapDate(date: Date): string {
  return date.toISOString()
}

/**
 * Generate sitemap XML from entries
 */
export function generateSitemapXML(entries: SitemapEntry[], baseUrl: string): string {
  const urlEntries = entries
    .map(entry => {
      const url = new URL(entry.url, baseUrl).href
      const lastmod = entry.lastmod ? `\n    <lastmod>${formatSitemapDate(entry.lastmod)}</lastmod>` : ''
      const changefreq = entry.changefreq ? `\n    <changefreq>${entry.changefreq}</changefreq>` : ''
      const priority = entry.priority !== undefined ? `\n    <priority>${entry.priority.toFixed(1)}</priority>` : ''

      const images =
        entry.images && entry.images.length > 0
          ? entry.images
              .map(
                img => `
    <image:image>
      <image:loc>${new URL(img.url, baseUrl).href}</image:loc>${img.title ? `\n      <image:title>${escapeXml(img.title)}</image:title>` : ''}${img.caption ? `\n      <image:caption>${escapeXml(img.caption)}</image:caption>` : ''}
    </image:image>`
              )
              .join('')
          : ''

      return `  <url>
    <loc>${url}</loc>${lastmod}${changefreq}${priority}${images}
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`
}

/**
 * Escape XML special characters
 */
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
