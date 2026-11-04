import { ArrowUpRight, Check } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { Progress } from '@/components/ui/Progress';
import { checkoutHref, giftRef, integrations } from '@/data/integrations';
import { ctas, pages } from '@/content/project';
import {
  resolveStages,
  stageName,
  stageState,
  type Project,
} from '@/content/projects';
type Props = { project: Project };
/**
 * A project's stages as stops on one road. Each stage's status is read from
 * its funding: Live once funded, Funding now for the first one short of its
 * target, then Next and Later. The open stage carries its own checkout.
 */
export function Stages({ project }: Props) {
  const { stages } = project;
  const giving = integrations.giving;
  const resolved = resolveStages(project);
  const open = resolved.find((stage) => stage.state === 'now');
  const fundHref = (number: number) =>
    giving.status === 'live'
      ? checkoutHref(giving.any, giftRef.stage(project.slug, number))
      : '#fund';
  return (
    <Section id="stages" className="direction" aria-labelledby="stages-title">
      <div className="panel panel--deep">
        <div className="section-heading">
          <h2 id="stages-title">{stages.title}</h2>
          <p className="lead">{stages.lead}</p>
        </div>
        <ol className="steps">
          {resolved.map((stage) => (
            <li
              key={stage.number}
              className={`step step--${stage.state}`}
              aria-current={stage.state === 'now' ? 'step' : undefined}
            >
              <Icon name={stage.icon} tone="cream" />
              <span className={`stage-status stage-status--${stage.state}`}>
                {(stage.state === 'live' || stage.state === 'done') && (
                  <Check size={13} aria-hidden="true" />
                )}
                {stageState[stage.state]}
              </span>
              <p className="step-number">{stageName(stage)}</p>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
              {stage.funding ? (
                <Progress
                  funding={stage.funding}
                  label={`${stageName(stage)}, ${stage.title}`}
                  tone="ink"
                />
              ) : (
                <p className="stage-unpriced">
                  Figures published when this stage is tendered.
                </p>
              )}
              {stage.state === 'now' && (
                <a
                  className="step-fund"
                  href={fundHref(stage.number)}
                  {...(giving.status === 'live'
                    ? { target: '_blank', rel: 'noopener' }
                    : {})}
                >
                  {ctas.fundStage}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              )}
            </li>
          ))}
        </ol>
        <div className="direction-foot">
          <div className="actions">
            {open && (
              <LinkButton
                href={fundHref(open.number)}
                variant="light"
                {...(giving.status === 'live'
                  ? { target: '_blank', rel: 'noopener' }
                  : {})}
              >
                {`Fund ${stageName(open).toLowerCase()}`}
              </LinkButton>
            )}
            <LinkButton href={pages.partners.href} variant="outline">
              {stages.more}
            </LinkButton>
          </div>
          <p className="small">{stages.note}</p>
        </div>
      </div>
    </Section>
  );
}
