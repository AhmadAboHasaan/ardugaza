import { Section } from '@/components/ui/Section';
import { weight } from '@/content/project';
/** Sustainability in one breath: the kilowatt that works twice. */
export function Weight() {
  return (
    <Section className="weight" aria-labelledby="weight-title">
      <div className="weight-figure" aria-hidden="true">
        <span>{weight.figure.value}</span>
        <small>{weight.figure.label}</small>
      </div>
      <div className="weight-copy">
        <p className="eyebrow">{weight.eyebrow}</p>
        <h2 id="weight-title">
          {weight.title[0]}
          <br />
          {weight.title[1]}
        </h2>
        <p>{weight.body}</p>
      </div>
    </Section>
  );
}
