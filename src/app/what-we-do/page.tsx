import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Pillars } from '@/components/sections/Pillars';
import { Projects } from '@/components/sections/Projects';
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
      <Section className="split split--muted" aria-labelledby="who-title">
        <h2 id="who-title">{whatWeDo.who.title}</h2>
        <div className="split-body">
          <p>{whatWeDo.who.body}</p>
          <p>{whatWeDo.who.note}</p>
          <LinkButton href={register} variant="outline">
            {whatWeDo.who.cta}
          </LinkButton>
        </div>
      </Section>
      <Projects
        id="where"
        title={whatWeDo.where.title}
        lead={whatWeDo.where.lead}
        more={false}
      />
      <CtaBand lead="partner" />
    </>
  );
}
