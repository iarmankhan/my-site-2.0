# arman.wtf

Source for [Arman's portfolio](https://arman.wtf): selected engineering work, experience, projects and writing.

The site is built with Next.js App Router, React, TypeScript and Tailwind CSS. Writing is authored in MDX and processed by Velite. Project and case-study content lives in `src/data/`; routes are in `src/app/`. It includes generated metadata, Open Graph images, a sitemap and an RSS feed.

## Run locally

Requires Node.js 22 or later and pnpm.

```sh
corepack pnpm install
corepack pnpm dev
```

The development server uses `http://localhost:3002`.

## Check a change

```sh
corepack pnpm type-check
corepack pnpm build
```

The production build generates static routes for the portfolio and case studies. Content about employer systems is intentionally limited to verified, public-safe descriptions; this repository contains no employer source code.
