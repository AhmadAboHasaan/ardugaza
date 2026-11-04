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
import { ProjectStanding } from './ProjectStanding';
import { TrustStrip } from './Strips';
import { CtaBand } from '../ui/CtaBand';
import { PageHero } from '../ui/PageHero';
import { Faq } from '../ui/Faq';
import { SectionNav } from '../ui/SectionNav';
import { StageTrack } from '../ui/StageTrack';
import { Navigation } from '../layout/Navigation';
import { Footer } from '../layout/Footer';
import { ProjectCard } from '../ui/ProjectCard';
import { SupportPanel } from '../giving/SupportPanel';
import { ProjectFund } from '../giving/ProjectFund';
import { OrganisationGift } from '../giving/OrganisationGift';
import { ProjectHero } from '../projects/ProjectHero';
import { DayTimeline } from '../projects/DayTimeline';
import { partners, support } from '@/content/project';
import { projects, type Project } from '@/content/projects';

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
const frame = { maxWidth: 1200, margin: '2rem auto', padding: '0 1.5rem' };
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
/** The stages as stops on one road: the stage funding now opens first; any stop opens on click or with the arrow keys. */
export const TheStages: Story = {
  render: () => <Stages project={projects[0]} />,
};
/** When stage two's funding completes it turns Live and stage three opens, with no hand edit of any status. */
export const TheStagesOneStageLater: Story = {
  render: () => <Stages project={fundedTo(2)} />,
};
export const TheProjectCard: Story = {
  render: () => (
    <div style={frame}>
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
    <div style={frame}>
      <ul className="project-grid">
        <li>
          <ProjectCard project={projects[0]} />
        </li>
        <li>
          <ProjectCard project={fundedTo(2)} index={1} />
        </li>
      </ul>
    </div>
  ),
};
export const WhereStagesStand: Story = {
  render: () => (
    <div style={{ maxWidth: 520, margin: '2rem auto', display: 'grid', gap: 16 }}>
      <StageTrack project={projects[0]} />
      <StageTrack project={fundedTo(2)} />
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
export const AProjectsOwnHero: Story = {
  render: () => <ProjectHero project={projects[0]} />,
};
export const AProjectsDay: Story = {
  render: () => (
    <div style={{ maxWidth: 720, margin: '2rem auto' }}>
      <DayTimeline
        schedule={projects[0].day.schedule!}
        label="A day at Ardú Space, hour by hour"
      />
    </div>
  ),
};
export const OnThisPage: Story = {
  render: () => (
    <SectionNav
      label="On this page"
      items={[
        { id: 'overview', label: 'Overview' },
        { id: 'stages', label: 'The stages' },
        { id: 'place', label: 'The place' },
        { id: 'fund', label: 'Fund it' },
      ]}
      action={{ href: '#fund', text: 'Fund this project' }}
    />
  ),
};
export const TheIndicators: Story = { render: () => <Indicators /> };
export const OwnWeight: Story = { render: () => <Weight /> };
export const ThreeWays: Story = { render: () => <Ways /> };
/** A gift to Ardú itself: its own checkout and reference, no project in sight. */
export const SupportArdu: Story = {
  render: () => (
    <div style={frame}>
      <SupportPanel />
    </div>
  ),
};
export const SupportArduCard: Story = {
  render: () => (
    <div style={{ maxWidth: 480, margin: '2rem auto' }}>
      <div className="give-card give-card--hero">
        <OrganisationGift />
      </div>
    </div>
  ),
};
/** A gift to one project: any amount for its open stage with the bar it moves, or one of its pieces. */
export const FundAProject: Story = {
  render: () => <ProjectFund project={projects[0]} />,
};
export const Questions: Story = {
  render: () => (
    <div style={frame}>
      <Faq items={support.faq.items} />
    </div>
  ),
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
