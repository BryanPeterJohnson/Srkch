import type { MetadataRoute } from 'next'
import { ARTICLES_MAP } from './blog/articles'
import { services } from './services/data'
import { jobs } from './data/jobs'   // fix name after checking data/jobs.ts

const BASE = 'https://srkcah.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about/mission', priority: 0.6, changeFrequency: 'yearly' as const },
    { path: '/about/history', priority: 0.6, changeFrequency: 'yearly' as const },
    { path: '/about/diversity', priority: 0.6, changeFrequency: 'yearly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/careers', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/apply-job', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/get-started', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
  ].map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  const blogRoutes: MetadataRoute.Sitemap = Object.entries(ARTICLES_MAP).map(
    ([slug, config]) => ({
      url: `${BASE}/blog/${slug}`,
      lastModified: new Date(config.meta.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  )

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const jobRoutes: MetadataRoute.Sitemap = jobs.map((job) => ({
    url: `${BASE}/job-description/${job.id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes, ...serviceRoutes, ...jobRoutes]
}