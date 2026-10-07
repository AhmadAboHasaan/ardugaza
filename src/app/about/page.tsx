import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { MediaFrame } from '@/components/content/MediaFrame';
import { CtaBand } from '@/components/ui/CtaBand';
import { integrations } from '@/data/integrations';
import { about, pages, project } from '@/content/project';
export const metadata: Metadata = {
  title: pages.about.title,
  description: about.hero.lead,
  alternates: { canonical: pages.about.href },
  openGraph: {
    url: pages.about.href,
    title: `${pages.about.title} · Ardú`,
    description: about.hero.lead,
  },
};
export default function AboutPage() {
  return (
    <>
      <PageHero {...about.hero} />
      <Section className="split" aria-labelledby="story-title">
        <h2 id="story-title">{about.story.title}</h2>
        <div className="split-body">
          {about.story.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <div className="name-note">
            <strong>{about.name.word}</strong>
            <span>{about.name.meaning}</span>
          </div>
          <p>{about.name.body}</p>
        </div>
      </Section>
      <Section className="principles" aria-labelledby="principles-title">
        <div className="section-heading">
          <h2 id="principles-title">{about.principles.title}</h2>
        </div>
        <ol className="principle-list">
          {about.principles.items.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section className="place" aria-labelledby="place-title">
        <div className="place-copy">
          <h2 id="place-title">{about.place.title}</h2>
          {about.place.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <MediaFrame
          image={integrations.hallImage}
          caption={about.place.caption}
          fallback={
            <div className="hall-placeholder">
              <span className="hall-measure">
                {about.place.placeholder.measure}
              </span>
              <div className="hall-frame" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
              <span>{about.place.placeholder.label}</span>
            </div>
          }
        />
      </Section>
      <Section className="founder" aria-labelledby="founder-title">
        <MediaFrame
          image={integrations.founderImage}
          caption={about.founder.caption}
          fallback={
            <div className="portrait-placeholder">
              <span>
                {about.founder.placeholder[0]}
                <br />
                {about.founder.placeholder[1]}
              </span>
            </div>
          }
        />
        <div>
          <h2 id="founder-title">{about.founder.title}</h2>
          {about.founder.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <p className="small partners-note">{about.founder.partners}</p>
          <div className="actions">
            <LinkButton
              href={project.founderLinkedin}
              variant="text"
              target="_blank"
              rel="noopener"
            >
              {about.founder.linkedin}
            </LinkButton>
            {integrations.linkedinPage.status === 'ready' && (
              <LinkButton
                href={integrations.linkedinPage.value}
                variant="text"
                target="_blank"
                rel="noopener"
              >
                Ardú on LinkedIn
              </LinkButton>
            )}
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
