const rawSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    'http://localhost:3000';

const normalizedProtocolUrl = rawSiteUrl.startsWith('http://') || rawSiteUrl.startsWith('https://')
    ? rawSiteUrl
    : `https://${rawSiteUrl}`;

export const siteUrl = normalizedProtocolUrl.replace(/\/$/, '');
export const metadataBaseUrl = new URL(siteUrl);
