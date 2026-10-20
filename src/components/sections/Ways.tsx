import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { Give } from '@/components/sections/Give';
import { contact } from '@/data/integrations';
import { ctas, pages, ways } from '@/content/project';
/** Give, partner, fund a stage: the three ways in, with the giving panel leading. */
export function Ways() {
  return (
    <Section id="ways" className="ways" aria-labelledby="ways-title">
      <div className="section-heading">
        <h2 id="ways-title">
          {ways.title[0]} {ways.title[1]}
        </h2>
        <p className="small">{ways.note}</p>
      </div>
      <Give headingLevel={3} />
      <div className="way-grid">
        <article className="way">
          <Icon name={ways.partner.icon} />
          <h3>{ways.partner.title}</h3>
          <p>{ways.partner.text}</p>
          <LinkButton href={pages.partners.href} variant="outline">
            {ctas.partner}
          </LinkButton>
        </article>
        <article className="way">
          <Icon name={ways.stage.icon} />
          <h3>{ways.stage.title}</h3>
          <p>{ways.stage.text}</p>
          <LinkButton
            href={contact.mailto(ctas.mailSubjects.funder)}
            variant="outline"
          >
            {ctas.conversation}
          </LinkButton>
        </article>
      </div>
    </Section>
  );
}
