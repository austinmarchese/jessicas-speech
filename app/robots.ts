import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/thank-you', '/baby-boot-camp'],
    },
    sitemap: 'https://jessicasspeechandfeeding.com/sitemap.xml',
  }
}
