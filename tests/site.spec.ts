import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const navPages = [
  { path: '/about', label: 'About', h1: /born under the rubble/ },
  { path: '/projects', label: 'Projects', h1: /Our projects/ },
  { path: '/what-we-do', label: 'What we do', h1: /How Ardú lifts/ },
  { path: '/impact', label: 'Impact', h1: /degrees kept/ },
  { path: '/partners', label: 'Partners', h1: /Bring what money cannot buy/ },
  { path: '/support', label: 'Support', h1: /Support Ardú/ },
  { path: '/contact', label: 'Contact', h1: /Write to us/ },
];
const pages = [
  { path: '/', h1: /Ardú lifts Gaza’s young people/ },
  ...navPages,
  { path: '/projects/ardu-hall', h1: /Ardú Hall/ },
];
const tags = ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'];
const operational =
  /\$\s?\d|salar|payroll|kWh|per kilowatt-hour|running costs? of|\b6 to 8 months\b/i;
const checkout = /^https:\/\/(buy|donate)\.stripe\.com\//;
test('home page leads with the organisation, its projects and the giving route', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'their ambition.',
  );
  await expect(
    page.getByRole('heading', { name: /An organisation, not a building/ }),
  ).toBeVisible();
  const card = page.locator('.project-card').first();
  await expect(card.locator('.status-tag')).toHaveText('On the ground now');
  await expect(card.getByRole('progressbar')).toHaveCount(1);
  await expect(card.getByRole('link', { name: 'See the project' })).toHaveAttribute(
    'href',
    '/projects/ardu-hall',
  );
  const give = page.locator('.hero').getByRole('link', { name: 'Give now' });
  await expect(give).toHaveAttribute('href', '#give');
  await give.click();
  await expect(page).toHaveURL(/#give$/);
  const panel = page.locator('#give');
  await expect(panel).toBeInViewport();
  const any = panel.getByRole('link', { name: 'Give any amount' });
  await expect(any).toHaveAttribute('href', checkout);
  await expect(any).toHaveAttribute('rel', 'noopener');
  await expect(any).toHaveAttribute('target', '_blank');
  await expect(panel.locator('.give-level')).toHaveCount(0);
  await expect(
    panel.getByRole('link', { name: 'Fund a project stage' }),
  ).toHaveAttribute('href', '/projects/ardu-hall#fund');
  expect(await page.locator('input, form').count()).toBe(0);
  await expect(
    page.getByText(/No payment details touch this website/),
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
  for (const { path, label, h1 } of navPages) {
    const nav = page.getByRole('navigation', { name: 'Main navigation' });
    const footer = page.getByRole('navigation', { name: 'Footer' });
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
test('a project page carries its status, its stages and their funding', async ({
  page,
}) => {
  await page.goto('/impact');
  await page
    .locator('.project-card')
    .first()
    .getByRole('link', { name: 'See the project' })
    .click();
  await expect(page).toHaveURL(/\/projects\/ardu-hall$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    /Ardú Hall/,
  );
  await expect(page.locator('.page-hero .status-tag')).toHaveText(
    'On the ground now',
  );
  const steps = page.locator('#stages .step');
  await expect(steps).toHaveCount(4);
  await expect(steps.first()).toHaveAttribute('aria-current', 'step');
  await expect(steps.first().locator('.stage-status')).toHaveText(
    'Funding now',
  );
  const bars = page.locator('#stages [role="progressbar"]');
  await expect(bars).toHaveCount(3);
  await expect(bars.first()).toHaveAttribute('aria-valuemax', '100');
  await expect(page.locator('#stages')).toContainText(/updated \d+ \w+ 2026/);
  await page.locator('#stages').getByRole('link', { name: 'Fund this stage' }).click();
  await expect(page).toHaveURL(/#fund$/);
  const levels = page.locator('#fund .give-level');
  await expect(levels).toHaveCount(4);
  for (const level of await levels.all()) {
    await expect(level).toHaveAttribute('href', checkout);
    await expect(level).toHaveAttribute('rel', 'noopener');
  }
  expect(await page.locator('input, form').count()).toBe(0);
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
    page.locator('#give').getByRole('link', { name: 'Give any amount' }),
  ).toHaveAttribute('href', checkout);
  await expect(page.locator('#fund-a-project .project-card')).toHaveCount(1);
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
    for (const path of ['/', '/support', '/projects/ardu-hall', '/about']) {
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
test('reduced motion leaves the road fully drawn', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('.road-line')).toHaveCSS('animation-name', 'none');
  await expect(page.locator('.road-line')).toHaveCSS(
    'stroke-dashoffset',
    '0px',
  );
  await expect(page.locator('.road-node').first()).toHaveCSS('opacity', '1');
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
