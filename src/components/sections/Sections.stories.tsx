import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Hero } from './Hero';
import { Proof } from './Proof';
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
import { OrganisationGift } from '../giving/OrganisationGift';
import { ProjectHero } from '../projects/ProjectHero';
import { DayTimeline } from '../projects/DayTimeline';
import { partners, support } from '@/content/project';
import { findProject, type Project } from '@/content/projects';

const maeen = findProject('maeen')!;
const arduSpace = findProject('ardu-space')!;

/**
 * A programme with its stages funded up to `n` and the next one part of the
 * way, to show the states follow the indicators with no hand edit.
 */
const fundedTo = (project: Project, n: number, next = 37): Project => ({
  ...project,
  stages: {
    ...project.stages,
    items: project.stages.items.map((stage) =>
      stage.number <= n
        ? { ...stage, progress: { ...stage.progress, percent: 100 } }
        : stage.number === n + 1
          ? { ...stage, progress: { ...stage.progress, percent: next } }
          : stage,
    ),
  },
});
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
/** The work already under way, read from Ma’een’s dashboard and dated. */
export const TheProof: Story = { render: () => <Proof /> };
export const TheOrganisation: Story = { render: () => <Organisation /> };
export const TheProgrammes: Story = { render: () => <Projects /> };
export const FourPillars: Story = { render: () => <Pillars /> };
export const FourPillarsExpanded: Story = {
  render: () => <Pillars expanded heading={false} />,
};
export const WhatChanges: Story = { render: () => <Changes /> };
/** The stages as stops on one road: the stage funding now opens first; any stop opens on click or with the arrow keys. */
export const TheStages: Story = {
  render: () => <Stages project={maeen} />,
};
/** Ardú Space: every stage still to be funded, the clearing open now. */
export const TheStagesFromTheStart: Story = {
  render: () => <Stages project={arduSpace} />,
};
/** When a stage's indicator reaches a hundred it reads Funded and the next one opens, with no hand edit of any status. */
export const TheStagesOneStageLater: Story = {
  render: () => <Stages project={fundedTo(arduSpace, 1)} />,
};
export const TheProgrammeCard: Story = {
  render: () => (
    <div style={frame}>
      <ul className="project-grid">
        <li>
          <ProjectCard project={maeen} />
        </li>
      </ul>
    </div>
  ),
};
export const TheProgrammeCardsInAGrid: Story = {
  render: () => (
    <div style={frame}>
      <ul className="project-grid">
        <li>
          <ProjectCard project={maeen} />
        </li>
        <li>
          <ProjectCard project={arduSpace} index={1} />
        </li>
      </ul>
    </div>
  ),
};
export const WhereStagesStand: Story = {
  render: () => (
    <div
      style={{ maxWidth: 520, margin: '2rem auto', display: 'grid', gap: 16 }}
    >
      <StageTrack project={maeen} />
      <StageTrack project={arduSpace} />
      <StageTrack project={fundedTo(arduSpace, 1, 30)} />
    </div>
  ),
};
export const WhereAProgrammeStands: Story = {
  render: () => (
    <div style={{ maxWidth: 460, margin: '2rem auto' }}>
      <ProjectStanding project={maeen} />
    </div>
  ),
};
export const AProgrammesOwnHero: Story = {
  render: () => <ProjectHero project={maeen} />,
};
export const AProgrammesDay: Story = {
  render: () => (
    <div style={{ maxWidth: 720, margin: '2rem auto' }}>
      <DayTimeline
        schedule={arduSpace.day!.schedule!}
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
        { id: 'people', label: 'Who it serves' },
        { id: 'give', label: 'Support it' },
      ]}
      action={{ href: '#give', text: 'Support Ardú' }}
    />
  ),
};
export const TheIndicators: Story = { render: () => <Indicators /> };
export const OwnWeight: Story = { render: () => <Weight /> };
export const ThreeWays: Story = { render: () => <Ways /> };
/** A gift to Ardú: the one checkout and the one reference, wherever it is offered. */
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
/** On a programme's page the panel makes that programme's case; the gift still goes to Ardú. */
export const SupportArduFromAProgramme: Story = {
  render: () => (
    <div style={frame}>
      <SupportPanel title={maeen.give.title} body={maeen.give.body} />
    </div>
  ),
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
