import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { ProjectFilter } from '@/components/projects/ProjectFilter';
import {
  ctas,
  pages,
  programmesPage,
  programmesSection,
} from '@/content/project';
import {
  projectStatus,
  projects,
  type ProjectStatus,
} from '@/content/projects';
type Props = {
  id?: string;
  title?: string;
  lead?: string;
  /** Show the note that more programmes follow, and the link to all of them. */
  more?: boolean;
  /** Offer a filter by status, once there is more than one programme to filter. */
  filter?: boolean;
};
/**
 * The programmes Ardú runs, each a card with its status on top and its stage
 * indicators below, opening onto the programme's own page.
 */
export function Projects({
  id = 'programmes',
  title,
  lead = programmesSection.lead,
  more = true,
  filter = false,
}: Props) {
  const grid = (
    <ul className="project-grid">
      {projects.map((project, i) => (
        <li key={project.slug} data-status={project.status}>
          <ProjectCard project={project} index={i} />
        </li>
      ))}
    </ul>
  );
  const statuses = Object.keys(projectStatus) as ProjectStatus[];
  return (
    <Section id={id} className="projects" aria-labelledby={`${id}-title`}>
      <div className="section-heading" data-reveal>
        <h2 id={`${id}-title`}>
          {title ??
            `${programmesSection.title[0]} ${programmesSection.title[1]}`}
        </h2>
        {lead && <p className="lead">{lead}</p>}
      </div>
      {filter && projects.length > 1 ? (
        <ProjectFilter
          label={programmesPage.filter}
          options={[
            { value: 'all', label: programmesPage.all, count: projects.length },
            ...statuses.map((status) => ({
              value: status,
              label: projectStatus[status].label,
              count: projects.filter((p) => p.status === status).length,
            })),
          ]}
        >
          {grid}
        </ProjectFilter>
      ) : (
        grid
      )}
      {more && (
        <div className="projects-foot">
          <p className="small">{programmesSection.note}</p>
          <LinkButton
            href={pages.programmes.href}
            variant="text"
            className="section-more"
          >
            {ctas.allProgrammes}
          </LinkButton>
        </div>
      )}
    </Section>
  );
}
