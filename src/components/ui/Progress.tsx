import { percentFunded, pounds, type StageFunding } from '@/content/projects';
type Props = {
  funding: StageFunding;
  /** What the bar measures, for assistive technology: "Stage one, clearing the rubble". */
  label: string;
  tone?: 'paper' | 'ink';
  className?: string;
};
/**
 * A funding bar out of a hundred. The figures are set by hand and the caption
 * carries the date they were last updated, so the bar never claims more than
 * the books do.
 */
export function Progress({
  funding,
  label,
  tone = 'paper',
  className = '',
}: Props) {
  const percent = percentFunded(funding);
  const width = percent === 0 ? 0 : Math.max(percent, 1.5);
  return (
    <div className={`progress progress--${tone} ${className}`}>
      <div
        className="progress-track"
        role="progressbar"
        aria-label={`${label}: ${pounds(funding.raised)} of ${pounds(funding.target)} raised`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(percent)}
      >
        <span className="progress-fill" style={{ width: `${width}%` }} />
      </div>
      <p className="progress-caption">
        <strong>{pounds(funding.raised)}</strong> of {pounds(funding.target)}{' '}
        raised · {percent}% · updated {funding.updatedOn}
      </p>
    </div>
  );
}
