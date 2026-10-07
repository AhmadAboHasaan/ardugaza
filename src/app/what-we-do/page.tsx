import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { Figures } from '@/components/ui/Figures';
import { LinkButton } from '@/components/ui/LinkButton';
import { Pillars } from '@/components/sections/Pillars';
import { CtaBand } from '@/components/ui/CtaBand';
import { contact, integrations } from '@/data/integrations';
import { ctas, pages, whatWeDo } from '@/content/project';
export const metadata: Metadata = {
  title: pages.whatWeDo.title,
  description: whatWeDo.hero.lead,
  alternates: { canonical: pages.whatWeDo.href },
  openGraph: {
    url: pages.whatWeDo.href,
    title: `${pages.whatWeDo.title} · Ardú`,
    description: whatWeDo.hero.lead,
  },
};
export default function WhatWeDoPage() {
  const register =
    integrations.interestForm.status === 'ready'
      ? integrations.interestForm.value
      : contact.mailto(ctas.mailSubjects.youth);
  return (
    <>
      <PageHero {...whatWeDo.hero} />
      <Pillars expanded heading={false} />
      <Section className="split split--day" aria-labelledby="day-title">
        <h2 id="day-title">{whatWeDo.day.title}</h2>
        <div className="split-body">
          <p>{whatWeDo.day.body}</p>
          <Figures
            figures={whatWeDo.day.figures}
            className="figures--compact"
          />
        </div>
      </Section>
      <Section className="split" aria-labelledby="who-title">
        <h2 id="who-title">{whatWeDo.who.title}</h2>
        <div className="split-body">
          <p>{whatWeDo.who.body}</p>
          <p>{whatWeDo.who.note}</p>
          <LinkButton href={register} variant="text">
            {whatWeDo.who.cta}
          </LinkButton>
        </div>
      </Section>
      <Section className="split split--muted" aria-labelledby="beyond-title">
        <h2 id="beyond-title">{whatWeDo.beyond.title}</h2>
        <div className="split-body">
          <p>{whatWeDo.beyond.body}</p>
        </div>
      </Section>
      <CtaBand lead="partner" />
    </>
  );
}
