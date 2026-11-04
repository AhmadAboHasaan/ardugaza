import { Check } from 'lucide-react';
import { Progress } from '@/components/ui/Progress';
import {
  currentStage,
  fundedStages,
  spell,
  stageName,
  type Project,
} from '@/content/projects';
/**
 * Where a project stands, beside its headline: the stage open for funding
 * with its bar, and the stages already funded. The way to give is the
 * headline's own button, one step away.
 */
export function ProjectStanding({ project }: { project: Project }) {
  const stage = currentStage(project);
  const funded = fundedStages(project);
  const total = project.stages.items.length;
  return (
    <aside className="standing" aria-label={`Where ${project.name} stands`}>
      {stage ? (
        <>
          <p className="standing-label">
            <i aria-hidden="true" />
            Funding now
          </p>
          <p className="standing-stage">
            {stageName(stage)} of {spell(total)}: {stage.title}
          </p>
          {stage.funding && (
            <Progress
              funding={stage.funding}
              label={`${stageName(stage)}, ${stage.title}`}
              reveal={false}
            />
          )}
        </>
      ) : (
        <p className="standing-stage">Every published stage is funded.</p>
      )}
      {funded.length > 0 && (
        <ul className="standing-live">
          {funded.map((s) => (
            <li key={s.number}>
              <Check size={16} aria-hidden="true" />
              <span>
                <strong>
                  {stageName(s)}, {s.title}:
                </strong>{' '}
                {s.state === 'done' ? 'complete' : 'funded and on the ground'}
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
