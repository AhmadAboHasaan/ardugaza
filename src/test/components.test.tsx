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
import { Direction } from '@/components/sections/Direction';
import { Pillars } from '@/components/sections/Pillars';
import { integrations } from '@/data/integrations';
import { direction, nav, pages, pillars } from '@/content/project';
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
  it('routes giving only through the configured giving page', () => {
    render(<Ways />);
    const give = screen.getByRole('link', { name: /Give now|Support Ardú/ });
    if (integrations.giving.status === 'live') {
      expect(give).toHaveAttribute('href', integrations.giving.url);
      expect(give).toHaveAttribute('rel', 'noopener');
    } else {
      expect(give).toHaveAttribute('href', pages.support.href);
    }
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
      screen.getByText(/No payment is collected on this website/),
    ).toBeVisible();
  });
  it('states the direction in four steps without publishing figures', () => {
    const { container } = render(<Direction />);
    const steps = screen.getAllByRole('listitem');
    expect(steps).toHaveLength(direction.steps.length);
    expect(steps[0]).toHaveTextContent('Clear');
    expect(steps[3]).toHaveTextContent('Grow');
    expect(container.textContent).not.toMatch(/[$£€]\s?\d/);
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
      screen.getByText(/unregistered youth initiative/),
    ).toBeInTheDocument();
  });
});
