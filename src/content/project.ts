/**
 * Ardú · public site content · November 2026.
 *
 * Ardú is presented as an education organisation first: what it is for, the
 * students it serves, the results it answers for, and the programmes it runs.
 * Every programme is funded through Ardú's general fund, so every call to give
 * on the site is a call to support Ardú itself. The programmes live in
 * `projects.ts`, each with its status and a funding indicator for each stage.
 * Operational detail (payroll, energy arithmetic, running costs) is not
 * published here; it is shared with partners and funders on request.
 */
import { maeenDashboard as dash } from '@/content/projects';

const n = (value: number) => value.toLocaleString('en-GB');

export const project = {
  name: 'Ardú',
  title: 'Ardú · Youth education in Gaza',
  titleTemplate: '%s · Ardú',
  description:
    'Ardú is a youth education organisation in Gaza. With campuses destroyed and power and connection uncertain, it keeps Gaza’s medical and technology students learning and moving toward work, through programmes built for the conditions they live in.',
  ogTitle:
    'Gaza’s students are still learning. Ardú is making sure they can keep going.',
  ogDescription:
    'A youth education organisation in Gaza, keeping medical and technology students learning and moving toward work. Its study library already serves more than 1,300 medical students, and its study and work hub is rising from the rubble. Back the organisation, and you back every programme it runs.',
  founder: 'Ahmed Abuhassan',
  founderLinkedin: 'https://www.linkedin.com/in/ahmadabohassan',
} as const;

export const pages = {
  about: { href: '/about', label: 'About', title: 'About Ardú' },
  programmes: {
    href: '/programmes',
    label: 'Programmes',
    title: 'Programmes',
  },
  whatWeDo: { href: '/what-we-do', label: 'What we do', title: 'What we do' },
  impact: { href: '/impact', label: 'Impact', title: 'Impact' },
  partners: {
    href: '/partners',
    label: 'Partners',
    title: 'Partner with Ardú',
  },
  support: { href: '/support', label: 'Support Ardú', title: 'Support Ardú' },
  contact: { href: '/contact', label: 'Contact', title: 'Contact' },
} as const;

/** Ardú's giving panel: in place on the pages that carry it, elsewhere on the support page. */
export const giveAnchor = {
  id: 'give',
  here: '#give',
  href: `${pages.support.href}#give`,
} as const;

export const nav = [
  pages.about,
  pages.programmes,
  pages.whatWeDo,
  pages.impact,
  pages.partners,
] as const;

export const ctas = {
  /** The one call to give, everywhere on the site: a gift to Ardú. */
  give: 'Support Ardú',
  partner: 'Partner with us',
  conversation: 'Start a conversation',
  requestPlan: 'Request the full plan',
  programme: 'Explore the programme',
  programmes: 'See our programmes',
  allProgrammes: 'All programmes',
  share: 'Share this programme',
  mailSubjects: {
    partner: 'Ardú · partnering with you',
    funder: 'Ardú · funding at scale',
    plan: 'Ardú · request for the full plan',
    youth: 'Ardú · tell me when registration opens',
    press: 'Ardú · press enquiry',
    general: 'Ardú',
  },
} as const;

/* ------------------------------------------------------------------ home */

export const hero = {
  titleStart: 'Gaza’s students are still learning. ',
  titleEmphasis: 'We are making sure they can keep going.',
  lead: 'With campuses destroyed and power and connection uncertain, Ardú keeps Gaza’s medical and technology students learning and moving toward work, through programmes built for the conditions they live in.',
  road: {
    start: 'Under the rubble',
    stops: ['Study', 'Skills', 'Mentors', 'Work'],
    end: 'a working life',
    caption:
      'The road Ardú keeps open: study that continues, skills that pay, mentors from the profession, and openings into work.',
  },
} as const;

/** The figures that show Ardú's work is already under way, dated at the source. */
export const proof = {
  title: 'Proof, not promises.',
  lead: 'Ma’een, the study library Ardú has adopted, already keeps more than 1,300 of Gaza’s medical students supplied with their course materials, on connections too weak for almost anything else. It is the standard every Ardú programme is held to: real students, real use, counted and published.',
  figures: [
    {
      icon: 'users',
      value: n(dash.students),
      label: 'medical students have joined',
    },
    {
      icon: 'grow',
      value: n(dash.joinedLast30Days),
      label: 'of them in the past thirty days',
    },
    {
      icon: 'files',
      value: n(dash.requests),
      label: 'requests for study materials',
    },
    {
      icon: 'calendar',
      value: n(dash.activeLast7Days),
      label: 'students active in the past week',
    },
  ],
  source: `From Ma’een’s own dashboard, read on ${dash.readOn}.`,
  more: 'See Ma’een',
} as const;

export const organisation = {
  title: ['Built for the students', 'the war could not stop.'],
  body: 'Ardú is a youth education organisation in Gaza, answerable to one outcome: that the city’s students finish what they started and move into work, however the war has rearranged their lives. It builds its own programmes, adopts proven ones, and funds them all from one general fund, so every gift goes where it is needed most.',
  facts: [
    {
      icon: 'graduation',
      title: 'Who we serve',
      text: 'University students and graduates in medicine and technology in Gaza: two fields full of talent, and two of the hardest to carry through a war.',
    },
    {
      icon: 'grow',
      title: 'What we deliver',
      text: 'Study that continues without lecture halls, skills the market pays for, mentors from the profession, and openings into work.',
    },
    {
      icon: 'receipt',
      title: 'How we answer for it',
      text: 'Every pound held by a trustee in the United Kingdom, every expense receipted and photographed, and a statement to supporters every month.',
    },
  ],
  more: 'About Ardú',
} as const;

export const statement = {
  body: 'Gaza’s students are not short of talent or determination. They are short of what a working education system would give them: the materials and a place to study, skills the market pays for, someone from the profession to guide them, and a door into work. Ardú supplies each of these, programme by programme, and measures itself by the result: degrees kept, incomes earned, careers begun.',
} as const;

export const pillars = {
  title: ['What Ardú delivers,', 'from study to work.'],
  items: [
    {
      icon: 'learn',
      title: 'Study that continues',
      short:
        'Course materials, exam preparation and places to study, so a degree outlives the loss of its campus.',
      long: 'When the campuses fell, their lecture halls, libraries and study rooms fell with them. Ardú puts them back within reach: course materials organised the way degrees are taught, exam preparation, and places with power and connection where study can actually happen. Ma’een, the first of these programmes, is already used by more than 1,300 medical students.',
    },
    {
      icon: 'award',
      title: 'Skills that pay',
      short:
        'Courses with partner organisations in repeating cycles, with recognised certificates and portfolios built on real work.',
      long: 'Courses run with partner organisations in repeating cycles, so no one who misses a round waits long: English, freelancing and remote work, career readiness, and the digital skills the market pays for. Certificates come from the partner, and portfolios are built on real work.',
    },
    {
      icon: 'people',
      title: 'Mentors from the profession',
      short:
        'Doctors, engineers, founders and academics who have built the careers our students are working toward.',
      long: 'Mentoring and introductions from people established in the professions our students are entering: doctors, engineers, founders, team leads and academics, in person and online. The guidance a working university and a professional network would have given them.',
    },
    {
      icon: 'briefcase',
      title: 'Openings into work',
      short:
        'Freelance clients, remote-work pipelines and introductions, so a skill becomes an income.',
      long: 'Freelance clients, remote-work pipelines with partners, and introductions to employers, so that a skill becomes a client, an interview and an income. Ardú Space will give that work a desk with power that stays on and internet that holds.',
    },
  ],
  more: 'What we do',
} as const;

export const changes = {
  title: ['What your support', 'makes possible.'],
  items: [
    {
      icon: 'graduation',
      text: 'A first-year medical student whose campus is gone opens her course materials on her phone, on a connection that drops every few minutes, and sits her exams prepared.',
    },
    {
      icon: 'code',
      text: 'A self-taught developer stops walking for a signal and starts delivering for clients.',
    },
    {
      icon: 'briefcase',
      text: 'A graduate with a skill and no opening leaves with a certificate, a portfolio and an interview.',
    },
    {
      icon: 'laptop',
      text: 'A freelancer who lost her clients to power cuts delivers on time again, from a desk with power that stays on.',
    },
  ],
  closing:
    'Ardú counts what changes, not what it spends: degrees kept, incomes earned and careers begun, published as they come in.',
  more: 'Our impact',
} as const;

export const programmesSection = {
  title: ['Our programmes.', 'One fund behind them all.'],
  lead: 'Ardú runs every programme from one general fund. Each shows its status and, stage by stage, how far its funding has come.',
  note: 'New programmes join as Ardú builds or adopts them, each funded through Ardú and reported in the open.',
} as const;

export const programmesPage = {
  hero: {
    title: 'Programmes built for the conditions Gaza’s students live in.',
    lead: 'Ardú builds its own programmes and adopts proven ones, then funds them all from one general fund, directed to where it is needed most. Each programme shows its status and, stage by stage, how far its funding has come.',
  },
  list: 'Every programme, with its status',
  filter: 'Show programmes',
  all: 'All',
  note: {
    title: 'One gift funds them all.',
    body: 'Gifts to Ardú are not split by programme. Every gift goes to Ardú’s general fund, which funds every programme here and the ones still to come, directed to where it is needed most.',
  },
} as const;

export const weight = {
  title: ['Built to carry', 'its own weight.'],
  body: 'Every kilowatt of solar power Ardú Space installs is designed to work twice: for students by day, and after hours as power and internet for the neighbourhood, priced below the market, with the income returned to running costs. With its freelancer desks, the hub is designed to earn a growing share of its own keep, so every gift goes further and lasts longer.',
  figure: {
    value: '×2',
    label:
      'Every kilowatt works twice: for students by day, for the neighbourhood after hours.',
  },
} as const;

export const give = {
  icon: 'heart',
  title: ['Support', 'Ardú.'],
  body: 'Back the organisation, and you back every programme it runs: Ma’een’s library today, Ardú Space as it rises, and the programmes that follow. Ardú directs every gift to where it is needed most, through a trustee route that has already carried two years of public giving with every pound accounted for.',
  label: 'Choose your gift to Ardú',
  other: 'Or enter an amount',
  impact: 'to Ardú, directed to where it is needed most.',
  minimum: 'The smallest gift is £5.',
  secure:
    'Secure checkout by Stripe, in pounds, by card or digital wallet. You can still change the amount there. No payment details touch this website.',
  more: 'How gifts are safeguarded',
  pending: 'Giving opens shortly. Write to us to be told the moment it does.',
} as const;

export const ways = {
  title: ['Three ways', 'to stand with them.'],
  note: 'Give to Ardú and your gift funds every programme it runs. Partner with us and bring what money cannot buy. Or fund at scale, with the full plan and reporting.',
  partner: {
    icon: 'handshake',
    title: 'Partner with Ardú',
    text: 'Bring a course, mentors, equipment or openings into work for the students in Ardú’s programmes: the half of the work that money cannot buy.',
  },
  scale: {
    icon: 'landmark',
    title: 'Fund at scale',
    text: 'Foundations, companies and institutions can underwrite a programme stage, a year of running costs or Ardú’s core costs, with the full plan, costs and reporting shared on request.',
  },
} as const;

export const trustStrip = {
  title: ['Every pound,', 'accounted for.'],
  body: 'Gifts are held in the United Kingdom by an academic trustee under a signed agreement, released stage by stage to an account used only for Ardú, and spent against written quotes. Every expense carries a number, a receipt and a photograph of what it became, and supporters receive a statement every month.',
  more: 'How gifts are safeguarded',
} as const;

export const founderStrip = {
  title: ['Founded in Gaza,', 'by someone who lived it.'],
  body: 'Ahmed Abuhassan was pulled from the rubble of his family’s home in October 2023. He taught himself software on a borrowed laptop, walking each morning to find power and a signal, and went on to build websites for local businesses, NGOs and startups. He founded Ardú so that Gaza’s students would not have to find that road alone.',
  more: 'About Ardú',
} as const;

export const ctaBand = {
  title: 'Stand with Gaza’s students.',
  body: 'Every gift to Ardú keeps a programme running and moves the next one forward. Give today.',
} as const;

/* ----------------------------------------------------------------- about */

export const about = {
  hero: {
    title: 'An education organisation, born under the rubble.',
    lead: 'Ardú was founded in Gaza City after the war levelled its founder’s family home. It exists so that Gaza’s students can keep learning and move into work, whatever the war has taken from them: through programmes built for the conditions they live in, partners who bring what money cannot buy, and accounts kept in the open.',
  },
  purpose: {
    vision: {
      title: 'Vision',
      text: 'A generation of Gaza’s students who finish what they started and build the careers their talent has earned, from wherever they are.',
    },
    mission: {
      title: 'Mission',
      text: 'To keep Gaza’s students learning and moving into work: study that continues without lecture halls, skills the market pays for, mentors from the profession and openings into work. Ardú starts with university students and graduates in medicine and technology, and measures itself by results: degrees kept, incomes earned, careers begun.',
    },
  },
  goals: {
    title: 'What Ardú sets out to do',
    items: [
      {
        icon: 'graduation',
        title: 'Keep students in their degrees.',
        text: 'For students whose campuses are gone: the materials, the connection and the guidance that keep a year of study from being lost.',
      },
      {
        icon: 'briefcase',
        title: 'Turn talent into income.',
        text: 'For graduates with a skill and no opening: the training, the portfolio and the introductions that lead to a first client, a first job, a recognised certificate.',
      },
      {
        icon: 'people',
        title: 'Put the profession beside every student.',
        text: 'Bring together what organisations working on Palestinian talent already offer, and put an established professional beside each student who needs one.',
      },
      {
        icon: 'power',
        title: 'Build places that work and pay their way.',
        text: 'Power that stays on, internet that holds, seats and quiet, designed to earn a growing share of their own keep so they outlast any single appeal.',
      },
      {
        icon: 'receipt',
        title: 'Keep the books open.',
        text: 'A trustee route for every pound, a receipt and a photograph for every expense, and a statement to supporters every month.',
      },
    ],
  },
  serve: {
    title: 'Who Ardú serves',
    body: [
      'University students and graduates in medicine and technology in Gaza, first. Medicine because the war has stranded its students hardest: six-year degrees carried on without campuses, laboratories or wards, with exams sat on connections that cut out mid-sentence. Technology because it is the field most open to earning from where you are, and the founder’s own.',
      'Both are professions a person can carry anywhere. Ardú serves adults of eighteen and over, women and men equally, and widens its reach as its programmes and partners grow.',
    ],
  },
  impact: {
    title: 'Our programmes',
    lead: 'Ardú delivers its work through programmes, each funded through Ardú’s general fund and reported in the open. What each has delivered is published on the impact page as it comes in.',
    more: 'How we measure impact',
  },
  partners: {
    title: 'Partners',
    body: 'Ardú is built to bring together what organisations working on Palestinian talent and education already offer: courses and curricula, trainers and mentors, equipment, and openings into work for the students in its programmes. Partners are named here once their agreements are signed.',
  },
  story: {
    title: 'The story',
    body: [
      'The house did not survive the war. Its founder did. In October 2023 an air strike levelled Ahmed Abuhassan’s family home in Gaza City, and he was pulled from the rubble.',
      'For two years afterwards he taught himself software on a borrowed laptop with a cracked screen, charging where there was power, working where there was signal, and mentoring others caught in the same blackout. He built live websites for local shops, NGOs and startups, and saw the same pattern everywhere: the young people around him were not short of talent or determination. They were short of what a working education system would have given them.',
      'Ardú is the organisation built to supply it. It began with a hall beneath the rubble in Gaza City, the future Ardú Space, and grows with every programme it builds or adopts, Ma’een’s study library for medical students among them.',
    ],
  },
  name: {
    word: 'Ardú',
    meaning: 'Irish for “a lifting, a raising up.”',
    body: 'The name is the commitment: every student who comes through Ardú leaves further along than they came in, with a degree kept, a skill, a certificate, a client, a job.',
  },
  principles: {
    title: 'What we stand on',
    items: [
      {
        icon: 'sparkles',
        title: 'Talent is everywhere. Opportunity is not.',
        text: 'Ardú exists to close that gap, for women and men equally, with identical hours and services.',
      },
      {
        icon: 'handheart',
        title: 'Dignity, not dependency.',
        text: 'Students at Ardú learn, earn, build and compete. Every programme is a workshop, not a waiting room.',
      },
      {
        icon: 'bookcheck',
        title: 'Open books.',
        text: 'Every pound is held by a trustee, spent against a written quote, and reported with a receipt and a photograph.',
      },
      {
        icon: 'recycle',
        title: 'Built to last.',
        text: 'Ardú’s places are designed to earn a growing share of their own keep, so the organisation does not live or die by the next appeal.',
      },
      {
        icon: 'list',
        title: 'Built in order.',
        text: 'Every programme moves in stages, each funded and finished before the next begins.',
      },
    ],
  },
  governance: {
    title: 'How Ardú is run',
    items: [
      {
        icon: 'user',
        title: 'Led by its founder, run by teams on the ground',
        text: 'Ahmed Abuhassan founded Ardú and leads it. Each programme has its own team on the ground, on written agreements, so the work stands on more than one person.',
      },
      {
        icon: 'shield',
        title: 'One route for every pound',
        text: 'Gifts are held in the United Kingdom by an academic trustee under a signed agreement, released stage by stage to an account used only for Ardú, and spent against written quotes.',
      },
      {
        icon: 'users',
        title: 'An advisory circle',
        text: 'An advisory circle of professionals from Gaza and from the organisations Ardú works with is being formed to review each plan before it is published. Members are named here as each agrees.',
      },
      {
        icon: 'list',
        title: 'Unregistered today, registration planned',
        text: 'Ardú is an unregistered initiative today, and formal registration is planned. It claims no charitable registration and no tax deductibility.',
      },
    ],
  },
  founder: {
    title: 'The founder',
    body: [
      'Ahmed Abuhassan is a self-taught software developer from Gaza City. Before software he worked in electrical installation, which is why Ardú’s power systems are designed with the engineers and technicians he has worked beside. He has built live websites for local shops, NGOs and startups, and mentored young people online through the blackouts.',
      'He founded Ardú and leads it, with teams on the ground running each programme, because an organisation built to last cannot stand on one person.',
    ],
    caption: 'Ahmed Abuhassan, founder of Ardú',
    placeholder: ['From finding a socket', 'to building an organisation.'],
    linkedin: 'Ahmed on LinkedIn',
    partners: 'Partners are announced here as agreements are signed.',
  },
} as const;

/* ----------------------------------------------------------- what we do */

export const whatWeDo = {
  hero: {
    title: 'From a disrupted degree to a working life.',
    lead: 'Ardú delivers the four things Gaza’s students need to make that journey: study that continues, skills that pay, mentors from the profession and openings into work. All of it runs through Ardú’s programmes and partners, for students and graduates in medicine and technology first.',
  },
  who: {
    title: 'Who it is for',
    body: 'Adults of eighteen and over in Gaza, starting with university students and graduates in medicine and technology: students whose campuses are gone, graduates with a skill and no opening, freelancers who lose clients to power cuts, self-taught developers, designers and writers. Places in each programme are allocated on published criteria that weigh ability and need together.',
    note: 'Registration for each new intake opens before it starts. Leave your name and we will tell you when.',
    cta: 'Tell me when',
  },
  where: {
    title: 'Where it happens',
    lead: 'Each of the four is delivered through a programme with its own page, its status and its figures.',
  },
} as const;

/* --------------------------------------------------------------- impact */

export const impactPage = {
  hero: {
    title: 'We measure results, not activity.',
    lead: 'Ardú exists for outcomes: Gaza’s students keeping their degrees, earning, and moving into work. This is where those outcomes are published: what each programme has delivered so far, the indicators Ardú measures itself by, and the figures as they come in.',
  },
  delivered: {
    title: 'Delivered so far',
    lead: 'Ma’een, the study library Ardú has adopted, is the first programme with figures to publish. They are read from its own dashboard, published as totals, and dated.',
    figures: [
      {
        icon: 'users',
        value: n(dash.students),
        label: 'medical students have joined',
      },
      {
        icon: 'grow',
        value: n(dash.joinedLast30Days),
        label: 'of them in the past thirty days',
      },
      {
        icon: 'files',
        value: n(dash.requests),
        label: 'requests for study materials',
      },
      {
        icon: 'library',
        value: n(dash.materials),
        label: `study materials across ${dash.subjects} subjects`,
      },
    ],
    source: `From Ma’een’s own dashboard, read on ${dash.readOn}.`,
    more: 'See Ma’een',
  },
  programmes: {
    title: 'The programmes that deliver it',
    lead: 'Each programme shows its status and, stage by stage, how far its funding has come, with a page of its own for what it delivers.',
  },
  changes: {
    title: 'What changes',
    lead: 'The students these programmes are built for. Their own stories are published here as they happen, with their consent.',
  },
  indicators: {
    title: 'How we measure',
    lead: 'Five indicators, published every month from the first cohort onward, and never before. A dash marks where each figure will go.',
    items: [
      {
        icon: 'graduation',
        value: '—',
        label: 'students kept on track with their degree',
      },
      {
        icon: 'briefcase',
        value: '—',
        label: 'graduates into a first income or job',
      },
      { icon: 'people', value: '—', label: 'hours of mentoring given' },
      {
        icon: 'award',
        value: '—',
        label: 'courses completed, certificates issued',
      },
      {
        icon: 'receipt',
        value: '—',
        label: 'pounds spent in Gaza, with receipts',
      },
    ],
    note: 'Counting starts with the first cohort at Ardú Space. Ma’een’s figures are published above, as read from its dashboard.',
  },
  measure: {
    title: 'How it is reported',
    body: 'Every month Ardú publishes, programme by programme, participation, courses completed and certificates issued, work found and income reported by participants, and the accounts. Supporters receive the statement; partners and funders may ask for the full ledger.',
    items: [
      { icon: 'calendar', text: 'Participation, by programme and by cycle' },
      { icon: 'award', text: 'Courses completed, certificates issued' },
      { icon: 'briefcase', text: 'Work found, income reported' },
      { icon: 'receipt', text: 'The accounts, reconciled monthly' },
    ],
  },
} as const;

/* ------------------------------------------------------------- partners */

export const partners = {
  hero: {
    title: 'Bring what money cannot buy.',
    lead: 'Ardú’s programmes run on what partners bring: courses, mentors, equipment and openings into work, for Gaza’s students and graduates in medicine and technology. You bring the expertise; Ardú brings the students, the place and the reporting.',
  },
  why: {
    title: 'Why partner with Ardú',
    items: [
      {
        icon: 'users',
        title: 'Students ready to work',
        text: 'Motivated students and graduates in medicine and technology, selected on published criteria and already reached by Ardú’s programmes: more than 1,300 medical students use Ma’een alone.',
      },
      {
        icon: 'building',
        title: 'Delivery that works on the ground',
        text: 'Deliver remotely through Ardú’s programmes, or in person at Ardú Space once it opens: a room with power, internet, screens and a team on the ground.',
      },
      {
        icon: 'chart',
        title: 'Reporting you can use',
        text: 'Participation, completion and outcomes reported each cycle, with the data your own funders ask for.',
      },
    ],
  },
  bring: {
    title: 'What a partner can bring',
    items: [
      'A course or curriculum, delivered in cycles',
      'Trainers and mentors, in person or online',
      'Laptops and equipment',
      'Jobs, internships and freelance clients for students and graduates',
      'Certificates and pathways into further study',
      'Your voice: tell your network what Gaza’s students are building',
    ],
  },
  how: {
    title: 'How it works',
    steps: [
      {
        title: 'A conversation',
        text: 'Write to us with what you can bring. We reply within a week.',
      },
      {
        title: 'A short written agreement',
        text: 'What each side provides, when, and how it is reported.',
      },
      {
        title: 'The first cycle',
        text: 'Scheduled into the programme’s calendar, announced to students, and run with our team on the ground.',
      },
      {
        title: 'Reporting',
        text: 'Each cycle closes with participation, completion and outcomes.',
      },
    ],
    note: 'No partner is named publicly before its agreement is signed.',
  },
  funders: {
    title: 'For funders and institutions',
    body: 'Foundations, companies and institutional funders can underwrite Ardú at scale: a programme stage, a year of a programme’s running costs, or the organisation’s core costs, followed through with full figures and reporting. The complete plan, with stages, costs, verification and the earned-income model, is shared on request, together with the location of Ardú Space.',
  },
} as const;

/* -------------------------------------------------------------- support */

export const support = {
  hero: {
    title: 'Support Ardú.',
    lead: 'Back the organisation, and you back every programme it runs. Your gift goes to Ardú’s general fund, which keeps Ma’een’s library running, moves Ardú Space forward and launches the programmes that follow, directed to where it is needed most.',
    points: [
      {
        icon: 'shield',
        text: 'Held in the United Kingdom by an academic trustee',
      },
      { icon: 'receipt', text: 'A receipt and a photograph for every expense' },
      { icon: 'bookcheck', text: 'A statement to supporters every month' },
    ],
  },
  programmes: {
    title: 'What your gift keeps moving',
    lead: 'Every programme Ardú runs is funded from the same general fund. This is where each one stands.',
  },
  oneFund: {
    title: 'Why one fund',
    items: [
      {
        icon: 'milestone',
        title: 'Directed where it is needed most',
        text: 'Needs in Gaza shift fast. One fund lets Ardú move money to the stage or programme that needs it now, without waiting for the right gift to arrive.',
      },
      {
        icon: 'sparkles',
        title: 'The next programme',
        text: 'New programmes join as Ardú builds or adopts them. Support for the organisation is what lets the next one start.',
      },
      {
        icon: 'bookcheck',
        title: 'Accounts that stay open',
        text: 'A trustee route for every pound, a receipt and a photograph for every expense, and a statement to supporters every month.',
      },
    ],
  },
  faq: {
    title: 'Questions about giving',
    items: [
      {
        q: 'What does a gift to Ardú fund?',
        a: 'Every programme Ardú runs: Ma’een’s study library today, Ardú Space as it rises, and the programmes that follow. Gifts go to Ardú’s general fund, which Ardú directs to where it is needed most.',
      },
      {
        q: 'Can I give to one programme?',
        a: 'Gifts are not restricted to a single programme: every gift goes to Ardú’s general fund. Each programme’s page shows its status and how far each stage’s funding has come. Institutions that want to underwrite a specific stage can write to us.',
      },
      {
        q: 'Is any payment taken on this website?',
        a: 'No. Every gift opens Stripe’s secure checkout in pounds, by card or digital wallet. No payment details touch this website.',
      },
      {
        q: 'Is Ardú a registered charity?',
        a: 'Not yet. Ardú is an unregistered initiative, and formal registration is planned. It claims no charitable registration and no tax deductibility.',
      },
    ],
  },
  safeguards: {
    title: 'How gifts are safeguarded',
    steps: [
      {
        icon: 'shield',
        title: 'One route in.',
        text: 'Gifts are held in the United Kingdom by an academic trustee under a signed agreement.',
      },
      {
        icon: 'milestone',
        title: 'Stage by stage.',
        text: 'Released against each agreed stage to an account used only for Ardú, and spent against written quotes.',
      },
      {
        icon: 'receipt',
        title: 'A record for every expense.',
        text: 'A number, a receipt, a contract where it applies, and a photograph of what was bought or built.',
      },
      {
        icon: 'users',
        title: 'Separate hands, monthly statements.',
        text: 'Whoever spends does not keep the books. Supporters receive an itemised statement every month; funders may ask for the full ledger.',
      },
    ],
    small:
      'Ardú is an unregistered initiative; formal registration is planned. No charitable registration or tax deductibility is claimed. No partner is named before its agreement is signed. Gifts are taken on Stripe’s hosted checkout; no payment details are collected on this website.',
  },
  share: {
    title: 'Share it',
    body: 'If you cannot give today, send Ardú to one person who would want to stand with Gaza’s students.',
    text: 'Gaza’s students are still learning. Ardú is making sure they can keep going: a study library already used by more than 1,300 medical students, and a study and work hub rising from the rubble in Gaza City.',
  },
} as const;

/* -------------------------------------------------------------- contact */

export const contactPage = {
  hero: {
    title: 'Write to us.',
    lead: 'One address for supporters, partners, funders, students and the press. We reply within a week.',
  },
  routes: [
    {
      icon: 'handshake',
      title: 'Partners and funders',
      text: 'Request the full plan and the location of Ardú Space, or tell us what you can bring.',
      subject: 'plan',
    },
    {
      icon: 'graduation',
      title: 'Students in Gaza',
      text: 'Registration criteria are published before each intake. Leave your name and we will tell you when.',
      subject: 'youth',
    },
    {
      icon: 'newspaper',
      title: 'Press and media',
      text: 'Interviews, background and photographs as they become available.',
      subject: 'press',
    },
  ],
  linkedin: 'Follow the work on LinkedIn',
} as const;

export const footer = {
  tagline: 'Keeping Gaza’s students learning, and moving into work.',
  explore: 'Explore',
  connect: 'Connect',
  small:
    'Ardú is a youth education initiative in Gaza City. It is not yet a registered charity; formal registration is planned.',
} as const;
