import type { MetadataRoute } from 'next';
import { pages } from '@/content/project';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-10-07');
  const origin = 'https://ardugaza.org';
  return [
    { url: `${origin}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    ...Object.values(pages).map((page) => ({
      url: `${origin}${page.href}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority:
        page.href === pages.support.href || page.href === pages.partners.href
          ? 0.9
          : 0.7,
    })),
  ];
}
