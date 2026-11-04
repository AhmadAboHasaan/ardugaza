import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { LinkButton } from '@/components/ui/LinkButton';
import { Section } from '@/components/ui/Section';
import { CtaBand } from '@/components/ui/CtaBand';
import { Figures } from '@/components/ui/Figures';
import { Faq } from '@/components/ui/Faq';
import { SectionNav } from '@/components/ui/SectionNav';
import { ShareButton } from '@/components/ui/ShareButton';
import { MediaFrame } from '@/components/content/MediaFrame';
import { SeatMatrix } from '@/components/content/SeatMatrix';
import { splitFigure } from '@/components/motion/CountUp';
import { Ways } from '@/components/sections/Ways';
import { Stages } from '@/components/sections/Stages';
import { ProjectFund } from '@/components/giving/ProjectFund';
import { SupportPanel } from '@/components/giving/SupportPanel';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { Pillars } from '@/components/sections/Pillars';
import {
  checkoutHref,
  giftRef,
  integrations,
  projectCheckouts,
} from '@/data/integrations';
import { nav, pages, pillars } from '@/content/project';
import {
  currentStage,
  projectHref,
  projects,
  resolveStages,
  type Project,
} from '@/content/projects';
vi.mock('next/navigation', () => ({ usePathname: () => '/about' }));

const project = projects[0];
const hrefs = (root: HTMLElement) =>
  within(root)
    .queryAllByRole('link')
    .map((link) => link.getAttribute('href') ?? '');

describe('Navigation and semantic primitives', () => {
  it('opens mobile links and returns focus on Escape', async () => {
    const user = userEvent.setup();
    render(<Navigation />);
    const open = screen.getByRole('button', { name: 'Open menu' });
    expect(open).toHaveAttribute('aria-expanded', 'false');
    expect(
      screen.queryByRole('navigation', { name: 'Mobile navigation' }),
    ).not.toBeInTheDocument();
    await user.click(open);
    expect(open).toHaveAttribute('aria-expanded', 'true');
    const mobile = screen.getByRole('navigation', {
      name: 'Mobile navigation',
    });
    expect(mobile).toBeVisible();
    expect(
      within(mobile).getByRole('link', { name: 'Contact' }),
    ).toHaveAttribute('href', pages.contact.href);
    await user.keyboard('{Escape}');
    expect(open).toHaveFocus();
    expect(open).toHaveAttribute('aria-expanded', 'false');
  });
  it('marks the current page, links every public page and leads to the organisation’s giving', () => {
    render(<Navigation />);
    const desktop = screen.getByRole('navigation', { name: 'Main navigation' });
    for (const link of nav) {
      expect(
        within(desktop).getByRole('link', { name: link.label }),
      ).toHaveAttribute('href', link.href);
    }
    expect(
      within(desktop).getByRole('link', { name: 'About' }),
    ).toHaveAttribute('aria-current', 'page');
    expect(
      within(desktop).getByRole('link', { name: 'Impact' }),
    ).not.toHaveAttribute('aria-current');
    expect(screen.getByRole('link', { name: 'Support Ardú' })).toHaveAttribute(
      'href',
      pages.support.href,
    );
  });
  it('preserves native links and labelled section semantics', () => {
    render(
      <Section aria-labelledby="test-title">
        <h2 id="test-title">Plan</h2>
        <LinkButton href="#plan" variant="text">
          Read the plan
        </LinkButton>
        <LinkButton href="/partners">Partner</LinkButton>
      </Section>,
    );
    expect(screen.getByRole('region', { name: 'Plan' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Read the plan' })).toHaveAttribute(
      'href',
      '#plan',
    );
    expect(screen.getByRole('link', { name: 'Partner' })).toHaveAttribute(
      'href',
      '/partners',
    );
  });
  it('renders an honest media fallback and caption', () => {
    render(
      <MediaFrame
        image={integrations.hallImage}
        caption="Site photography pending"
        fallback={<p>Spatial study</p>}
      />,
    );
    expect(screen.getByText('Spatial study')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.getByText('Site photography pending').tagName).toBe(
      'FIGCAPTION',
    );
  });
  it('keeps decorative seat marks out of the accessibility tree', () => {
    const { container } = render(<SeatMatrix count={200} />);
    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true');
  });
  it('pairs each headline figure with its label, and counts only single numbers', () => {
    render(
      <Figures figures={[{ value: '200', label: 'young people a day' }]} />,
    );
    expect(screen.getByRole('term')).toHaveTextContent('200');
    expect(screen.getByRole('definition')).toHaveTextContent(
      'young people a day',
    );
    expect(splitFigure('500 m²')).toEqual({
      prefix: '',
      target: 500,
      suffix: ' m²',
    });
    expect(splitFigure('1,000')).toMatchObject({ target: 1000 });
    expect(splitFigure('£11,000')).toMatchObject({ prefix: '£' });
    for (const still of ['×2', '8 to 12', '50 + 50', '—'])
      expect(splitFigure(still)).toBeNull();
  });
  it('lists a long page’s sections and holds its call to action', () => {
    render(
      <SectionNav
        label="On this page"
        items={[
          { id: 'overview', label: 'Overview' },
          { id: 'fund', label: 'Fund it' },
        ]}
        action={{ href: '#fund', text: 'Fund this project' }}
      />,
    );
    const bar = screen.getByRole('navigation', { name: 'On this page' });
    expect(within(bar).getByRole('link', { name: 'Overview' })).toHaveAttribute(
      'href',
      '#overview',
    );
    expect(
      within(bar).getByRole('link', { name: /Fund this project/ }),
    ).toHaveAttribute('href', '#fund');
  });
  it('opens each question in place, with no script needed', async () => {
    const user = userEvent.setup();
    render(
      <Faq
        items={[{ q: 'Where does my gift go?', a: 'To the project alone.' }]}
      />,
    );
    const question = screen.getByText('Where does my gift go?');
    const details = question.closest('details')!;
    expect(details).not.toHaveAttribute('open');
    await user.click(question);
    expect(details).toHaveAttribute('open');
  });
  it('shares the public address, never the page it is viewed on', async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
    });
    render(
      <ShareButton
        title="Ardú Space"
        text="A place that works"
        url="https://ardugaza.org/projects/ardu-space"
        label="Share this project"
      />,
    );
    await user.click(screen.getByRole('button', { name: /Share this project/ }));
    expect(writeText).toHaveBeenCalledWith(
      'https://ardugaza.org/projects/ardu-space',
    );
    expect(
      await screen.findByRole('button', { name: /Link copied/ }),
    ).toBeInTheDocument();
  });
});

describe('Two kinds of gift, kept apart', () => {
  it('gives to the organisation through its own checkout and reference, in any amount', async () => {
    const user = userEvent.setup();
    const { container } = render(<SupportPanel />);
    const giving = integrations.giving;
    expect(giving.status).toBe('live');
    if (giving.status !== 'live') return;
    const cta = screen.getByRole('link', { name: /Give £50 to Ardú/ });
    expect(cta).toHaveAttribute(
      'href',
      checkoutHref(giving.organisation, giftRef.organisation, 50),
    );
    expect(cta).toHaveAttribute('rel', 'noopener');
    expect(cta).toHaveAttribute('target', '_blank');
    await user.click(screen.getByRole('radio', { name: '£100' }));
    expect(
      screen.getByRole('link', { name: /Give £100 to Ardú/ }),
    ).toHaveAttribute(
      'href',
      checkoutHref(giving.organisation, giftRef.organisation, 100),
    );
    const other = screen.getByRole('spinbutton', { name: 'Or enter an amount' });
    await user.type(other, '3');
    expect(screen.getByText('The smallest gift is £5.')).toBeVisible();
    expect(screen.getByText('Give to Ardú').closest('a')).not.toHaveAttribute(
      'href',
    );
    await user.type(other, '5');
    expect(
      screen.getByRole('link', { name: /Give £35 to Ardú/ }),
    ).toHaveAttribute(
      'href',
      expect.stringMatching(/client_reference_id=ardu-general&prefilled_amount=3500$/),
    );
    expect(screen.getByText(/£35 to Ardú, put where the road is blocked/)).toBeVisible();
    // No project, no stage, no project reference in the organisation's panel.
    expect(container.textContent).not.toMatch(new RegExp(project.name));
    for (const href of hrefs(container))
      expect(href).not.toContain(project.slug);
    expect(container.querySelector('form')).toBeNull();
    expect(screen.getByText(/No payment details touch this website/)).toBeVisible();
  });
  it('points to projects from the ways in, without a checkout of theirs', () => {
    render(<Ways />);
    const giving = integrations.giving;
    if (giving.status !== 'live') return;
    const card = screen.getByRole('heading', { name: 'Fund a project' })
      .parentElement!;
    expect(
      within(card).getByRole('link', { name: new RegExp(project.name) }),
    ).toHaveAttribute('href', projectHref(project.slug));
    for (const href of hrefs(card)) expect(href).not.toMatch(/stripe\.com/);
    expect(
      screen.getByRole('link', { name: 'Partner with us' }),
    ).toHaveAttribute('href', pages.partners.href);
  });
  it('funds a project through the project’s checkouts alone, with a live preview of its stage', async () => {
    const user = userEvent.setup();
    const { container } = render(<ProjectFund project={project} />);
    const checkouts = projectCheckouts(project.slug)!;
    const open = currentStage(project)!;
    const cta = screen.getByRole('link', { name: /Give £100 to Ardú Space/ });
    expect(cta).toHaveAttribute(
      'href',
      checkoutHref(checkouts.any, giftRef.stage(project.slug, open.number), 100),
    );
    expect(
      screen.getByText(
        'Your £100 takes stage two, Light, from 0% to 0.5% of £22,000.',
      ),
    ).toBeVisible();
    await user.click(screen.getByRole('radio', { name: '£500' }));
    expect(
      screen.getByText(
        'Your £500 takes stage two, Light, from 0% to 2.3% of £22,000.',
      ),
    ).toBeVisible();
    await user.click(screen.getByRole('radio', { name: 'A piece of the place' }));
    const pieces = screen.getAllByRole('radio', { name: /^£[\d,]+/ });
    expect(pieces).toHaveLength(project.pieces.length);
    expect(screen.getByRole('link', { name: /Give a seat, £150/ })).toHaveAttribute(
      'href',
      checkoutHref(checkouts.pieces.seat, giftRef.piece(project.slug, 'seat')),
    );
    await user.click(screen.getByRole('radio', { name: /£750/ }));
    expect(
      screen.getByRole('link', { name: /Give a laptop, £750/ }),
    ).toHaveAttribute(
      'href',
      checkoutHref(checkouts.pieces.laptop, giftRef.piece(project.slug, 'laptop')),
    );
    for (const href of hrefs(container))
      expect(href).not.toContain(giftRef.organisation);
    expect(
      screen.getByRole('link', { name: /Support Ardú instead/ }),
    ).toHaveAttribute('href', pages.support.href);
    expect(container.querySelector('form')).toBeNull();
  });
});

describe('Projects and their stages', () => {
  it('reads every stage status from the books, never by hand', () => {
    expect(resolveStages(project).map((stage) => stage.state)).toEqual([
      'live',
      'now',
      'next',
      'later',
    ]);
    const fund = (n: number) => ({
      ...project,
      stages: {
        ...project.stages,
        items: project.stages.items.map((stage) =>
          stage.number === n && stage.funding
            ? {
                ...stage,
                funding: { ...stage.funding, raised: stage.funding.target },
              }
            : stage,
        ),
      },
    });
    const secondFunded: Project = fund(2);
    expect(resolveStages(secondFunded).map((stage) => stage.state)).toEqual([
      'live',
      'live',
      'now',
      'next',
    ]);
    const firstReported: Project = {
      ...secondFunded,
      stages: {
        ...secondFunded.stages,
        items: secondFunded.stages.items.map((stage) =>
          stage.number === 1 ? { ...stage, done: true } : stage,
        ),
      },
    };
    expect(resolveStages(firstReported)[0].state).toBe('done');
    expect(currentStage(firstReported)?.number).toBe(3);
  });
  it('opens on the stage funding now, and opens any other stop on the road', async () => {
    const user = userEvent.setup();
    render(<Stages project={project} />);
    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(project.stages.items.length);
    expect(tabs[0]).toHaveTextContent(/Clear.*Live/);
    expect(tabs[1]).toHaveTextContent(/Light.*Funding now/);
    expect(tabs[2]).toHaveTextContent(/Open.*Next/);
    expect(tabs[3]).toHaveTextContent(/Grow.*Later/);
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
    const panel = screen.getByRole('tabpanel');
    expect(within(panel).getByRole('progressbar')).toHaveAccessibleName(
      /£0 of £22,000 raised/,
    );
    expect(
      within(panel).getByRole('link', { name: 'Fund this stage' }),
    ).toHaveAttribute('href', '#fund');
    await user.click(tabs[0]);
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    expect(
      within(screen.getByRole('tabpanel')).getByRole('progressbar'),
    ).toHaveAccessibleName(/fully funded, £11,000/);
    await user.keyboard('{End}');
    expect(tabs[3]).toHaveFocus();
    expect(screen.getByRole('tabpanel')).toHaveTextContent(
      /Figures published when this stage is tendered/,
    );
    await user.keyboard('{ArrowLeft}');
    expect(screen.getByRole('tabpanel')).toHaveTextContent(
      /Opens for funding the moment stage two is funded/,
    );
  });
  it('makes each card a door to its project, crowned by status, with no money on it', () => {
    const { container } = render(<ProjectCard project={project} />);
    expect(screen.getByText('Under construction')).toBeVisible();
    expect(
      screen.getByRole('link', { name: project.name }),
    ).toHaveAttribute('href', projectHref(project.slug));
    expect(screen.getByText(project.brief)).toBeVisible();
    expect(container).toHaveTextContent(
      'One of four stages funded. Funding now: stage two, Light.',
    );
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    expect(container.textContent).not.toMatch(/£/);
  });
  it('shows the four pillars short on the home page and in full elsewhere', () => {
    const { unmount } = render(<Pillars />);
    expect(screen.getAllByRole('article')).toHaveLength(pillars.items.length);
    expect(screen.getByText(pillars.items[0].short)).toBeVisible();
    expect(screen.getByRole('link', { name: pillars.more })).toHaveAttribute(
      'href',
      pages.whatWeDo.href,
    );
    unmount();
    render(<Pillars expanded heading={false} />);
    expect(screen.getByText(pillars.items[0].long)).toBeVisible();
    expect(
      screen.queryByRole('link', { name: pillars.more }),
    ).not.toBeInTheDocument();
  });
  it('closes every page with the organisation’s own calls to action', () => {
    render(<CtaBand lead="partner" />);
    const actions = screen.getAllByRole('link');
    expect(actions[0]).toHaveTextContent('Partner with us');
    expect(actions[1]).toHaveTextContent('Support Ardú');
    expect(actions[1]).toHaveAttribute('href', '/support#give');
  });
  it('keeps the footer free of operational documents', () => {
    render(<Footer />);
    expect(
      screen.queryByRole('link', { name: /plan|PDF/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'info@ardugaza.org' }),
    ).toHaveAttribute('href', 'mailto:info@ardugaza.org');
    expect(
      screen.getByText(/unregistered youth organisation/),
    ).toBeInTheDocument();
  });
});
