import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-10-07');
  return [
    { url: 'https://ardugaza.org/', lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: 'https://ardugaza.org/plan', lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
