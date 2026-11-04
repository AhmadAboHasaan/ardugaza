/**
 * Ardú · the projects that carry the organisation.
 *
 * Each project is one record here: a status the visitor can see, stages with
 * their own funding, the pieces a giver can fund, and the copy of its own
 * page. Adding a project is adding a record; its card, its page, its section
 * of the sitemap and its checkouts (in `integrations.ts`) follow.
 *
 * A gift to a project goes to that project alone. A gift to Ardú goes to the
 * organisation, which runs and funds every project; the two never mix.
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
import { isFunded, type StageFunding } from '@/lib/funding';
export {
  isFunded,
  percent,
  percentFunded,
  pounds,
  type StageFunding,
} from '@/lib/funding';

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

/** One piece of a project a giver can fund outright, on its own checkout. */
export type GiftPiece = {
  key: string;
  /** Pounds, whole numbers. */
  amount: number;
  icon: IconName;
  title: string;
  text: string;
};

export type Question = { q: string; a: string };

export type Project = {
  slug: string;
  name: string;
  status: ProjectStatus;
  /** The order Ardú adopted it in: "Project 01". */
  ordinal: string;
  /** One or two sentences: the meta description and the share text. */
  summary: string;
  /** What the project is, in a breath: the text on its card. */
  brief: string;
  hero: { title: string; lead: string };
  /** Why this project, told as the place it comes from. */
  story: { title: string; body: readonly string[] };
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
  day: {
    title: string;
    body: string;
    figures: readonly Figure[];
    /** The working day drawn as a timeline, in 24-hour clock hours. */
    schedule?: {
      from: number;
      to: number;
      rows: readonly {
        label: string;
        from: number;
        to: number;
        note: string;
      }[];
    };
  };
  beyond: { title: string; body: string };
  updates: { title: string; body: string };
  partners: { title: string; body: string };
  /** The project's own giving: its open stage in any amount, and its pieces. */
  fund: {
    title: string;
    body: string;
    funders: { title: string; body: string };
  };
  pieces: readonly GiftPiece[];
  faq: readonly Question[];
  closing: { title: string; body: string };
};

/* ---------------------------------------------------------- projects */

const arduSpace: Project = {
  slug: 'ardu-space',
  name: 'Ardú Space',
  status: 'building',
  ordinal: 'Project 01',
  summary:
    'A place that works, rising over the rubble of the home in Gaza City where the founder’s road began: power that stays on, internet that holds, two hundred young people a day at the opening and a thousand at the full build.',
  brief:
    'The hall beneath the founder’s family home in Gaza City, made into a place where the work gets done: power that stays on, internet that holds, and room for two hundred young people a day.',
  hero: {
    title: 'Ardú Space: a place that works, rising over the rubble.',
    lead: 'Ardú’s first project turns the hall beneath the founder’s family home in Gaza City, five hundred square metres on columns that held, into a place where the work gets done: power that stays on, internet that holds, seats, quiet and a team on the ground.',
  },
  story: {
    title: 'Where the founder’s road began.',
    body: [
      'The house above the hall did not survive. The hall did, and so did an idea: that a young person with ability should not have to walk for hours to find a socket and a signal to do their work.',
      'Ardú Space is that idea, built where the founder’s own road began. Stage one, clearing the rubble, is funded and on the ground now; stage two brings the light.',
    ],
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
    schedule: {
      from: 8,
      to: 16,
      rows: [
        { label: 'First shift', from: 8, to: 12, note: '100 seats' },
        { label: 'Second shift', from: 12, to: 16, note: '100 seats' },
        {
          label: 'Freelancers',
          from: 8,
          to: 16,
          note: 'full days at their own desks',
        },
      ],
    },
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
  fund: {
    title: 'Fund Ardú Space.',
    body: 'A gift here goes to Ardú Space alone: to the stage open now, in any amount, or to a piece of the place you can picture. It travels the trustee route every gift to Ardú travels, is recorded against Ardú Space by its own reference, and comes back to you as this project’s receipts and photographs.',
    funders: {
      title: 'Fund a whole stage',
      body: 'Foundations, companies and major donors can take a whole stage of Ardú Space and follow it through with full figures and reporting. The plan, the quotes and the location of the hall are shared in a direct conversation.',
    },
  },
  pieces: [
    {
      key: 'seat',
      amount: 150,
      icon: 'armchair',
      title: 'A seat',
      text: 'A chair, a desk and a share of a laptop for one young person.',
    },
    {
      key: 'laptop',
      amount: 750,
      icon: 'laptop',
      title: 'A laptop',
      text: 'Shared by two shifts a day, for those who come without one.',
    },
    {
      key: 'month',
      amount: 4500,
      icon: 'calendar',
      title: 'A month of Ardú Space',
      text: 'The team, the internet and the lights for a month: two hundred young people a day.',
    },
    {
      key: 'kilowatt',
      amount: 7500,
      icon: 'sun',
      title: 'A kilowatt that works twice',
      text: 'Ten seats on power that never cuts by day, and the neighbourhood’s light outside the hall’s hours.',
    },
  ],
  faq: [
    {
      q: 'Where does a gift to Ardú Space go?',
      a: 'To Ardú Space alone. Every checkout on this page carries the project’s own reference, so the gift is recorded against Ardú Space, held in the United Kingdom by an academic trustee under a signed agreement, and released stage by stage against written quotes.',
    },
    {
      q: 'What happens when a stage is fully funded?',
      a: 'It turns Live on this page, the work on it begins, and the next stage opens for funding. Nobody types a status: it follows the figures.',
    },
    {
      q: 'How will I know what my gift became?',
      a: 'Every stage is reported here as it happens, with its quotes, its receipts and photographs of what each pound became, and supporters receive an itemised statement every month.',
    },
    {
      q: 'Where exactly is the hall?',
      a: 'In central Gaza City. For the safety of the people who will work in it, the exact location is shared with partners and funders and not published.',
    },
    {
      q: 'Can my organisation fund a whole stage?',
      a: 'Yes. Write to us and we will share the plan, the quotes and the verification for the stage, and report it to you through to its last receipt.',
    },
    {
      q: 'Is my gift tax-deductible?',
      a: 'No. Ardú is an unregistered initiative; formal registration is planned. No charitable registration or tax deductibility is claimed.',
    },
  ],
  closing: {
    title: 'Help Ardú Space rise.',
    body: 'The rubble is coming off. Stage two brings the light, the water and a line that holds, and the day the lights come on, a ruin becomes a place.',
  },
};

export const projects: readonly Project[] = [arduSpace];

/* ---------------------------------------------------------- helpers */

export const projectHref = (slug: string) => `/projects/${slug}`;

export const findProject = (slug: string) =>
  projects.find((project) => project.slug === slug) ?? null;


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

/** Stages funded so far, whether under way or complete. */
export const fundedStages = (project: Project) =>
  resolveStages(project).filter(
    (stage) => stage.state === 'live' || stage.state === 'done',
  );


const spelled = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
/** Small numbers in words, for running text. */
export const spell = (n: number) => spelled[n] ?? String(n);
/** "Stage two", for running text. */
export const stageName = (stage: Stage) => `Stage ${spell(stage.number)}`;
