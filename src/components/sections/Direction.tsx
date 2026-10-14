import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { integrations } from '@/data/integrations';
import { direction, pages } from '@/content/project';
type Props = { title?: string };
/** The four stages from the rubble to the full build, as stops on one road, written for the people who fund them. */
export function Direction({ title }: Props) {
  const giving = integrations.giving;
  return (
    <Section
      id="direction"
      className="direction"
      aria-labelledby="direction-title"
    >
      <div className="panel panel--deep">
        <div className="section-heading">
          <h2 id="direction-title">{title ?? direction.title}</h2>
          <p className="lead">{direction.lead}</p>
        </div>
        <ol className="steps">
          {direction.steps.map((step) => (
            <li key={step.number} className="step">
              <Icon name={step.icon} tone="cream" />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="direction-foot">
          <div className="actions">
            {giving.status === 'live' ? (
              <LinkButton
                href={giving.url}
                variant="light"
                target="_blank"
                rel="noopener"
              >
                {direction.fund}
              </LinkButton>
            ) : (
              <LinkButton href={pages.support.href} variant="light">
                {direction.fund}
              </LinkButton>
            )}
            <LinkButton href={pages.partners.href} variant="outline">
              {direction.more}
            </LinkButton>
          </div>
          <p className="small">{direction.note}</p>
        </div>
      </div>
    </Section>
  );
}
