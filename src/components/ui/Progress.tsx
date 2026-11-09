import { isFunded, percentOf, type StageProgress } from '@/lib/funding';
type Props = {
  progress: StageProgress;
  /** What the bar measures, for assistive technology: "Stage two, Light". */
  label: string;
  /** The stage has been delivered: the bar reads Delivered, not a share. */
  complete?: boolean;
  tone?: 'paper' | 'ink';
  className?: string;
  /** Fill the bar as it scrolls into view (off inside controls that re-render). */
  reveal?: boolean;
};
/**
 * How far a stage's funding has come, out of a hundred. No amounts: the
 * indicator is set by hand as funding arrives, and the caption carries the
 * date it was last updated, so the bar never claims more than the books do.
 */
export function Progress({
  progress,
  label,
  complete = false,
  tone = 'paper',
  className = '',
  reveal = true,
}: Props) {
  const funded = complete || isFunded(progress);
  const percent = complete ? 100 : percentOf(progress);
  const width = percent === 0 ? 0 : Math.max(percent, 1.5);
  const spoken = complete
    ? `${label}: delivered`
    : funded
      ? `${label}: fully funded`
      : `${label}: ${percent}% funded`;
  return (
    <div
      className={`progress progress--${tone} ${funded ? 'progress--funded' : ''} ${className}`}
      data-reveal={reveal ? 'bar' : undefined}
    >
      <div
        className="progress-track"
        role="progressbar"
        aria-label={spoken}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
      >
        <span className="progress-fill" style={{ width: `${width}%` }} />
      </div>
      <p className="progress-caption">
        {complete ? (
          <strong>Delivered.</strong>
        ) : funded ? (
          <strong>Fully funded.</strong>
        ) : (
          <>
            <strong>{percent}%</strong> funded.
          </>
        )}
        {!complete && (
          <span className="progress-date"> Updated {progress.updatedOn}.</span>
        )}
      </p>
    </div>
  );
}
