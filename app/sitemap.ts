import { MetadataRoute } from 'next'
import { getAllAreaSlugs } from '@/lib/areaData'
import { getAllServiceSlugs } from '@/lib/serviceData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kupennia.co.zw'
  
  const areaSlugs = getAllAreaSlugs()
  const serviceSlugs = getAllServiceSlugs()
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cleaning-services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/areas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
  
  // Service pages (e.g., /services/bnb-cleaning)
  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
  
  // Service area combination pages (e.g., /services/bnb-cleaning/tynwald)
  const serviceAreaPages: MetadataRoute.Sitemap = serviceSlugs.flatMap((serviceSlug) =>
    areaSlugs.map((areaSlug) => ({
      url: `${baseUrl}/services/${serviceSlug}/${areaSlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )
  
  return [
    ...staticPages,
    ...servicePages,
    ...serviceAreaPages,
  ]
}

