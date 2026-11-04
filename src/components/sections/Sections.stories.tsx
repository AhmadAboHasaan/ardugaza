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
import { ProjectStanding } from './ProjectStanding';
import { TrustStrip } from './Strips';
import { CtaBand } from '../ui/CtaBand';
import { PageHero } from '../ui/PageHero';
import { Navigation } from '../layout/Navigation';
import { Footer } from '../layout/Footer';
import { partners } from '@/content/project';
import { projects, type Project } from '@/content/projects';
import { ProjectCard } from '../ui/ProjectCard';

/** The first project with stages funded up to `n`, to show the states flip on their own. */
const fundedTo = (n: number): Project => {
  const project = projects[0];
  return {
    ...project,
    stages: {
      ...project.stages,
      items: project.stages.items.map((stage) =>
        stage.number <= n && stage.funding
          ? {
              ...stage,
              funding: { ...stage.funding, raised: stage.funding.target },
            }
          : stage.number === n + 1 && stage.funding
            ? {
                ...stage,
                funding: {
                  ...stage.funding,
                  raised: Math.round(stage.funding.target * 0.37),
                },
              }
            : stage,
      ),
    },
  };
};
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
/** When stage two's funding completes it turns Live and stage three opens, with no hand edit of any status. */
export const TheStagesOneStageLater: Story = {
  render: () => <Stages project={fundedTo(2)} />,
};
export const TheProjectCard: Story = {
  render: () => (
    <div style={{ maxWidth: 1200, margin: '2rem auto', padding: '0 1.5rem' }}>
      <ul className="project-grid">
        <li>
          <ProjectCard project={projects[0]} />
        </li>
      </ul>
    </div>
  ),
};
export const TheProjectCardInAGrid: Story = {
  render: () => (
    <div style={{ maxWidth: 1200, margin: '2rem auto', padding: '0 1.5rem' }}>
      <ul className="project-grid">
        <li>
          <ProjectCard project={projects[0]} />
        </li>
        <li>
          <ProjectCard project={fundedTo(2)} />
        </li>
      </ul>
    </div>
  ),
};
export const WhereAProjectStands: Story = {
  render: () => (
    <div style={{ maxWidth: 460, margin: '2rem auto' }}>
      <ProjectStanding project={projects[0]} />
    </div>
  ),
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
