# Pragme India Foundation Website

Production-ready Next.js website for Pragme India Foundation.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS
- Framer Motion

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

`NEXT_PUBLIC_SITE_URL` is used for metadata, `robots.txt`, and `sitemap.xml`.

## Deploy

### Vercel (recommended)

1. Push this folder to GitHub.
2. Import the repo in Vercel.
3. Add `NEXT_PUBLIC_SITE_URL` in Project Settings.
4. Deploy.

### Self Hosting

```bash
npm install
npm run build
npm run start
```

Run behind a reverse proxy (Nginx/Caddy) with HTTPS enabled.
