import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { ProjectFilter } from '@/components/projects/ProjectFilter';
import { ctas, pages, projectsPage, projectsSection } from '@/content/project';
import {
  projectStatus,
  projects,
  type ProjectStatus,
} from '@/content/projects';
type Props = {
  id?: string;
  title?: string;
  lead?: string;
  /** Show the note that more projects follow, and the link to all of them. */
  more?: boolean;
  /** Offer a filter by status, once there is more than one project to filter. */
  filter?: boolean;
};
/**
 * The projects that carry the organisation, each a card with its status on
 * top that opens onto the project's own page.
 */
export function Projects({
  id = 'projects',
  title,
  lead = projectsSection.lead,
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
          {title ?? `${projectsSection.title[0]} ${projectsSection.title[1]}`}
        </h2>
        {lead && <p className="lead">{lead}</p>}
      </div>
      {filter && projects.length > 1 ? (
        <ProjectFilter
          label={projectsPage.filter}
          options={[
            { value: 'all', label: projectsPage.all, count: projects.length },
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
          <p className="small">{projectsSection.note}</p>
          <LinkButton
            href={pages.projects.href}
            variant="text"
            className="section-more"
          >
            {ctas.allProjects}
          </LinkButton>
        </div>
      )}
    </Section>
  );
}
