import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
await mkdir('.impeccable/review', { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
const metrics = [];
for (const width of [320, 390, 768, 1024, 1440, 1920]) {
  await page.setViewportSize({ width, height: 900 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('http://127.0.0.1:3000/');
  await page.evaluate(() => document.fonts.ready);
  const name =
    width === 1440 ? 'desktop' : width === 390 ? 'mobile' : `user-${width}`;
  await page.screenshot({
    path: `.impeccable/review/${name}.png`,
    fullPage: true,
  });
  await page.screenshot({ path: `.impeccable/review/${name}-viewport.png` });
  metrics.push(
    await page.evaluate(() => ({
      width: innerWidth,
      overflow: document.documentElement.scrollWidth > innerWidth,
      transferBytes: performance
        .getEntriesByType('resource')
        .reduce((a, r) => a + r.transferSize, 0),
      navigation: performance.getEntriesByType('navigation')[0].toJSON(),
      resources: performance
        .getEntriesByType('resource')
        .map((r) => ({
          name: r.name.split('/').pop(),
          bytes: r.transferSize,
          type: r.initiatorType,
        })),
    })),
  );
}
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://127.0.0.1:3000/');
await page
  .locator('#power')
  .screenshot({ path: '.impeccable/review/energy.png' });
await page
  .locator('#plan')
  .screenshot({ path: '.impeccable/review/funding.png' });
await writeFile(
  'docs/browser-metrics.json',
  JSON.stringify(
    {
      environment: 'Local Chromium, unthrottled; not field Core Web Vitals',
      errors,
      metrics,
    },
    null,
    2,
  ),
);
await browser.close();
