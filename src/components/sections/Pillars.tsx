import { BookOpen, Briefcase, Users, Zap } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { pages, pillars } from '@/content/project';
const icons = {
  power: Zap,
  learn: BookOpen,
  people: Users,
  work: Briefcase,
} as const;
type Props = { expanded?: boolean; heading?: boolean };
/** The four things Ardú puts in one room. Short on the home page, in full on What we do. */
export function Pillars({ expanded = false, heading = true }: Props) {
  return (
    <Section
      className="pillars"
      aria-labelledby={heading ? 'pillars-title' : undefined}
      aria-label={heading ? undefined : 'What Ardú does'}
    >
      {heading && (
        <div className="section-heading">
          <div>
            <p className="eyebrow">{pillars.eyebrow}</p>
            <h2 id="pillars-title">
              {pillars.title[0]}
              <br />
              {pillars.title[1]}
            </h2>
          </div>
          {!expanded && (
            <LinkButton href={pages.whatWeDo.href} variant="text">
              {pillars.more}
            </LinkButton>
          )}
        </div>
      )}
      <div className={`pillar-grid ${expanded ? 'pillar-grid--expanded' : ''}`}>
        {pillars.items.map((item) => {
          const Icon = icons[item.icon];
          return (
            <article key={item.title} className="pillar">
              <Icon size={28} strokeWidth={1.6} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{expanded ? item.long : item.short}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
