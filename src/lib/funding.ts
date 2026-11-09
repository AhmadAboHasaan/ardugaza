/**
 * How far a stage's funding has come, and the few formatting helpers the
 * giving and progress components share. Kept apart from the programme records
 * so interactive components can use it without shipping every page's copy.
 *
 * No amounts are published for a programme's stages: each carries a share out
 * of a hundred, set by hand as funding arrives, and the date it was set.
 */
export type StageProgress = {
  /** 0 to 100, set by hand. */
  percent: number;
  /** The date the indicator was last updated. */
  updatedOn: string;
};

export const pounds = (n: number) => `£${n.toLocaleString('en-GB')}`;

/** The indicator, kept within 0 to 100 and to whole numbers. */
export const percentOf = (progress: StageProgress | null) =>
  progress ? Math.max(0, Math.min(100, Math.round(progress.percent))) : 0;

export const isFunded = (progress: StageProgress | null) =>
  !!progress && percentOf(progress) >= 100;
