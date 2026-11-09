/**
 * Ardú · the programmes it runs and funds.
 *
 * Each programme is one record here: its status, its stages, and the copy of
 * its own page. Adding a programme is adding a record; its card, its page and
 * its place in the sitemap follow.
 *
 * Every programme is funded through Ardú's general fund. No programme has a
 * checkout of its own, and no stage publishes an amount: each stage carries an
 * indicator out of a hundred, set by hand as funding arrives and dated.
 *
 * Stage status is never typed by hand. It follows the indicators: a stage at
 * a hundred reads Funded, the first stage below it reads Funding now, the one
 * after it Next, the rest Later, and a stage marked `done` once it has been
 * delivered and reported reads Complete.
 */
import type { IconName } from '@/components/ui/Icon';
import { isFunded, type StageProgress } from '@/lib/funding';
export { isFunded, percentOf, type StageProgress } from '@/lib/funding';

/* -------------------------------------------------------- vocabulary */

/** Where a programme stands as a whole: the crown on its card and its page. */
export type ProjectStatus = 'running' | 'building' | 'preparing' | 'complete';

export const projectStatus: Record<
  ProjectStatus,
  { label: string; tone: 'teal' | 'sand' | 'mist' | 'deep' }
> = {
  running: { label: 'Running', tone: 'teal' },
  building: { label: 'Under construction', tone: 'sand' },
  preparing: { label: 'In preparation', tone: 'mist' },
  complete: { label: 'Complete', tone: 'deep' },
};

/** Where a stage stands, derived from its indicator. */
export type StageState = 'done' | 'live' | 'now' | 'next' | 'later';

export const stageState: Record<StageState, string> = {
  done: 'Complete',
  live: 'Funded',
  now: 'Funding now',
  next: 'Next',
  later: 'Later',
};

export type Stage = {
  number: number;
  icon: IconName;
  title: string;
  text: string;
  /** Set by hand once the stage has been delivered and reported. */
  done?: boolean;
  progress: StageProgress;
};

export type ResolvedStage = Stage & { state: StageState };

export type Figure = { icon: IconName; value: string; label: string };

export type Question = { q: string; a: string };

export type Project = {
  slug: string;
  name: string;
  status: ProjectStatus;
  /** What kind of programme it is, above its name: "Study library". */
  kind: string;
  /** Its emblem, drawn where the road on its cover arrives. */
  icon: IconName;
  /** One or two sentences: the meta description and the share text. */
  summary: string;
  /** What the programme is, in a breath: the text on its card. */
  brief: string;
  hero: { title: string; lead: string };
  /** Why this programme exists. */
  story: { title: string; body: readonly string[] };
  facts: readonly Figure[];
  /** Where the figures come from and when they were read. */
  factsNote?: string;
  /** How it works, in a few steps, for a programme people use directly. */
  how?: {
    title: string;
    steps: readonly { icon: IconName; title: string; text: string }[];
  };
  place?: {
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
  };
  serves: { title: string; body: string };
  day?: {
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
  beyond?: { title: string; body: string };
  /** Show the "carries its own weight" section (earned income). */
  weight?: boolean;
  /** The giving section on the programme's page, funding it through Ardú. */
  give: { title: string; body: string };
  updates: { title: string; body: string };
  partners: { title: string; body: string };
  faq: readonly Question[];
  closing: { title: string; body: string };
};

/* -------------------------------------------------------- programmes */

/** When the stage indicators were last set by hand. */
const updatedOn = '9 November 2026';

const n = (value: number) => value.toLocaleString('en-GB');

/**
 * Mu’een’s own dashboard, as read on the date given: totals only, never a
 * student’s name or account. Update the figures and the date together.
 */
export const mueenDashboard = {
  readOn: '6 November 2026',
  /** Students who have joined. */
  students: 1377,
  /** Of them, joined in the thirty days to `readOn`. */
  joinedLast30Days: 1286,
  /** Requests for study materials. */
  requests: 10446,
  /** Study materials in the library. */
  materials: 565,
  subjects: 37,
  years: 6,
  /** Students who used it in the seven days, and the day, to `readOn`. */
  activeLast7Days: 450,
  activeLastDay: 121,
} as const;

const dash = mueenDashboard;

const mueen: Project = {
  slug: 'mueen',
  name: 'Mu’een',
  status: 'running',
  kind: 'Study library',
  icon: 'library',
  summary:
    'A study library on Telegram that keeps Gaza’s medical students supplied with their course materials on the weakest connection, already used by more than 1,300 students.',
  brief: `With their lecture halls gone, Gaza’s medical students reach their course materials through Mu’een, a study library on Telegram that works on the weakest connection. ${n(dash.students)} students had joined by ${dash.readOn}.`,
  hero: {
    title: 'Mu’een: the medical library Gaza’s students carry in their pocket.',
    lead: 'When Gaza’s campuses were destroyed, its medical students lost the lecture halls and libraries their degrees depend on. Mu’een puts their course materials back within reach: a study library on Telegram, organised by year, subject and section, that works on the weakest connection.',
  },
  story: {
    title: 'A simple tool that keeps degrees alive.',
    body: [
      'Mu’een began as an independent initiative in Gaza, built for one problem: medical students, cut off from in-person teaching by the war, could not reach their course materials on the connections they had.',
      `It answered with something simple enough to work anywhere: open a chat, choose a year, a subject and a section, and receive the material. In the thirty days to ${dash.readOn} alone, ${n(dash.joinedLast30Days)} students joined. Ardú adopted Mu’een because it delivers exactly what Ardú exists to deliver, and now funds its running and its growth.`,
    ],
  },
  facts: [
    {
      icon: 'users',
      value: n(dash.students),
      label: 'medical students have joined',
    },
    {
      icon: 'files',
      value: n(dash.requests),
      label: 'requests for study materials',
    },
    {
      icon: 'library',
      value: n(dash.materials),
      label: 'study materials in the library',
    },
    {
      icon: 'layers',
      value: n(dash.subjects),
      label: 'subjects across six years of medicine',
    },
  ],
  factsNote: `From Mu’een’s own dashboard, read on ${dash.readOn}.`,
  how: {
    title: 'How it works',
    steps: [
      {
        icon: 'phone',
        title: 'Open Mu’een on Telegram',
        text: 'An app students already have, light enough for the weakest connection.',
      },
      {
        icon: 'layers',
        title: 'Choose a year, a subject and a section',
        text: 'Six years of the medical degree, organised the way the courses are taught.',
      },
      {
        icon: 'files',
        title: 'Receive the material',
        text: 'Files and notes arrive in the chat, ready to study offline.',
      },
    ],
  },
  stages: {
    title: 'Where Mu’een goes next.',
    lead: 'Mu’een is already running. These are the stages Ardú is funding to keep it online and take it further, each marked funded the moment its indicator reaches a hundred.',
    items: [
      {
        number: 1,
        icon: 'rocket',
        title: 'Launch',
        text: 'Built and opened to Gaza’s medical students: a library organised by year, subject and section, now used by more than 1,300 students.',
        done: true,
        progress: { percent: 100, updatedOn },
      },
      {
        number: 2,
        icon: 'server',
        title: 'Sustain',
        text: 'Reliable hosting and daily upkeep, so the library stays online whenever students need it, through every exam season.',
        progress: { percent: 0, updatedOn },
      },
      {
        number: 3,
        icon: 'library',
        title: 'Expand',
        text: 'Every year of the medical degree fully covered, with every material checked, organised and kept current.',
        progress: { percent: 0, updatedOn },
      },
      {
        number: 4,
        icon: 'learn',
        title: 'Teach',
        text: 'Courses and mentoring for medical students with Ardú’s partners, built on the reach the library already has.',
        progress: { percent: 0, updatedOn },
      },
    ],
    note: 'Each indicator shows how far a stage’s funding has come, out of a hundred. Indicators are updated by hand as funding arrives, and carry the date of their last update.',
  },
  serves: {
    title: 'Who it serves',
    body: `Medical students in Gaza, across the six years of the degree, nearly two in three of them in their first year. In the seven days to ${dash.readOn}, ${n(dash.activeLast7Days)} students used Mu’een, ${n(dash.activeLastDay)} of them in the final twenty-four hours.`,
  },
  give: {
    title: 'Keep Mu’een running.',
    body: 'Mu’een is funded through Ardú’s general fund. Your gift to Ardú keeps this library open for the students who depend on it, and sustains every other programme Ardú runs.',
  },
  updates: {
    title: 'Updates',
    body: 'Mu’een’s figures are published here as they are read from its dashboard, each with its date, and every stage is reported as it is funded and delivered.',
  },
  partners: {
    title: 'Partners',
    body: 'Partners are named here once their agreements are signed.',
  },
  faq: [
    {
      q: 'How is Mu’een funded?',
      a: 'Through Ardú’s general fund. Every gift to Ardú funds all of its programmes, Mu’een included, and Ardú directs it to where it is needed most.',
    },
    {
      q: 'Who is Mu’een for?',
      a: 'Medical students in Gaza, across the six years of the degree. Nearly two in three of the students using it are in their first year.',
    },
    {
      q: 'Why a library on Telegram?',
      a: 'Because students already have it, and it works on the weakest connection: the materials arrive as files in a chat, ready to study offline.',
    },
    {
      q: 'Where do the figures come from?',
      a: 'From Mu’een’s own dashboard. Each figure is published with the date it was read, and only as a total: no student is ever named.',
    },
  ],
  closing: {
    title: 'Keep Gaza’s medical students studying.',
    body: 'More than 1,300 students already open their course materials through Mu’een. Every gift to Ardú keeps their library running and builds what comes next.',
  },
};

const arduSpace: Project = {
  slug: 'ardu-space',
  name: 'Ardú Space',
  status: 'building',
  kind: 'Study and work hub',
  icon: 'building',
  summary:
    'A study and work hub rising from the rubble of a family home in Gaza City: power that stays on, internet that holds, and room for two hundred students and graduates a day at the opening.',
  brief:
    'A study and work hub in the hall beneath a family home in Gaza City: power that stays on, internet that holds, and room for two hundred students and graduates a day.',
  hero: {
    title: 'Ardú Space: a place to study and work, rising from the rubble.',
    lead: 'Beneath its founder’s family home in Gaza City, a hall of five hundred square metres stands on columns that held. Ardú Space will turn it into what Gaza’s students and graduates lack most: power that stays on, internet that holds, seats, quiet and a team on the ground.',
  },
  story: {
    title: 'Where Ardú began.',
    body: [
      'The house above the hall did not survive the war. The hall did. Ardú Space makes it a place where no student loses a lecture, an exam or a client to a blackout.',
      'At the opening it will seat two hundred students and graduates a day across two shifts; at the full build, a thousand. Clearing the rubble is the first stage, and it is open for funding now.',
    ],
  },
  facts: [
    { icon: 'building', value: '500 m²', label: 'a hall on columns that held' },
    {
      icon: 'users',
      value: '200',
      label: 'students and graduates a day at the opening',
    },
    { icon: 'users', value: '1,000', label: 'a day at the full build' },
    { icon: 'sun', value: '×2', label: 'every kilowatt works twice' },
  ],
  place: {
    title: 'The place',
    body: [
      'A hall of about five hundred square metres with a six-metre ceiling, beneath the founder’s family home in central Gaza City, standing on columns that held. It is family property, placed at Ardú’s disposal under a written agreement, and an engineer signs off the structure before anyone sits beneath it.',
      'For the safety of the people who will work in it, the exact location is shared with partners and funders and not published. Interior photographs follow the clearing of the rubble.',
    ],
    caption: 'Central Gaza City, about 500 m², interior photographs to follow',
    placeholder: { measure: '500 m²', label: 'A floor you can stand on' },
  },
  stages: {
    title: 'Four stages to opening.',
    lead: 'Each stage is a visible, verifiable piece of work, funded and finished before the next begins. When a stage’s indicator reaches a hundred, it is marked funded and the next one opens.',
    items: [
      {
        number: 1,
        icon: 'clear',
        title: 'Clear',
        text: 'The rubble comes off the hall, and what can be saved, steel and stone, goes back into preparing the space. The first photographs come from here.',
        progress: { percent: 0, updatedOn },
      },
      {
        number: 2,
        icon: 'light',
        title: 'Light',
        text: 'Wiring and lighting, water and sanitation, and a fibre line that holds. The day the lights come on, the hall becomes a place.',
        progress: { percent: 0, updatedOn },
      },
      {
        number: 3,
        icon: 'open',
        title: 'Open',
        text: 'A hundred seats for two shifts, the first partner courses and the first months of running: two hundred students and graduates a day.',
        progress: { percent: 0, updatedOn },
      },
      {
        number: 4,
        icon: 'grow',
        title: 'Grow',
        text: 'Solar power of its own, a second floor towards five hundred seats once an engineer confirms it, and the programme taken online.',
        progress: { percent: 0, updatedOn },
      },
    ],
    note: 'Each indicator shows how far a stage’s funding has come, out of a hundred. Indicators are updated by hand as funding arrives, and carry the date of their last update. The full plan, with its costs and how every stage is verified, is shared with partners and funders on request.',
  },
  serves: {
    title: 'Who it serves',
    body: 'Adults of eighteen and over in Gaza City, starting with university students and graduates in medicine and technology: students studying at a distance, graduates with a skill and no opening, freelancers who lose clients to power cuts. Places are allocated on published criteria that weigh ability and need together, for women and men equally, in separate sections with identical hours and services.',
  },
  day: {
    title: 'A day at Ardú Space',
    body: 'Two four-hour shifts, eight to twelve and twelve to four, a hundred seats each, women and men in separate sections with identical hours and services. Freelancers work full days at their own desks, partner courses run in the room, and mentors join in person and online.',
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
    body: 'Outside the hall’s hours, its surplus power and internet reach the neighbourhood below the market price, and the income goes back into running the hall. When the hall is full, the programme goes online.',
  },
  weight: true,
  give: {
    title: 'Help raise Ardú Space.',
    body: 'Ardú Space is funded through Ardú’s general fund. Your gift to Ardú moves its stages forward, starting with the clearing, and sustains every other programme Ardú runs.',
  },
  updates: {
    title: 'Updates and receipts',
    body: 'Every stage is reported here as it happens: the quotes, the receipts and photographs of what each pound became, starting with the clearing of the rubble.',
  },
  partners: {
    title: 'Partners',
    body: 'Partners are named here once their agreements are signed.',
  },
  faq: [
    {
      q: 'How is Ardú Space funded?',
      a: 'Through Ardú’s general fund. Every gift to Ardú funds all of its programmes, Ardú Space included, and Ardú directs it to where it is needed most.',
    },
    {
      q: 'What happens when a stage is fully funded?',
      a: 'It is marked funded here, the work on it begins, and the next stage opens. Each stage is reported with its quotes, receipts and photographs.',
    },
    {
      q: 'Where exactly is the hall?',
      a: 'In central Gaza City. For the safety of the people who will work in it, the exact location is shared with partners and funders and not published.',
    },
    {
      q: 'Can an organisation partner on Ardú Space?',
      a: 'Yes. Partners bring courses, mentors, equipment or openings into work, and institutions can fund Ardú at scale with full plans and reporting. Write to us.',
    },
  ],
  closing: {
    title: 'Raise the hall. Keep the lights on.',
    body: 'One hall, cleared and lit, means two hundred students and graduates a day who no longer lose their work to a blackout. Every gift to Ardú brings that day closer.',
  },
};

/** In the order they appear: what is running first, then what is being built. */
export const projects: readonly Project[] = [mueen, arduSpace];

/* ---------------------------------------------------------- helpers */

export const projectHref = (slug: string) => `/programmes/${slug}`;

export const findProject = (slug: string) =>
  projects.find((project) => project.slug === slug) ?? null;

/**
 * Every stage with its state, read from the indicators: Complete when
 * delivered and reported, Funded at a hundred, Funding now for the first
 * stage below it, then Next, then Later.
 */
export function resolveStages(project: Project): ResolvedStage[] {
  let opened = false;
  let queued = false;
  return project.stages.items.map((stage) => {
    let state: StageState;
    if (stage.done) state = 'done';
    else if (isFunded(stage.progress)) state = 'live';
    else if (!opened) {
      opened = true;
      state = 'now';
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

/** Stages funded and under way, not yet reported complete. */
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
