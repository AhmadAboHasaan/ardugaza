import { Section } from '@/components/ui/Section';
import { Icon } from '@/components/ui/Icon';
import { impactPage } from '@/content/project';
/** The five indicators Ardú measures itself by, with the figures as they come in. */
export function Indicators() {
  const { indicators } = impactPage;
  return (
    <Section className="indicators" aria-labelledby="indicators-title">
      <div className="panel">
        <div className="section-heading" data-reveal>
          <h2 id="indicators-title">{indicators.title}</h2>
          <p className="lead">{indicators.lead}</p>
        </div>
        <dl className="indicator-grid">
          {indicators.items.map((item, i) => (
            <div
              key={item.label}
              className="indicator"
              data-reveal
              style={{ ['--i' as string]: i }}
            >
              <Icon name={item.icon} />
              <dt>{item.value}</dt>
              <dd>{item.label}</dd>
            </div>
          ))}
        </dl>
        <p className="small indicators-note">{indicators.note}</p>
      </div>
    </Section>
  );
}
