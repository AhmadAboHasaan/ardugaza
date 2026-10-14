import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { CtaBand } from '@/components/ui/CtaBand';
import { contact } from '@/data/integrations';
import { ctas, pages, partners } from '@/content/project';
export const metadata: Metadata = {
  title: pages.partners.title,
  description: partners.hero.lead,
  alternates: { canonical: pages.partners.href },
  openGraph: {
    url: pages.partners.href,
    title: `${pages.partners.title} · Ardú`,
    description: partners.hero.lead,
  },
};
export default function PartnersPage() {
  return (
    <>
      <PageHero {...partners.hero} />
      <Section className="why" aria-labelledby="why-title">
        <div className="section-heading">
          <h2 id="why-title">{partners.why.title}</h2>
        </div>
        <ul className="card-grid card-grid--three">
          {partners.why.items.map((item) => (
            <li key={item.title} className="card">
              <Icon name={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section className="split split--muted" aria-labelledby="bring-title">
        <h2 id="bring-title">{partners.bring.title}</h2>
        <div className="split-body">
          <ul className="icon-list icon-list--two">
            {partners.bring.items.map((item) => (
              <li key={item}>
                <Icon name="check" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <LinkButton href={contact.mailto(ctas.mailSubjects.partner)}>
            {ctas.partner}
          </LinkButton>
        </div>
      </Section>
      <Section className="how" aria-labelledby="how-title">
        <div className="section-heading">
          <h2 id="how-title">{partners.how.title}</h2>
          <p className="small">{partners.how.note}</p>
        </div>
        <ol className="sequence">
          {partners.how.steps.map((step, i) => (
            <li key={step.title}>
              <span className="sequence-number">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section className="funders" aria-labelledby="funders-title">
        <div className="panel panel--sand">
          <Icon name="landmark" tone="deep" />
          <h2 id="funders-title">{partners.funders.title}</h2>
          <p className="lead">{partners.funders.body}</p>
          <div className="actions">
            <LinkButton href={contact.mailto(ctas.mailSubjects.plan)}>
              {ctas.requestPlan}
            </LinkButton>
            <LinkButton
              href={contact.mailto(ctas.mailSubjects.funder)}
              variant="outline"
            >
              {ctas.conversation}
            </LinkButton>
          </div>
        </div>
      </Section>
      <CtaBand lead="partner" />
    </>
  );
}
