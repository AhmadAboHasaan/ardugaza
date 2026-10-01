import { Section } from '@/components/ui/Section';
import { accountability } from '@/content/project';
export function Accountability() {
  return (
    <Section
      id="accountability"
      className="accountability"
      aria-labelledby="accountability-title"
    >
      <div className="section-heading">
        <h2 id="accountability-title">
          Trust needs
          <br />a paper trail.
        </h2>
        <p>
          Accountability is part of the infrastructure. This is the intended
          system behind every contribution.
        </p>
      </div>
      <ol className="accountability-list">
        {accountability.map((step) => (
          <li key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
      <div className="accountability-close">
        <p>
          Funders and partners can request the full ledger, with the personal
          information of staff and students protected.
        </p>
        <p className="small">
          Ardú is currently an unregistered initiative. Formal registration is
          planned later. No charitable registration or tax deductibility is
          claimed.
        </p>
      </div>
    </Section>
  );
}
