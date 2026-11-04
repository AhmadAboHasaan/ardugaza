import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { StatusTag } from '@/components/ui/StatusTag';
import { Progress } from '@/components/ui/Progress';
import { ProjectCover } from '@/components/content/ProjectCover';
import { ctas, projectsSection } from '@/content/project';
import {
  currentStage,
  liveStages,
  projectHref,
  spell,
  stageName,
  type Project,
} from '@/content/projects';
type Props = {
  project: Project;
  /** h3 under a section heading, h2 when the card is the section. */
  headingLevel?: 2 | 3;
  /** Compact cards drop the summary and keep the status, the need and the link. */
  compact?: boolean;
};
/**
 * One project: its status as the crown on the cover, what it is, the stages
 * already funded and the one open now with its bar, and the way to its page.
 */
export function ProjectCard({
  project,
  headingLevel = 3,
  compact = false,
}: Props) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  const stage = currentStage(project);
  const live = liveStages(project);
  const total = project.stages.items.length;
  const href = projectHref(project.slug);
  return (
    <article
      className={`project-card ${compact ? 'project-card--compact' : ''}`}
    >
      <div className="project-card-media">
        <ProjectCover project={project} />
        <StatusTag status={project.status} className="project-crown" />
      </div>
      <div className="project-card-body">
        <p className="project-card-ordinal">{project.ordinal}</p>
        <Heading className="project-card-title">
          <Link href={href}>{project.name}</Link>
        </Heading>
        {!compact && <p className="project-card-summary">{project.summary}</p>}
        {live.length > 0 && (
          <ul className="project-live">
            {live.map((s) => (
              <li key={s.number}>
                <Check size={16} aria-hidden="true" />
                {stageName(s)}, {s.title}: funded and on the ground
              </li>
            ))}
          </ul>
        )}
        {stage && (
          <div className="project-needs">
            <p className="project-needs-label">
              <span>{projectsSection.needs}</span>
              {stageName(stage)} of {spell(total)}, {stage.title}
            </p>
            {stage.funding && (
              <Progress
                funding={stage.funding}
                label={`${project.name}, ${stageName(stage)}, ${stage.title}`}
              />
            )}
          </div>
        )}
        <Link href={href} className="link-button link-button--text">
          {ctas.project}
          <ArrowUpRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
