import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { StatusTag } from '@/components/ui/StatusTag';
import { StageTrack } from '@/components/ui/StageTrack';
import { ProjectCover } from '@/components/content/ProjectCover';
import { ctas } from '@/content/project';
import { projectHref, type Project } from '@/content/projects';
type Props = {
  project: Project;
  /** h3 under a section heading, h2 when the card is the section. */
  headingLevel?: 2 | 3;
  /** Its place in a grid, so cards arrive one after another. */
  index?: number;
};
/**
 * One programme, as a door to its own page: its status as the crown on the
 * cover, what it is in a breath, how far each stage's funding has come, and
 * the whole card to click.
 */
export function ProjectCard({ project, headingLevel = 3, index = 0 }: Props) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  const href = projectHref(project.slug);
  return (
    <article
      className="project-card"
      data-spotlight
      data-reveal
      style={{ ['--i' as string]: index }}
    >
      <div className="project-card-media">
        <ProjectCover project={project} />
        <StatusTag status={project.status} className="project-crown" />
      </div>
      <div className="project-card-body">
        <p className="project-card-kind">{project.kind}</p>
        <Heading className="project-card-title">
          <Link href={href} className="project-card-link">
            {project.name}
          </Link>
        </Heading>
        <p className="project-card-summary">{project.brief}</p>
        <StageTrack project={project} />
        <span className="project-card-cta" aria-hidden="true">
          {ctas.programme}
          <ArrowUpRight size={20} />
        </span>
      </div>
    </article>
  );
}
