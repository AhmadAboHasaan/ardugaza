import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Projects } from '@/components/sections/Projects';
import { CtaBand } from '@/components/ui/CtaBand';
import { ctas, pages, projectsPage } from '@/content/project';
export const metadata: Metadata = {
  title: pages.projects.title,
  description: projectsPage.hero.lead,
  alternates: { canonical: pages.projects.href },
  openGraph: {
    url: pages.projects.href,
    title: `${pages.projects.title} · Ardú`,
    description: projectsPage.hero.lead,
  },
};
export default function ProjectsPage() {
  return (
    <>
      <PageHero {...projectsPage.hero} />
      <Projects
        id="all-projects"
        title={projectsPage.list}
        lead=""
        more={false}
        filter
      />
      <Section
        className="split split--muted"
        aria-labelledby="all-of-them-title"
      >
        <h2 id="all-of-them-title">{projectsPage.note.title}</h2>
        <div className="split-body">
          <p>{projectsPage.note.body}</p>
          <LinkButton href={pages.support.href}>{ctas.give}</LinkButton>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
