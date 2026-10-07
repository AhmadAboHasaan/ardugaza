import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { Figures } from '@/components/ui/Figures';
import { Changes } from '@/components/sections/Changes';
import { Direction } from '@/components/sections/Direction';
import { Weight } from '@/components/sections/Weight';
import { CtaBand } from '@/components/ui/CtaBand';
import { impactPage, pages } from '@/content/project';
export const metadata: Metadata = {
  title: pages.impact.title,
  description: impactPage.hero.lead,
  alternates: { canonical: pages.impact.href },
  openGraph: {
    url: pages.impact.href,
    title: `${pages.impact.title} · Ardú`,
    description: impactPage.hero.lead,
  },
};
export default function ImpactPage() {
  return (
    <>
      <PageHero {...impactPage.hero} />
      <Changes
        full
        title={impactPage.changes.title}
        eyebrow={impactPage.changes.eyebrow}
        lead={impactPage.changes.lead}
      />
      <Section className="scale" aria-labelledby="scale-title">
        <div className="section-heading">
          <h2 id="scale-title">{impactPage.scale.title}</h2>
          <p className="small">{impactPage.scale.note}</p>
        </div>
        <Figures
          figures={impactPage.scale.figures}
          className="figures--large"
        />
      </Section>
      <Direction title={impactPage.road.title} eyebrow="Where it is going" />
      <Section className="split" aria-labelledby="measure-title">
        <h2 id="measure-title">{impactPage.measure.title}</h2>
        <div className="split-body">
          <p>{impactPage.measure.body}</p>
          <ul className="check-list">
            {impactPage.measure.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>
      <Weight />
      <CtaBand />
    </>
  );
}
