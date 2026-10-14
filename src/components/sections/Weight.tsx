import { Section } from '@/components/ui/Section';
import { Icon } from '@/components/ui/Icon';
import { weight } from '@/content/project';
/** Sustainability in one breath: the kilowatt that works twice. */
export function Weight() {
  return (
    <Section className="weight" aria-labelledby="weight-title">
      <div className="weight-tile" aria-hidden="true">
        <Icon name="sun" tone="sand" size={30} />
        <span className="weight-value">{weight.figure.value}</span>
        <small>{weight.figure.label}</small>
      </div>
      <div className="weight-copy">
        <h2 id="weight-title">
          {weight.title[0]} {weight.title[1]}
        </h2>
        <p>{weight.body}</p>
      </div>
    </Section>
  );
}
