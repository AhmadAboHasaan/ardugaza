import type { Metadata } from 'next';
import { Globe, Hash, Mail, MessageCircle } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { CtaBand } from '@/components/ui/CtaBand';
import { contact, integrations } from '@/data/integrations';
import { ctas, pages, support } from '@/content/project';
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
  const giving = integrations.giving;
  return (
    <>
      <PageHero {...support.hero} />
      <Section className="give" aria-labelledby="give-title">
        <div className="panel panel--deep give-panel">
          <Icon name={support.give.icon} tone="sand" />
          <h2 id="give-title">{support.give.title}</h2>
          <p className="lead">{support.give.body}</p>
          {giving.status === 'live' ? (
            <LinkButton
              href={giving.url}
              variant="light"
              target="_blank"
              rel="noopener"
            >
              {ctas.give}
            </LinkButton>
          ) : (
            <p>
              Giving opens through Ardú’s campaign page; write to us to be told
              when.
            </p>
          )}
        </div>
      </Section>
      <Section className="levels" aria-labelledby="levels-title">
        <div className="section-heading">
          <h2 id="levels-title">{support.levels.title}</h2>
          <p className="small">{support.levels.note}</p>
        </div>
        <ul className="card-grid card-grid--four">
          {support.levels.items.map((level) => (
            <li key={level.amount} className="card level">
              <Icon name={level.icon} />
              <span className="level-amount">{level.amount}</span>
              <h3>{level.title}</h3>
              <p>{level.text}</p>
            </li>
          ))}
        </ul>
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
      <CtaBand />
    </>
  );
}
