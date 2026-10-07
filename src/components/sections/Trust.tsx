import { Section } from '@/components/ui/Section';
import { trust } from '@/content/project';
export function Trust() {
  return (
    <Section id="trust" className="accountability" aria-labelledby="trust-title">
      <div className="section-heading">
        <h2 id="trust-title">
          Trust needs
          <br />a paper trail.
        </h2>
        <p>{trust.intro}</p>
      </div>
      <ol className="accountability-list">
        {trust.steps.map((step) => (
          <li key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
      <div className="accountability-close">
        <p>{trust.close}</p>
        <p className="small">{trust.small}</p>
      </div>
    </Section>
  );
}
