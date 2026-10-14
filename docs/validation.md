# Validation record · v5 (promotional site, lifted-road design) · 14 October 2026

- Strict TypeScript: pass. ESLint: pass (one ignored-file warning). Vitest: 11 tests pass.
- Production build: pass, Next 16.3.8, static export (`out/`), routes `/`, `/about`, `/what-we-do`, `/impact`, `/partners`, `/support`, `/contact`, robots, sitemap, manifest, icons.
- Playwright: 23 checks pass on Linux Chromium: the giving route on home and support, no operational figures on any public page and `/plan` gone (404), navigation to every page with one h1 and `aria-current`, partner and funder routes by email, keyboard and skip link, mobile navigation, six responsive widths on three pages with no horizontal overflow, axe WCAG 2 / 2.1 / 2.2 A/AA on all seven pages (zero violations), reduced motion (the road renders fully drawn), and three full-page visual baselines of the home page (`*-chromium-linux.png`).
- Storybook: 28 stories render without errors.
- Fonts are self-hosted (Manrope, four weights; Bricolage Grotesque variable), so builds need no network.
