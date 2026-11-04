import type { Metadata } from 'next';
import { Globe, Hash, Mail, MessageCircle } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { Faq } from '@/components/ui/Faq';
import { CtaBand } from '@/components/ui/CtaBand';
import { OrganisationGift } from '@/components/giving/OrganisationGift';
import { siteOrigin } from '@/data/integrations';
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
const shareText = `${support.share.text} ${siteOrigin}`;
const shareLinks = [
  {
    label: 'LinkedIn',
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(siteOrigin)}`,
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
    href: `mailto:?subject=${encodeURIComponent('Ardú, an organisation rising in Gaza City')}&body=${encodeURIComponent(shareText)}`,
    Glyph: Mail,
  },
];
/** Support for the organisation, and only the organisation: its own gift, its own checkout. */
export default function SupportPage() {
  return (
    <>
      <PageHero
        title={support.hero.title}
        lead={support.hero.lead}
        aside={
          <div
            id={giveAnchor.id}
            className="give-card give-card--hero"
            aria-label="Give to Ardú"
            role="region"
          >
            <OrganisationGift />
          </div>
        }
      >
        <ul className="hero-points">
          {support.hero.points.map((point) => (
            <li key={point.text}>
              <Icon name={point.icon} size={18} />
              {point.text}
            </li>
          ))}
        </ul>
      </PageHero>
      <Section className="carries" aria-labelledby="carries-title">
        <div className="section-heading" data-reveal>
          <h2 id="carries-title">{support.carries.title}</h2>
        </div>
        <ul className="card-grid card-grid--three">
          {support.carries.items.map((item, i) => (
            <li
              key={item.title}
              className="card"
              data-reveal
              style={{ ['--i' as string]: i }}
            >
              <Icon name={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section
        className="split split--muted"
        aria-labelledby="one-project-title"
      >
        <h2 id="one-project-title">{support.project.title}</h2>
        <div className="split-body">
          <p>{support.project.body}</p>
          <LinkButton href={pages.projects.href} variant="outline">
            {ctas.chooseProject}
          </LinkButton>
        </div>
      </Section>
      <Section
        id="safeguarded"
        className="safeguards"
        aria-labelledby="safeguards-title"
      >
        <div className="section-heading" data-reveal>
          <h2 id="safeguards-title">{support.safeguards.title}</h2>
        </div>
        <ol className="sequence">
          {support.safeguards.steps.map((step, i) => (
            <li
              key={step.title}
              data-reveal
              style={{ ['--i' as string]: i }}
            >
              <span className="sequence-number">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="small safeguards-small">{support.safeguards.small}</p>
      </Section>
      <Section className="questions" aria-labelledby="faq-title">
        <div className="section-heading" data-reveal>
          <h2 id="faq-title">{support.faq.title}</h2>
        </div>
        <Faq items={support.faq.items} />
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
