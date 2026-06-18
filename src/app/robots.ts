import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api', '/*.json$', '/.env'],
    },
    sitemap: 'https://expertgem.com/sitemap.xml',
  }
}
