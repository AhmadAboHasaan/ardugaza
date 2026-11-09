import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { organisation, pages } from '@/content/project';
/** Ardú as an organisation, in one breath: who it serves, what it delivers, how it answers for it. */
export function Organisation() {
  return (
    <Section className="org" aria-labelledby="org-title">
      <div className="org-copy" data-reveal>
        <h2 id="org-title">
          {organisation.title[0]} {organisation.title[1]}
        </h2>
        <p className="lead">{organisation.body}</p>
        <LinkButton href={pages.about.href} variant="text">
          {organisation.more}
        </LinkButton>
      </div>
      <ul className="org-facts">
        {organisation.facts.map((fact, i) => (
          <li
            key={fact.title}
            className="org-fact"
            data-reveal
            style={{ ['--i' as string]: i }}
          >
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
