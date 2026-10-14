import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { changes, pages } from '@/content/project';
type Props = { full?: boolean; title?: string; lead?: string };
/** What changes for a young person when the road opens. */
export function Changes({
  full = false,
  title,
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
        <h2 id="changes-title">
          {title ?? `${changes.title[0]} ${changes.title[1]}`}
        </h2>
        <p className="lead">{lead}</p>
      </div>
      <ul className="change-list">
        {items.map((item) => (
          <li key={item.text} className="change">
            <Icon name={item.icon} />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
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
