import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { direction, pages } from '@/content/project';
type Props = { title?: string };
/** The four steps from the rubble to the full build, as stops on one road. */
export function Direction({ title }: Props) {
  return (
    <Section
      id="direction"
      className="direction"
      aria-labelledby="direction-title"
    >
      <div className="panel panel--deep">
        <div className="section-heading">
          <h2 id="direction-title">
            {title ?? `${direction.title[0]} ${direction.title[1]}`}
          </h2>
          <p className="lead">{direction.note}</p>
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
        <LinkButton
          href={pages.partners.href}
          variant="outline"
          className="section-more"
        >
          {direction.more}
        </LinkButton>
      </div>
    </Section>
  );
}
