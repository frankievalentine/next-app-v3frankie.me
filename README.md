# v3frankie.me

- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Overview

<!-- - `layouts/*` - The different page layouts each MDX category (blog, snippets) uses. -->

- `lib/*` - Short for "library", a collection of helpful utilities or code for external services.
- `pages/api/*` - [API Routes](https://nextjs.org/docs/api-routes/introduction)
- `pages/blog/*` - Static pre-rendered blog pages using Markdown.
<!-- - `pages/sitemap.xml.tsx` - Automatically generated sitemap.
- `pages/feed.xml.tsx` - Automatically generated RSS feed. -->
- `pages/*` - All other static pages.
- `public/*` - Static assets including fonts and images.
- `styles/*` - A small amount of global styles. I'm mostly using vanilla Tailwind CSS.

## Running Locally

Clone using the GitHub CLI.

```bash
gh repo clone https://github.com/frankievalentine/portfolio
cd portfolio
pnpm install
pnpm dev
```
