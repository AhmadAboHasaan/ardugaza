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
import { Proof } from '@/components/sections/Proof';
import { SupportPanel } from '@/components/giving/SupportPanel';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { StageTrack } from '@/components/ui/StageTrack';
import { Pillars } from '@/components/sections/Pillars';
import { checkoutHref, giftRef, integrations } from '@/data/integrations';
import { nav, pages, pillars, proof } from '@/content/project';
import {
  currentStage,
  findProject,
  maeenDashboard,
  percentOf,
  projectHref,
  projects,
  resolveStages,
  type Project,
} from '@/content/projects';
vi.mock('next/navigation', () => ({ usePathname: () => '/about' }));

const maeen = findProject('maeen')!;
const arduSpace = findProject('ardu-space')!;
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
          { id: 'give', label: 'Support it' },
        ]}
        action={{ href: '#give', text: 'Support Ardú' }}
      />,
    );
    const bar = screen.getByRole('navigation', { name: 'On this page' });
    expect(within(bar).getByRole('link', { name: 'Overview' })).toHaveAttribute(
      'href',
      '#overview',
    );
    expect(
      within(bar).getByRole('link', { name: /Support Ardú/ }),
    ).toHaveAttribute('href', '#give');
  });
  it('opens each question in place, with no script needed', async () => {
    const user = userEvent.setup();
    render(
      <Faq
        items={[{ q: 'Where does my gift go?', a: 'To Ardú’s general fund.' }]}
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
        url="https://ardugaza.org/programmes/maeen"
        label="Share this programme"
      />,
    );
    await user.click(
      screen.getByRole('button', { name: /Share this programme/ }),
    );
    expect(writeText).toHaveBeenCalledWith(
      'https://ardugaza.org/programmes/maeen',
    );
    expect(
      await screen.findByRole('button', { name: /Link copied/ }),
    ).toBeInTheDocument();
  });
});

describe('One gift, to Ardú', () => {
  it('gives to Ardú through its one checkout and reference, in any amount', async () => {
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
    const other = screen.getByRole('spinbutton', {
      name: 'Or enter an amount',
    });
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
      expect.stringMatching(
        /client_reference_id=ardu-general&prefilled_amount=3500$/,
      ),
    );
    expect(
      screen.getByText(/£35 to Ardú, directed to where it is needed most/),
    ).toBeVisible();
    expect(container.querySelector('form')).toBeNull();
    expect(
      screen.getByText(/No payment details touch this website/),
    ).toBeVisible();
  });
  it('offers eleven amounts from £10 to £20,000, each carried to the checkout in pence', async () => {
    const user = userEvent.setup();
    render(<SupportPanel />);
    const giving = integrations.giving;
    if (giving.status !== 'live') return;
    const offered = screen
      .getAllByRole('radio')
      .map((radio) => radio.closest('label')?.textContent);
    expect(offered).toEqual([
      '£10',
      '£20',
      '£50',
      '£100',
      '£250',
      '£500',
      '£1,000',
      '£2,500',
      '£5,000',
      '£10,000',
      '£20,000',
    ]);
    expect(screen.getByRole('radio', { name: '£50' })).toBeChecked();
    await user.click(screen.getByRole('radio', { name: '£20,000' }));
    expect(
      screen.getByRole('link', { name: /Give £20,000 to Ardú/ }),
    ).toHaveAttribute(
      'href',
      expect.stringMatching(
        /client_reference_id=ardu-general&prefilled_amount=2000000$/,
      ),
    );
  });
  it('makes a programme’s case on its page, and still gives to Ardú', () => {
    const giving = integrations.giving;
    if (giving.status !== 'live') return;
    const { container } = render(
      <SupportPanel title={maeen.give.title} body={maeen.give.body} />,
    );
    expect(
      screen.getByRole('heading', { name: 'Keep Ma’een running.' }),
    ).toBeVisible();
    expect(
      screen.getByText(/funded through Ardú’s general fund/),
    ).toBeVisible();
    const checkouts = hrefs(container).filter((href) =>
      href.includes('stripe.com'),
    );
    expect(checkouts.length).toBeGreaterThan(0);
    for (const href of checkouts) {
      expect(href.startsWith(giving.organisation)).toBe(true);
      expect(href).toContain(`client_reference_id=${giftRef.organisation}`);
    }
  });
  it('offers three ways in, with only Ardú’s checkout among them', () => {
    const giving = integrations.giving;
    if (giving.status !== 'live') return;
    const { container } = render(<Ways />);
    for (const href of hrefs(container).filter((h) => h.includes('stripe.com')))
      expect(href.startsWith(giving.organisation)).toBe(true);
    expect(
      screen.getByRole('link', { name: 'Partner with us' }),
    ).toHaveAttribute('href', pages.partners.href);
    expect(
      screen.getByRole('link', { name: 'Request the full plan' }),
    ).toHaveAttribute(
      'href',
      expect.stringMatching(/^mailto:info@ardugaza\.org/),
    );
    expect(
      screen.queryByRole('heading', { name: /Fund a project/ }),
    ).not.toBeInTheDocument();
  });
});

describe('Programmes and their stages', () => {
  it('reads every stage status from its indicator, never by hand', () => {
    expect(resolveStages(arduSpace).map((stage) => stage.state)).toEqual([
      'now',
      'next',
      'later',
      'later',
    ]);
    expect(resolveStages(maeen).map((stage) => stage.state)).toEqual([
      'done',
      'now',
      'next',
      'later',
    ]);
    const setTo = (project: Project, n: number, percent: number): Project => ({
      ...project,
      stages: {
        ...project.stages,
        items: project.stages.items.map((stage) =>
          stage.number === n
            ? { ...stage, progress: { ...stage.progress, percent } }
            : stage,
        ),
      },
    });
    const almost = setTo(arduSpace, 1, 99);
    expect(resolveStages(almost)[0].state).toBe('now');
    const cleared = setTo(arduSpace, 1, 100);
    expect(resolveStages(cleared).map((stage) => stage.state)).toEqual([
      'live',
      'now',
      'next',
      'later',
    ]);
    expect(currentStage(cleared)?.number).toBe(2);
    expect(percentOf({ percent: 120, updatedOn: '' })).toBe(100);
    expect(percentOf({ percent: -4, updatedOn: '' })).toBe(0);
    expect(percentOf({ percent: 37.4, updatedOn: '' })).toBe(37);
  });
  it('opens on the stage funding now, and opens any other stop on the road', async () => {
    const user = userEvent.setup();
    render(<Stages project={maeen} />);
    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(maeen.stages.items.length);
    expect(tabs[0]).toHaveTextContent(/Launch.*Complete/);
    expect(tabs[1]).toHaveTextContent(/Sustain.*Funding now/);
    expect(tabs[2]).toHaveTextContent(/Expand.*Next/);
    expect(tabs[3]).toHaveTextContent(/Teach.*Later/);
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
    const panel = screen.getByRole('tabpanel');
    expect(within(panel).getByRole('progressbar')).toHaveAccessibleName(
      'Stage two, Sustain: 0% funded',
    );
    expect(panel).toHaveTextContent(/0% funded\. Updated 9 November 2026\./);
    expect(panel.textContent).not.toMatch(/£/);
    expect(
      within(panel).getByRole('link', { name: 'Support Ardú' }),
    ).toHaveAttribute('href', '#give');
    await user.click(tabs[0]);
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    expect(
      within(screen.getByRole('tabpanel')).getByRole('progressbar'),
    ).toHaveAccessibleName('Stage one, Launch: delivered');
    await user.keyboard('{End}');
    expect(tabs[3]).toHaveFocus();
    expect(screen.getByRole('tabpanel')).toHaveTextContent(
      /Follows in order, once the stages before it are funded/,
    );
    await user.keyboard('{ArrowLeft}');
    expect(screen.getByRole('tabpanel')).toHaveTextContent(
      /Opens for funding once stage two is fully funded/,
    );
  });
  it('makes each card a door to its programme, crowned by status, with an indicator for every stage and no amount', () => {
    const { container } = render(<ProjectCard project={maeen} />);
    expect(screen.getByText('Running')).toBeVisible();
    expect(screen.getByText('Study library')).toBeVisible();
    expect(screen.getByRole('link', { name: maeen.name })).toHaveAttribute(
      'href',
      projectHref(maeen.slug),
    );
    expect(projectHref(maeen.slug)).toBe('/programmes/maeen');
    expect(screen.getByText(maeen.brief)).toBeVisible();
    expect(container).toHaveTextContent(
      'One of four stages complete. Funding now: stage two of four, Sustain, 0% funded.',
    );
    expect(container.querySelectorAll('.stage-track-step')).toHaveLength(4);
    expect(container.textContent).not.toMatch(/£/);
  });
  it('shows Ardú Space under construction, with its first stage still to fund', () => {
    const { container } = render(<StageTrack project={arduSpace} />);
    expect(container).toHaveTextContent(
      'Funding now: stage one of four, Clear, 0% funded.',
    );
    expect(container.textContent).not.toMatch(/complete|fully funded/i);
    render(<ProjectCard project={arduSpace} />);
    expect(screen.getByText('Under construction')).toBeVisible();
  });
  it('carries the proof, dated at its source, through to Ma’een', () => {
    render(<Proof />);
    expect(
      screen.getByRole('heading', { name: 'Proof, not promises.' }),
    ).toBeVisible();
    expect(screen.getAllByRole('term')[0]).toHaveTextContent(
      maeenDashboard.students.toLocaleString('en-GB'),
    );
    expect(
      screen.getByText(
        `From Ma’een’s own dashboard, read on ${maeenDashboard.readOn}.`,
      ),
    ).toBeVisible();
    expect(screen.getByRole('link', { name: proof.more })).toHaveAttribute(
      'href',
      '/programmes/maeen',
    );
  });
  it('lists every programme it runs, Ma’een first', () => {
    expect(projects.map((p) => p.slug)).toEqual(['maeen', 'ardu-space']);
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
  it('keeps the footer free of operational documents, and honest about registration', () => {
    render(<Footer />);
    expect(
      screen.queryByRole('link', { name: /plan|PDF/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'info@ardugaza.org' }),
    ).toHaveAttribute('href', 'mailto:info@ardugaza.org');
    expect(
      screen.getByText(/not yet a registered charity/),
    ).toBeInTheDocument();
  });
});
