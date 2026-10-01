import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Impact } from './Impact';
import { Energy } from './Energy';
import { Funding } from './Funding';
import { Support } from './Support';
import { Roadmap } from './Roadmap';
import { Hero } from './Hero';
import { Navigation } from '../layout/Navigation';
import { Footer } from '../layout/Footer';
const meta = {
  title: 'Compositions',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const OpeningImpact: Story = {
  render: () => <Impact />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Full build' }));
    await expect(canvas.getByText('≈ 288,000')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', { name: 'At opening' }));
  },
};
export const PlannedEnergy: Story = {
  render: () => <Energy />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Reserve' }));
    await expect(canvas.getByText(/Surplus beyond 5 kW/)).toBeVisible();
  },
};
export const FundingPlan: Story = { render: () => <Funding /> };
export const GivingUnavailable: Story = { render: () => <Support /> };
export const HeroComposition: Story = { render: () => <Hero /> };
export const SiteNavigation: Story = { render: () => <Navigation /> };
export const SiteFooter: Story = { render: () => <Footer /> };

export const ProjectRoadmap: Story = { render: () => <Roadmap /> };
export const MobileHero: Story = {
  render: () => <Hero />,
  globals: { viewport: { value: 'mobile390', isRotated: false } },
};
