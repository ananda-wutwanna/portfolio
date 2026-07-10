import type { MetadataRoute } from 'next';
import { siteUrl } from '@/data/site';
import { locales } from '@/lib/i18n';

// Static export emits this as /sitemap.xml at build time.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}/`,
    changeFrequency: 'monthly',
    priority: locale === 'th' ? 1 : 0.9,
  }));
}
