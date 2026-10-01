import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navigation } from '@/components/layout/Navigation';
import { LinkButton } from '@/components/ui/LinkButton';
import { Section } from '@/components/ui/Section';
import { MediaFrame } from '@/components/content/MediaFrame';
import { SeatMatrix } from '@/components/content/SeatMatrix';
import { Impact } from '@/components/sections/Impact';
import { Energy } from '@/components/sections/Energy';
import { Funding } from '@/components/sections/Funding';
import { Support } from '@/components/sections/Support';
import { integrations } from '@/data/integrations';
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
    expect(
      screen.getByRole('navigation', { name: 'Mobile navigation' }),
    ).toBeVisible();
    await user.keyboard('{Escape}');
    expect(open).toHaveFocus();
    expect(open).toHaveAttribute('aria-expanded', 'false');
  });
  it('preserves native links and labelled section semantics', () => {
    render(
      <Section aria-labelledby="test-title">
        <h2 id="test-title">Plan</h2>
        <LinkButton href="#plan" variant="text">
          Read the plan
        </LinkButton>
      </Section>,
    );
    expect(screen.getByRole('region', { name: 'Plan' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Read the plan' })).toHaveAttribute(
      'href',
      '#plan',
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
    const { container } = render(<SeatMatrix count={500} />);
    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true');
  });
});
describe('Planned impact and energy', () => {
  it('distinguishes opening from conditional full build via keyboard', async () => {
    const user = userEvent.setup();
    render(<Impact />);
    const full = screen.getByRole('button', { name: 'Full build' });
    full.focus();
    await user.keyboard('{Enter}');
    expect(full).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText('≈ 288,000')).toBeVisible();
    expect(screen.getByText(/Expansion depends on funding/)).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'At opening' }));
    expect(screen.getByText('≈ 115,000')).toBeVisible();
  });
  it('explains selected energy stages without claiming live data', async () => {
    const user = userEvent.setup();
    render(<Energy />);
    await user.click(screen.getByRole('button', { name: 'Reserve' }));
    expect(screen.getByRole('button', { name: 'Reserve' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(screen.getByText(/Surplus beyond 5 kW/)).toBeVisible();
    expect(screen.getByText(/not live monitoring data/)).toBeVisible();
  });
  it('exposes funding details and exclusions', async () => {
    const user = userEvent.setup();
    render(<Funding />);
    await user.click(screen.getByText('Energy independence'));
    expect(screen.getByText(/An indicative system-only price/)).toBeVisible();
    expect(
      screen.getByText(/Package 4 is additional and conditional/),
    ).toBeVisible();
  });
  it('does not invent a payment endpoint', () => {
    render(<Support />);
    expect(
      screen.getByText(/Online giving is not available yet/),
    ).toBeVisible();
    expect(
      screen.queryByRole('link', { name: 'Continue to secure giving' }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Discuss support with Ahmed' }),
    ).toHaveAttribute('href', 'https://www.linkedin.com/in/ahmadabohassan');
  });
});
