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
import { Stages } from '@/components/sections/Stages';
import { Doors } from '@/components/sections/Doors';
import { integrations } from '@/data/integrations';
describe('Navigation and semantic primitives', () => {
  it('opens mobile links and returns focus on Escape', async () => {
    const user = userEvent.setup();
    render(<Navigation />);
    const open = screen.getByRole('button', { name: 'Open menu' });
    expect(open).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument();
    await user.click(open);
    expect(open).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
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
    expect(screen.getByRole('link', { name: 'Read the plan' })).toHaveAttribute('href', '#plan');
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
    expect(screen.getByText('Site photography pending').tagName).toBe('FIGCAPTION');
  });
  it('keeps decorative seat marks out of the accessibility tree', () => {
    const { container } = render(<SeatMatrix count={200} />);
    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true');
  });
});
describe('Planned impact, energy, stages and giving', () => {
  it('distinguishes opening from the end of phase one via keyboard', async () => {
    const user = userEvent.setup();
    render(<Impact />);
    const full = screen.getByRole('button', { name: 'Full phase one' });
    full.focus();
    await user.keyboard('{Enter}');
    expect(full).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText('≈ 115,000')).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'At opening' }));
    expect(screen.getByText('≈ 57,600')).toBeVisible();
  });
  it('explains selected energy stages without claiming live data', async () => {
    const user = userEvent.setup();
    render(<Energy />);
    await user.click(screen.getByRole('button', { name: 'The street' }));
    expect(screen.getByRole('button', { name: 'The street' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText(/Surplus at half the market price/)).toBeVisible();
    expect(screen.getByText(/not live monitoring data/)).toBeVisible();
  });
  it('exposes stage details and the sun chapter', async () => {
    const user = userEvent.setup();
    render(<Stages />);
    await user.click(screen.getByText('Seats and laptops'));
    expect(screen.getByText(/10 shared laptops at \$950/)).toBeVisible();
    expect(screen.getByText(/The sun has its own chapter/)).toBeVisible();
  });
  it('routes giving only through the configured giving page', () => {
    render(<Doors />);
    const links = screen.getAllByRole('link', { name: /Fund a stage|Get the launch update/ });
    expect(links.length).toBeGreaterThan(0);
    if (integrations.giving.status === 'live') {
      expect(links[0]).toHaveAttribute('href', integrations.giving.url);
    }
    expect(screen.getByText(/No payment is collected on this website/)).toBeVisible();
  });
});
