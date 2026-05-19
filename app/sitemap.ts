import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://reactivephysicaltherapy.com';

  // We can add dynamic routes here if there's a blog or dynamic case studies in the future.
  const routes = [
    '',
    '/about',
    '/service',
    '/services',
    '/contact',
    '/pricing',
    '/team',
    '/blog',
    '/case-studies',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
