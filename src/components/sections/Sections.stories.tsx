import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Impact } from './Impact';
import { Energy } from './Energy';
import { Stages } from './Stages';
import { Doors } from './Doors';
import { Trust } from './Trust';
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
    await userEvent.click(canvas.getByRole('button', { name: 'Full phase one' }));
    await expect(canvas.getByText('≈ 115,000')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', { name: 'At opening' }));
  },
};
export const PlannedEnergy: Story = {
  render: () => <Energy />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'The street' }));
    await expect(canvas.getByText(/Surplus at half the market price/)).toBeVisible();
  },
};
export const FiveStages: Story = { render: () => <Stages /> };
export const ThreeDoors: Story = { render: () => <Doors /> };
export const PaperTrail: Story = { render: () => <Trust /> };
export const HeroComposition: Story = { render: () => <Hero /> };
export const SiteNavigation: Story = { render: () => <Navigation /> };
export const SiteFooter: Story = { render: () => <Footer /> };
export const MobileHero: Story = {
  render: () => <Hero />,
  globals: { viewport: { value: 'mobile390', isRotated: false } },
};
