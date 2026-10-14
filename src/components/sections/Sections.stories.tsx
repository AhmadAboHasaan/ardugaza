import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Hero } from './Hero';
import { Vision } from './Vision';
import { Pillars } from './Pillars';
import { Changes } from './Changes';
import { Direction } from './Direction';
import { Weight } from './Weight';
import { Ways } from './Ways';
import { TrustStrip } from './Strips';
import { CtaBand } from '../ui/CtaBand';
import { PageHero } from '../ui/PageHero';
import { Navigation } from '../layout/Navigation';
import { Footer } from '../layout/Footer';
import { partners } from '@/content/project';
const meta = {
  title: 'Compositions',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const HeroComposition: Story = { render: () => <Hero /> };
export const MobileHero: Story = {
  render: () => <Hero />,
  globals: { viewport: { value: 'mobile390', isRotated: false } },
};
export const FullPicture: Story = { render: () => <Vision /> };
export const FourPillars: Story = { render: () => <Pillars /> };
export const FourPillarsExpanded: Story = {
  render: () => <Pillars expanded heading={false} />,
};
export const WhatChanges: Story = { render: () => <Changes /> };
export const TheDirection: Story = { render: () => <Direction /> };
export const OwnWeight: Story = { render: () => <Weight /> };
export const ThreeWays: Story = { render: () => <Ways /> };
export const ClosingStrips: Story = { render: () => <TrustStrip /> };
export const CallToAction: Story = { render: () => <CtaBand /> };
export const CallToActionPartnerLead: Story = {
  render: () => <CtaBand lead="partner" />,
};
export const InnerPageHero: Story = {
  render: () => <PageHero {...partners.hero} />,
};
export const SiteNavigation: Story = { render: () => <Navigation /> };
export const SiteFooter: Story = { render: () => <Footer /> };
