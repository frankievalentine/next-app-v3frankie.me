import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://v3frankie.me',
      lastModified: new Date(),
    },
    // {
    //   url: 'https://v3frankie.me/about',
    //   lastModified: new Date(),
    // },
    // {
    //   url: 'https://v3frankie.me/blog',
    //   lastModified: new Date(),
    // },
  ]
}
