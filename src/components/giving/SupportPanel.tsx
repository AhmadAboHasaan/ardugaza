import { LinkButton } from '@/components/ui/LinkButton';
import { Icon } from '@/components/ui/Icon';
import { OrganisationGift } from '@/components/giving/OrganisationGift';
import { give, giveAnchor, pages } from '@/content/project';
type Props = {
  /** h2 where the panel is the section, h3 under the "Three ways" heading. */
  headingLevel?: 2 | 3;
  id?: string;
};
/** The organisation's giving panel: why a gift to Ardú matters, and the gift itself. */
export function SupportPanel({ headingLevel = 2, id = giveAnchor.id }: Props) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  return (
    <div
      id={id}
      className="panel panel--deep give-panel"
      data-spotlight
      data-reveal
    >
      <div className="give-copy">
        <Icon name={give.icon} tone="sand" />
        <Heading id={`${id}-title`}>
          {give.title[0]} {give.title[1]}
        </Heading>
        <p className="lead">{give.body}</p>
        <LinkButton href={`${pages.support.href}#safeguarded`} variant="text">
          {give.more}
        </LinkButton>
      </div>
      <div className="give-card">
        <OrganisationGift />
      </div>
    </div>
  );
}
