import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { contact, integrations } from '@/data/integrations';
import { ctas, pages, ways } from '@/content/project';
/** Give, partner, fund a stage: the three ways in. */
export function Ways() {
  const giving = integrations.giving;
  return (
    <Section id="ways" className="ways" aria-labelledby="ways-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{ways.eyebrow}</p>
          <h2 id="ways-title">
            {ways.title[0]}
            <br />
            {ways.title[1]}
          </h2>
        </div>
      </div>
      <div className="way-grid">
        <article className="way way--lead">
          <h3>{ways.give.title}</h3>
          <p>{ways.give.text}</p>
          {giving.status === 'live' ? (
            <LinkButton href={giving.url} target="_blank" rel="noopener">
              {ctas.give}
            </LinkButton>
          ) : (
            <LinkButton href={pages.support.href}>
              {pages.support.title}
            </LinkButton>
          )}
        </article>
        <article className="way">
          <h3>{ways.partner.title}</h3>
          <p>{ways.partner.text}</p>
          <LinkButton href={pages.partners.href} variant="text">
            {ctas.partner}
          </LinkButton>
        </article>
        <article className="way">
          <h3>{ways.stage.title}</h3>
          <p>{ways.stage.text}</p>
          <LinkButton
            href={contact.mailto(ctas.mailSubjects.funder)}
            variant="text"
          >
            {ctas.conversation}
          </LinkButton>
        </article>
      </div>
      <p className="small ways-note">{ways.note}</p>
    </Section>
  );
}
