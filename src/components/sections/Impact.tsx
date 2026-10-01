'use client';
import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { SeatMatrix } from '@/components/content/SeatMatrix';
export function Impact() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Section className="impact" aria-labelledby="impact-title">
      <div className="section-heading">
        <h2 id="impact-title">
          What opening
          <br />
          could make possible.
        </h2>
        <div>
          <p>Planned capacity, never claimed as impact already achieved.</p>
          <div
            className="segmented"
            role="group"
            aria-label="Capacity scenario"
          >
            <button aria-pressed={!expanded} onClick={() => setExpanded(false)}>
              At opening
            </button>
            <button aria-pressed={expanded} onClick={() => setExpanded(true)}>
              Full build
            </button>
          </div>
        </div>
      </div>
      <div className="impact-body">
        <div className="impact-matrix">
          <SeatMatrix count={expanded ? 500 : 200} />
          <p className="small">
            Each mark represents one planned seat per session.
          </p>
        </div>
        <div className="impact-data" aria-live="polite" aria-atomic="true">
          <p className="scenario-label">
            {expanded
              ? 'Future scenario · conditional expansion'
              : 'Opening plan · subject to structural sign-off'}
          </p>
          <dl className="stats">
            <div>
              <dt>Seats per session</dt>
              <dd>{expanded ? '500' : '200'}</dd>
            </div>
            <div>
              <dt>Young adults per day</dt>
              <dd>{expanded ? 'Up to 1,000' : '≈ 400'}</dd>
            </div>
            <div>
              <dt>Seat-days per year</dt>
              <dd>{expanded ? '≈ 288,000' : '≈ 115,000'}</dd>
            </div>
          </dl>
          <p className="small">
            {expanded
              ? 'Expansion depends on funding and the engineer’s confirmation that a second floor is viable.'
              : 'Two sessions daily, for adults 18 and over. Separate sessions for men and women with identical hours and services. Intake criteria will be published before opening.'}
          </p>
        </div>
      </div>
      <div className="impact-bottom">
        <span>
          <strong>8</strong> planned positions in Gaza at opening
        </span>
        <span>
          <strong>4</strong> planned recurring course tracks
        </span>
      </div>
    </Section>
  );
}
