import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Projects } from '@/components/sections/Projects';
import { CtaBand } from '@/components/ui/CtaBand';
import { ctas, giveAnchor, pages, programmesPage } from '@/content/project';
export const metadata: Metadata = {
  title: pages.programmes.title,
  description: programmesPage.hero.lead,
  alternates: { canonical: pages.programmes.href },
  openGraph: {
    url: pages.programmes.href,
    title: `${pages.programmes.title} · Ardú`,
    description: programmesPage.hero.lead,
  },
};
export default function ProgrammesPage() {
  return (
    <>
      <PageHero {...programmesPage.hero} />
      <Projects
        id="all-programmes"
        title={programmesPage.list}
        lead=""
        more={false}
        filter
      />
      <Section className="split split--muted" aria-labelledby="one-fund-title">
        <h2 id="one-fund-title">{programmesPage.note.title}</h2>
        <div className="split-body">
          <p>{programmesPage.note.body}</p>
          <LinkButton href={giveAnchor.href}>{ctas.give}</LinkButton>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
