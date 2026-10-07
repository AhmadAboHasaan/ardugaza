/**
 * Ardú · public site content · October 2026.
 *
 * This is the public, promotional layer: who Ardú is, where it is going, the
 * impact it is built to deliver and the ways to support it. Operational detail
 * (stage costs, payroll, energy arithmetic, running costs) is not published
 * here; it is shared with partners and funders on request.
 */

export const project = {
  name: 'Ardú',
  title: 'Ardú · A youth initiative in Gaza City',
  titleTemplate: '%s · Ardú',
  description:
    'Ardú is a youth initiative rising from the rubble of a home in Gaza City: a hall with power that stays on, internet that holds, courses with partner organisations and people who open doors, so young people can learn, earn and compete from where they are.',
  ogTitle: 'Gaza’s young people have the ability. Ardú gives them the room.',
  ogDescription:
    'A youth initiative rising from the rubble of a home in Gaza City. Two hundred young people a day, power that stays on, internet that holds. Not relief. A lifting.',
  founder: 'Ahmed Abuhassan',
  founderLinkedin: 'https://www.linkedin.com/in/ahmadabohassan',
  tagline: 'Not relief. A lifting.',
} as const;

export const pages = {
  about: { href: '/about', label: 'About', title: 'About Ardú' },
  whatWeDo: { href: '/what-we-do', label: 'What we do', title: 'What we do' },
  impact: { href: '/impact', label: 'Impact', title: 'Impact' },
  partners: {
    href: '/partners',
    label: 'Partners',
    title: 'Partner with Ardú',
  },
  support: { href: '/support', label: 'Support', title: 'Support Ardú' },
  contact: { href: '/contact', label: 'Contact', title: 'Contact' },
} as const;

export const nav = [
  pages.about,
  pages.whatWeDo,
  pages.impact,
  pages.partners,
  pages.support,
] as const;

export const ctas = {
  give: 'Give now',
  partner: 'Partner with us',
  conversation: 'Start a conversation',
  requestPlan: 'Request the full plan',
  mailSubjects: {
    partner: 'Ardú · partnering with you',
    funder: 'Ardú · funding a stage',
    plan: 'Ardú · request for the full plan',
    youth: 'Ardú · tell me when registration opens',
    press: 'Ardú · press enquiry',
    general: 'Ardú',
  },
} as const;

/* ------------------------------------------------------------------ home */

export const hero = {
  eyebrow: 'A youth initiative · Gaza City',
  titleStart: 'Gaza’s young people have the ability. Ardú gives them ',
  titleEmphasis: 'the room.',
  lead: 'Ardú is rising from the rubble of a home in Gaza City: a hall where the power stays on, the internet holds, partner organisations teach, and people who have walked the road open doors, so that young people can learn, earn and compete from where they are. Ardú is Irish for a lifting. Not relief. A lifting.',
  poster: {
    top: ['Gaza City · 500 m²', 'Phase one'],
    title: ['Room for', '200 futures a day.'],
    seats: 100 as const,
    bottom: 'seats a shift · two shifts a day',
    key: 'The next seat',
  },
  caption:
    'One hundred seats, two shifts, two hundred young people a day at opening.',
} as const;

export const statement = {
  title: ['The missing piece', 'is rarely ability.'],
  body: 'Gaza’s young people are short of a seat, a socket, a connection that holds, and someone who has walked the road before them. Ardú puts all four in one room, and measures itself by one result: young people earning, working and competing from where they are.',
  figures: [
    { value: '500 m²', label: 'a hall under a family home in Gaza City' },
    { value: '200', label: 'young people a day at opening' },
    { value: '2', label: 'shifts, women and men, equal hours and services' },
    { value: '4', label: 'course tracks with partner organisations' },
  ],
} as const;

export const pillars = {
  eyebrow: 'What Ardú does',
  title: ['One room.', 'Four things that turn ability into income.'],
  items: [
    {
      icon: 'power',
      title: 'A place that works',
      short:
        'Power that stays on through the working day and internet that holds, in a hall of five hundred square metres.',
      long: 'Five hundred square metres with power that stays on through the working day, internet that holds, light, water and quiet. A hundred seats a shift, two shifts a day, with a team on the ground running the floor.',
    },
    {
      icon: 'learn',
      title: 'Learning that counts',
      short:
        'Courses with partner organisations in repeating cycles, with certificates from the partner.',
      long: 'Four course tracks run with partner organisations in repeating cycles, so nobody who misses a round waits long: English; freelancing and remote work; career readiness; digital skills. Certificates come from the partner. Live sessions bring in founders, team leads and academics.',
    },
    {
      icon: 'people',
      title: 'People who open doors',
      short:
        'Live sessions and mentoring with founders, team leads and academics who have walked the road.',
      long: 'Mentoring, introductions and the kind of advice you only get from someone who has done it: how to land the first client, pass the interview, price the work and keep the job.',
    },
    {
      icon: 'work',
      title: 'A path to income',
      short:
        'Freelancer desks, remote-work pipelines and introductions, so a skill becomes a client, a certificate, an interview, an income.',
      long: 'Full-day desks for freelancers, remote-work pipelines with partners, and a portfolio built on real work, so a skill turns into a client, a certificate, an interview, an income.',
    },
  ],
  more: 'What we do',
} as const;

export const changes = {
  eyebrow: 'Impact',
  title: ['What changes', 'when the room exists.'],
  items: [
    'A student whose university now exists only online sits her lectures and her exams on a connection that holds.',
    'A self-taught developer stops walking for signal and starts delivering for clients.',
    'A graduate with a skill and no opening leaves with a certificate, a portfolio and an interview.',
    'A freelancer who lost her clients to power cuts delivers on time again, from a desk that is hers for the month.',
  ],
  closing:
    'The measure is not seats filled. It is income earned and work found, published every month.',
  more: 'Our impact',
} as const;

export const direction = {
  eyebrow: 'The direction',
  title: ['Built from', 'the rubble up.'],
  steps: [
    {
      number: '01',
      title: 'Clear',
      text: 'The rubble of the home comes off the hall beneath it. The first photographs come from here.',
    },
    {
      number: '02',
      title: 'Light',
      text: 'Power, water and a fibre line that holds. A ruin becomes a place.',
    },
    {
      number: '03',
      title: 'Open',
      text: 'A hundred seats, two shifts, two hundred young people a day, with partner courses from the first week.',
    },
    {
      number: '04',
      title: 'Grow',
      text: 'Two hundred seats on the sun’s own power, a second floor towards five hundred, then the same programme online, beyond the walls.',
    },
  ],
  note: 'Each step is funded and built in order, and each stands on its own. The full plan, with figures and how every step is verified, is shared with partners and funders.',
  more: 'For partners and funders',
} as const;

export const weight = {
  eyebrow: 'Built to last',
  title: ['Designed to carry', 'its own weight.'],
  body: 'Every kilowatt of solar Ardú installs works twice: ten seats by day, and outside the hall’s hours surplus power and internet for the neighbourhood at below the market price, with the income going back into keeping the doors open. Together with the freelancer desks, the place is designed to earn a growing share of its own running costs, so that every gift goes further and lasts longer.',
  figure: {
    value: '×2',
    label:
      'A kilowatt that works twice: the hall by day, the street after hours.',
  },
} as const;

export const ways = {
  eyebrow: 'Ways to lift it',
  title: ['Three ways', 'to lift it.'],
  give: {
    title: 'Give',
    text: 'Fund the room through Ardú’s campaign page. A gift of any size moves the next step, and every step comes with its receipts.',
  },
  partner: {
    title: 'Partner',
    text: 'Bring a course, trainers, laptops, or jobs for the people who come out of Ardú. The half that money cannot buy.',
  },
  stage: {
    title: 'Fund a stage',
    text: 'Foundations, companies and major donors can take a whole stage, from the rubble to the first kilowatts, and see it through with full figures and reporting.',
  },
  note: 'Giving runs through Ardú’s campaign page. No payment is collected on this website.',
} as const;

export const trustStrip = {
  title: ['Every pound,', 'accounted for.'],
  body: 'Gifts are held in the United Kingdom by an academic trustee under a signed agreement, released stage by stage to an account used only for Ardú, and spent against written quotes. Every expense gets a number, a receipt and a photograph of what it became, and supporters receive a monthly statement.',
  more: 'How gifts are safeguarded',
} as const;

export const founderStrip = {
  title: ['Founded by someone', 'who needed this room.'],
  body: 'Ahmed Abuhassan learned to code on a borrowed laptop in Gaza, walking each morning to find a socket and a signal. Ardú is the place he needed, built for the young people who need it now.',
  more: 'About Ardú',
} as const;

export const ctaBand = {
  title: 'Help lift it.',
  body: 'From the rubble of one home, a place for thousands of young people over the years ahead. Be part of the first step.',
} as const;

/* ----------------------------------------------------------------- about */

export const about = {
  hero: {
    eyebrow: 'About Ardú',
    title: 'Ardú began under the rubble of a home.',
    lead: 'In October 2023 an air strike levelled a family home in Gaza City. Beneath it, a hall of five hundred square metres stood on columns that held. Ardú is what rises from it.',
  },
  story: {
    title: 'The story',
    body: [
      'The house above the hall did not survive. The hall did, and so did an idea: that a young person with ability should not have to walk for hours to find a socket and a signal to do their work.',
      'For two years Ardú’s founder did exactly that: learning to code on a borrowed laptop with a cracked screen, charging where there was power, working where there was signal, and mentoring others caught in the same blackout. Along the way he built live websites for local shops, NGOs and startups, and saw the same pattern everywhere. The young people around him were not short of ability. They were short of a seat, a socket, a connection that held, and someone who had walked the road before them.',
      'Ardú puts those four things in one room, under the rubble of the home where the idea was born, and opens them to two hundred young people a day.',
    ],
  },
  name: {
    word: 'Ardú',
    meaning: 'Irish for “a lifting, a raising up.”',
    body: 'The name is a promise: that the people who come through the door leave higher than they came in, with a skill, a certificate, a client, a job. Not relief. A lifting.',
  },
  principles: {
    title: 'What we stand on',
    items: [
      {
        title: 'Ability is everywhere. Opportunity is not.',
        text: 'Ardú exists to close that gap, for women and men equally, in separate sections with identical hours and services.',
      },
      {
        title: 'Dignity, not charity.',
        text: 'People at Ardú earn, build and compete. The place is a workshop, not a waiting room.',
      },
      {
        title: 'Open books.',
        text: 'Every pound is held by a trustee, spent against a written quote, and reported with a receipt and a photograph.',
      },
      {
        title: 'Built to last.',
        text: 'Ardú earns a growing share of its own keep, so it does not live or die by the next appeal.',
      },
      {
        title: 'Built in order.',
        text: 'Each stage stands on its own and is finished before the next begins.',
      },
    ],
  },
  place: {
    title: 'The place',
    body: [
      'A hall of about five hundred square metres with a six-metre ceiling, under a family home in central Gaza City, standing on columns that held. It is family property, placed at Ardú’s disposal under a written agreement, and an engineer signs off the structure before anyone sits beneath it.',
      'For the safety of the people who will work in it, the exact location is shared with partners and funders and not published. Interior photographs follow the clearing of the rubble.',
    ],
    caption:
      'Central Gaza City · about 500 m² · interior photographs to follow',
    placeholder: { measure: '500 m²', label: 'A floor you can stand on' },
  },
  founder: {
    title: 'The founder',
    body: [
      'Ahmed Abuhassan is a self-taught software developer from Gaza City. Before software he worked in electrical installation, which is why Ardú’s power is designed with engineers and technicians he has worked beside. He has built live websites for local shops, NGOs and startups, and mentored young people online through the blackout.',
      'He founded Ardú and leads it, with a team on the ground running the floor, because the place is designed to stand on more than one person.',
    ],
    caption: 'Ahmed Abuhassan · founder of Ardú',
    placeholder: ['From finding a socket', 'to building a place.'],
    linkedin: 'Ahmed on LinkedIn',
    partners: 'Partners are announced here as agreements are signed.',
  },
} as const;

/* ----------------------------------------------------------- what we do */

export const whatWeDo = {
  hero: {
    eyebrow: 'What we do',
    title: 'One room. Four things that turn ability into income.',
    lead: 'Ardú brings together the place, the learning, the people and the path to work that Gaza’s young people need, and keeps them open every day.',
  },
  day: {
    title: 'A day at Ardú',
    body: 'Two four-hour shifts, eight to twelve and twelve to four, a hundred seats each, women and men in separate sections with identical hours and services. Freelancers work full days at their own desks. Partner courses run in the room, and mentors join in person and online.',
    figures: [
      { value: '8–12', label: 'first shift' },
      { value: '12–4', label: 'second shift' },
      { value: '100', label: 'seats a shift' },
      { value: '50 · 50', label: 'women and men, each shift' },
    ],
  },
  who: {
    title: 'Who it is for',
    body: 'Adults of eighteen and over in Gaza: students whose universities now exist only online, graduates with a skill and no opening, freelancers who lose clients to power cuts, self-taught developers, designers and writers. Places are allocated on published criteria that weigh ability and need together.',
    note: 'Registration opens before the first intake. Leave your name and we will tell you when.',
    cta: 'Tell me when',
  },
  beyond: {
    title: 'Beyond the walls',
    body: 'Outside the hall’s hours, its surplus power and internet reach the neighbourhood at below the market price, and the income goes back into keeping the doors open. When the hall is full, the same programme goes online, beyond the walls.',
  },
} as const;

/* --------------------------------------------------------------- impact */

export const impactPage = {
  hero: {
    eyebrow: 'Impact',
    title:
      'The measure is not seats filled. It is income earned and work found.',
    lead: 'Ardú is built around one result: young people in Gaza earning, working and competing from where they are. Here is what that looks like, and where it is going.',
  },
  changes: {
    title: 'What changes',
    eyebrow: 'Who it is built for',
    lead: 'The people this room is built for. Their own stories follow here, published as they happen.',
  },
  scale: {
    title: 'The scale we are building toward',
    figures: [
      { value: '200', label: 'young people a day at opening' },
      { value: '400', label: 'a day at two hundred seats' },
      {
        value: '1,000',
        label: 'a day at the full build of five hundred seats',
      },
    ],
    note: 'These are the numbers Ardú is built for. What it achieves is published as it happens, every month.',
  },
  road: {
    title: 'The road ahead',
  },
  measure: {
    title: 'How we measure',
    body: 'Every month Ardú publishes attendance by shift, courses completed and certificates issued, work found and income reported by participants, and the accounts. Supporters receive the statement; partners and funders may ask for the full ledger.',
    items: [
      'Attendance, by shift',
      'Courses completed, certificates issued',
      'Work found, income reported',
      'The accounts, reconciled monthly',
    ],
  },
} as const;

/* ------------------------------------------------------------- partners */

export const partners = {
  hero: {
    eyebrow: 'Partner with Ardú',
    title: 'Bring what money cannot buy.',
    lead: 'A hall in Gaza City with two hundred young people a day, power that stays on and internet that holds, ready for the programmes you already run and the opportunities you can open.',
  },
  why: {
    title: 'Why partner',
    items: [
      {
        title: 'A ready audience',
        text: 'Two hundred motivated young adults a day, selected on published criteria, in one place, with the connectivity to join your programme live.',
      },
      {
        title: 'A place that works',
        text: 'Deliver in person or remotely into a room with power, internet, screens and a team on the ground to run the floor.',
      },
      {
        title: 'Reporting you can use',
        text: 'Attendance, completion and outcomes reported each cycle, with the data your own funders ask for.',
      },
    ],
  },
  bring: {
    title: 'What a partner can bring',
    items: [
      'A course or curriculum, delivered in cycles',
      'Trainers and mentors, in person or online',
      'Laptops and equipment',
      'Jobs, internships and freelance clients for the people who come out of Ardú',
      'Certificates and pathways into further study',
      'Your voice: tell your network what is rising in Gaza City',
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
        text: 'Scheduled into Ardú’s calendar, announced to participants, run with our team on the floor.',
      },
      {
        title: 'Reporting',
        text: 'Each cycle closes with attendance, completion and outcomes.',
      },
    ],
    note: 'No partner is named publicly before its agreement is signed.',
  },
  funders: {
    title: 'For funders and institutions',
    body: 'Foundations, companies and institutional funders can take a whole stage, from clearing the rubble to the first kilowatts of solar, and follow it through with full figures and reporting. The complete plan, with stages, costs, verification, the energy design and the earned-income model, is shared on request, together with the location of the hall.',
  },
} as const;

/* -------------------------------------------------------------- support */

export const support = {
  hero: {
    eyebrow: 'Support Ardú',
    title: 'Lift it with us.',
    lead: 'From the rubble of one home, a place for thousands of young people over the years ahead. Every gift moves the next step, and every step comes with its receipts.',
  },
  give: {
    title: 'Give',
    body: 'Giving runs through Ardú’s campaign page, on a trustee route that has already carried two years of public giving with every pound accounted for. Give once or monthly, in the amount that is right for you.',
  },
  levels: {
    title: 'What a gift makes possible',
    items: [
      {
        amount: '£150',
        title: 'A seat',
        text: 'A chair, a desk and a share of a laptop for one young person.',
      },
      {
        amount: '£750',
        title: 'A laptop',
        text: 'Shared by two shifts a day, for those who come without one.',
      },
      {
        amount: '£4,500',
        title: 'A month of Ardú',
        text: 'The team, the internet and the lights for a month: two hundred young people a day.',
      },
      {
        amount: '£7,500',
        title: 'A kilowatt that works twice',
        text: 'Ten seats on power that never cuts by day, and the neighbourhood’s light outside the hall’s hours.',
      },
    ],
    note: 'Any amount counts. The campaign page lists these and other levels in pounds.',
  },
  stage: {
    title: 'Fund a stage',
    body: 'Foundations, companies and major donors can take a whole stage and see it through: clearing the rubble; light, water and the fibre line; seats and laptops; the first months of running; the first kilowatts of solar. Each stands on its own and is built in order. Figures, quotes and verification are shared in a direct conversation.',
  },
  safeguards: {
    title: 'How gifts are safeguarded',
    steps: [
      {
        title: 'One route in.',
        text: 'Gifts are held in the United Kingdom by an academic trustee under a signed agreement.',
      },
      {
        title: 'Stage by stage.',
        text: 'Released against each agreed stage to an account used only for Ardú, and spent against written quotes.',
      },
      {
        title: 'A record for every expense.',
        text: 'A number, a receipt, a contract where it applies, and a photograph of what was bought or built.',
      },
      {
        title: 'Separate hands, monthly statements.',
        text: 'Whoever spends does not keep the books. Supporters receive an itemised statement every month; funders may ask for the full ledger.',
      },
    ],
    small:
      'Ardú is an unregistered initiative; formal registration is planned. No charitable registration or tax deductibility is claimed. No partner is named before its agreement is signed. Giving runs through Ardú’s campaign page; no payment is collected on this website.',
  },
  share: {
    title: 'Share it',
    body: 'If you cannot give, send Ardú to one person who would want to see the rubble go.',
    text: 'Under the rubble of a home in Gaza City, a place is rising where 200 young people a day will have power, internet, courses and mentors. Not relief. A lifting.',
  },
} as const;

/* -------------------------------------------------------------- contact */

export const contactPage = {
  hero: {
    eyebrow: 'Contact',
    title: 'Write to us.',
    lead: 'One address for everything. We reply within a week.',
  },
  routes: [
    {
      title: 'Partners and funders',
      text: 'Ask for the full plan and the location of the hall, or tell us what you can bring.',
      subject: 'plan',
    },
    {
      title: 'Young people in Gaza',
      text: 'Registration criteria are published before the first intake. Leave your name and we will tell you when.',
      subject: 'youth',
    },
    {
      title: 'Press and media',
      text: 'Interviews, background and photographs as they become available.',
      subject: 'press',
    },
  ],
  linkedin: 'Follow the work on LinkedIn',
} as const;

export const footer = {
  tagline: 'Built in Gaza. Not relief. A lifting.',
  explore: 'Explore',
  connect: 'Connect',
  small:
    'Ardú is an unregistered youth initiative in Gaza City; formal registration is planned.',
} as const;
