import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Figures } from '@/components/ui/Figures';
import { Icon } from '@/components/ui/Icon';
import { LinkButton } from '@/components/ui/LinkButton';
import { SectionNav } from '@/components/ui/SectionNav';
import { ShareButton } from '@/components/ui/ShareButton';
import { Faq } from '@/components/ui/Faq';
import { CtaBand } from '@/components/ui/CtaBand';
import { MediaFrame } from '@/components/content/MediaFrame';
import { ProjectHero } from '@/components/projects/ProjectHero';
import { DayTimeline } from '@/components/projects/DayTimeline';
import { FundBar } from '@/components/projects/FundBar';
import { Stages } from '@/components/sections/Stages';
import { Weight } from '@/components/sections/Weight';
import { ProjectFund } from '@/components/giving/ProjectFund';
import { integrations, siteOrigin } from '@/data/integrations';
import { ctas } from '@/content/project';
import {
  currentStage,
  findProject,
  projectHref,
  projects,
  stageName,
} from '@/content/projects';
type Params = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: projectHref(slug) },
    openGraph: {
      url: projectHref(slug),
      title: `${project.name} · Ardú`,
      description: project.summary,
    },
  };
}
/**
 * A project's own page: the case for this project alone, where it stands,
 * the road it is on, and the way to fund it. Gifts here go to the project;
 * the organisation's own giving lives on the support page.
 */
export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();
  const stage = currentStage(project);
  const share = {
    title: `${project.name} · Ardú`,
    text: project.summary,
    url: `${siteOrigin}${projectHref(project.slug)}`,
  };
  return (
    <>
      <ProjectHero project={project} />
      <SectionNav
        label={`${project.name}, on this page`}
        items={[
          { id: 'overview', label: 'Overview' },
          { id: 'stages', label: 'The stages' },
          { id: 'place', label: 'The place' },
          { id: 'people', label: 'Who it is for' },
          { id: 'fund', label: 'Fund it' },
          { id: 'updates', label: 'Updates' },
          { id: 'faq', label: 'Questions' },
        ]}
        action={{ href: '#fund', text: ctas.fundProject }}
      />
      <Section
        id="overview"
        className="overview"
        aria-labelledby="overview-title"
      >
        <div className="overview-story" data-reveal>
          <h2 id="overview-title">{project.story.title}</h2>
          {project.story.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <Figures figures={project.facts} className="overview-figures" />
      </Section>
      <Stages project={project} />
      <Section id="place" className="place" aria-labelledby="place-title">
        <div className="place-copy" data-reveal>
          <h2 id="place-title">{project.place.title}</h2>
          {project.place.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <MediaFrame
          image={integrations.hallImage}
          caption={project.place.caption}
          className="place-media"
          fallback={
            <div className="hall-placeholder" data-reveal>
              <span className="hall-measure">
                {project.place.placeholder.measure}
              </span>
              <div className="hall-frame" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
              <span>{project.place.placeholder.label}</span>
            </div>
          }
        />
      </Section>
      <Section
        id="people"
        className="split split--muted"
        aria-labelledby="serves-title"
      >
        <h2 id="serves-title">{project.serves.title}</h2>
        <div className="split-body">
          <p>{project.serves.body}</p>
        </div>
      </Section>
      <Section className="day-section" aria-labelledby="day-title">
        <div className="day-copy" data-reveal>
          <h2 id="day-title">{project.day.title}</h2>
          <p>{project.day.body}</p>
        </div>
        {project.day.schedule ? (
          <DayTimeline
            schedule={project.day.schedule}
            label={`${project.day.title}, hour by hour`}
          />
        ) : (
          <Figures figures={project.day.figures} className="figures--compact" />
        )}
      </Section>
      <Section className="split split--muted" aria-labelledby="beyond-title">
        <h2 id="beyond-title">{project.beyond.title}</h2>
        <div className="split-body">
          <p>{project.beyond.body}</p>
        </div>
      </Section>
      <Weight />
      <ProjectFund project={project} />
      <Section
        id="updates"
        className="strips"
        aria-label="Updates and partners"
      >
        <article className="strip" aria-labelledby="updates-title" data-reveal>
          <Icon name="receipt" />
          <h2 id="updates-title">{project.updates.title}</h2>
          <p>{project.updates.body}</p>
        </article>
        <article
          className="strip"
          aria-labelledby="project-partners-title"
          data-reveal
          style={{ ['--i' as string]: 1 }}
        >
          <Icon name="handshake" />
          <h2 id="project-partners-title">{project.partners.title}</h2>
          <p>{project.partners.body}</p>
        </article>
      </Section>
      <Section id="faq" className="questions" aria-labelledby="faq-title">
        <div className="section-heading" data-reveal>
          <h2 id="faq-title">Questions about {project.name}</h2>
        </div>
        <Faq items={project.faq} />
      </Section>
      <CtaBand
        title={project.closing.title}
        body={project.closing.body}
        actions={
          <>
            <LinkButton href="#fund" variant="light">
              {`Fund ${project.name}`}
            </LinkButton>
            <ShareButton {...share} label={ctas.share} />
          </>
        }
      />
      <FundBar
        name={project.name}
        line={
          stage
            ? `${stageName(stage)}, ${stage.title}: funding now`
            : 'Every published stage is funded'
        }
        cta={ctas.fundProject}
        heroId="project-hero"
        fundId="fund"
      />
    </>
  );
}
