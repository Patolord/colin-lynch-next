# Colin Lynch — Next.js

A Next.js (App Router) rebuild of [colinlynchmusic.com](https://colinlynchmusic.com/), originally built in Webflow.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/layout.tsx` — fonts (Native Record Sans / Serif via `next/font/local`), metadata, global CSS
- `app/page.tsx` — home page: hero, merch, tour, music, video, contact
- `app/contact/page.tsx` — standalone contact page
- `app/globals.css` — all styling, ported from the Webflow stylesheet
- `components/` — one component per section; `ShopifyProduct` and `SiteNav` are client components
- `data/site.ts` — every link, release, video, contact and embed ID, so content edits don't touch components
- `public/` — fonts, images, icons downloaded from the original site

## Third-party embeds

- **Merch** uses the Shopify Buy Button SDK (loaded in the browser). Store domain, storefront token and product IDs live in `data/site.ts`.
- **Tour** uses the Bandsintown widget; the artist and app IDs live in `data/site.ts`.
- **Video** embeds YouTube players.
