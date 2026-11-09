import { LinkButton } from '@/components/ui/LinkButton';
import { GiftBuilder } from '@/components/giving/GiftBuilder';
import {
  contact,
  giftAmounts,
  giftRef,
  integrations,
} from '@/data/integrations';
import { ctas, give } from '@/content/project';
/**
 * A gift to Ardú, in any amount: the organisation's one checkout, carrying
 * the general fund's reference, wherever on the site it is offered.
 */
export function OrganisationGift() {
  const giving = integrations.giving;
  if (giving.status !== 'live')
    return (
      <div className="gift gift--pending">
        <p>{give.pending}</p>
        <LinkButton href={contact.mailto(ctas.mailSubjects.general)}>
          {ctas.conversation}
        </LinkButton>
      </div>
    );
  return (
    <GiftBuilder
      recipient="Ardú"
      checkout={giving.organisation}
      reference={giftRef.organisation}
      amounts={giftAmounts}
      initial={50}
      copy={{
        label: give.label,
        other: give.other,
        minimum: give.minimum,
        secure: give.secure,
        impact: give.impact,
      }}
    />
  );
}
