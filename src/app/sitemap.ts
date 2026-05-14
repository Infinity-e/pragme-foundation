import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site-url';

const routes = ['', '/about', '/programs', '/impact', '/get-involved', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return routes.map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified,
    }));
}
