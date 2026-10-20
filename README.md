# Ardú — ardugaza.org

The public site of Ardú, a youth initiative in Gaza City. It is a promotional site: who Ardú is, where it is going, the impact it is built to deliver, and the ways to support it. Seven pages: home, About, What we do, Impact, Partners, Support, Contact. Operational detail (stage costs, payroll, energy arithmetic, running costs) is not published here; partners and funders request the full plan by email, and the e2e suite fails if an operational figure reaches a public page.

Every string lives in `src/content/project.ts`; every value that must be supplied or approved (giving checkouts, forms, photographs, LinkedIn page) lives in `src/data/integrations.ts` and renders an honest placeholder until it is set. Capacity figures on the site are what Ardú is built for; achieved impact is published as it happens.

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

## Deploy

**GitHub Pages (automatic).** `.github/workflows/pages.yml` builds the site on every push to `main` and publishes it with GitHub Pages. In the repository, Settings → Pages → Build and deployment → Source must be **GitHub Actions** (the workflow asks for this itself on its first run). While the site lives under the repository path (`ahmadabohasaan.github.io/ardugaza/`) the workflow builds with `NEXT_PUBLIC_BASE_PATH=/ardugaza`; once the custom domain `ardugaza.org` is added under Settings → Pages → Custom domain, the same workflow builds for the domain root with no base path. DNS for the domain: at Cloudflare, an A record set for `ardugaza.org` pointing at GitHub Pages' four addresses (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) and a CNAME `www` → `ahmadabohasaan.github.io`, proxy off, then "Enforce HTTPS" in the Pages settings. `public/.nojekyll` keeps GitHub from dropping the `_next` folder.

**Cloudflare Pages (alternative).** Framework preset **None**, build command `pnpm build`, build output directory `out`, Node version 22, no base path. Custom domains are added under Pages → Custom domains; `public/_headers` sets the security headers.

## Structure

- `src/app` — `/`, `/about`, `/what-we-do`, `/impact`, `/partners`, `/support`, `/contact`; layout with navigation and footer, per-page metadata, icons, robots, sitemap, manifest, Organization JSON-LD.
- `src/content/project.ts` — all copy. `src/data/integrations.ts` — giving state, contact, forms, approved images.
- `src/components/sections` — Hero, Statement, Pillars, Changes, Direction, Weight, Ways, Strips (trust, founder).
- `src/components/ui` — Section, LinkButton, PageHero, Figures, CtaBand, Icon (the one icon registry). `src/components/layout` — Navigation, Footer, Brand. `src/components/content` — Road (the hero illustration), MediaFrame, SeatMatrix.
- `src/styles` — tokens and authored CSS (white and mist surfaces, deep green, teal, sand; see DESIGN.md), self-hosted Manrope and Bricolage Grotesque.
- `public/brand` — logo, mark, icons; `public/og-image.png` — share image.

## Rules carried in the code

No address and no exterior photographs; interior photographs only, captioned with the month. No partner name or logo before a signed agreement. No operational figures on the public site (tested). No payment is collected on the site: every gift opens a hosted Stripe checkout in pounds (one per giving level, plus any amount), configured in `src/data/integrations.ts`. Contact is info@ardugaza.org.
