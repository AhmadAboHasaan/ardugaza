import { ArrowUpRight, Check } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { Progress } from '@/components/ui/Progress';
import { StageExplorer } from '@/components/projects/StageExplorer';
import { contact } from '@/data/integrations';
import { ctas, giveAnchor } from '@/content/project';
import {
  resolveStages,
  spell,
  stageName,
  stageState,
  type Project,
  type ResolvedStage,
} from '@/content/projects';
type Props = { project: Project };

/** What a stage's state means for a supporter, in one line; a delivered stage speaks for itself. */
function note(stage: ResolvedStage, opener: ResolvedStage | undefined) {
  switch (stage.state) {
    case 'done':
      return null;
    case 'live':
      return 'Fully funded through Ardú. The work is under way, and reported here as it happens.';
    case 'now':
      return 'Funding now, through Ardú’s general fund. When its indicator reaches a hundred, this stage is marked funded and the next one opens.';
    case 'next':
      return opener
        ? `Opens for funding once ${stageName(opener).toLowerCase()} is fully funded.`
        : 'Opens for funding next.';
    default:
      return 'Follows in order, once the stages before it are funded.';
  }
}

/**
 * A programme's stages as stops on one road. Each stage's status is read from
 * its indicator: Funded at a hundred, Funding now for the first stage below
 * it, then Next and Later; Complete once delivered. Choosing a stop opens its
 * story and its indicator.
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
                  <span className={`stage-status stage-status--${stage.state}`}>
                    {reached && <Check size={13} aria-hidden="true" />}
                    {stageState[stage.state]}
                  </span>
                  <p>{stage.text}</p>
                </div>
                <div className="stage-panel-figures">
                  <Progress
                    progress={stage.progress}
                    complete={stage.state === 'done'}
                    label={`${stageName(stage)}, ${stage.title}`}
                    tone="ink"
                    reveal={false}
                  />
                  {note(stage, open) && (
                    <p className="stage-panel-note">{note(stage, open)}</p>
                  )}
                  {stage.state === 'now' && (
                    <a className="step-fund" href={giveAnchor.here}>
                      {ctas.give}
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
            <LinkButton href={giveAnchor.here} variant="light">
              {ctas.give}
            </LinkButton>
            <LinkButton
              href={contact.mailto(ctas.mailSubjects.plan)}
              variant="outline"
            >
              {ctas.requestPlan}
            </LinkButton>
          </div>
          <p className="small">{stages.note}</p>
        </div>
      </div>
    </Section>
  );
}
