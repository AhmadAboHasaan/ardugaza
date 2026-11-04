import { Check } from 'lucide-react';
import {
  fundedStages,
  resolveStages,
  spell,
  stageName,
  stageState,
  type Project,
} from '@/content/projects';
type Props = { project: Project; tone?: 'paper' | 'ink' };
const sentence = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
/**
 * Where a project's stages stand, without a figure in sight: one stop per
 * stage, filled when funded, pulsing where funding is open, and a line that
 * says it in words. The money lives on the project's own page.
 */
export function StageTrack({ project, tone = 'paper' }: Props) {
  const stages = resolveStages(project);
  const funded = fundedStages(project).length;
  const open = stages.find((stage) => stage.state === 'now');
  const next = open ? null : stages.find((stage) => stage.state === 'next');
  return (
    <div className={`stage-track stage-track--${tone}`}>
      <ol
        className="stage-track-steps"
        aria-label={`The stages of ${project.name}`}
      >
        {stages.map((stage) => (
          <li
            key={stage.number}
            className={`stage-track-step stage-track-step--${stage.state}`}
          >
            <span className="stage-track-dot" aria-hidden="true">
              {(stage.state === 'live' || stage.state === 'done') && (
                <Check size={11} strokeWidth={3} />
              )}
            </span>
            <span className="stage-track-name">{stage.title}</span>
            <span className="visually-hidden">: {stageState[stage.state]}</span>
          </li>
        ))}
      </ol>
      <p className="stage-track-caption">
        <strong>
          {sentence(spell(funded))} of {spell(stages.length)} stages funded.
        </strong>{' '}
        {open ? (
          <>
            Funding now: {stageName(open).toLowerCase()}, {open.title}.
          </>
        ) : next ? (
          <>
            Next: {stageName(next).toLowerCase()}, {next.title}.
          </>
        ) : null}
      </p>
    </div>
  );
}
