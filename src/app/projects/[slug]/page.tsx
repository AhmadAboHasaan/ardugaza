import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { Figures } from '@/components/ui/Figures';
import { Icon } from '@/components/ui/Icon';
import { StatusTag } from '@/components/ui/StatusTag';
import { MediaFrame } from '@/components/content/MediaFrame';
import { Stages } from '@/components/sections/Stages';
import { Weight } from '@/components/sections/Weight';
import { Give } from '@/components/sections/Give';
import { CtaBand } from '@/components/ui/CtaBand';
import { integrations } from '@/data/integrations';
import { projectHref, projects } from '@/content/projects';
type Params = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
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
export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <>
      <PageHero
        {...project.hero}
        tag={<StatusTag status={project.status} />}
      />
      <Section className="project-facts" aria-label="At a glance">
        <Figures figures={project.facts} />
      </Section>
      <Section className="place" aria-labelledby="place-title">
        <div className="place-copy">
          <h2 id="place-title">{project.place.title}</h2>
          {project.place.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <MediaFrame
          image={integrations.hallImage}
          caption={project.place.caption}
          fallback={
            <div className="hall-placeholder">
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
      <Stages project={project} />
      <Section className="split split--muted" aria-labelledby="serves-title">
        <h2 id="serves-title">{project.serves.title}</h2>
        <div className="split-body">
          <p>{project.serves.body}</p>
        </div>
      </Section>
      <Section className="split" aria-labelledby="day-title">
        <h2 id="day-title">{project.day.title}</h2>
        <div className="split-body">
          <p>{project.day.body}</p>
          <Figures figures={project.day.figures} className="figures--compact" />
        </div>
      </Section>
      <Section className="split split--muted" aria-labelledby="beyond-title">
        <h2 id="beyond-title">{project.beyond.title}</h2>
        <div className="split-body">
          <p>{project.beyond.body}</p>
        </div>
      </Section>
      <Weight />
      <Section className="give" aria-labelledby="fund-title">
        <Give mode="project" project={project} id="fund" />
      </Section>
      <Section className="strips" aria-label="Updates and partners">
        <article className="strip" aria-labelledby="updates-title">
          <Icon name="receipt" />
          <h2 id="updates-title">{project.updates.title}</h2>
          <p>{project.updates.body}</p>
        </article>
        <article className="strip" aria-labelledby="project-partners-title">
          <Icon name="handshake" />
          <h2 id="project-partners-title">{project.partners.title}</h2>
          <p>{project.partners.body}</p>
        </article>
      </Section>
      <CtaBand giveHref="#fund" />
    </>
  );
}
