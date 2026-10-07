'use client';
import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { SeatMatrix } from '@/components/content/SeatMatrix';
import { impact } from '@/content/project';
export function Impact() {
  const [expanded, setExpanded] = useState(false);
  const s = expanded ? impact.scenarios.full : impact.scenarios.opening;
  return (
    <Section className="impact" aria-labelledby="impact-title">
      <div className="section-heading">
        <h2 id="impact-title">
          What opening
          <br />
          makes possible.
        </h2>
        <div>
          <p>{impact.intro}</p>
          <div className="segmented" role="group" aria-label="Capacity scenario">
            <button aria-pressed={!expanded} onClick={() => setExpanded(false)}>
              {impact.toggle[0]}
            </button>
            <button aria-pressed={expanded} onClick={() => setExpanded(true)}>
              {impact.toggle[1]}
            </button>
          </div>
        </div>
      </div>
      <div className="impact-body">
        <div className="impact-matrix">
          <SeatMatrix count={s.seats} />
          <p className="small">Each mark represents one planned seat per shift.</p>
        </div>
        <div className="impact-data" aria-live="polite" aria-atomic="true">
          <p className="scenario-label">{s.label}</p>
          <dl className="stats">
            <div>
              <dt>{impact.statLabels[0]}</dt>
              <dd>{s.perShift}</dd>
            </div>
            <div>
              <dt>{impact.statLabels[1]}</dt>
              <dd>{s.perDay}</dd>
            </div>
            <div>
              <dt>{impact.statLabels[2]}</dt>
              <dd>{s.seatDays}</dd>
            </div>
          </dl>
          <p className="small">{s.note}</p>
        </div>
      </div>
      <ul className="impact-list">
        {impact.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <p className="lead impact-closing">{impact.closing}</p>
      <div className="impact-bottom">
        {impact.strip.map((item) => (
          <span key={item.label}>
            <strong>{item.value}</strong> {item.label}
          </span>
        ))}
      </div>
    </Section>
  );
}
