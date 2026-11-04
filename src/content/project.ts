/**
 * Ardú · public site content · November 2026.
 *
 * Ardú is presented as an organisation, not as a building: a vision, the
 * people it serves, the results it measures itself by, and the projects that
 * carry it. The projects themselves live in `projects.ts`. Operational detail
 * (payroll, energy arithmetic, running costs) is not published here; it is
 * shared with partners and funders on request.
 */

export const project = {
  name: 'Ardú',
  title: 'Ardú · A youth organisation in Gaza City',
  titleTemplate: '%s · Ardú',
  description:
    'Ardú is a youth organisation born under the rubble of the home in Gaza City where its founder’s road began. It lifts young people over everything between them and their ambition, starting with university students and graduates in technology and medicine, through projects you can see, count and fund in the open. Not relief. A lifting.',
  ogTitle:
    'Ardú lifts Gaza’s young people over everything between them and their ambition.',
  ogDescription:
    'A youth organisation born under the rubble of the home in Gaza City where its founder’s road began: guidance, learning, openings and places that work, for university students and graduates in technology and medicine first. Its first project is a hall rising over that rubble. Not relief. A lifting.',
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
  projects: { href: '/projects', label: 'Projects', title: 'Projects' },
} as const;

/** The giving panel's anchor: on the home page in place, elsewhere on the support page. */
export const giveAnchor = {
  id: 'give',
  here: '#give',
  href: `${pages.support.href}#give`,
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
  project: 'See the project',
  allProjects: 'All projects',
  fundStage: 'Fund this stage',
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
  titleStart:
    'Ardú lifts Gaza’s young people over everything between them and ',
  titleEmphasis: 'their ambition.',
  lead: 'Ardú is a youth organisation born under the rubble of the home in Gaza City where its founder’s road began. The road from ability to income here is full of things that trip a young person: nobody ahead to guide them, a degree that now exists only online, skills the market cannot see, doors that stay shut, power and internet that cut mid-sentence. Ardú lifts them over each one, starting with university students and graduates in technology and medicine, through projects you can see, count and fund in the open. Ardú is Irish for a lifting. Not relief. A lifting.',
  road: {
    start: 'Under the rubble',
    stops: ['Guidance', 'Learning', 'Openings', 'A place that works'],
    end: 'their ambition',
    caption:
      'The road Ardú opens: guidance from people who have walked it, learning that counts, openings that lead to income, and a place where the work gets done.',
  },
} as const;

export const organisation = {
  title: ['An organisation,', 'not a building.'],
  body: 'Ardú is built to deliver a result, not a product: young people in Gaza reaching the ambition their ability has earned them, from where they are. It works through projects, each with a status you can see, stages you can count and a page with what it needs. The first is a hall rising over the rubble where the founder’s road began. More follow as Ardú adopts them, each with its own figures.',
  facts: [
    {
      icon: 'graduation',
      title: 'Who it serves',
      text: 'University students and graduates in technology and medicine, in Gaza, first: the two fields where ability is most concentrated and most stranded.',
    },
    {
      icon: 'grow',
      title: 'What changes',
      text: 'Degrees kept on track through the war, first incomes earned, first jobs found, and a circle around each person of people who have walked the road.',
    },
    {
      icon: 'receipt',
      title: 'How it works',
      text: 'Projects built in the open: a trustee route for every pound, a receipt and a photograph for every expense, a statement to supporters every month.',
    },
  ],
  more: 'About Ardú',
} as const;

export const statement = {
  body: 'Gaza’s young people are not short of ability or ambition. They are short of the road: someone who has walked it to guide them, the skills and tools the market asks for, a door that opens, and a place where the work can be done. Ardú lifts them over each of those gaps, and measures itself by one result: degrees kept, income earned, work found.',
} as const;

export const pillars = {
  title: ['Four things', 'every road needs.'],
  items: [
    {
      icon: 'people',
      title: 'Guidance from people who have walked the road',
      short:
        'Mentors and introductions from people who have done it: how to keep a degree alive, land the first client, pass the interview, price the work.',
      long: 'Guidance comes first. Mentoring, introductions and the kind of advice you only get from someone who has done it: how to keep a degree on track through a blackout, land the first client, pass the interview, price the work and keep the job. Live sessions bring in founders, team leads, doctors and academics.',
    },
    {
      icon: 'learn',
      title: 'Learning that counts',
      short:
        'Courses with partner organisations in repeating cycles, with certificates from the partner, and the study materials a degree demands.',
      long: 'Courses run with partner organisations in repeating cycles, so nobody who misses a round waits long: English, freelancing and remote work, career readiness, digital skills, and the study materials and exam preparation that students of medicine and technology need. Certificates come from the partner.',
    },
    {
      icon: 'work',
      title: 'Openings that lead to income',
      short:
        'Freelance clients, remote-work pipelines and introductions, so a skill becomes a client, a certificate, an interview, an income.',
      long: 'Freelance clients, remote-work pipelines with partners, and a portfolio built on real work, so a skill turns into a client, a certificate, an interview, an income.',
    },
    {
      icon: 'power',
      title: 'A place where the work gets done',
      short:
        'Power that stays on, internet that holds, a seat and quiet, so nothing on the road is lost to a blackout. The first is Ardú Hall.',
      long: 'Power that stays on through the working day, internet that holds, light, water and quiet, because a road is no use if the work is lost to a blackout. Ardú builds these places as projects, each with a team on the ground. The first is Ardú Hall, rising over the rubble in Gaza City.',
    },
  ],
  more: 'How we work',
} as const;

export const changes = {
  title: ['What changes', 'when the road opens.'],
  items: [
    {
      icon: 'graduation',
      text: 'A medical student whose university now exists only online sits her lectures and her exams on a connection that holds, with the materials her year demands.',
    },
    {
      icon: 'code',
      text: 'A self-taught developer stops walking for signal and starts delivering for clients.',
    },
    {
      icon: 'briefcase',
      text: 'A graduate with a skill and no opening leaves with a certificate, a portfolio and an interview.',
    },
    {
      icon: 'laptop',
      text: 'A freelancer who lost her clients to power cuts delivers on time again, from a desk that is hers for the month.',
    },
  ],
  closing:
    'The measure is not seats filled. It is degrees kept, income earned and work found, published every month.',
  more: 'Our impact',
} as const;

export const projectsSection = {
  title: ['Our projects,', 'in the open.'],
  lead: 'Ardú works through projects. Each one has a status you can see, stages you can count, and a page with what it needs and where every pound went.',
  note: 'More projects are added here as Ardú adopts them, each with its own status and figures.',
  needs: 'Needs now',
} as const;

export const weight = {
  title: ['Designed to carry', 'its own weight.'],
  body: 'Every kilowatt of solar Ardú installs works twice: ten seats by day, and outside the hall’s hours surplus power and internet for the neighbourhood at below the market price, with the income going back into keeping the doors open. Together with the freelancer desks, the place is designed to earn a growing share of its own running costs, so that every gift goes further and lasts longer.',
  figure: {
    value: '×2',
    label:
      'A kilowatt that works twice: the hall by day, the street after hours.',
  },
} as const;

export const give = {
  icon: 'heart',
  title: ['Support', 'Ardú.'],
  body: 'Give to the organisation with any amount and Ardú puts it where the road is blocked, or fund a stage of a project you can picture. Either way your gift travels a trustee route that has already carried two years of public giving with every pound accounted for, and every stage comes with its receipts.',
  organisationLabel: 'Support the organisation',
  projectLabel: 'Or fund a project stage',
  label: 'What a gift lifts',
  levelCta: 'Give',
  any: {
    text: 'Every pound moves the road.',
    cta: 'Give any amount',
  },
  projects: {
    cta: 'Fund a project stage',
  },
  secure:
    'Secure checkout by Stripe, in pounds, by card or digital wallet. No payment details touch this website.',
  more: 'How gifts are safeguarded',
  pending: 'Giving opens shortly. Write to us to be told the moment it does.',
} as const;

export const ways = {
  title: ['Three ways', 'to lift it.'],
  partner: {
    icon: 'handshake',
    title: 'Partner',
    text: 'Bring a course, mentors, laptops, or openings for the people who come through Ardú. The half that money cannot buy.',
  },
  stage: {
    icon: 'landmark',
    title: 'Fund a stage',
    text: 'Foundations, companies and major donors can take a whole stage of a project, from the rubble to the first kilowatts, and see it through with full figures and reporting.',
  },
  note: 'A gift to the organisation, a partnership, or a whole stage of a project. Each one moves the road.',
} as const;

export const trustStrip = {
  title: ['Every pound,', 'accounted for.'],
  body: 'Gifts are held in the United Kingdom by an academic trustee under a signed agreement, released stage by stage to an account used only for Ardú, and spent against written quotes. Every expense gets a number, a receipt and a photograph of what it became, and supporters receive a monthly statement.',
  more: 'How gifts are safeguarded',
} as const;

export const founderStrip = {
  title: ['Founded by someone', 'who walked this road alone.'],
  body: 'Ahmed Abuhassan was pulled out of the rubble of his family’s home in October 2023. He learned to code afterwards on a borrowed laptop, walking each morning to find a socket and a signal, with nobody ahead of him on the road. Ardú is the lifting he needed, built as an organisation for the young people who need it now.',
  more: 'About Ardú',
} as const;

export const ctaBand = {
  title: 'Help lift it.',
  body: 'One road began under this rubble. Ardú opens it for thousands of young people over the years ahead. Support the organisation, or fund the first stage of its first project.',
} as const;

/* ----------------------------------------------------------------- about */

export const about = {
  hero: {
    title: 'Ardú is an organisation born under the rubble, built to lift.',
    lead: 'In October 2023 an air strike levelled its founder’s family home in Gaza City. He was pulled out of the rubble and walked the road from there alone. Ardú is that road, built as an organisation so that nobody who comes after has to walk it alone: a vision, the projects that carry it, the partners who share it, and books that stay open.',
  },
  purpose: {
    vision: {
      title: 'Vision',
      text: 'Gaza’s young people reaching the ambition their ability has earned them, from where they are.',
    },
    mission: {
      title: 'Mission',
      text: 'To lift young people over everything between them and their ambition: guidance from people who have walked the road, learning that counts, openings that lead to income, and places where the work gets done. Ardú starts with university students and graduates in technology and medicine, and measures itself by one result: degrees kept, incomes earned, work found.',
    },
  },
  goals: {
    title: 'What Ardú sets out to do',
    items: [
      {
        icon: 'graduation',
        title: 'Keep students in their degrees.',
        text: 'For students whose universities now exist only online: the materials, the connection and the mentors that keep a year of study from being lost.',
      },
      {
        icon: 'briefcase',
        title: 'Turn ability into income.',
        text: 'For graduates with a skill and no opening: the guidance, the portfolio and the introductions that lead to a first client, a first job, a recognised certificate.',
      },
      {
        icon: 'people',
        title: 'Build the circle.',
        text: 'Gather under one roof what the organisations working on Palestinian talent already offer, and put a person who has walked the road beside each young person walking it now.',
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
      'University students and graduates in technology and medicine, in Gaza, first. Technology because it is the founder’s own road and the field most open to earning from where you are. Medicine because it is where Gaza’s students are most numerous and most stranded: universities that exist only online, no laboratories, exams sat on connections that cut mid-sentence.',
      'Both are professions a person can carry anywhere. Ardú starts there, for adults of eighteen and over, women and men equally, and widens as its projects and partners allow.',
    ],
  },
  story: {
    title: 'The story',
    body: [
      'The house above the hall did not survive. The hall did, and so did an idea: that a young person with ability should not have to walk for hours to find a socket and a signal to do their work.',
      'For two years Ardú’s founder did exactly that: learning to code on a borrowed laptop with a cracked screen, charging where there was power, working where there was signal, and mentoring others caught in the same blackout. Along the way he built live websites for local shops, NGOs and startups, and saw the same pattern everywhere. The young people around him were not short of ability or ambition. They were short of the road: someone ahead of them who had walked it, the skills and tools the market asks for, a door that opens, and a place where the work could be done.',
      'Ardú is the organisation that puts all of that within reach, project by project. Its first project is the hall under that rubble.',
    ],
  },
  name: {
    word: 'Ardú',
    meaning: 'Irish for “a lifting, a raising up.”',
    body: 'The name is a promise: that the people who come through Ardú leave higher than they came in, with a degree kept, a skill, a certificate, a client, a job. Not relief. A lifting.',
  },
  principles: {
    title: 'What we stand on',
    items: [
      {
        icon: 'sparkles',
        title: 'Ability is everywhere. Opportunity is not.',
        text: 'Ardú exists to close that gap, for women and men equally, with identical hours and services.',
      },
      {
        icon: 'handheart',
        title: 'Dignity, not charity.',
        text: 'People at Ardú learn, earn, build and compete. Every project is a workshop, not a waiting room.',
      },
      {
        icon: 'bookcheck',
        title: 'Open books.',
        text: 'Every pound is held by a trustee, spent against a written quote, and reported with a receipt and a photograph.',
      },
      {
        icon: 'recycle',
        title: 'Built to last.',
        text: 'Ardú’s places earn a growing share of their own keep, so the organisation does not live or die by the next appeal.',
      },
      {
        icon: 'list',
        title: 'Built in order.',
        text: 'Each stage of each project stands on its own and is finished before the next begins.',
      },
    ],
  },
  governance: {
    title: 'How Ardú is run',
    items: [
      {
        icon: 'user',
        title: 'A founder who leads, and teams on the ground',
        text: 'Ahmed Abuhassan founded Ardú and leads it. Each project has its own team on the ground, on written contracts, because the work is designed to stand on more than one person.',
      },
      {
        icon: 'shield',
        title: 'One route for every pound',
        text: 'Gifts are held in the United Kingdom by an academic trustee under a signed agreement, released stage by stage to an account used only for Ardú, and spent against written quotes.',
      },
      {
        icon: 'users',
        title: 'An advisory circle',
        text: 'People who have walked the road, from Gaza and from the organisations Ardú works with, read the plans before they are published. Names appear here as each agrees to be named.',
      },
      {
        icon: 'list',
        title: 'Unregistered today, registered when the ground allows',
        text: 'Ardú is an unregistered initiative; formal registration is planned once its first project stands. No charitable registration or tax deductibility is claimed.',
      },
    ],
  },
  founder: {
    title: 'The founder',
    body: [
      'Ahmed Abuhassan is a self-taught software developer from Gaza City. Before software he worked in electrical installation, which is why Ardú’s power is designed with engineers and technicians he has worked beside. He has built live websites for local shops, NGOs and startups, and mentored young people online through the blackout.',
      'He founded Ardú and leads it, with teams on the ground running each project, because the organisation is designed to stand on more than one person.',
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
    title: 'How Ardú lifts.',
    lead: 'Four things every road to an ambition needs, delivered through projects and partners, for university students and graduates in technology and medicine first.',
  },
  who: {
    title: 'Who it is for',
    body: 'Adults of eighteen and over in Gaza, starting with university students and graduates in technology and medicine: students whose universities now exist only online, graduates with a skill and no opening, freelancers who lose clients to power cuts, self-taught developers, designers and writers. Places in each project are allocated on published criteria that weigh ability and need together.',
    note: 'Registration opens before the first intake. Leave your name and we will tell you when.',
    cta: 'Tell me when',
  },
  where: {
    title: 'Where it happens',
    lead: 'The four things above are delivered through projects, each with its own page, status and figures.',
  },
} as const;

/* --------------------------------------------------------------- impact */

export const impactPage = {
  hero: {
    title:
      'The measure is not seats filled. It is degrees kept, income earned and work found.',
    lead: 'Ardú is built around results, not products: young people in Gaza, starting with students and graduates in technology and medicine, keeping their degrees, earning and working from where they are. This page is where the results live: the projects that deliver them, the indicators they are measured by, and the figures as they come in.',
  },
  projects: {
    title: 'The projects that deliver it',
    lead: 'Each project carries a status you can see, stages you can count, and a page with what it needs and where every pound went.',
  },
  changes: {
    title: 'What changes',
    lead: 'The people this road is built for. Their own stories follow here, published as they happen.',
  },
  indicators: {
    title: 'How we measure',
    lead: 'Five indicators, published every month from the first cohort onward, and never before. The dash is where the number goes.',
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
    note: 'Counting starts with the first cohort of the first project.',
  },
  measure: {
    title: 'How it is reported',
    body: 'Every month Ardú publishes, project by project, attendance and participation, courses completed and certificates issued, work found and income reported by participants, and the accounts. Supporters receive the statement; partners and funders may ask for the full ledger.',
    items: [
      { icon: 'calendar', text: 'Participation, by project and by cycle' },
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
    lead: 'Ardú’s projects run on the programmes you already deliver and the openings you can give: courses, mentors, laptops, jobs, for university students and graduates in technology and medicine in Gaza City.',
  },
  why: {
    title: 'Why partner',
    items: [
      {
        icon: 'users',
        title: 'A ready audience',
        text: 'Motivated young adults selected on published criteria, students and graduates in technology and medicine first, with the connectivity to join your programme live.',
      },
      {
        icon: 'building',
        title: 'Places that work',
        text: 'Deliver in person or remotely into Ardú Hall, a room with power, internet, screens and a team on the ground, or online through Ardú’s programmes.',
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
      'Jobs, internships and freelance clients for the people who come through Ardú',
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
        text: 'Scheduled into the project’s calendar, announced to participants, run with our team on the ground.',
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
    body: 'Foundations, companies and institutional funders can take a whole stage of a project, from clearing the rubble to the first kilowatts of solar, and follow it through with full figures and reporting. The complete plan, with stages, costs, verification, the energy design and the earned-income model, is shared on request, together with the location of the hall.',
  },
} as const;

/* -------------------------------------------------------------- support */

export const support = {
  hero: {
    title: 'Support Ardú.',
    lead: 'Give to the organisation with any amount, or fund a stage of a project you can picture. Either way your gift travels a trustee route that has carried two years of public giving with every pound accounted for, and comes back to you as receipts and photographs.',
  },
  projects: {
    title: 'Fund a project',
    lead: 'Every project has a stage that is open for funding now. Pick the one you can picture.',
  },
  levels: {
    title: 'Fund this stage',
    lead: 'Each gift below is one piece of the hall. Choose what yours lifts, or give any amount; every pound travels the trustee route and comes back to you as a receipt and a photograph.',
    items: [
      {
        key: 'seat',
        amount: '£150',
        icon: 'armchair',
        title: 'A seat',
        text: 'A chair, a desk and a share of a laptop for one young person.',
      },
      {
        key: 'laptop',
        amount: '£750',
        icon: 'laptop',
        title: 'A laptop',
        text: 'Shared by two shifts a day, for those who come without one.',
      },
      {
        key: 'month',
        amount: '£4,500',
        icon: 'calendar',
        title: 'A month of Ardú',
        text: 'The team, the internet and the lights for a month: two hundred young people a day.',
      },
      {
        key: 'kilowatt',
        amount: '£7,500',
        icon: 'sun',
        title: 'A kilowatt that works twice',
        text: 'Ten seats on power that never cuts by day, and the neighbourhood’s light outside the hall’s hours.',
      },
    ],
  },
  stage: {
    icon: 'landmark',
    title: 'Fund a whole stage',
    body: 'Foundations, companies and major donors can take a whole stage of a project and see it through: clearing the rubble; light, water and the fibre line; seats and laptops; the first months of running; the first kilowatts of solar. Each stands on its own and is built in order. Figures, quotes and verification are shared in a direct conversation.',
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
    body: 'If you cannot give, send Ardú to one person who would want to see the rubble go.',
    text: 'From under the rubble of the home where its founder’s road began, Ardú is rising in Gaza City to lift young people over everything between them and their ambition: guidance, learning, openings and places that work, for students and graduates in technology and medicine first. Not relief. A lifting.',
  },
} as const;

/* -------------------------------------------------------------- contact */

export const contactPage = {
  hero: {
    title: 'Write to us.',
    lead: 'One address for everything. We reply within a week.',
  },
  routes: [
    {
      icon: 'handshake',
      title: 'Partners and funders',
      text: 'Ask for the full plan and the location of the hall, or tell us what you can bring.',
      subject: 'plan',
    },
    {
      icon: 'graduation',
      title: 'Young people in Gaza',
      text: 'Registration criteria are published before the first intake. Leave your name and we will tell you when.',
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
  tagline: 'Built in Gaza. Not relief. A lifting.',
  explore: 'Explore',
  connect: 'Connect',
  small:
    'Ardú is an unregistered youth organisation in Gaza City; formal registration is planned.',
} as const;
