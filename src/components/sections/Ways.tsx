import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { StatusTag } from '@/components/ui/StatusTag';
import { SupportPanel } from '@/components/giving/SupportPanel';
import { ctas, pages, ways } from '@/content/project';
import { projectHref, projects } from '@/content/projects';
/**
 * The three ways in, kept apart: a gift to Ardú (the panel, with its own
 * checkout), a project of your choosing (on that project's own page), or a
 * partnership.
 */
export function Ways() {
  return (
    <Section id="ways" className="ways" aria-labelledby="ways-title">
      <div className="section-heading" data-reveal>
        <h2 id="ways-title">
          {ways.title[0]} {ways.title[1]}
        </h2>
        <p className="lead">{ways.note}</p>
      </div>
      <SupportPanel headingLevel={3} />
      <div className="way-grid">
        <article className="way" data-reveal data-spotlight>
          <Icon name={ways.project.icon} />
          <h3>{ways.project.title}</h3>
          <p>{ways.project.text}</p>
          <ul className="way-projects">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link href={projectHref(project.slug)}>
                  <span className="way-project-name">{project.name}</span>
                  <StatusTag status={project.status} />
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <LinkButton href={pages.projects.href} variant="outline">
            {ctas.chooseProject}
          </LinkButton>
        </article>
        <article
          className="way"
          data-reveal
          data-spotlight
          style={{ ['--i' as string]: 1 }}
        >
          <Icon name={ways.partner.icon} />
          <h3>{ways.partner.title}</h3>
          <p>{ways.partner.text}</p>
          <LinkButton href={pages.partners.href} variant="outline">
            {ctas.partner}
          </LinkButton>
        </article>
      </div>
    </Section>
  );
}
