import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
const index = JSON.parse(
  readFileSync('storybook-static/index.json', 'utf8'),
) as { entries: Record<string, { type: string; id: string }> };
for (const story of Object.values(index.entries).filter(
  (entry) => entry.type === 'story',
)) {
  test(`Storybook ${story.id}`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    if (story.id === 'compositions--mobile-hero') {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.emulateMedia({ reducedMotion: 'reduce' });
    }
    await page.goto(`/iframe.html?id=${story.id}&viewMode=story`);
    await page.waitForFunction(() => {
      const preview = (
        window as unknown as {
          __STORYBOOK_PREVIEW__?: { storyRenders?: { phase: string }[] };
        }
      ).__STORYBOOK_PREVIEW__;
      return preview?.storyRenders?.[0]?.phase === 'finished';
    });
    await expect(page.locator('#storybook-root')).not.toBeEmpty();
    await expect(page.locator('.sb-errordisplay')).not.toBeVisible();
    expect(errors).toEqual([]);
    if (story.id === 'compositions--mobile-hero') {
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      const actions = await page.locator('.hero .actions').boundingBox();
      const diagram = await page.locator('.hero-media').boundingBox();
      expect(actions).not.toBeNull();
      expect(diagram).not.toBeNull();
      expect(diagram!.y).toBeGreaterThan(actions!.y + actions!.height);
      await expect(page.locator('.seat-matrix--entrance')).toHaveCSS(
        'animation-name',
        'none',
      );
    }
    if (story.id === 'compositions--planned-energy') {
      await expect(
        page.getByRole('button', { name: 'Reserve', exact: true }),
      ).toHaveAttribute('aria-pressed', 'true');
      await expect(page.getByText(/Surplus beyond 5 kW/)).toBeVisible();
    }
    if (story.id === 'compositions--opening-impact')
      await expect(
        page.getByRole('button', { name: 'At opening' }),
      ).toHaveAttribute('aria-pressed', 'true');
  });
}
