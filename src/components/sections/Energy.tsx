'use client';
import { useState } from 'react';
import {
  ArrowRight,
  Sun,
  Zap,
  Battery,
  Building2,
  Users,
  Archive,
} from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { energyStages } from '@/content/project';
const icons = [Sun, Zap, Battery, Building2, Users, Archive];
export function Energy() {
  const [active, setActive] = useState(0);
  const [reveal, setReveal] = useState(0);
  const stage = energyStages[active];
  return (
    <Section id="power" className="energy" aria-labelledby="energy-title">
      <div className="section-heading">
        <h2 id="energy-title">
          A working day.
          <br />
          Powered by daylight.
        </h2>
        <p>
          Electricity is the condition that makes everything else possible. The
          plan starts with a system sized for the full build.
        </p>
      </div>
      <div className="energy-facts">
        <p>
          <strong>
            50 <span>kW</span>
          </strong>
          <span>planned solar capacity + battery storage</span>
        </p>
        <p>
          <strong>≈ $24k</strong>
          <span>annual paid-supply cost avoided, estimated*</span>
        </p>
      </div>
      <div className="energy-invitation">
        <p>Select a stage to explore the plan.</p>
        <button
          className="link-button link-button--light"
          onClick={() => setReveal((value) => value + 1)}
        >
          Follow the power <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
      <div
        key={reveal}
        data-revealing={reveal > 0}
        className="energy-path"
        role="group"
        aria-label="Follow the planned energy path"
      >
        {energyStages.map((item, i) => {
          const Icon = icons[i];
          return (
            <div
              className="energy-step"
              style={{ animationDelay: `${i * 120}ms` }}
              key={item.name}
            >
              <button
                aria-pressed={active === i}
                aria-controls="energy-description"
                onClick={() => setActive(i)}
              >
                <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
                <span>{item.name}</span>
              </button>
              {i < 5 && (
                <ArrowRight
                  className="flow-arrow"
                  aria-hidden="true"
                  size={18}
                />
              )}
            </div>
          );
        })}
      </div>
      <div
        id="energy-description"
        className="energy-description"
        aria-live="polite"
        aria-atomic="true"
      >
        <h3>{stage.title}</h3>
        <p>{stage.text}</p>
      </div>
      <p className="small energy-caveat">
        *Compared with the project’s estimated $2,000/month paid supply, before
        maintenance and eventual battery replacement. All flows shown are
        planned; they are not live monitoring data.
      </p>
    </Section>
  );
}
