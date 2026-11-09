import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Figures } from '@/components/ui/Figures';
import { StatusTag } from '@/components/ui/StatusTag';
import { proof } from '@/content/project';
import { findProject, projectHref, type Figure } from '@/content/projects';
type Props = {
  id?: string;
  title?: string;
  lead?: string;
  figures?: readonly Figure[];
  /** Where the figures come from, and the date they were read. */
  source?: string;
};
/**
 * The work already under way, in figures: what Mu'een's own dashboard
 * shows, dated at the source, with the way through to its page.
 */
export function Proof({
  id = 'proof',
  title = proof.title,
  lead = proof.lead,
  figures = proof.figures,
  source = proof.source,
}: Props) {
  const mueen = findProject('mueen');
  return (
    <Section id={id} className="proof" aria-labelledby={`${id}-title`}>
      <div className="panel proof-panel" data-spotlight>
        <div className="section-heading" data-reveal>
          <div>
            {mueen && (
              <p className="proof-kicker">
                <span>{mueen.name}</span>
                <StatusTag status={mueen.status} />
              </p>
            )}
            <h2 id={`${id}-title`}>{title}</h2>
          </div>
          <p className="lead">{lead}</p>
        </div>
        <Figures figures={figures} className="proof-figures" />
        <div className="proof-foot">
          <p className="small">{source}</p>
          {mueen && (
            <LinkButton href={projectHref(mueen.slug)} variant="text">
              {proof.more}
            </LinkButton>
          )}
        </div>
      </div>
    </Section>
  );
}
