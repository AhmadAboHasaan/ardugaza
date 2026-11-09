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
 * Where a programme stands, beside its headline: the stage open for funding
 * with its indicator, and the stages already delivered or funded. The way to
 * give is the headline's own button, one step away.
 */
export function ProjectStanding({ project }: { project: Project }) {
  const stage = currentStage(project);
  const reached = fundedStages(project);
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
          <Progress
            progress={stage.progress}
            label={`${stageName(stage)}, ${stage.title}`}
            reveal={false}
          />
        </>
      ) : (
        <p className="standing-stage">Every published stage is funded.</p>
      )}
      {reached.length > 0 && (
        <ul className="standing-live">
          {reached.map((s) => (
            <li key={s.number}>
              <Check size={16} aria-hidden="true" />
              <span>
                <strong>
                  {stageName(s)}, {s.title}:
                </strong>{' '}
                {s.state === 'done' ? 'complete' : 'fully funded'}
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
