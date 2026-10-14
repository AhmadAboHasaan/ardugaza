import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { Figures } from '@/components/ui/Figures';
import { Icon } from '@/components/ui/Icon';
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
        lead={impactPage.changes.lead}
      />
      <Section className="scale" aria-labelledby="scale-title">
        <div className="panel">
          <div className="section-heading">
            <h2 id="scale-title">{impactPage.scale.title}</h2>
            <p className="small">{impactPage.scale.note}</p>
          </div>
          <Figures
            figures={impactPage.scale.figures}
            className="figures--large"
          />
        </div>
      </Section>
      <Direction title={impactPage.road.title} />
      <Section className="split" aria-labelledby="measure-title">
        <h2 id="measure-title">{impactPage.measure.title}</h2>
        <div className="split-body">
          <p>{impactPage.measure.body}</p>
          <ul className="icon-list">
            {impactPage.measure.items.map((item) => (
              <li key={item.text}>
                <Icon name={item.icon} size={18} />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Weight />
      <CtaBand />
    </>
  );
}
