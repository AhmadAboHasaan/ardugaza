import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { direction, pages } from '@/content/project';
type Props = { title?: string; eyebrow?: string };
/** The four steps from the rubble to the full build, in words, not figures. */
export function Direction({ title, eyebrow = direction.eyebrow }: Props) {
  return (
    <Section
      id="direction"
      className="direction"
      aria-labelledby="direction-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="direction-title">
            {title ?? (
              <>
                {direction.title[0]}
                <br />
                {direction.title[1]}
              </>
            )}
          </h2>
        </div>
      </div>
      <ol className="steps">
        {direction.steps.map((step) => (
          <li key={step.number} className="step">
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
      <div className="direction-note">
        <p>{direction.note}</p>
        <LinkButton href={pages.partners.href} variant="text">
          {direction.more}
        </LinkButton>
      </div>
    </Section>
  );
}
