import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { SupportPanel } from '@/components/giving/SupportPanel';
import { contact } from '@/data/integrations';
import { ctas, pages, ways } from '@/content/project';
/**
 * The three ways in: a gift to Ardú (the panel, with its checkout), a
 * partnership, or funding at scale with the full plan.
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
          <Icon name={ways.partner.icon} />
          <h3>{ways.partner.title}</h3>
          <p>{ways.partner.text}</p>
          <LinkButton href={pages.partners.href} variant="outline">
            {ctas.partner}
          </LinkButton>
        </article>
        <article
          className="way"
          data-reveal
          data-spotlight
          style={{ ['--i' as string]: 1 }}
        >
          <Icon name={ways.scale.icon} />
          <h3>{ways.scale.title}</h3>
          <p>{ways.scale.text}</p>
          <LinkButton
            href={contact.mailto(ctas.mailSubjects.plan)}
            variant="outline"
          >
            {ctas.requestPlan}
          </LinkButton>
        </article>
      </div>
    </Section>
  );
}
