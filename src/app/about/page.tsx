import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { MediaFrame } from '@/components/content/MediaFrame';
import { Pillars } from '@/components/sections/Pillars';
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
      <Section className="purpose" aria-label="Vision and mission">
        <div className="purpose-grid">
          <article className="purpose-card purpose-card--vision">
            <h2>{about.purpose.vision.title}</h2>
            <p>{about.purpose.vision.text}</p>
          </article>
          <article className="purpose-card">
            <h2>{about.purpose.mission.title}</h2>
            <p>{about.purpose.mission.text}</p>
          </article>
        </div>
      </Section>
      <Section className="goals" aria-labelledby="goals-title">
        <div className="section-heading">
          <h2 id="goals-title">{about.goals.title}</h2>
        </div>
        <ol className="goal-list">
          {about.goals.items.map((goal, i) => (
            <li key={goal.title} className="goal">
              <span className="goal-number" aria-hidden="true">
                0{i + 1}
              </span>
              <Icon name={goal.icon} />
              <div>
                <h3>{goal.title}</h3>
                <p>{goal.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
      <Section className="split split--muted" aria-labelledby="serve-title">
        <h2 id="serve-title">{about.serve.title}</h2>
        <div className="split-body">
          {about.serve.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </Section>
      <Pillars expanded />
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
        <div className="panel">
          <div className="section-heading">
            <h2 id="principles-title">{about.principles.title}</h2>
          </div>
          <ul className="card-grid card-grid--three">
            {about.principles.items.map((item) => (
              <li key={item.title} className="card">
                <Icon name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section className="governance" aria-labelledby="governance-title">
        <div className="section-heading">
          <h2 id="governance-title">{about.governance.title}</h2>
        </div>
        <ul className="card-grid card-grid--four">
          {about.governance.items.map((item) => (
            <li key={item.title} className="card">
              <Icon name={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
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
              variant="outline"
              target="_blank"
              rel="noopener"
            >
              {about.founder.linkedin}
            </LinkButton>
            {integrations.linkedinPage.status === 'ready' && (
              <LinkButton
                href={integrations.linkedinPage.value}
                variant="outline"
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
