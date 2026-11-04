/**
 * Ardú · the projects that carry the organisation.
 *
 * Each project is one record here: a status the visitor can see, stages with
 * their own status and funding, and the copy of its page. Adding a project is
 * adding a record; the cards, the pages and the sitemap follow from it.
 *
 * Funding figures are updated by hand as gifts arrive and carry the date of
 * their last update. Targets are at today's prices and are revised against
 * written quotes as each stage is tendered.
 */
import type { IconName } from '@/components/ui/Icon';

export type ProjectStatus = 'ground' | 'building' | 'live' | 'planned';
export type StageStatus = 'done' | 'now' | 'next' | 'later';

export const projectStatus: Record<
  ProjectStatus,
  { label: string; tone: 'sand' | 'teal' | 'mist' }
> = {
  ground: { label: 'On the ground now', tone: 'sand' },
  building: { label: 'Under construction', tone: 'teal' },
  live: { label: 'Live', tone: 'teal' },
  planned: { label: 'In development', tone: 'mist' },
};

export const stageStatus: Record<StageStatus, string> = {
  done: 'Complete',
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
  number: string;
  icon: IconName;
  title: string;
  text: string;
  status: StageStatus;
  /** Null until the stage's figures are published. */
  funding: StageFunding | null;
};

export type Figure = { icon: IconName; value: string; label: string };

export type Project = {
  slug: string;
  name: string;
  status: ProjectStatus;
  /** Short line under the status on cards: where the project stands today. */
  standing: string;
  summary: string;
  hero: { kicker: string; title: string; lead: string };
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

const arduHall: Project = {
  slug: 'ardu-hall',
  name: 'Ardú Hall',
  status: 'ground',
  standing: 'Stage one, clearing the rubble',
  summary:
    'A five-hundred-square-metre hall rising over the rubble of the home where the founder’s road began: power that stays on, internet that holds, two hundred young people a day at the opening and a thousand at the full build.',
  hero: {
    kicker: 'Project 01',
    title: 'Ardú Hall: a place that works, rising over the rubble.',
    lead: 'Under the rubble of the founder’s family home in Gaza City, a hall of five hundred square metres stands on columns that held. Ardú’s first project turns it into the place its programmes need: power that stays on, internet that holds, seats, quiet, and a team on the ground. Stage one, clearing the rubble, is on the ground now.',
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
    caption:
      'Central Gaza City · about 500 m² · interior photographs to follow',
    placeholder: { measure: '500 m²', label: 'A floor you can stand on' },
  },
  stages: {
    title: 'The road there has four stages.',
    lead: 'Each one is a thing you can see, photograph and count, finished before the next begins, with a receipt for everything. When a stage is funded, its status changes here.',
    items: [
      {
        number: '01',
        icon: 'clear',
        title: 'Clear',
        text: 'The rubble comes off the hall beneath the home. The first photographs come from here, and the first proof that this is real.',
        status: 'now',
        funding: { target: 11000, raised: 50, updatedOn: '4 November 2026' },
      },
      {
        number: '02',
        icon: 'light',
        title: 'Light',
        text: 'Power, water and a fibre line that holds. The day the lights come on, a ruin becomes a place.',
        status: 'next',
        funding: { target: 22000, raised: 0, updatedOn: '4 November 2026' },
      },
      {
        number: '03',
        icon: 'open',
        title: 'Open',
        text: 'A hundred seats, two shifts, the first partner courses, the first months of running, and the first two hundred young people a day. The day the first certificate is issued.',
        status: 'later',
        funding: { target: 41000, raised: 0, updatedOn: '4 November 2026' },
      },
      {
        number: '04',
        icon: 'grow',
        title: 'Grow',
        text: 'Two hundred seats on the sun’s own power, a second floor towards five hundred, then online beyond the walls. The day the place starts paying part of its own way.',
        status: 'later',
        funding: null,
      },
    ],
    note: 'Targets are at today’s prices in pounds and are revised against written quotes as each stage is tendered. The bars are updated by hand as gifts arrive and carry the date of their last update. The full plan, with figures and how every stage is verified, is shared with partners and funders.',
    more: 'For partners and funders',
  },
  serves: {
    title: 'Who it is for',
    body: 'Adults of eighteen and over in Gaza City, starting with university students and graduates in technology and medicine: students whose universities now exist only online, graduates with a skill and no opening, freelancers who lose clients to power cuts. Places are allocated on published criteria that weigh ability and need together, for women and men equally, in separate sections with identical hours and services.',
  },
  day: {
    title: 'A day at Ardú Hall',
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
    body: 'Every stage is reported here as it happens: the quotes, the receipts, and the photographs of what each pound became. The first photographs follow the clearing of the rubble.',
  },
  partners: {
    title: 'Partners',
    body: 'Partners are named here as agreements are signed.',
  },
};

export const projects: readonly Project[] = [arduHall];

export const projectHref = (slug: string) => `/projects/${slug}`;

/** The stage currently open for funding, if any. */
export const currentStage = (project: Project) =>
  project.stages.items.find((stage) => stage.status === 'now') ?? null;

export const pounds = (n: number) => `£${n.toLocaleString('en-GB')}`;

export const percentFunded = ({ raised, target }: StageFunding) =>
  target > 0 ? Math.min(100, Math.round((raised / target) * 1000) / 10) : 0;
