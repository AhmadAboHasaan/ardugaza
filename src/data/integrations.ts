export type PendingIntegration<T> =
  | { status: 'pending'; key: string; value: null }
  | { status: 'ready'; key: string; value: T };
export type ApprovedImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
export const integrations: {
  donation: PendingIntegration<string>;
  contactEmail: PendingIntegration<string>;
  canonicalOrigin: PendingIntegration<string>;
  heroImage: PendingIntegration<ApprovedImage>;
  hallImage: PendingIntegration<ApprovedImage>;
  founderImage: PendingIntegration<ApprovedImage>;
  partnerLogos: PendingIntegration<ApprovedImage[]>;
} = {
  donation: { status: 'pending', key: 'PLACEHOLDER_DONATION_URL', value: null },
  contactEmail: {
    status: 'pending',
    key: 'PLACEHOLDER_CONTACT_EMAIL',
    value: null,
  },
  canonicalOrigin: {
    status: 'pending',
    key: 'PLACEHOLDER_CANONICAL_ORIGIN',
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
