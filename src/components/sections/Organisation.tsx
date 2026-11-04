import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { organisation, pages } from '@/content/project';
/** Ardú as an organisation, in one breath: who it serves, what changes, how it works. */
export function Organisation() {
  return (
    <Section className="org" aria-labelledby="org-title">
      <div className="org-copy">
        <h2 id="org-title">
          {organisation.title[0]} {organisation.title[1]}
        </h2>
        <p className="lead">{organisation.body}</p>
        <LinkButton href={pages.about.href} variant="text">
          {organisation.more}
        </LinkButton>
      </div>
      <ul className="org-facts">
        {organisation.facts.map((fact) => (
          <li key={fact.title} className="org-fact">
            <Icon name={fact.icon} />
            <div>
              <h3>{fact.title}</h3>
              <p>{fact.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
