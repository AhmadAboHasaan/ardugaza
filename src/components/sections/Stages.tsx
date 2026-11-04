import { ArrowUpRight, Check } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { Progress } from '@/components/ui/Progress';
import { StageExplorer } from '@/components/projects/StageExplorer';
import { ctas, pages } from '@/content/project';
import {
  resolveStages,
  spell,
  stageName,
  stageState,
  type Project,
  type ResolvedStage,
} from '@/content/projects';
type Props = { project: Project };

/** What a stage's state means for a giver, in one line. */
function note(stage: ResolvedStage, opener: ResolvedStage | undefined) {
  switch (stage.state) {
    case 'done':
      return 'Complete, and reported with its receipts.';
    case 'live':
      return 'Funded and on the ground. Its receipts and photographs are published here as it reports.';
    case 'now':
      return 'Open for funding now. The moment it is funded, it turns live and the next stage opens.';
    case 'next':
      return opener
        ? `Opens for funding the moment ${stageName(opener).toLowerCase()} is funded.`
        : 'Opens for funding once its figures are published.';
    default:
      return 'Follows in order, once the stages before it stand.';
  }
}

/**
 * A project's stages as stops on one road. Each stage's status is read from
 * its funding: Live once funded, Funding now for the first one short of its
 * target, then Next and Later. Choosing a stop opens its story and its bar.
 */
export function Stages({ project }: Props) {
  const { stages } = project;
  const resolved = resolveStages(project);
  const open = resolved.find((stage) => stage.state === 'now');
  const total = resolved.length;
  return (
    <Section id="stages" className="direction" aria-labelledby="stages-title">
      <div className="panel panel--deep stages-panel" data-spotlight>
        <div className="section-heading" data-reveal>
          <h2 id="stages-title">{stages.title}</h2>
          <p className="lead">{stages.lead}</p>
        </div>
        <StageExplorer
          label={`The stages of ${project.name}`}
          tabs={resolved.map((stage) => ({
            number: stage.number,
            title: stage.title,
            state: stage.state,
            stateLabel: stageState[stage.state],
          }))}
        >
          {resolved.map((stage) => {
            const reached = stage.state === 'live' || stage.state === 'done';
            return (
              <div
                key={stage.number}
                className={`stage-panel stage-panel--${stage.state}`}
              >
                <div className="stage-panel-copy">
                  <Icon name={stage.icon} tone="cream" size={26} />
                  <p className="step-number">
                    {stageName(stage)} of {spell(total)}
                  </p>
                  <h3>{stage.title}</h3>
                  <span
                    className={`stage-status stage-status--${stage.state}`}
                  >
                    {reached && <Check size={13} aria-hidden="true" />}
                    {stageState[stage.state]}
                  </span>
                  <p>{stage.text}</p>
                </div>
                <div className="stage-panel-figures">
                  {stage.funding ? (
                    <Progress
                      funding={stage.funding}
                      label={`${stageName(stage)}, ${stage.title}`}
                      tone="ink"
                      reveal={false}
                    />
                  ) : (
                    <p className="stage-unpriced">
                      Figures published when this stage is tendered.
                    </p>
                  )}
                  <p className="stage-panel-note">{note(stage, open)}</p>
                  {stage.state === 'now' && (
                    <a className="step-fund" href="#fund">
                      {ctas.fundStage}
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </StageExplorer>
        <div className="direction-foot">
          <div className="actions">
            {open && (
              <LinkButton href="#fund" variant="light">
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
