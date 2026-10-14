# Ardú — ardugaza.org

The public site of Ardú, a youth initiative in Gaza City. It is a promotional site: who Ardú is, where it is going, the impact it is built to deliver, and the ways to support it. Seven pages: home, About, What we do, Impact, Partners, Support, Contact. Operational detail (stage costs, payroll, energy arithmetic, running costs) is not published here; partners and funders request the full plan by email, and the e2e suite fails if an operational figure reaches a public page.

Every string lives in `src/content/project.ts`; every value that must be supplied or approved (giving link, forms, photographs, LinkedIn page) lives in `src/data/integrations.ts` and renders an honest placeholder until it is set. Capacity figures on the site are what Ardú is built for; achieved impact is published as it happens.

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
pnpm build && pnpm test:e2e   # Playwright: every page, navigation, keyboard, axe (WCAG 2.2 AA) on all pages, six widths, visual baselines (Linux)
pnpm build-storybook && pnpm test:storybook   # every story renders without errors
```

If Playwright's own Chromium is not installed, point it at an existing one: `PW_CHROME=/path/to/chrome pnpm test:e2e`.

## Deploy (Cloudflare Pages)

The site is a static export (`output: 'export'`). Pages project settings: framework preset **None**, build command `pnpm build`, build output directory `out`, Node version 22. Custom domains `ardugaza.org` and `www.ardugaza.org` are added under Pages → Custom domains; Cloudflare creates the DNS records itself. `public/_headers` sets the security headers.

## Structure

- `src/app` — `/`, `/about`, `/what-we-do`, `/impact`, `/partners`, `/support`, `/contact`; layout with navigation and footer, per-page metadata, icons, robots, sitemap, manifest, Organization JSON-LD.
- `src/content/project.ts` — all copy. `src/data/integrations.ts` — giving state, contact, forms, approved images.
- `src/components/sections` — Hero, Statement, Pillars, Changes, Direction, Weight, Ways, Strips (trust, founder).
- `src/components/ui` — Section, LinkButton, PageHero, Figures, CtaBand, Icon (the one icon registry). `src/components/layout` — Navigation, Footer, Brand. `src/components/content` — Road (the hero illustration), MediaFrame, SeatMatrix.
- `src/styles` — tokens and authored CSS (white and mist surfaces, deep green, teal, sand; see DESIGN.md), self-hosted Manrope and Bricolage Grotesque.
- `public/brand` — logo, mark, icons; `public/og-image.png` — share image.

## Rules carried in the code

No address and no exterior photographs; interior photographs only, captioned with the month. No partner name or logo before a signed agreement. No operational figures on the public site (tested). No payment is collected on the site: giving goes only to the configured giving page, in pounds. Contact is info@ardugaza.org.
