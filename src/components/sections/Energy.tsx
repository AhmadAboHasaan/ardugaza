'use client';
import { useState } from 'react';
import { ArrowRight, Sun, Zap, Battery, Building2, Home, Archive } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { energy, energyStages } from '@/content/project';
const icons = [Sun, Zap, Battery, Building2, Home, Archive];
export function Energy() {
  const [active, setActive] = useState(0);
  const [reveal, setReveal] = useState(0);
  const stage = energyStages[active];
  return (
    <Section id="power" className="energy" aria-labelledby="energy-title">
      <div className="section-heading">
        <h2 id="energy-title">
          A kilowatt
          <br />
          that works twice.
        </h2>
        <p>{energy.intro}</p>
      </div>
      <div className="energy-facts">
        {energy.facts.map((f) => (
          <p key={f.label}>
            <strong>{f.value}</strong>
            <span>{f.label}</span>
          </p>
        ))}
      </div>
      <div className="energy-invitation">
        <p>{energy.invitation}</p>
        <button
          className="link-button link-button--light"
          onClick={() => setReveal((value) => value + 1)}
        >
          {energy.replay} <ArrowRight size={18} aria-hidden="true" />
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
            <div className="energy-step" style={{ animationDelay: `${i * 120}ms` }} key={item.name}>
              <button
                aria-pressed={active === i}
                aria-controls="energy-description"
                onClick={() => setActive(i)}
              >
                <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
                <span>{item.name}</span>
              </button>
              {i < 5 && <ArrowRight className="flow-arrow" aria-hidden="true" size={18} />}
            </div>
          );
        })}
      </div>
      <div id="energy-description" className="energy-description" aria-live="polite" aria-atomic="true">
        <h3>{stage.title}</h3>
        <p>{stage.text}</p>
      </div>
      <p className="energy-rules">{energy.rules}</p>
      <p className="small energy-caveat">{energy.caveat}</p>
    </Section>
  );
}
