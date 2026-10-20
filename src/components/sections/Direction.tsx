import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { direction, giveAnchor, pages } from '@/content/project';
type Props = {
  title?: string;
  /** Where "Fund the first stage" goes: the giving panel on this page, or on the support page. */
  giveHref?: string;
};
/** The four stages from the rubble to the full build, as stops on one road, written for the people who fund them. */
export function Direction({ title, giveHref = giveAnchor.href }: Props) {
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
            <LinkButton href={giveHref} variant="light">
              {direction.fund}
            </LinkButton>
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
