import type { MetadataRoute } from 'next'

const BASE_URL = 'https://giftrealestateeth.com'

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${BASE_URL}/properties`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
    ]

    return staticRoutes

    // Once your property listings are hooked up to a real data source
    // (a static array, a database, or a CMS), add their individual pages
    // here too. For example:
    //
    // const properties = await getProperties()
    // const propertyRoutes = properties.map((property) => ({
    //   url: `${BASE_URL}/properties/${property.id}`,
    //   lastModified: new Date(property.updatedAt),
    //   changeFrequency: 'weekly' as const,
    //   priority: 0.7,
    // }))
    //
    // return [...staticRoutes, ...propertyRoutes]
}