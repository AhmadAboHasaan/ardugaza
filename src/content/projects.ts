/**
 * Ardú · the projects that carry the organisation.
 *
 * Each project is one record here: a status the visitor can see, stages with
 * their own funding, and the copy of its page. Adding a project is adding a
 * record; the cards, the pages, the giving links and the sitemap follow.
 *
 * Stage status is never typed by hand. It follows the books: a stage whose
 * funding is complete turns Live, the first stage still short of its target
 * is Funding now, the one after it is Next, the rest are Later, and a stage
 * marked `done` after it is reported reads Complete.
 *
 * Funding figures are updated by hand as gifts arrive and carry the date of
 * their last update. Targets are at today's prices and are confirmed against
 * written quotes before work on the stage begins.
 */
import type { IconName } from '@/components/ui/Icon';

/* -------------------------------------------------------- vocabulary */

/** Where a project stands as a whole: the crown on its card and its page. */
export type ProjectStatus = 'running' | 'building' | 'preparing' | 'complete';

export const projectStatus: Record<
  ProjectStatus,
  { label: string; tone: 'teal' | 'sand' | 'mist' | 'deep' }
> = {
  running: { label: 'On the ground', tone: 'teal' },
  building: { label: 'Under construction', tone: 'sand' },
  preparing: { label: 'In preparation', tone: 'mist' },
  complete: { label: 'Complete', tone: 'deep' },
};

/** Where a stage stands, derived from its funding. */
export type StageState = 'done' | 'live' | 'now' | 'next' | 'later';

export const stageState: Record<StageState, string> = {
  done: 'Complete',
  live: 'Live',
  now: 'Funding now',
  next: 'Next',
  later: 'Later',
};

export type StageFunding = {
  /** Pounds, whole numbers; formatted at render time. */
  target: number;
  raised: number;
  /** The date the figures were last updated by hand. */
  updatedOn: string;
};

export type Stage = {
  number: number;
  icon: IconName;
  title: string;
  text: string;
  /** Set by hand once the stage is finished and reported with its receipts. */
  done?: boolean;
  /** Null until the stage's figures are published. */
  funding: StageFunding | null;
};

export type ResolvedStage = Stage & { state: StageState };

export type Figure = { icon: IconName; value: string; label: string };

export type Project = {
  slug: string;
  name: string;
  status: ProjectStatus;
  /** The order Ardú adopted it in: "Project 01". */
  ordinal: string;
  summary: string;
  hero: { title: string; lead: string };
  facts: readonly Figure[];
  place: {
    title: string;
    body: readonly string[];
    caption: string;
    placeholder: { measure: string; label: string };
  };
  stages: {
    title: string;
    lead: string;
    items: readonly Stage[];
    note: string;
    more: string;
  };
  serves: { title: string; body: string };
  day: { title: string; body: string; figures: readonly Figure[] };
  beyond: { title: string; body: string };
  updates: { title: string; body: string };
  partners: { title: string; body: string };
};

/* ---------------------------------------------------------- projects */

const arduSpace: Project = {
  slug: 'ardu-space',
  name: 'Ardú Space',
  status: 'building',
  ordinal: 'Project 01',
  summary:
    'A place that works, rising over the rubble of the home in Gaza City where the founder’s road began: power that stays on, internet that holds, two hundred young people a day at the opening and a thousand at the full build.',
  hero: {
    title: 'Ardú Space: a place that works, rising over the rubble.',
    lead: 'Under the rubble of the founder’s family home in Gaza City, a hall of five hundred square metres stands on columns that held. Ardú’s first project turns it into the place its programmes need: power that stays on, internet that holds, seats, quiet, and a team on the ground. Stage one, clearing the rubble, is funded and on the ground now.',
  },
  facts: [
    { icon: 'building', value: '500 m²', label: 'a hall on columns that held' },
    { icon: 'users', value: '200', label: 'young people a day at the opening' },
    { icon: 'users', value: '1,000', label: 'a day at the full build' },
    { icon: 'sun', value: '×2', label: 'every kilowatt works twice' },
  ],
  place: {
    title: 'The place',
    body: [
      'A hall of about five hundred square metres with a six-metre ceiling, under the founder’s family home in central Gaza City, standing on columns that held. It is family property, placed at Ardú’s disposal under a written agreement, and an engineer signs off the structure before anyone sits beneath it.',
      'For the safety of the people who will work in it, the exact location is shared with partners and funders and not published. Interior photographs follow the clearing of the rubble.',
    ],
    caption: 'Central Gaza City, about 500 m², interior photographs to follow',
    placeholder: { measure: '500 m²', label: 'A floor you can stand on' },
  },
  stages: {
    title: 'The road there has four stages.',
    lead: 'Each one is a thing you can see, photograph and count, finished before the next begins, with a receipt for everything. The moment a stage is funded, it turns live here and the next one opens.',
    items: [
      {
        number: 1,
        icon: 'clear',
        title: 'Clear',
        text: 'The rubble comes off the hall beneath the home, and what can be saved, steel and stone, goes back into preparing the space. The first photographs come from here.',
        funding: { target: 11000, raised: 11000, updatedOn: '4 November 2026' },
      },
      {
        number: 2,
        icon: 'light',
        title: 'Light',
        text: 'Wiring and light, water and toilets, and a fibre line that holds. The day the lights come on, a ruin becomes a place.',
        funding: { target: 22000, raised: 0, updatedOn: '4 November 2026' },
      },
      {
        number: 3,
        icon: 'open',
        title: 'Open',
        text: 'A hundred seats, two shifts, the first partner courses and the first months of running: two hundred young people a day. The day the first certificate is issued.',
        funding: { target: 41000, raised: 0, updatedOn: '4 November 2026' },
      },
      {
        number: 4,
        icon: 'grow',
        title: 'Grow',
        text: 'Two hundred seats on the sun’s own power, a second floor towards five hundred once the engineer confirms it, then online beyond the walls. The day the place starts paying part of its own way.',
        funding: null,
      },
    ],
    note: 'Targets are at today’s prices in pounds and are confirmed against written quotes before work on a stage begins. The bars are updated by hand as gifts arrive and carry the date of their last update. The full plan, with its figures and how every stage is verified, is shared with partners and funders.',
    more: 'For partners and funders',
  },
  serves: {
    title: 'Who it is for',
    body: 'Adults of eighteen and over in Gaza City, starting with university students and graduates in technology and medicine: students whose universities now exist only online, graduates with a skill and no opening, freelancers who lose clients to power cuts. Places are allocated on published criteria that weigh ability and need together, for women and men equally, in separate sections with identical hours and services.',
  },
  day: {
    title: 'A day at Ardú Space',
    body: 'Two four-hour shifts, eight to twelve and twelve to four, a hundred seats each, women and men in separate sections with identical hours and services. Freelancers work full days at their own desks. Partner courses run in the room, and mentors join in person and online.',
    figures: [
      { icon: 'clock', value: '8 to 12', label: 'first shift' },
      { icon: 'clock', value: '12 to 4', label: 'second shift' },
      { icon: 'armchair', value: '100', label: 'seats a shift' },
      { icon: 'users', value: '50 + 50', label: 'women and men, each shift' },
    ],
  },
  beyond: {
    title: 'Beyond the walls',
    body: 'Outside the hall’s hours, its surplus power and internet reach the neighbourhood at below the market price, and the income goes back into keeping the doors open. When the hall is full, the same programme goes online, beyond the walls.',
  },
  updates: {
    title: 'Updates and receipts',
    body: 'Every stage is reported here as it happens: the quotes, the receipts, and photographs of what each pound became. The first come from stage one, as the rubble comes off the hall.',
  },
  partners: {
    title: 'Partners',
    body: 'Partners are named here as their agreements are signed.',
  },
};

export const projects: readonly Project[] = [arduSpace];

/* ---------------------------------------------------------- helpers */

export const projectHref = (slug: string) => `/projects/${slug}`;

export const pounds = (n: number) => `£${n.toLocaleString('en-GB')}`;

export const isFunded = (funding: StageFunding | null) =>
  !!funding && funding.target > 0 && funding.raised >= funding.target;

export const percentFunded = ({ raised, target }: StageFunding) =>
  target > 0 ? Math.min(100, Math.round((raised / target) * 1000) / 10) : 0;

/**
 * Every stage with its state, read from the books: Complete when reported
 * done, Live when funded, then Funding now for the first stage still short of
 * its target (Next if its figures are not yet published), Next, and Later.
 */
export function resolveStages(project: Project): ResolvedStage[] {
  let opened = false;
  let queued = false;
  return project.stages.items.map((stage) => {
    let state: StageState;
    if (stage.done) state = 'done';
    else if (isFunded(stage.funding)) state = 'live';
    else if (!opened) {
      opened = true;
      state = stage.funding ? 'now' : 'next';
      if (state === 'next') queued = true;
    } else if (!queued) {
      queued = true;
      state = 'next';
    } else state = 'later';
    return { ...stage, state };
  });
}

/** The stage open for funding now, if any. */
export const currentStage = (project: Project) =>
  resolveStages(project).find((stage) => stage.state === 'now') ?? null;

/** Stages that are funded and under way. */
export const liveStages = (project: Project) =>
  resolveStages(project).filter((stage) => stage.state === 'live');

const spelled = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
/** Small numbers in words, for running text. */
export const spell = (n: number) => spelled[n] ?? String(n);
/** "Stage two", for running text. */
export const stageName = (stage: Stage) => `Stage ${spell(stage.number)}`;
