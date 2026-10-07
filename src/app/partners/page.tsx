import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
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
      <Section className="three-up" aria-labelledby="why-title">
        <div className="section-heading">
          <h2 id="why-title">{partners.why.title}</h2>
        </div>
        <div className="three-up-grid">
          {partners.why.items.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section className="split split--muted" aria-labelledby="bring-title">
        <h2 id="bring-title">{partners.bring.title}</h2>
        <div className="split-body">
          <ul className="check-list check-list--two">
            {partners.bring.items.map((item) => (
              <li key={item}>{item}</li>
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
        <ol className="steps steps--plain">
          {partners.how.steps.map((step, i) => (
            <li key={step.title} className="step">
              <span className="step-number">0{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section className="funders" aria-labelledby="funders-title">
        <div className="funders-inner">
          <h2 id="funders-title">{partners.funders.title}</h2>
          <p className="lead">{partners.funders.body}</p>
          <div className="actions">
            <LinkButton
              href={contact.mailto(ctas.mailSubjects.plan)}
              variant="light"
            >
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
