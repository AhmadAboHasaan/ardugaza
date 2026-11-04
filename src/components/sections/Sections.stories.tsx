import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Hero } from './Hero';
import { Organisation } from './Organisation';
import { Projects } from './Projects';
import { Stages } from './Stages';
import { Indicators } from './Indicators';
import { Pillars } from './Pillars';
import { Changes } from './Changes';
import { Weight } from './Weight';
import { Ways } from './Ways';
import { Give } from './Give';
import { TrustStrip } from './Strips';
import { CtaBand } from '../ui/CtaBand';
import { PageHero } from '../ui/PageHero';
import { Navigation } from '../layout/Navigation';
import { Footer } from '../layout/Footer';
import { partners } from '@/content/project';
import { projects } from '@/content/projects';
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
export const TheOrganisation: Story = { render: () => <Organisation /> };
export const TheProjects: Story = { render: () => <Projects /> };
export const FourPillars: Story = { render: () => <Pillars /> };
export const FourPillarsExpanded: Story = {
  render: () => <Pillars expanded heading={false} />,
};
export const WhatChanges: Story = { render: () => <Changes /> };
export const TheStages: Story = {
  render: () => <Stages project={projects[0]} />,
};
export const TheIndicators: Story = { render: () => <Indicators /> };
export const OwnWeight: Story = { render: () => <Weight /> };
export const ThreeWays: Story = { render: () => <Ways /> };
export const GivingPanel: Story = { render: () => <Give /> };
export const GivingPanelProject: Story = {
  render: () => <Give mode="project" project={projects[0]} id="fund" />,
};
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
