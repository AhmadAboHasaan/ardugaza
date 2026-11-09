import {
  percentOf,
  resolveStages,
  spell,
  stageName,
  stageState,
  type Project,
  type ResolvedStage,
} from '@/content/projects';
type Props = { project: Project; tone?: 'paper' | 'ink' };
const sentence = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
/** A stage's indicator: full once delivered, otherwise the share funded. */
const shareOf = (stage: ResolvedStage) =>
  stage.state === 'done' ? 100 : percentOf(stage.progress);
/**
 * Where a programme's stages stand, in one row: a bar for each stage filled
 * as far as its funding has come, the stage open now marked where its funding
 * has reached, and a line that says it in words.
 */
export function StageTrack({ project, tone = 'paper' }: Props) {
  const stages = resolveStages(project);
  const total = stages.length;
  const done = stages.filter((stage) => stage.state === 'done').length;
  const funded = stages.filter((stage) => stage.state === 'live').length;
  const open = stages.find((stage) => stage.state === 'now');
  const next = open ? null : stages.find((stage) => stage.state === 'next');
  const reached = [
    done > 0 && `${sentence(spell(done))} of ${spell(total)} stages complete.`,
    funded > 0 &&
      `${sentence(spell(funded))} ${funded === 1 ? 'stage' : 'stages'} fully funded.`,
  ].filter(Boolean);
  return (
    <div className={`stage-track stage-track--${tone}`}>
      <ol
        className="stage-track-steps"
        aria-label={`The stages of ${project.name}`}
      >
        {stages.map((stage) => {
          const share = shareOf(stage);
          return (
            <li
              key={stage.number}
              className={`stage-track-step stage-track-step--${stage.state}`}
              style={{ ['--p' as string]: `${share}%` }}
            >
              <span className="stage-track-bar" aria-hidden="true">
                <i />
              </span>
              <span className="stage-track-name">{stage.title}</span>
              <span className="visually-hidden">
                : {stageState[stage.state]}
                {stage.state === 'done' || stage.state === 'live'
                  ? ''
                  : `, ${share}% funded`}
              </span>
            </li>
          );
        })}
      </ol>
      <p className="stage-track-caption">
        {reached.length > 0 && <strong>{reached.join(' ')}</strong>}{' '}
        {open ? (
          <>
            Funding now: {stageName(open).toLowerCase()} of {spell(total)},{' '}
            {open.title}, {shareOf(open)}% funded.
          </>
        ) : next ? (
          <>
            Next: {stageName(next).toLowerCase()}, {next.title}.
          </>
        ) : (
          'Every published stage is funded.'
        )}
      </p>
    </div>
  );
}
