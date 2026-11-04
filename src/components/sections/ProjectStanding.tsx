import { Check } from 'lucide-react';
import { LinkButton } from '@/components/ui/LinkButton';
import { Progress } from '@/components/ui/Progress';
import { checkoutHref, giftRef, integrations } from '@/data/integrations';
import { ctas } from '@/content/project';
import {
  currentStage,
  liveStages,
  spell,
  stageName,
  type Project,
} from '@/content/projects';
/**
 * Where a project stands, beside its headline: the stage open for funding
 * with its bar and its checkout, and the stages already funded and under way.
 */
export function ProjectStanding({ project }: { project: Project }) {
  const giving = integrations.giving;
  const stage = currentStage(project);
  const live = liveStages(project);
  const total = project.stages.items.length;
  return (
    <aside className="standing" aria-label={`Where ${project.name} stands`}>
      {stage ? (
        <>
          <p className="standing-label">Funding now</p>
          <p className="standing-stage">
            {stageName(stage)} of {spell(total)}: {stage.title}
          </p>
          {stage.funding && (
            <Progress
              funding={stage.funding}
              label={`${stageName(stage)}, ${stage.title}`}
            />
          )}
          {giving.status === 'live' ? (
            <LinkButton
              href={checkoutHref(
                giving.any,
                giftRef.stage(project.slug, stage.number),
              )}
              target="_blank"
              rel="noopener"
              className="standing-cta"
            >
              {ctas.fundStage}
            </LinkButton>
          ) : (
            <LinkButton href="#fund" className="standing-cta">
              {ctas.fundStage}
            </LinkButton>
          )}
        </>
      ) : (
        <p className="standing-stage">Every published stage is funded.</p>
      )}
      {live.length > 0 && (
        <ul className="standing-live">
          {live.map((s) => (
            <li key={s.number}>
              <Check size={16} aria-hidden="true" />
              <span>
                <strong>
                  {stageName(s)}, {s.title}:
                </strong>{' '}
                funded and on the ground
              </span>
            </li>
          ))}
        </ul>
      )}
      <a href="#stages" className="standing-more">
        All {spell(total)} stages
      </a>
    </aside>
  );
}
