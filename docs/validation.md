# Validation record · v3 · 7 October 2026

- Strict TypeScript: pass. ESLint: pass (one ignored-file warning). Vitest: 8 tests pass.
- Production build: pass, Next 16.3.8, static export (`out/`), routes `/`, `/plan`, robots, sitemap, manifest, icons.
- Playwright: 16 checks pass on Linux Chromium: flows (stages disclosure, giving link to the configured giving page, plan page), keyboard and focus, six responsive widths with no horizontal overflow, axe WCAG 2 / 2.1 / 2.2 A/AA on the opening state, the full-phase-one state and the plan page (zero violations), reduced motion, power replay, and three full-page visual baselines (`*-chromium-linux.png`).
- Fonts are self-hosted (Manrope, four weights), so builds need no network.
