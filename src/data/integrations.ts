export type PendingIntegration<T> =
  | { status: 'pending'; key: string; value: null }
  | { status: 'ready'; key: string; value: T };
export type ApprovedImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
/** The four things a gift lifts, each on its own checkout. Keys match `support.levels.items`. */
export type GivingLevel = 'seat' | 'laptop' | 'month' | 'kilowatt';
export type Giving =
  | { status: 'pending'; opensOn: string; any: null; levels: null }
  | {
      status: 'live';
      opensOn: string;
      /** Checkout where the giver enters their own amount. */
      any: string;
      /** Fixed-amount checkouts, one per level. */
      levels: Record<GivingLevel, string>;
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
  heroImage: PendingIntegration<ApprovedImage>;
  hallImage: PendingIntegration<ApprovedImage>;
  founderImage: PendingIntegration<ApprovedImage>;
  partnerLogos: PendingIntegration<ApprovedImage[]>;
} = {
  // Giving runs on Stripe payment links in pounds (hosted checkout; nothing is collected on the site).
  // Links with a Donate button live on donate.stripe.com, the others on buy.stripe.com; both are Stripe-hosted.
  // The campaign page used until 18 October 2026 is closed; these links replaced it on 21 October 2026.
  giving: {
    status: 'live',
    opensOn: '2026-10-21',
    any: 'https://donate.stripe.com/7sYaEZfrR7d31aj48a0oM02',
    levels: {
      seat: 'https://donate.stripe.com/eVqfZja7xbtj7yHfQS0oM03',
      laptop: 'https://buy.stripe.com/fZu28t1B1dBr6uD48a0oM04',
      month: 'https://buy.stripe.com/PENDING_MONTH',
      kilowatt: 'https://buy.stripe.com/PENDING_KILOWATT',
    },
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

export const contact = {
  email:
    integrations.contactEmail.status === 'ready'
      ? integrations.contactEmail.value
      : 'info@ardugaza.org',
  mailto(subject: string) {
    return `mailto:${this.email}?subject=${encodeURIComponent(subject)}`;
  },
};
