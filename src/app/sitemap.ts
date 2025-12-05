import type { MetadataRoute } from 'next';
import { services } from '@/lib/services';
import { focusAreas } from '@/lib/focus-areas';

const baseUrl = 'https://www.heilpraxis-jordan.de';

export const dynamic = 'force-static';
export const revalidate = 86400; // regenerate daily

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/about/`, lastModified },
    { url: `${baseUrl}/services/`, lastModified },
    { url: `${baseUrl}/schwerpunkte/`, lastModified },
    { url: `${baseUrl}/beauty/`, lastModified },
    { url: `${baseUrl}/preise/`, lastModified },
    { url: `${baseUrl}/impressum/`, lastModified },
    { url: `${baseUrl}/datenschutz/`, lastModified },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}/`,
    lastModified,
  }));

  const focusAreaRoutes: MetadataRoute.Sitemap = focusAreas.map((area) => ({
    url: `${baseUrl}/schwerpunkte/${area.slug}/`,
    lastModified,
  }));

  return [...staticRoutes, ...serviceRoutes, ...focusAreaRoutes];
}
