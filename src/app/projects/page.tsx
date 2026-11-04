import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Projects } from '@/components/sections/Projects';
import { CtaBand } from '@/components/ui/CtaBand';
import { pages, projectsPage } from '@/content/project';
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
      <Projects id="all-projects" title={projectsPage.list} more={false} />
      <CtaBand />
    </>
  );
}
