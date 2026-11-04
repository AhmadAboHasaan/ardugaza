import Link from 'next/link';
import { LinkButton } from '@/components/ui/LinkButton';
import { StatusTag } from '@/components/ui/StatusTag';
import { ShareButton } from '@/components/ui/ShareButton';
import { ProjectCover } from '@/components/content/ProjectCover';
import { ProjectStanding } from '@/components/sections/ProjectStanding';
import { ctas, pages } from '@/content/project';
import { projectHref, type Project } from '@/content/projects';
import { siteOrigin } from '@/data/integrations';
/**
 * The opening of a project's own page, written to make the case for this
 * project alone: what it is, the road it is on, where it stands now, and the
 * way to fund it, with the card's cover grown into the page's.
 */
export function ProjectHero({ project }: { project: Project }) {
  return (
    <section
      id="project-hero"
      className="project-hero"
      aria-labelledby="page-title"
    >
      <div className="project-hero-inner">
        <div className="project-hero-copy">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li>
                <Link href={pages.projects.href}>{pages.projects.label}</Link>
              </li>
              <li aria-current="page">{project.name}</li>
            </ol>
          </nav>
          <p className="page-kicker">
            <span>{project.ordinal}</span>
            <StatusTag status={project.status} />
          </p>
          <h1 id="page-title">{project.hero.title}</h1>
          <p className="lead">{project.hero.lead}</p>
          <div className="actions">
            <LinkButton href="#fund" variant="light">
              {`Fund ${project.name}`}
            </LinkButton>
            <ShareButton
              title={`${project.name} · Ardú`}
              text={project.summary}
              url={`${siteOrigin}${projectHref(project.slug)}`}
              label={ctas.share}
            />
          </div>
        </div>
        <div className="project-hero-visual">
          <ProjectCover project={project} variant="hero" />
          <ProjectStanding project={project} />
        </div>
      </div>
    </section>
  );
}
