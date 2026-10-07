import { Plus } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { stages, stagesCopy } from '@/content/project';
import { integrations } from '@/data/integrations';
export function Stages() {
  const giving = integrations.giving;
  return (
    <Section id="stages" className="funding" aria-labelledby="stages-title">
      <div className="section-heading">
        <h2 id="stages-title">
          Five stages. Each one you can
          <br />
          see, photograph and count.
        </h2>
        <p>{stagesCopy.intro}</p>
      </div>
      <div className="funding-total">
        <div>
          <span>{stagesCopy.totalLabel}</span>
          <strong>{stagesCopy.total}</strong>
        </div>
        {giving.status === 'live' ? (
          <LinkButton href={giving.url} target="_blank" rel="noopener">
            Fund a stage
          </LinkButton>
        ) : (
          <LinkButton href="/plan" variant="text">
            Read the full plan
          </LinkButton>
        )}
      </div>
      <div className="funding-list">
        {stages.map((s) => (
          <details key={s.id} className="funding-package">
            <summary>
              <span className="package-number">{s.number}</span>
              <span className="package-title">
                <strong>{s.title}</strong>
                <span>{s.short}</span>
              </span>
              <span className="package-amount">{s.amount}</span>
              <Plus className="package-plus" size={22} aria-hidden="true" />
            </summary>
            <div className="package-detail">
              <p>
                <strong>{stagesCopy.detailHeadings.buys}</strong>
                <br />
                {s.detail}
              </p>
              <p>
                <strong>{stagesCopy.detailHeadings.verify}</strong>
                <br />
                {s.evidence}
              </p>
            </div>
          </details>
        ))}
      </div>
      <div className="sun-note">
        <h3>{stagesCopy.sun.title}</h3>
        <p>{stagesCopy.sun.text}</p>
      </div>
      <p className="funding-caveat">{stagesCopy.caveat}</p>
    </Section>
  );
}
