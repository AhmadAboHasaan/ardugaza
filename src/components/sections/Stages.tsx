import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { Progress } from '@/components/ui/Progress';
import { ctas, pages } from '@/content/project';
import { stageStatus, type Project } from '@/content/projects';
type Props = { project: Project; fundHref?: string };
/**
 * A project's stages as stops on one road: each with its status, and a funding
 * bar where the figures are published. When a stage is funded its status is
 * changed here by hand, with the books.
 */
export function Stages({ project, fundHref = '#fund' }: Props) {
  const { stages } = project;
  return (
    <Section id="stages" className="direction" aria-labelledby="stages-title">
      <div className="panel panel--deep">
        <div className="section-heading">
          <h2 id="stages-title">{stages.title}</h2>
          <p className="lead">{stages.lead}</p>
        </div>
        <ol className="steps">
          {stages.items.map((stage) => (
            <li
              key={stage.number}
              className={`step step--${stage.status}`}
              aria-current={stage.status === 'now' ? 'step' : undefined}
            >
              <Icon name={stage.icon} tone="cream" />
              <span className={`stage-status stage-status--${stage.status}`}>
                {stageStatus[stage.status]}
              </span>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
              {stage.funding ? (
                <Progress
                  funding={stage.funding}
                  label={`Stage ${stage.number}, ${stage.title}`}
                  tone="ink"
                />
              ) : (
                <p className="stage-unpriced">
                  Figures published when this stage is tendered.
                </p>
              )}
            </li>
          ))}
        </ol>
        <div className="direction-foot">
          <div className="actions">
            <LinkButton href={fundHref} variant="light">
              {ctas.fundStage}
            </LinkButton>
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
