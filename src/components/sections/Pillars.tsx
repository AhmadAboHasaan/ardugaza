import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { pages, pillars } from '@/content/project';
type Props = { expanded?: boolean; heading?: boolean };
/** The four things Ardú gives a young person. Short on the home page, in full on What we do. */
export function Pillars({ expanded = false, heading = true }: Props) {
  return (
    <Section
      className="pillars"
      aria-labelledby={heading ? 'pillars-title' : undefined}
      aria-label={heading ? undefined : 'How Ardú lifts'}
    >
      <div className="panel">
        {heading && (
          <div className="section-heading">
            <h2 id="pillars-title">
              {pillars.title[0]} {pillars.title[1]}
            </h2>
            {!expanded && (
              <LinkButton href={pages.whatWeDo.href} variant="text">
                {pillars.more}
              </LinkButton>
            )}
          </div>
        )}
        <div
          className={`pillar-grid ${expanded ? 'pillar-grid--expanded' : ''}`}
        >
          {pillars.items.map((item) => (
            <article key={item.title} className="pillar">
              <Icon name={item.icon} />
              <h3>{item.title}</h3>
              <p>{expanded ? item.long : item.short}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
