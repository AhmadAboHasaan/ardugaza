# Validation record · v5 (promotional site, lifted-road design) · 14 October 2026

- Strict TypeScript: pass. ESLint: pass (one ignored-file warning). Vitest: 11 tests pass.
- Production build: pass, Next 16.3.8, static export (`out/`), routes `/`, `/about`, `/what-we-do`, `/impact`, `/partners`, `/support`, `/contact`, robots, sitemap, manifest, icons.
- Playwright: 23 checks pass on Linux Chromium: the giving route on home and support, no operational figures on any public page and `/plan` gone (404), navigation to every page with one h1 and `aria-current`, partner and funder routes by email, keyboard and skip link, mobile navigation, six responsive widths on three pages with no horizontal overflow, axe WCAG 2 / 2.1 / 2.2 A/AA on all seven pages (zero violations), reduced motion (the road renders fully drawn), and three full-page visual baselines of the home page (`*-chromium-linux.png`).
- Storybook: 28 stories render without errors.
- Fonts are self-hosted (Manrope, four weights; Bricolage Grotesque variable), so builds need no network.

# Validation record · v6 (the organisation and its projects) · 4 November 2026

- Strict TypeScript: pass. ESLint: pass (one ignored-file warning). Vitest: 13 tests pass, including the project card, the stages with their funding bars, and the giving panel in both modes.
- Production build: pass, Next 16.3.8, static export (`out/`), routes `/`, `/about`, `/what-we-do`, `/impact`, `/partners`, `/support`, `/contact`, `/projects`, `/projects/ardu-hall`, robots, sitemap, manifest, icons.
- Playwright: 26 checks pass on Linux Chromium: the organisation section, the project card with its status tag and bar, the giving route on home and support (any amount for the organisation, the stage levels on the project page), no operational figures on any public page and `/plan` gone (404), navigation to every page with one h1 and `aria-current`, the project page's status, stages, funding bars and checkouts, partner and funder routes by email, keyboard and skip link, mobile navigation, six responsive widths on four pages with no horizontal overflow, axe WCAG 2 / 2.1 / 2.2 A/AA on all nine pages (zero violations), reduced motion, and three full-page visual baselines of the home page.
- Storybook: 32 stories render without errors.
