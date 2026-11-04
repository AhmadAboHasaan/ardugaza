import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { StatusTag } from '@/components/ui/StatusTag';
import { Progress } from '@/components/ui/Progress';
import { ctas, projectsSection } from '@/content/project';
import { currentStage, projectHref, type Project } from '@/content/projects';
type Props = {
  project: Project;
  /** h3 under a section heading, h2 when the card is the section. */
  headingLevel?: 2 | 3;
  /** Compact cards drop the summary and keep the status, the need and the link. */
  compact?: boolean;
};
/** One project, with its status on top and what it needs now, linking to its page. */
export function ProjectCard({
  project,
  headingLevel = 3,
  compact = false,
}: Props) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  const stage = currentStage(project);
  const href = projectHref(project.slug);
  return (
    <article className={`project-card ${compact ? 'project-card--compact' : ''}`}>
      <StatusTag status={project.status} />
      <Heading className="project-card-title">
        <Link href={href}>{project.name}</Link>
      </Heading>
      {!compact && <p className="project-card-summary">{project.summary}</p>}
      {stage && (
        <div className="project-needs">
          <p className="project-needs-label">
            <span>{projectsSection.needs}</span>
            {project.standing}
          </p>
          {stage.funding && (
            <Progress
              funding={stage.funding}
              label={`${project.name}, stage ${stage.number.replace(/^0/, '')}`}
            />
          )}
        </div>
      )}
      <Link href={href} className="link-button link-button--text">
        {ctas.project}
        <ArrowUpRight size={20} aria-hidden="true" />
      </Link>
    </article>
  );
}
