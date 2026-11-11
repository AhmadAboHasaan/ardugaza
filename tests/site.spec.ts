import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const navPages = [
  { path: '/about', label: 'About', h1: /born under the rubble/ },
  {
    path: '/programmes',
    label: 'Programmes',
    h1: /Programmes built for the conditions/,
  },
  {
    path: '/what-we-do',
    label: 'What we do',
    h1: /From a disrupted degree to a working life/,
  },
  { path: '/impact', label: 'Impact', h1: /We measure results, not activity/ },
  { path: '/partners', label: 'Partners', h1: /Bring what money cannot buy/ },
  { path: '/contact', label: 'Contact', h1: /Write to us/ },
];
const pages = [
  { path: '/', h1: /Gaza’s students are still learning/ },
  ...navPages,
  { path: '/support', h1: /Support Ardú/ },
  { path: '/programmes/maeen', h1: /Ma’een/ },
  { path: '/programmes/ardu-space', h1: /Ardú Space/ },
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
/** Ardú's one checkout, with the general fund's reference. */
const arduCheckout =
  /^https:\/\/donate\.stripe\.com\/7sYaEZfrR7d31aj48a0oM02\?client_reference_id=ardu-general(&prefilled_amount=\d+)?$/;
/** Every checkout on the page goes to Ardú, whatever the page. */
const onlyArdu = async (page: Page, scope = 'main') => {
  const hrefs = await checkouts(page, scope);
  expect(hrefs.length).toBeGreaterThan(0);
  for (const href of hrefs) expect(href).toMatch(arduCheckout);
};

test('home page leads with the appeal, the proof, the programmes and Ardú’s giving', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Gaza’s students are still learning. We are making sure they can keep going.',
  );
  const proof = page.locator('#proof');
  await expect(
    proof.getByRole('heading', { name: 'Proof, not promises.' }),
  ).toBeVisible();
  await expect(proof).toContainText('1,377');
  await expect(proof).toContainText(
    'From Ma’een’s own dashboard, read on 6 November 2026.',
  );
  await expect(proof.getByRole('link', { name: 'See Ma’een' })).toHaveAttribute(
    'href',
    '/programmes/maeen',
  );
  await expect(
    page.getByRole('heading', {
      name: 'Built for the students the war could not stop.',
    }),
  ).toBeVisible();
  const cards = page.locator('#programmes .project-card');
  await expect(cards).toHaveCount(2);
  await expect(cards.nth(0).locator('.project-crown')).toHaveText('Running');
  await expect(cards.nth(0)).toContainText(
    'One of four stages complete. Funding now: stage two of four, Sustain, 0% funded.',
  );
  await expect(
    cards.nth(0).getByRole('link', { name: 'Ma’een' }),
  ).toHaveAttribute('href', '/programmes/maeen');
  await expect(cards.nth(1).locator('.project-crown')).toHaveText(
    'Under construction',
  );
  await expect(cards.nth(1)).toContainText(
    'Funding now: stage one of four, Clear, 0% funded.',
  );
  await expect(cards.nth(1)).not.toContainText(/complete|fully funded/i);
  for (const card of await cards.all())
    expect(await card.innerText()).not.toMatch(/£/);
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
  await onlyArdu(page);
  await collectsNothing(page);
  await expect(
    page.getByText(/No payment details touch this website/),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Three ways to stand with them.' }),
  ).toBeVisible();
  await expect(
    page.locator('.way').getByRole('link', { name: 'Request the full plan' }),
  ).toHaveAttribute('href', /^mailto:info@ardugaza\.org\?subject=/);
  expect(await checkouts(page, '.way')).toEqual([]);
  await expect(
    page.getByRole('heading', { name: 'Stand with Gaza’s students.' }),
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
  const old = await page.goto('/projects/ardu-space');
  expect(old?.status()).toBe(404);
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
test('a card opens its programme, whose page shows each stage’s indicator and gives to Ardú', async ({
  page,
}) => {
  await page.goto('/impact');
  await page
    .locator('.project-card')
    .first()
    .getByRole('link', { name: 'Ma’een' })
    .click();
  await expect(page).toHaveURL(/\/programmes\/maeen$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    /^Ma’een: the medical library/,
  );
  await expect(page.locator('.project-hero .status-tag')).toHaveText('Running');
  await expect(
    page.getByRole('navigation', { name: 'Breadcrumb' }).getByRole('link'),
  ).toHaveAttribute('href', '/programmes');
  const standing = page.getByRole('complementary', {
    name: 'Where Ma’een stands',
  });
  await expect(standing).toContainText('Stage two of four: Sustain');
  await expect(standing.getByRole('progressbar')).toHaveAttribute(
    'aria-valuenow',
    '0',
  );
  await expect(standing).toContainText('Stage one, Launch: complete');
  await expect(page.locator('#overview')).toContainText('1,377');
  await expect(page.locator('#overview')).toContainText(
    'From Ma’een’s own dashboard, read on 6 November 2026.',
  );
  await expect(
    page.getByRole('heading', { name: 'How it works' }),
  ).toBeVisible();
  const tabs = page.locator('#stages').getByRole('tab');
  await expect(tabs).toHaveCount(4);
  await expect(tabs.nth(0)).toContainText('Complete');
  await expect(tabs.nth(1)).toContainText('Funding now');
  await expect(tabs.nth(2)).toContainText('Next');
  await expect(tabs.nth(3)).toContainText('Later');
  await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
  const panel = page.locator('#stages').getByRole('tabpanel');
  await expect(panel.getByRole('progressbar')).toHaveAccessibleName(
    'Stage two, Sustain: 0% funded',
  );
  await expect(panel).toContainText(/Updated \d+ \w+ 2026/);
  await expect(
    panel.getByRole('link', { name: 'Support Ardú' }),
  ).toHaveAttribute('href', '#give');
  await tabs.nth(0).click();
  await expect(panel.getByRole('progressbar')).toHaveAttribute(
    'aria-valuenow',
    '100',
  );
  await expect(panel).toContainText('Delivered.');
  await tabs.nth(0).press('End');
  await expect(tabs.nth(3)).toBeFocused();
  await expect(panel).toContainText('Follows in order');
  expect(await page.locator('#stages').innerText()).not.toMatch(/£/);
  const give = page.locator('#give');
  await expect(
    give.getByRole('heading', { name: 'Keep Ma’een running.' }),
  ).toBeVisible();
  await expect(
    give.getByRole('link', { name: /Give £50 to Ardú/ }),
  ).toHaveAttribute('href', arduCheckout);
  await onlyArdu(page);
  await collectsNothing(page);
});
test('Ma’een’s old address forwards to its page, keeping the section asked for', async ({
  page,
}) => {
  await page.goto('/programmes/mueen');
  await expect(page).toHaveURL(/\/programmes\/maeen$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    /^Ma’een: the medical library/,
  );
  await page.goto('/programmes/mueen#give');
  await expect(page).toHaveURL(/\/programmes\/maeen#give$/);
});
test('Ardú Space reads under construction, its first stage still to fund', async ({
  page,
}) => {
  await page.goto('/programmes/ardu-space');
  await expect(page.locator('.project-hero .status-tag')).toHaveText(
    'Under construction',
  );
  const standing = page.getByRole('complementary', {
    name: 'Where Ardú Space stands',
  });
  await expect(standing).toContainText('Stage one of four: Clear');
  await expect(standing.getByRole('progressbar')).toHaveAttribute(
    'aria-valuenow',
    '0',
  );
  await expect(standing).not.toContainText(/complete|fully funded/i);
  const tabs = page.locator('#stages').getByRole('tab');
  await expect(tabs.nth(0)).toContainText('Funding now');
  await expect(tabs.nth(0)).toHaveAttribute('aria-selected', 'true');
  const main = await page.locator('main').innerText();
  expect(main).not.toMatch(/on the ground and|coming off|is funded and/i);
  await onlyArdu(page);
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
test('the support page gives to Ardú and shows what the gift keeps moving', async ({
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
  await onlyArdu(page);
  await expect(page.locator('main .project-card')).toHaveCount(2);
  await expect(
    page.getByRole('heading', { name: 'What your gift keeps moving' }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Why one fund' }),
  ).toBeVisible();
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
  await page.goto('/programmes/ardu-space');
  const bar = page.getByRole('navigation', {
    name: 'Ardú Space, on this page',
  });
  await bar.getByRole('link', { name: 'The place' }).click();
  await expect(page).toHaveURL(/#place$/);
  await expect(bar).toBeInViewport();
  await expect(bar.getByRole('link', { name: 'The place' })).toHaveAttribute(
    'aria-current',
    'true',
  );
  await expect(bar.getByRole('link', { name: /Support Ardú/ })).toHaveAttribute(
    'href',
    '#give',
  );
});
test('on a phone, a programme keeps the way to give one thumb away', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/programmes/ardu-space');
  const bar = page.locator('.fund-bar');
  await expect(bar).not.toHaveAttribute('data-show');
  await page.locator('#place').scrollIntoViewIfNeeded();
  await expect(bar).toHaveAttribute('data-show', '');
  await expect(bar).toContainText('Funding now: Clear, 0%');
  await bar.getByRole('link', { name: /Support Ardú/ }).click();
  await expect(page).toHaveURL(/#give$/);
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
      '/programmes',
      '/programmes/maeen',
      '/programmes/ardu-space',
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
test('accessibility of the giving panel and an open question', async ({
  page,
}) => {
  await page.goto('/programmes/maeen');
  await page.locator('#give').getByRole('radio', { name: '£250' }).click();
  await page.getByText('How is Ma’een funded?').click();
  expect(
    (
      await new AxeBuilder({ page })
        .include('#give')
        .include('#faq')
        .withTags(tags)
        .analyze()
    ).violations,
  ).toEqual([]);
});
test('reduced motion leaves everything drawn and in place', async ({
  page,
}) => {
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
