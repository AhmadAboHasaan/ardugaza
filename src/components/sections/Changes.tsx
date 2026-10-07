import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { changes, pages } from '@/content/project';
type Props = {
  full?: boolean;
  title?: string;
  eyebrow?: string;
  lead?: string;
};
/** What changes for a young person when the room exists. */
export function Changes({
  full = false,
  title,
  eyebrow = changes.eyebrow,
  lead = changes.closing,
}: Props) {
  const items = full ? changes.items : changes.items.slice(0, 3);
  return (
    <Section
      id="impact"
      className={`changes ${full ? 'changes--full' : ''}`}
      aria-labelledby="changes-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="changes-title">
            {title ?? (
              <>
                {changes.title[0]}
                <br />
                {changes.title[1]}
              </>
            )}
          </h2>
        </div>
        <p className="lead">{lead}</p>
      </div>
      <ol className="change-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
      {!full && (
        <LinkButton
          href={pages.impact.href}
          variant="text"
          className="section-more"
        >
          {changes.more}
        </LinkButton>
      )}
    </Section>
  );
}
