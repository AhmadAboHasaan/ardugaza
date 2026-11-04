import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const navPages = [
  { path: '/about', label: 'About', h1: /born under the rubble/ },
  { path: '/projects', label: 'Projects', h1: /Our projects/ },
  { path: '/what-we-do', label: 'What we do', h1: /How Ardú lifts/ },
  { path: '/impact', label: 'Impact', h1: /degrees kept/ },
  { path: '/partners', label: 'Partners', h1: /Bring what money cannot buy/ },
  { path: '/contact', label: 'Contact', h1: /Write to us/ },
];
const pages = [
  { path: '/', h1: /Ardú lifts Gaza’s young people/ },
  ...navPages,
  { path: '/support', h1: /Support Ardú/ },
  { path: '/projects/ardu-space', h1: /Ardú Space/ },
];
const tags = ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'];
const operational =
  /\$\s?\d|salar|payroll|kWh|per kilowatt-hour|running costs? of|\b6 to 8 months\b/i;
const checkout = /^https:\/\/(buy|donate)\.stripe\.com\//;
/** Every checkout link inside `scope`, as hrefs. */
const checkouts = async (page: Page, scope: string) =>
  (
    await page
      .locator(`${scope} a[href*="stripe.com"]`)
      .evaluateAll((links) => links.map((a) => a.getAttribute('href') ?? ''))
  ).filter(Boolean);
/** Nothing is collected here: no form anywhere, and the only inputs choose an amount. */
const collectsNothing = async (page: Page) => {
  expect(await page.locator('form').count()).toBe(0);
  expect(
    await page
      .locator('input')
      .evaluateAll(
        (inputs) =>
          inputs.filter(
            (input) =>
              !input.closest('.gift') ||
              !['radio', 'number'].includes((input as HTMLInputElement).type),
          ).length,
      ),
  ).toBe(0);
};

test('home page leads with the organisation, its projects and its own giving', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'their ambition.',
  );
  await expect(
    page.getByRole('heading', {
      name: /A youth organisation, measured by one result/,
    }),
  ).toBeVisible();
  const card = page.locator('.project-card').first();
  await expect(card.locator('.project-crown')).toHaveText('Under construction');
  await expect(card).toContainText(
    'One of four stages funded. Funding now: stage two, Light.',
  );
  await expect(card.getByRole('progressbar')).toHaveCount(0);
  await expect(card.getByRole('link', { name: 'Ardú Space' })).toHaveAttribute(
    'href',
    '/projects/ardu-space',
  );
  const give = page
    .locator('.hero')
    .getByRole('link', { name: 'Support Ardú' });
  await expect(give).toHaveAttribute('href', '#give');
  await give.click();
  await expect(page).toHaveURL(/#give$/);
  const panel = page.locator('#give');
  await expect(panel).toBeInViewport();
  const cta = panel.getByRole('link', { name: /Give £50 to Ardú/ });
  await expect(cta).toHaveAttribute('href', checkout);
  await expect(cta).toHaveAttribute(
    'href',
    /client_reference_id=ardu-general&prefilled_amount=5000$/,
  );
  await expect(cta).toHaveAttribute('rel', 'noopener');
  await expect(cta).toHaveAttribute('target', '_blank');
  await panel.getByRole('radio', { name: '£100' }).click();
  await expect(
    panel.getByRole('link', { name: /Give £100 to Ardú/ }),
  ).toHaveAttribute('href', /prefilled_amount=10000$/);
  for (const href of await checkouts(page, '#give'))
    expect(href).not.toContain('ardu-space');
  await expect(panel.getByText(/Ardú Space/)).toHaveCount(0);
  await collectsNothing(page);
  await expect(
    page.getByText(/No payment details touch this website/),
  ).toBeVisible();
  await expect(page.getByRole('heading', { name: /Three ways/ })).toBeVisible();
  const fundProject = page.locator('.way', {
    has: page.getByRole('heading', { name: 'Fund a project' }),
  });
  await expect(
    fundProject.getByRole('link', { name: /Ardú Space/ }),
  ).toHaveAttribute('href', '/projects/ardu-space');
  expect(await checkouts(page, '.way')).toEqual([]);
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
  await page
    .locator('.site-header')
    .getByRole('link', { name: 'Support Ardú' })
    .click();
  await expect(page).toHaveURL(/\/support$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    /Support Ardú/,
  );
});
test('a card opens its project, whose page funds that project alone', async ({
  page,
}) => {
  await page.goto('/impact');
  await page
    .locator('.project-card')
    .first()
    .getByRole('link', { name: 'Ardú Space' })
    .click();
  await expect(page).toHaveURL(/\/projects\/ardu-space$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    /Ardú Space/,
  );
  await expect(page.locator('.project-hero .status-tag')).toHaveText(
    'Under construction',
  );
  await expect(
    page.getByRole('navigation', { name: 'Breadcrumb' }).getByRole('link'),
  ).toHaveAttribute('href', '/projects');
  const standing = page.getByRole('complementary', {
    name: 'Where Ardú Space stands',
  });
  await expect(standing).toContainText('Stage two of four: Light');
  await expect(standing.getByRole('progressbar')).toHaveAttribute(
    'aria-valuenow',
    '0',
  );
  await expect(standing).toContainText(
    'Stage one, Clear: funded and on the ground',
  );
  const tabs = page.locator('#stages').getByRole('tab');
  await expect(tabs).toHaveCount(4);
  await expect(tabs.nth(0)).toContainText('Live');
  await expect(tabs.nth(1)).toContainText('Funding now');
  await expect(tabs.nth(2)).toContainText('Next');
  await expect(tabs.nth(3)).toContainText('Later');
  await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
  const panel = page.locator('#stages').getByRole('tabpanel');
  await expect(panel.getByRole('progressbar')).toHaveAccessibleName(
    /£0 of £22,000 raised/,
  );
  await tabs.nth(0).click();
  await expect(panel.getByRole('progressbar')).toHaveAttribute(
    'aria-valuenow',
    '100',
  );
  await expect(panel).toContainText(/Updated \d+ \w+ 2026/);
  await tabs.nth(0).press('End');
  await expect(tabs.nth(3)).toBeFocused();
  await expect(panel).toContainText(
    'Figures published when this stage is tendered.',
  );
  const fund = page.locator('#fund');
  const cta = fund.getByRole('link', { name: /Give £100 to Ardú Space/ });
  await expect(cta).toHaveAttribute('href', checkout);
  await expect(cta).toHaveAttribute(
    'href',
    /client_reference_id=ardu-space-stage-2&prefilled_amount=10000$/,
  );
  await expect(
    fund.getByText(
      'Your £100 takes stage two, Light, from 0% to 0.5% of £22,000.',
    ),
  ).toBeVisible();
  await fund.getByRole('radio', { name: 'A piece of the place' }).click();
  const pieces = fund.locator('.gift-piece');
  await expect(pieces).toHaveCount(4);
  await expect(
    fund.getByRole('link', { name: /Give a seat, £150/ }),
  ).toHaveAttribute('href', /client_reference_id=ardu-space-seat$/);
  for (const href of await checkouts(page, 'main'))
    expect(href).not.toContain('ardu-general');
  await expect(
    fund.getByRole('link', { name: /Support Ardú instead/ }),
  ).toHaveAttribute('href', '/support');
  await collectsNothing(page);
});
test('a gift is never sent below the smallest amount', async ({ page }) => {
  await page.goto('/support');
  const card = page.locator('#give');
  const other = card.getByRole('spinbutton', { name: 'Or enter an amount' });
  await other.fill('3');
  await expect(card.getByText('The smallest gift is £5.')).toBeVisible();
  await expect(card.locator('.gift-cta')).toHaveAttribute(
    'aria-disabled',
    'true',
  );
  await expect(card.locator('.gift-cta')).not.toHaveAttribute('href', /.+/);
  await other.fill('40');
  await expect(
    card.getByRole('link', { name: /Give £40 to Ardú/ }),
  ).toHaveAttribute(
    'href',
    /client_reference_id=ardu-general&prefilled_amount=4000$/,
  );
});
test('the support page gives to the organisation and points to projects', async ({
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
  const hrefs = await checkouts(page, 'main');
  expect(hrefs.length).toBeGreaterThan(0);
  for (const href of hrefs) {
    expect(href).toMatch(checkout);
    expect(href).toContain('client_reference_id=ardu-general');
  }
  await expect(page.locator('main .project-card')).toHaveCount(0);
  await expect(
    page.getByRole('link', { name: 'Choose a project' }),
  ).toHaveAttribute('href', '/projects');
  await expect(
    page.getByRole('heading', { name: 'How gifts are safeguarded' }),
  ).toBeVisible();
  await expect(page.getByText(/unregistered initiative/).first()).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'LinkedIn', exact: true }),
  ).toHaveAttribute('href', /linkedin\.com\/sharing/);
  await collectsNothing(page);
});
test('a long page holds its sections under the header and marks the one being read', async ({
  page,
}) => {
  await page.goto('/projects/ardu-space');
  const bar = page.getByRole('navigation', { name: 'Ardú Space, on this page' });
  await bar.getByRole('link', { name: 'The place' }).click();
  await expect(page).toHaveURL(/#place$/);
  await expect(bar).toBeInViewport();
  await expect(bar.getByRole('link', { name: 'The place' })).toHaveAttribute(
    'aria-current',
    'true',
  );
  await expect(
    bar.getByRole('link', { name: /Fund this project/ }),
  ).toHaveAttribute('href', '#fund');
});
test('on a phone, a project keeps its way to give one thumb away', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/projects/ardu-space');
  const bar = page.locator('.fund-bar');
  await expect(bar).not.toHaveAttribute('data-show');
  await page.locator('#place').scrollIntoViewIfNeeded();
  await expect(bar).toHaveAttribute('data-show', '');
  await bar.getByRole('link', { name: /Fund this project/ }).click();
  await expect(page).toHaveURL(/#fund$/);
  await expect(bar).not.toHaveAttribute('data-show');
});
test('motion reveals the page as it scrolls and never leaves it hidden', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveClass(/motion/);
  const later = page.locator('.change[data-reveal]').first();
  await expect(later).toHaveCSS('opacity', '0');
  await later.scrollIntoViewIfNeeded();
  await expect(later).toHaveClass(/\bin\b/);
  await expect(later).toHaveCSS('opacity', '1');
  await page.evaluate(() => window.scrollTo(0, 0));
  for (let y = 0; y < 12000; y += 400) {
    await page.mouse.wheel(0, 400);
    await page.waitForTimeout(60);
  }
  await page.waitForTimeout(1500);
  const hidden = await page
    .locator('[data-reveal]:not([data-reveal="bar"])')
    .evaluateAll(
      (els) => els.filter((el) => getComputedStyle(el).opacity !== '1').length,
    );
  expect(hidden).toBe(0);
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
    .getByRole('link', { name: 'Support Ardú' });
  await expect(heroGive).toBeFocused();
  await expect(heroGive).toHaveCSS('outline-style', 'solid');
});
test('mobile navigation closes on navigation and Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expect(
    page.locator('.site-header').getByRole('link', { name: 'Support Ardú' }),
  ).toBeVisible();
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
    for (const path of [
      '/',
      '/support',
      '/projects',
      '/projects/ardu-space',
      '/about',
    ]) {
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
test('accessibility of the open gift pieces and an open question', async ({
  page,
}) => {
  await page.goto('/projects/ardu-space');
  await page
    .locator('#fund')
    .getByRole('radio', { name: 'A piece of the place' })
    .click();
  await page.getByText('Where does a gift to Ardú Space go?').click();
  expect(
    (
      await new AxeBuilder({ page })
        .include('#fund')
        .include('#faq')
        .withTags(tags)
        .analyze()
    ).violations,
  ).toEqual([]);
});
test('reduced motion leaves everything drawn and in place', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('.road-line')).toHaveCSS('animation-name', 'none');
  await expect(page.locator('.road-line')).toHaveCSS(
    'stroke-dashoffset',
    '0px',
  );
  await expect(page.locator('.road-node').first()).toHaveCSS('opacity', '1');
  await expect(page.locator('html')).not.toHaveClass(/motion/);
  await expect(page.locator('.road-traveller')).toBeHidden();
  await expect(page.locator('.change').first()).toHaveCSS('opacity', '1');
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
