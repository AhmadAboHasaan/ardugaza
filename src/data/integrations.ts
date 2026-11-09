export type PendingIntegration<T> =
  | { status: 'pending'; key: string; value: null }
  | { status: 'ready'; key: string; value: T };
export type ApprovedImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
/**
 * Every gift goes to Ardú itself: the organisation that runs and funds every
 * programme it carries, and directs each gift to where it is needed most. No
 * programme has a checkout of its own.
 */
export type Giving =
  | { status: 'pending'; opensOn: string; organisation: null }
  | {
      status: 'live';
      opensOn: string;
      /** Gifts to Ardú: the giver enters their own amount, or arrives with one prefilled. */
      organisation: string;
    };

/**
 * Everything that must be supplied or approved before it appears on the site.
 * Pending values render honest placeholders; nothing is invented.
 */
export const integrations: {
  giving: Giving;
  contactEmail: PendingIntegration<string>;
  canonicalOrigin: PendingIntegration<string>;
  linkedinPage: PendingIntegration<string>;
  launchUpdateForm: PendingIntegration<string>;
  interestForm: PendingIntegration<string>;
  educationPlatform: PendingIntegration<string>;
  heroImage: PendingIntegration<ApprovedImage>;
  hallImage: PendingIntegration<ApprovedImage>;
  founderImage: PendingIntegration<ApprovedImage>;
  partnerLogos: PendingIntegration<ApprovedImage[]>;
} = {
  // Giving runs on one Stripe payment link in pounds (hosted checkout; nothing is collected on the site).
  // It carries a Donate button, so Stripe serves it from donate.stripe.com.
  // The campaign page used until 18 October 2026 is closed; this link replaced it on 21 October 2026.
  giving: {
    status: 'live',
    opensOn: '2026-10-21',
    organisation: 'https://donate.stripe.com/7sYaEZfrR7d31aj48a0oM02',
  },
  contactEmail: {
    status: 'ready',
    key: 'CONTACT_EMAIL',
    value: 'info@ardugaza.org',
  },
  canonicalOrigin: {
    status: 'ready',
    key: 'CANONICAL_ORIGIN',
    value: 'https://ardugaza.org',
  },
  linkedinPage: {
    status: 'pending',
    key: 'PLACEHOLDER_LINKEDIN_PAGE',
    value: null,
  },
  launchUpdateForm: {
    status: 'pending',
    key: 'PLACEHOLDER_LAUNCH_UPDATE_FORM',
    value: null,
  },
  interestForm: {
    status: 'pending',
    key: 'PLACEHOLDER_INTEREST_FORM',
    value: null,
  },
  // The students' platform on its own education domain, once bought and built.
  // Until then the programmes live on this site, which is for supporters.
  educationPlatform: {
    status: 'pending',
    key: 'PLACEHOLDER_EDUCATION_PLATFORM',
    value: null,
  },
  heroImage: { status: 'pending', key: 'PLACEHOLDER_HERO_IMAGE', value: null },
  hallImage: { status: 'pending', key: 'PLACEHOLDER_HALL_IMAGE', value: null },
  founderImage: {
    status: 'pending',
    key: 'PLACEHOLDER_FOUNDER_IMAGE',
    value: null,
  },
  partnerLogos: {
    status: 'pending',
    key: 'PLACEHOLDER_PARTNER_LOGOS',
    value: null,
  },
};

/** The site's public address, for links that must never carry a preview's URL. */
export const siteOrigin =
  integrations.canonicalOrigin.status === 'ready'
    ? integrations.canonicalOrigin.value
    : 'https://ardugaza.org';

export const contact = {
  email:
    integrations.contactEmail.status === 'ready'
      ? integrations.contactEmail.value
      : 'info@ardugaza.org',
  mailto(subject: string) {
    return `mailto:${this.email}?subject=${encodeURIComponent(subject)}`;
  },
};

/* ----------------------------------------------------------- giving */

/** The amounts offered first for a gift to Ardú, in pounds. */
export const giftAmounts = [25, 50, 100, 250] as const;
/** The smallest gift the any-amount checkout accepts, in pounds. */
export const minimumGift = 5;

/**
 * The reference every gift carries to Stripe as the checkout's
 * `client_reference_id` (letters, digits, dashes): one general fund, so one
 * reference, wherever on the site the gift was made.
 */
export const giftRef = { organisation: 'ardu-general' } as const;

/**
 * A hosted checkout link with its reference and an amount the giver can
 * still change there (`prefilled_amount`, in pence).
 */
export function checkoutHref(
  url: string,
  ref: string,
  amountPounds?: number,
): string {
  const params = new URLSearchParams({ client_reference_id: ref });
  if (amountPounds) params.set('prefilled_amount', String(amountPounds * 100));
  return `${url}?${params.toString()}`;
}
