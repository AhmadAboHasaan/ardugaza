import { Section } from '@/components/ui/Section';
import { MediaFrame } from '@/components/content/MediaFrame';
import { LinkButton } from '@/components/ui/LinkButton';
import { integrations } from '@/data/integrations';
import { project, who } from '@/content/project';
export function Who() {
  return (
    <Section className="founder" aria-labelledby="who-title">
      <MediaFrame
        image={integrations.founderImage}
        caption={who.caption}
        fallback={
          <div className="portrait-placeholder">
            <span>
              From finding
              <br />a socket to
              <br />
              building a system.
            </span>
            <small>{who.portraitPlaceholder}</small>
          </div>
        }
      />
      <div>
        <h2 id="who-title">
          Built by people
          <br />
          who know the conditions.
        </h2>
        <p className="lead">{who.lead}</p>
        <p>{who.body}</p>
        <p className="small partners-note">{who.partners}</p>
        <div className="actions">
          <LinkButton href={project.founderLinkedin} variant="text" target="_blank" rel="noopener">
            Ahmed on LinkedIn
          </LinkButton>
          {integrations.linkedinPage.status === 'ready' && (
            <LinkButton href={integrations.linkedinPage.value} variant="text" target="_blank" rel="noopener">
              Ardú on LinkedIn
            </LinkButton>
          )}
        </div>
      </div>
    </Section>
  );
}
