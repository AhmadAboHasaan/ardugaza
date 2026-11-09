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

# Validation record · v6.1 (stage status from the books, Ardú Space) · 4 November 2026

- Strict TypeScript: pass. ESLint: pass (one ignored-file warning). Vitest: 14 tests pass, including stage status derived from funding (Live, Funding now, Next, Later, Complete) with a stage flipping when its funding completes, the tracked organisation checkouts with quick amounts, and the tracked level and stage checkouts.
- Production build: pass, Next 16.3.8, static export, routes `/`, `/about`, `/what-we-do`, `/impact`, `/partners`, `/support`, `/contact`, `/projects`, `/projects/ardu-space`.
- Playwright: 26 checks pass on Linux Chromium, including the project card's crown and funded line, the project page's standing panel, stage chips and bars, `client_reference_id` on every checkout, axe WCAG 2 / 2.1 / 2.2 A/AA on all nine pages (zero violations), and three refreshed visual baselines of the home page.
- Storybook: 36 stories render without errors, including the stages one stage later (stage two funded, stage three open) and a two-card grid.
- Offline preview (`file://`): every page opens, links resolve, fonts load, the mobile menu works, no console errors.

# Validation record · v7 (organisation and project giving apart, the site in motion) · 4 November 2026

- Strict TypeScript: pass. ESLint: pass (one ignored-file warning). Vitest: 18 tests pass, including the organisation's gift (its own checkout and `ardu-general` reference, amounts, a typed amount, the £5 floor, no project anywhere in it), a project's gift (any amount with the live preview of its open stage, its pieces, no organisation reference anywhere in it), the stage explorer (opens on the stage funding now, click and arrow keys), cards with no money on them, the section nav, questions in `details`, and sharing the public address.
- Production build: pass, Next 16.3.8, static export, routes `/`, `/about`, `/what-we-do`, `/impact`, `/partners`, `/support`, `/contact`, `/projects`, `/projects/ardu-space`.
- Playwright: 31 checks pass on Linux Chromium: the home page's own giving and the card that opens the project, the project page's hero, standing panel, stage explorer, its own giving and its pieces, the £5 floor, the support page giving to the organisation only, the section nav marking the section being read, the phone's fund bar, reveal on scroll never leaving content hidden, no form and no input beyond the amount choices, keyboard and skip link, mobile navigation, six responsive widths on five pages, axe WCAG 2 / 2.1 / 2.2 A/AA on all ten pages plus the open gift pieces and an open question (zero violations), reduced motion, and three refreshed visual baselines of the home page.
- Storybook: 42 stories render without errors, including the gift builder for Ardú and for a project, the stage explorer one stage later, the project hero, the day timeline and the section nav.
- Offline preview (`file://`) with scripts kept: every page opens, links resolve, fonts load, the builder, the explorer, the section nav, the mobile menu and the reveals all work, no console errors.

# Validation record · v8 (one fund, Mu’een adopted, the copy rewritten) · 9 November 2026

- Strict TypeScript: pass. ESLint: pass (one ignored-file warning). Vitest: 21 tests pass, including the gift to Ardú (its one checkout and `ardu-general` reference, amounts, a typed amount, the £5 floor), a programme's panel giving to Ardú, the three ways with only Ardú's checkout among them, stage status read from the indicators (Complete, Funded, Funding now, Next, Later; 99 stays open, 100 flips), the indicator kept within 0 to 100, the stage explorer (opens on the stage funding now, click and arrow keys), programme cards with an indicator for every stage and no amount, Ardú Space with its first stage still to fund, the proof dated at its source, the footer's registration line.
- Production build: pass, Next 16.3.8, static export, routes `/`, `/about`, `/what-we-do`, `/impact`, `/partners`, `/support`, `/contact`, `/programmes`, `/programmes/mueen`, `/programmes/ardu-space`; `/projects/…` is gone (404).
- Playwright: 33 checks pass on Linux Chromium: the home page's appeal, proof, programme cards and giving, no operational figures on any page, navigation to every page with one h1, Mu’een's page (standing, explorer, figures dated at the source, how it works, the panel giving to Ardú), Ardú Space under construction with its first stage unfunded, the £5 floor, the support page giving to Ardú only, the section nav, the phone's fund bar, reveal on scroll never leaving content hidden, no form, keyboard and skip link, mobile navigation, six responsive widths on six pages, axe WCAG 2 / 2.1 / 2.2 A/AA on all eleven pages plus the giving panel and an open question (zero violations), reduced motion, and three refreshed visual baselines of the home page.
- Storybook: 44 stories render without errors, including the proof, both programmes' cards and stages, a stage reaching a hundred, and the panel on a programme's page.
- Share image (`public/og-image.png`) redrawn with the new headline.

- Follow-up, same day: the line under the home page's lead removed at the founder's request; Ardú Space's story, its first stage and a new question now say that what the strike left of the house still hangs over the hall, a danger to the families around it, and that clearing it returns steel and stone to the build and lifts that danger from the neighbours. Vitest 21 pass, Playwright 33 pass, visual baselines refreshed.
