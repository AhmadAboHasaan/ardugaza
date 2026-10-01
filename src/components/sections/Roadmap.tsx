import { Section } from '@/components/ui/Section';
import { roadmap } from '@/content/project';
export function Roadmap() {
  return (
    <Section className="roadmap" aria-labelledby="roadmap-title">
      <h2 id="roadmap-title">
        Build the foundation.
        <br />
        Then widen the possibility.
      </h2>
      <ol>
        {roadmap.map((step) => (
          <li key={step.when}>
            <span className="roadmap-when">{step.when}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
      <p className="small">
        A planned progression, not a fixed delivery promise. Later phases depend
        on funding, conditions on the ground and structural confirmation.
      </p>
    </Section>
  );
}
