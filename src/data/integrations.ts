export type PendingIntegration<T> =
  | { status: 'pending'; key: string; value: null }
  | { status: 'ready'; key: string; value: T };
export type ApprovedImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
export type Giving =
  | { status: 'pending'; opensOn: string; url: null }
  | { status: 'live'; opensOn: string; url: string };

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
  // The giving page is the founder's existing Chuffed campaign, re-pointed to Ardú on 4 October 2026.
  giving: {
    status: 'live',
    opensOn: '2026-10-04',
    url: 'https://chuffed.org/project/140633',
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
