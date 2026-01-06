// Advanced Dynamic Sitemap Generator
// This provides more control over sitemap generation including blog posts from content collections

import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { SITE_URL } from '@/consts'

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site || SITE_URL

  // Get all blog posts from content collection
  const blogPosts = await getCollection('blog', ({ data }) => {
    return data.draft !== true // Exclude draft posts
  })

  // Sort by date (newest first)
  const sortedPosts = blogPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())

  // Static pages with custom metadata
  const staticPages = [
    {
      url: '',
      changefreq: 'daily',
      priority: 1.0,
      lastmod: new Date()
    },
    {
      url: 'login',
      changefreq: 'monthly',
      priority: 0.5,
      lastmod: new Date()
    },
    {
      url: 'register',
      changefreq: 'monthly',
      priority: 0.5,
      lastmod: new Date()
    }
  ]

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${staticPages
    .map(
      page => `
  <url>
    <loc>${new URL(page.url, baseUrl).href}</loc>
    <lastmod>${page.lastmod.toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('')}
  ${sortedPosts
    .map(
      post => `
  <url>
    <loc>${new URL(`blog/${post.id}`, baseUrl).href}</loc>
    <lastmod>${(post.data.updatedDate || post.data.pubDate).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  })
}
