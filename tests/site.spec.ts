import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const pages = [
  { path: '/', h1: /Gaza’s young people have the ability/ },
  { path: '/about', h1: /began under the rubble/ },
  { path: '/what-we-do', h1: /One room\. Four things/ },
  { path: '/impact', h1: /income earned and work found/ },
  { path: '/partners', h1: /Bring what money cannot buy/ },
  { path: '/support', h1: /Lift it with us/ },
  { path: '/contact', h1: /Write to us/ },
];
const tags = ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'];
const operational =
  /\$\s?\d|salar|payroll|kWh|per kilowatt-hour|running costs? of|\b6 to 8 months\b/i;
test('home page leads with the brand, the impact and the giving route', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Ardú gives them the room.',
  );
  const give = page.getByRole('link', { name: 'Give now' }).first();
  await expect(give).toHaveAttribute('href', /chuffed\.org/);
  await expect(give).toHaveAttribute('rel', 'noopener');
  await expect(
    page.getByText(/No payment is collected on this website/),
  ).toBeVisible();
  await expect(page.getByRole('heading', { name: /Three ways/ })).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Help lift it.' }),
  ).toBeVisible();
});
test('the public site carries no operational figures', async ({ page }) => {
  for (const { path } of pages) {
    await page.goto(path);
    const text = await page.locator('main').innerText();
    expect(text, `${path} leaks operational detail`).not.toMatch(operational);
  }
  const plan = await page.goto('/plan');
  expect(plan?.status()).toBe(404);
});
test('every page is reachable from the navigation and has one h1', async ({
  page,
}) => {
  await page.goto('/');
  for (const { path, h1 } of pages.slice(1)) {
    const nav = page.getByRole('navigation', { name: 'Main navigation' });
    const footer = page.getByRole('navigation', { name: 'Footer' });
    const label = {
      '/about': 'About',
      '/what-we-do': 'What we do',
      '/impact': 'Impact',
      '/partners': 'Partners',
      '/support': 'Support',
      '/contact': 'Contact',
    }[path]!;
    await (path === '/contact' ? footer : nav)
      .getByRole('link', { name: label })
      .click();
    await expect(page).toHaveURL(new RegExp(`${path}$`));
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(h1);
    expect(await page.getByRole('heading', { level: 1 }).count()).toBe(1);
    if (path !== '/contact') {
      await expect(nav.getByRole('link', { name: label })).toHaveAttribute(
        'aria-current',
        'page',
      );
    }
  }
});
test('partners and funders are pointed to a conversation, not a table', async ({
  page,
}) => {
  await page.goto('/partners');
  await expect(
    page.getByRole('link', { name: 'Request the full plan' }),
  ).toHaveAttribute('href', /^mailto:info@ardugaza\.org\?subject=/);
  await expect(
    page.getByText(
      /No partner is named publicly before its agreement is signed/,
    ),
  ).toBeVisible();
  await page.goto('/support');
  await expect(
    page.getByRole('link', { name: 'Give now' }).first(),
  ).toHaveAttribute('href', /chuffed\.org/);
  await expect(
    page.getByRole('heading', { name: 'How gifts are safeguarded' }),
  ).toBeVisible();
  await expect(page.getByText(/unregistered initiative/)).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'LinkedIn', exact: true }),
  ).toHaveAttribute('href', /linkedin\.com\/sharing/);
});
test('keyboard access and the skip link', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('link', { name: 'Skip to content' }),
  ).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#main$/);
  await page.keyboard.press('Tab');
  const heroGive = page
    .locator('.hero')
    .getByRole('link', { name: 'Give now' });
  await expect(heroGive).toBeFocused();
  await expect(heroGive).toHaveCSS('outline-style', 'solid');
});
test('mobile navigation closes on navigation and Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Open menu' }).click();
  const mobile = page.getByRole('navigation', { name: 'Mobile navigation' });
  await expect(mobile).toBeVisible();
  await mobile.getByRole('link', { name: 'Partners' }).click();
  await expect(page).toHaveURL(/\/partners$/);
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
    for (const path of ['/', '/support', '/partners']) {
      await page.goto(path);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
        `${path} overflows at ${width}`,
      ).toBe(true);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    }
  });
}
for (const { path } of pages) {
  test(`accessibility ${path}`, async ({ page }) => {
    await page.goto(path);
    expect(
      (await new AxeBuilder({ page }).withTags(tags).analyze()).violations,
    ).toEqual([]);
  });
}
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
