import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Projects } from '@/components/sections/Projects';
import { CtaBand } from '@/components/ui/CtaBand';
import { pages, projectsSection } from '@/content/project';
const lead =
  'Ardú works through projects. Each one carries a status you can see, stages you can count, and a page with what it needs and where every pound went. More are added here as Ardú adopts them.';
export const metadata: Metadata = {
  title: pages.projects.title,
  description: lead,
  alternates: { canonical: pages.projects.href },
  openGraph: {
    url: pages.projects.href,
    title: `${pages.projects.title} · Ardú`,
    description: lead,
  },
};
export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title={`${projectsSection.title[0]} ${projectsSection.title[1]}`}
        lead={lead}
      />
      <Projects id="all-projects" title="Every project, with its status" more={false} />
      <CtaBand />
    </>
  );
}
