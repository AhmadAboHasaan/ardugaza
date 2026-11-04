import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { ctas, pages, projectsSection } from '@/content/project';
import { projects } from '@/content/projects';
type Props = {
  id?: string;
  title?: string;
  lead?: string;
  /** Show the note that more projects follow, and the link to all of them. */
  more?: boolean;
  compact?: boolean;
};
/** The projects that carry the organisation, each with its status on top. */
export function Projects({
  id = 'projects',
  title,
  lead = projectsSection.lead,
  more = true,
  compact = false,
}: Props) {
  return (
    <Section id={id} className="projects" aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        <h2 id={`${id}-title`}>
          {title ?? `${projectsSection.title[0]} ${projectsSection.title[1]}`}
        </h2>
        <p className="lead">{lead}</p>
      </div>
      <ul className="project-grid">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} compact={compact} />
          </li>
        ))}
      </ul>
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
