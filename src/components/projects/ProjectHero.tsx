import Link from 'next/link';
import { LinkButton } from '@/components/ui/LinkButton';
import { StatusTag } from '@/components/ui/StatusTag';
import { ShareButton } from '@/components/ui/ShareButton';
import { ProjectCover } from '@/components/content/ProjectCover';
import { ProjectStanding } from '@/components/sections/ProjectStanding';
import { ctas, giveAnchor, pages } from '@/content/project';
import { projectHref, type Project } from '@/content/projects';
import { siteOrigin } from '@/data/integrations';
/**
 * The opening of a programme's own page: what it is, the road it is on and
 * where it stands now, with the card's cover grown into the page's, and the
 * one way to fund it: a gift to Ardú.
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
                <Link href={pages.programmes.href}>
                  {pages.programmes.label}
                </Link>
              </li>
              <li aria-current="page">{project.name}</li>
            </ol>
          </nav>
          <p className="page-kicker">
            <span>{project.kind}</span>
            <StatusTag status={project.status} />
          </p>
          <h1 id="page-title">{project.hero.title}</h1>
          <p className="lead">{project.hero.lead}</p>
          <div className="actions">
            <LinkButton href={giveAnchor.here} variant="light">
              {ctas.give}
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
