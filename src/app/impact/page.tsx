import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { Icon } from '@/components/ui/Icon';
import { Projects } from '@/components/sections/Projects';
import { Proof } from '@/components/sections/Proof';
import { Changes } from '@/components/sections/Changes';
import { Indicators } from '@/components/sections/Indicators';
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
      <Proof
        id="delivered"
        title={impactPage.delivered.title}
        lead={impactPage.delivered.lead}
        figures={impactPage.delivered.figures}
        source={impactPage.delivered.source}
      />
      <Projects
        title={impactPage.programmes.title}
        lead={impactPage.programmes.lead}
      />
      <Changes
        full
        title={impactPage.changes.title}
        lead={impactPage.changes.lead}
      />
      <Indicators />
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
      <CtaBand />
    </>
  );
}
