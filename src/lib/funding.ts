/**
 * Funding arithmetic and formatting, kept apart from the project records so
 * interactive components can use it without shipping every project's copy.
 */
export type StageFunding = {
  /** Pounds, whole numbers; formatted at render time. */
  target: number;
  raised: number;
  /** The date the figures were last updated by hand. */
  updatedOn: string;
};

export const pounds = (n: number) => `£${n.toLocaleString('en-GB')}`;

export const isFunded = (funding: StageFunding | null) =>
  !!funding && funding.target > 0 && funding.raised >= funding.target;

export const percentFunded = ({ raised, target }: StageFunding) =>
  target > 0 ? Math.min(100, Math.round((raised / target) * 1000) / 10) : 0;

/** "0.5%", "37%": one decimal below ten, whole numbers above. */
export const percent = (fraction: number) => {
  const p = Math.max(0, Math.min(100, fraction * 100));
  return `${p < 10 && p > 0 ? Math.round(p * 10) / 10 : Math.round(p)}%`;
};
