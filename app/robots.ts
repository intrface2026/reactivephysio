import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://reactivephysicaltherapy.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard', '/login', '/auth/*'], // Disallow private routes if they exist
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
