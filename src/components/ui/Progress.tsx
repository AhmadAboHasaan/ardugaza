import {
  isFunded,
  percentFunded,
  pounds,
  type StageFunding,
} from '@/content/projects';
type Props = {
  funding: StageFunding;
  /** What the bar measures, for assistive technology: "Stage two, Light". */
  label: string;
  tone?: 'paper' | 'ink';
  className?: string;
};
/**
 * A funding bar out of a hundred. The figures are set by hand and the caption
 * carries the date they were last updated, so the bar never claims more than
 * the books do. A funded stage reads "Fully funded" rather than a sum.
 */
export function Progress({
  funding,
  label,
  tone = 'paper',
  className = '',
}: Props) {
  const funded = isFunded(funding);
  const percent = funded ? 100 : percentFunded(funding);
  const width = percent === 0 ? 0 : Math.max(percent, 1.5);
  const spoken = funded
    ? `${label}: fully funded, ${pounds(funding.target)}`
    : `${label}: ${pounds(funding.raised)} of ${pounds(funding.target)} raised`;
  return (
    <div
      className={`progress progress--${tone} ${funded ? 'progress--funded' : ''} ${className}`}
    >
      <div
        className="progress-track"
        role="progressbar"
        aria-label={spoken}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(percent)}
      >
        <span className="progress-fill" style={{ width: `${width}%` }} />
      </div>
      <p className="progress-caption">
        {funded ? (
          <>
            <strong>Fully funded</strong>, {pounds(funding.target)}.
          </>
        ) : (
          <>
            <strong>{pounds(funding.raised)}</strong> of{' '}
            {pounds(funding.target)} raised
            {percent > 0 ? <>, {percent}%.</> : '.'}
          </>
        )}
        <span className="progress-date"> Updated {funding.updatedOn}.</span>
      </p>
    </div>
  );
}
