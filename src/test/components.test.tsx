import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { LinkButton } from '@/components/ui/LinkButton';
import { Section } from '@/components/ui/Section';
import { CtaBand } from '@/components/ui/CtaBand';
import { Figures } from '@/components/ui/Figures';
import { MediaFrame } from '@/components/content/MediaFrame';
import { SeatMatrix } from '@/components/content/SeatMatrix';
import { Ways } from '@/components/sections/Ways';
import { Stages } from '@/components/sections/Stages';
import { Give } from '@/components/sections/Give';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { Pillars } from '@/components/sections/Pillars';
import { integrations } from '@/data/integrations';
import { nav, pages, pillars, support } from '@/content/project';
import {
  currentStage,
  percentFunded,
  projectHref,
  projects,
} from '@/content/projects';
vi.mock('next/navigation', () => ({ usePathname: () => '/about' }));
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
  it('marks the current page and links every public page', () => {
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
  it('pairs each headline figure with its label', () => {
    render(
      <Figures figures={[{ value: '200', label: 'young people a day' }]} />,
    );
    expect(screen.getByRole('term')).toHaveTextContent('200');
    expect(screen.getByRole('definition')).toHaveTextContent(
      'young people a day',
    );
  });
});
describe('Promotional sections', () => {
  it('routes the organisation gift to its hosted checkout and nothing through the site', () => {
    render(<Ways />);
    const giving = integrations.giving;
    const any = screen.getByRole('link', { name: 'Give any amount' });
    if (giving.status === 'live') {
      expect(any).toHaveAttribute('href', giving.any);
      expect(any).toHaveAttribute('rel', 'noopener');
      expect(any).toHaveAttribute('target', '_blank');
    }
    expect(screen.queryAllByRole('link', { name: /^£/ })).toHaveLength(0);
    expect(
      screen.getByRole('link', { name: 'Fund a project stage' }),
    ).toHaveAttribute('href', `${projectHref(projects[0].slug)}#fund`);
    expect(screen.queryByRole('form')).not.toBeInTheDocument();
    expect(document.querySelector('input')).toBeNull();
    expect(
      screen.getByRole('link', { name: 'Partner with us' }),
    ).toHaveAttribute('href', pages.partners.href);
    expect(
      screen.getByRole('link', { name: 'Start a conversation' }),
    ).toHaveAttribute(
      'href',
      expect.stringMatching(/^mailto:info@ardugaza\.org/),
    );
    expect(
      screen.getByText(/No payment details touch this website/),
    ).toBeVisible();
  });
  it('gives each stage level its own hosted checkout on the project page', () => {
    render(<Give mode="project" project={projects[0]} id="fund" />);
    const giving = integrations.giving;
    if (giving.status === 'live') {
      for (const level of support.levels.items) {
        const link = screen.getByRole('link', {
          name: new RegExp(`^${level.amount}`),
        });
        expect(link).toHaveAttribute('href', giving.levels[level.key]);
        expect(link).toHaveAttribute('rel', 'noopener');
      }
      expect(
        screen.getByRole('link', { name: 'Give any amount' }),
      ).toHaveAttribute('href', giving.any);
    }
    expect(document.querySelector('input')).toBeNull();
  });
  it('states a project in stages, each with its status and its funding', () => {
    const project = projects[0];
    const { container } = render(<Stages project={project} />);
    const steps = container.querySelectorAll('.step');
    expect(steps).toHaveLength(project.stages.items.length);
    expect(steps[0]).toHaveTextContent('Clear');
    expect(steps[0]).toHaveAttribute('aria-current', 'step');
    expect(steps[3]).toHaveTextContent('Grow');
    const bars = screen.getAllByRole('progressbar');
    expect(bars).toHaveLength(
      project.stages.items.filter((stage) => stage.funding).length,
    );
    expect(bars[0]).toHaveAttribute(
      'aria-valuenow',
      String(Math.round(percentFunded(project.stages.items[0].funding!))),
    );
    expect(bars[0]).toHaveAccessibleName(/£50 of £11,000 raised/);
    expect(container.textContent).toMatch(/updated 4 November 2026/);
    expect(container.textContent).not.toMatch(/\$\s?\d/);
  });
  it('crowns a project card with its status and what it needs now', () => {
    const project = projects[0];
    render(<ProjectCard project={project} />);
    expect(screen.getByText('On the ground now')).toBeVisible();
    expect(screen.getByText(project.standing)).toBeVisible();
    expect(
      screen.getByRole('link', { name: 'See the project' }),
    ).toHaveAttribute('href', projectHref(project.slug));
    const stage = currentStage(project);
    expect(stage?.status).toBe('now');
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
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
  it('closes every page with give and partner calls to action', () => {
    render(<CtaBand lead="partner" />);
    const actions = screen.getAllByRole('link');
    expect(actions[0]).toHaveTextContent('Partner with us');
    expect(actions[1]).toHaveTextContent(/Give now|Support Ardú/);
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
