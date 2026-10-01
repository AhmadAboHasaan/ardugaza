import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
test('homepage, plan and giving flow', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Talent is here',
  );
  await page.getByRole('link', { name: 'See the plan', exact: true }).click();
  await expect(page).toHaveURL(/#plan$/);
  await page.getByText('Energy independence', { exact: true }).click();
  await expect(page.getByText(/An indicative system-only price/)).toBeVisible();
  await page
    .getByRole('link', { name: 'Fund the next seat', exact: true })
    .first()
    .click();
  await expect(page).toHaveURL(/#support$/);
  await expect(
    page.getByText(/Online giving is not available yet/),
  ).toBeVisible();
});
test('keyboard, focus and interactive explanations', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('link', { name: 'Skip to content' }),
  ).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#main$/);
  const full = page.getByRole('button', { name: 'Full build' });
  await full.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByText('≈ 288,000')).toBeVisible();
  await expect(full).toHaveCSS('outline-style', 'solid');
  await page.getByRole('button', { name: 'Reserve', exact: true }).click();
  await expect(page.getByText(/Surplus beyond 5 kW/)).toBeVisible();
});
test('mobile navigation closes on navigation and Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Open menu' }).click();
  await expect(
    page.getByRole('navigation', { name: 'Mobile navigation' }),
  ).toBeVisible();
  await page
    .getByRole('navigation', { name: 'Mobile navigation' })
    .getByRole('link', { name: 'The plan' })
    .click();
  await expect(page).toHaveURL(/#plan$/);
  await expect(page.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
    'aria-expanded',
    'false',
  );
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Open menu' })).toBeFocused();
});
for (const width of [320, 390, 768, 1024, 1440, 1920]) {
  test(`responsive layout ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await page.getByRole('button', { name: 'Full build' }).click();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  });
}
test('accessibility of opening and full-build states', async ({ page }) => {
  await page.goto('/');
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze()
    ).violations,
  ).toEqual([]);
  await page.getByRole('button', { name: 'Full build' }).click();
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze()
    ).violations,
  ).toEqual([]);
});
test('reduced motion leaves all content visible', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('.seat-matrix--entrance')).toHaveCSS(
    'animation-name',
    'none',
  );
  await expect(page.locator('.seat-matrix--entrance')).toHaveCSS(
    'opacity',
    '1',
  );
});
test('power replay preserves focus and honors reduced motion', async ({
  page,
}) => {
  await page.goto('/');
  const replay = page.getByRole('button', { name: 'Follow the power' });
  await replay.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.energy-step').first()).toHaveCSS(
    'animation-name',
    'power-arrive',
  );
  await page.keyboard.press('Enter');
  await expect(replay).toBeFocused();
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await replay.click();
  await expect(page.locator('.energy-step').first()).toHaveCSS(
    'animation-name',
    'none',
  );
  await expect(page.locator('.energy-step').first()).toHaveCSS('opacity', '1');
  await page.getByRole('button', { name: 'Storage', exact: true }).click();
  await expect(
    page.getByRole('button', { name: 'Storage', exact: true }),
  ).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#energy-description')).toBeVisible();
});
for (const width of [1440, 768, 390]) {
  test(`visual homepage ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    await expect(page).toHaveScreenshot(`homepage-${width}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });
}
