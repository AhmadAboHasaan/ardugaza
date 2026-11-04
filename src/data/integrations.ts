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
 * The checkouts of one project: any amount for the stage open now, and one
 * fixed-amount checkout for each gift piece. Keys match the project's `pieces`.
 */
export type ProjectCheckouts = {
  any: string;
  pieces: Record<string, string>;
};
/**
 * Two kinds of gift, kept apart from the first click to the books: a gift to
 * Ardú itself, which runs and funds every project it carries, and a gift to
 * one project, which goes to that project alone.
 */
export type Giving =
  | { status: 'pending'; opensOn: string; organisation: null; projects: null }
  | {
      status: 'live';
      opensOn: string;
      /** Gifts to the organisation: the giver enters their own amount, or arrives with one prefilled. */
      organisation: string;
      /** Gifts to a single project, by project slug. */
      projects: Record<string, ProjectCheckouts>;
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
  // Giving runs on Stripe payment links in pounds (hosted checkout; nothing is collected on the site).
  // Every link carries a Donate button, so Stripe serves it from donate.stripe.com.
  // The campaign page used until 18 October 2026 is closed; these links replaced it on 21 October 2026.
  giving: {
    status: 'live',
    opensOn: '2026-10-21',
    organisation: 'https://donate.stripe.com/7sYaEZfrR7d31aj48a0oM02',
    projects: {
      'ardu-space': {
        // Until Ardú Space has an any-amount link of its own in Stripe, its stage gifts open the
        // same any-amount checkout and are told apart by their reference (`ardu-space-stage-2`).
        any: 'https://donate.stripe.com/7sYaEZfrR7d31aj48a0oM02',
        pieces: {
          seat: 'https://donate.stripe.com/eVqfZja7xbtj7yHfQS0oM03',
          laptop: 'https://donate.stripe.com/fZu28t1B1dBr6uD48a0oM04',
          month: 'https://donate.stripe.com/14A28t5Rh0OFaKTbAC0oM05',
          kilowatt: 'https://donate.stripe.com/14AcN7gvV68ZaKTawy0oM06',
        },
      },
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
  // The students' platform on its own education domain, once bought and built.
  // Until then the projects live on this site, which is for supporters.
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

/** The amounts offered first for a gift to the organisation, in pounds. */
export const giftAmounts = [25, 50, 100, 250] as const;
/** The amounts offered first for a gift to a project's open stage, in pounds. */
export const stageGiftAmounts = [25, 50, 100, 250, 500] as const;
/** The smallest gift the any-amount checkouts accept, in pounds. */
export const minimumGift = 5;

/**
 * Where each gift is meant to go, carried to Stripe as the checkout's
 * `client_reference_id` (letters, digits, dashes), so every gift reconciles
 * against the organisation, a project's stage or a project's gift piece and
 * never crosses from one to the other.
 */
export const giftRef = {
  organisation: 'ardu-general',
  project: (slug: string) => `${slug}-general`,
  stage: (slug: string, stage: number) => `${slug}-stage-${stage}`,
  piece: (slug: string, piece: string) => `${slug}-${piece}`,
} as const;

/** The checkouts of one project, or null while its giving is not open. */
export function projectCheckouts(slug: string): ProjectCheckouts | null {
  const giving = integrations.giving;
  return giving.status === 'live' ? (giving.projects[slug] ?? null) : null;
}

/**
 * A hosted checkout link with its reference and, on an any-amount checkout,
 * an amount the giver can still change there (`prefilled_amount`, in pence).
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
