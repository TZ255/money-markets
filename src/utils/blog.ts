// Utility functions for blog posts
import type { CollectionEntry } from 'astro:content'

/**
 * Average reading speed: 200 words per minute
 */
export function calculateReadTime(text: string | undefined): number {
  if (!text) return 1
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / wordsPerMinute))
}

/**
 * Get related posts based on overlapping tags
 */
export function getRelatedPosts(
  posts: CollectionEntry<'blog'>[],
  currentSlug: string,
  currentTags: string[],
  limit: number = 3
): CollectionEntry<'blog'>[] {
  const filtered = posts.filter(post => post.slug !== currentSlug && !post.data.draft)

  const scored = filtered
    .map(post => {
      const overlap = post.data.tags?.filter(tag => currentTags.includes(tag)).length ?? 0
      return { post, overlap }
    })
    .sort((a, b) => b.overlap - a.overlap || b.post.data.pubDate.getTime() - a.post.data.pubDate.getTime())

  return scored.slice(0, limit).map(item => item.post)
}

/**
 * Get navigation links for previous and next posts by date (newest first)
 */
export function getPostNavigation(
  posts: CollectionEntry<'blog'>[],
  currentSlug: string
): { previous: CollectionEntry<'blog'> | null; next: CollectionEntry<'blog'> | null } {
  const sorted = [...posts]
    .filter(post => !post.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
  const index = sorted.findIndex(post => post.slug === currentSlug)

  return {
    previous: index > 0 ? sorted[index - 1] : null,
    next: index >= 0 && index < sorted.length - 1 ? sorted[index + 1] : null
  }
}

/**
 * Format date to readable Swahili string
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('sw-TZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Africa/Dar_es_Salaam'
  })
}
