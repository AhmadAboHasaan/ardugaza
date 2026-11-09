import type { Project } from '@/content/projects';
type Schedule = NonNullable<NonNullable<Project['day']>['schedule']>;

const clock = (hour: number) => String(hour > 12 ? hour - 12 : hour);

/**
 * A working day drawn as it runs: the hours along the top, a bar for each
 * shift, and the freelancers' desks across the whole day. Each bar reads in
 * full for assistive technology; the axis is decoration.
 */
export function DayTimeline({
  schedule,
  label,
}: {
  schedule: Schedule;
  label: string;
}) {
  const span = schedule.to - schedule.from;
  const at = (hour: number) => `${((hour - schedule.from) / span) * 100}%`;
  const hours = Array.from({ length: span + 1 }, (_, i) => schedule.from + i);
  return (
    <figure className="day" data-reveal>
      <figcaption className="visually-hidden">{label}</figcaption>
      <div className="day-axis" aria-hidden="true">
        {hours.map((hour) => (
          <span
            key={hour}
            style={{ left: at(hour) }}
            data-major={(hour - schedule.from) % 2 === 0 ? '' : undefined}
          >
            {(hour - schedule.from) % 2 === 0 ? clock(hour) : ''}
          </span>
        ))}
      </div>
      <ul className="day-rows">
        {schedule.rows.map((row, i) => (
          <li key={row.label} className="day-row">
            <span className="day-row-label">{row.label}</span>
            <span className="day-lane">
              <span
                className={`day-bar day-bar--${i}`}
                style={{
                  left: at(row.from),
                  width: `${((row.to - row.from) / span) * 100}%`,
                  ['--i' as string]: i,
                }}
              >
                <span>
                  {clock(row.from)} to {clock(row.to)}, {row.note}
                </span>
              </span>
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
