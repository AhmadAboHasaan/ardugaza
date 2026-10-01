# Ardú — Brand & Web

A long-form, accessible funding prospectus for a planned youth initiative in Gaza. The source of truth is `docs/ardu-project-summary.pdf`. All capacity and financial figures are plans or estimates, never achieved impact.

## Run locally

Requires Node 22.13+ (verified with 24.19) and pnpm (verified with 11.25).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Preview: http://127.0.0.1:3000. Development and production use Webpack because Turbopack's CSS worker repeatedly failed to spawn on the supplied Windows host.

```sh
pnpm build
pnpm start
pnpm storybook
```

Storybook: http://localhost:6006. Stop any static Storybook preview on that port before starting its development server.

## Verify

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm build-storybook
pnpm exec playwright install chromium
pnpm test:e2e
pnpm test:storybook
pnpm test:visual
```

E2E starts the production server when port 3000 is free. Storybook checks serve the built explorer when port 6006 is free. Reused servers must contain the current build. Visual baselines are Chromium/Windows at 390, 768 and 1440 pixels. Review differences before updating them with `pnpm test:visual --update-snapshots`; another OS may require its own reviewed baselines. `node scripts/capture-review.mjs` records six widths and local resource timings against a running production server.

## Structure

- `src/app`: static App Router page, metadata, organization JSON-LD, favicon.
- `src/styles`: semantic CSS tokens, responsive rules, shared Manrope font and foundation stories. Tailwind 4 is available; authored semantic classes carry the page's visual system.
- `src/components/ui`: typed action links and semantic section primitive.
- `src/components/content`: decorative seat visualization and approved-image/placeholder boundary.
- `src/components/layout`: navigation and footer.
- `src/components/sections`: focused narrative compositions. Only navigation, capacity and energy need client state.
- `src/content/project.ts`: typed identity, packages, learning tracks, energy explanations, accountability and roadmap data. Editorial prose remains near its section markup; a future CMS adapter can map validated records to these APIs.
- `src/data/integrations.ts`: explicit pending/ready integration states.
- `src/test`, `tests`: component, browser, accessibility, Storybook and screenshot checks.

Native links, buttons and disclosure elements carry real behavior. There is no payment collector, tracking integration or fabricated partner carousel. Source PDF is available from the footer.

## Design and Figma

[Ardú — Brand & Web](https://www.figma.com/design/bubtWZyxRHNCKGT2h4wnXa) contains three distinct directions, the selected Open frame system, variables, text styles, action components and editable desktop/mobile compositions. These are design references; Storybook and code are authoritative for exact interaction states and full editorial details.

See `PRODUCT.md`, `DESIGN.md`, `.impeccable/design.json`, `docs/design-exploration.md`, `docs/homepage-direction.md` and `docs/validation.md`.

## Supply before public launch

Update `src/data/integrations.ts` only with approved values:

- A secure giving URL and confirmed contribution/accountability arrangements.
- Canonical public origin and an official contact email if desired.
- Approved hero, site and founder photography with descriptive alt text and dimensions.
- Partner logos only after signed agreements and approval.

Pending imagery intentionally renders named schematics or placeholders. No synthetic documentary photography is used. Current funding contact uses the founder's LinkedIn URL supplied in the source. Confirm the public release of the source PDF and revalidate dated costs, structural conditions and registration status before launch.

The app is complete as a tested local preview, not a deployed fundraising service. Accessibility automation supplements manual keyboard and responsive checks; it does not replace assistive-technology testing or real-device validation.
