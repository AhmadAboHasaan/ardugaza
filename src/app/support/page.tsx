import type { Metadata } from 'next';
import { Globe, Hash, Mail, MessageCircle } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { CtaBand } from '@/components/ui/CtaBand';
import { Give } from '@/components/sections/Give';
import { contact, integrations } from '@/data/integrations';
import { ctas, giveAnchor, pages, support } from '@/content/project';
export const metadata: Metadata = {
  title: pages.support.title,
  description: support.hero.lead,
  alternates: { canonical: pages.support.href },
  openGraph: {
    url: pages.support.href,
    title: `${pages.support.title} · Ardú`,
    description: support.hero.lead,
  },
};
const origin =
  integrations.canonicalOrigin.status === 'ready'
    ? integrations.canonicalOrigin.value
    : 'https://ardugaza.org';
const shareText = `${support.share.text} ${origin}`;
const shareLinks = [
  {
    label: 'LinkedIn',
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(origin)}`,
    Glyph: Globe,
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/?text=${encodeURIComponent(shareText)}`,
    Glyph: MessageCircle,
  },
  {
    label: 'X',
    href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
    Glyph: Hash,
  },
  {
    label: 'Email',
    href: `mailto:?subject=${encodeURIComponent('Ardú, a place rising in Gaza City')}&body=${encodeURIComponent(shareText)}`,
    Glyph: Mail,
  },
];
export default function SupportPage() {
  return (
    <>
      <PageHero {...support.hero} />
      <Section className="give" aria-labelledby="give-title">
        <Give />
      </Section>
      <Section className="split split--muted" aria-labelledby="stage-title">
        <h2 id="stage-title">{support.stage.title}</h2>
        <div className="split-body">
          <p>{support.stage.body}</p>
          <LinkButton href={contact.mailto(ctas.mailSubjects.funder)}>
            {ctas.conversation}
          </LinkButton>
        </div>
      </Section>
      <Section
        id="safeguarded"
        className="safeguards"
        aria-labelledby="safeguards-title"
      >
        <div className="section-heading">
          <h2 id="safeguards-title">{support.safeguards.title}</h2>
        </div>
        <ol className="sequence">
          {support.safeguards.steps.map((step, i) => (
            <li key={step.title}>
              <span className="sequence-number">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="small safeguards-small">{support.safeguards.small}</p>
      </Section>
      <Section className="split" aria-labelledby="share-title">
        <h2 id="share-title">{support.share.title}</h2>
        <div className="split-body">
          <p>{support.share.body}</p>
          <ul className="share-list">
            {shareLinks.map(({ label, href, Glyph }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener">
                  <Glyph size={18} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <CtaBand giveHref={giveAnchor.here} />
    </>
  );
}
