# Ardú — ardugaza.org

The public site of Ardú, a youth initiative in Gaza City. Two layers: the home page for the public (impact and stages, briefly) and `/plan` for funders and partners (the arithmetic). Every string lives in `src/content/project.ts`; every value that must be supplied or approved (giving link, forms, photographs, LinkedIn page) lives in `src/data/integrations.ts` and renders an honest placeholder until it is set.

Figures are estimates at Gaza prices in October 2026, confirmed by written quotes before spending. All capacity and income figures are plans, never achieved impact.

## Run locally

Requires Node 22+ and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev          # http://127.0.0.1:3000
pnpm build        # static export to ./out
pnpm start        # serves ./out on http://127.0.0.1:3000
```

## Verify

```sh
pnpm lint
pnpm typecheck
pnpm test                 # Vitest + Testing Library
pnpm build && pnpm test:e2e   # Playwright: flows, keyboard, axe (WCAG 2.2 AA), six widths, visual baselines (Linux)
```

If Playwright's own Chromium is not installed, point it at an existing one: `PW_CHROME=/path/to/chrome pnpm test:e2e`.

## Deploy (Cloudflare Pages)

The site is a static export (`output: 'export'`). Pages project settings: framework preset **None**, build command `pnpm build`, build output directory `out`, Node version 22. Custom domains `ardugaza.org` and `www.ardugaza.org` are added under Pages → Custom domains; Cloudflare creates the DNS records itself. `public/_headers` sets the security headers.

## Structure

- `src/app` — `/` and `/plan`, metadata, icons, robots, sitemap, manifest, Organization JSON-LD.
- `src/content/project.ts` — all copy and figures. `src/data/integrations.ts` — giving state, contact, forms, approved images.
- `src/components/sections` — Hero, Story (why + the place), Stages, Impact, Energy, Trust, Who, Doors.
- `src/components/layout` — Navigation, Footer, Brand (logo lockup). `src/components/content` — SeatMatrix, MediaFrame.
- `src/styles` — tokens and authored CSS (the Ardú palette: cream, deep green, teal, sand), self-hosted Manrope.
- `public/brand` — logo, mark, icons; `public/og-image.png` — share image; `public/ardu-project-summary.pdf` — the public summary.

## Rules carried in the code

No address and no exterior photographs; interior photographs only, captioned with the month. No partner name or logo before a signed agreement. Every figure carries its date and its condition. No payment is collected on the site: giving goes only to the configured giving page. Contact is info@ardugaza.org.
