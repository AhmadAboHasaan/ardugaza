import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { pages, pillars, statement } from '@/content/project';
type Props = { expanded?: boolean; heading?: boolean; id?: string };
/** The four things Ardú gives a young person. Short on the home page, in full on What we do. */
export function Pillars({ expanded = false, heading = true, id }: Props) {
  return (
    <Section
      id={id}
      className="pillars"
      aria-labelledby={heading ? 'pillars-title' : undefined}
      aria-label={heading ? undefined : 'How Ardú lifts'}
    >
      <div className="panel">
        {heading && (
          <div className="section-heading" data-reveal>
            <h2 id="pillars-title">
              {pillars.title[0]} {pillars.title[1]}
            </h2>
            <p className="lead">{statement.body}</p>
          </div>
        )}
        <div
          className={`pillar-grid ${expanded ? 'pillar-grid--expanded' : ''}`}
        >
          {pillars.items.map((item, i) => (
            <article
              key={item.title}
              className="pillar"
              data-reveal
              style={{ ['--i' as string]: i }}
            >
              <Icon name={item.icon} />
              <h3>{item.title}</h3>
              <p>{expanded ? item.long : item.short}</p>
            </article>
          ))}
        </div>
        {heading && !expanded && (
          <LinkButton
            href={pages.whatWeDo.href}
            variant="text"
            className="section-more"
          >
            {pillars.more}
          </LinkButton>
        )}
      </div>
    </Section>
  );
}
