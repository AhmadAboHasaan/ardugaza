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
    'Ardú is a youth initiative rising from under the rubble of the home in Gaza City where its founder’s road began. It lifts young people over everything between them and their ambition: guidance from people who have walked the road, learning that counts, openings that lead to income, and a place where the power stays on and the internet holds. Not relief. A lifting.',
  ogTitle:
    'Ardú lifts Gaza’s young people over everything between them and their ambition.',
  ogDescription:
    'A youth initiative rising from under the rubble of the home in Gaza City where its founder’s road began: guidance, learning, openings and a place that works. Two hundred young people a day at the opening, a thousand at the full build. Not relief. A lifting.',
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
  titleStart:
    'Ardú lifts Gaza’s young people over everything between them and ',
  titleEmphasis: 'their ambition.',
  lead: 'Ardú is a youth initiative rising from under the rubble of the home in Gaza City where its founder’s road began. The road from ability to income here is full of things that trip a young person: nobody ahead to guide them, skills the market cannot see, doors that stay shut, power and internet that cut mid-sentence. Ardú lifts them over each one, with guidance, learning, openings and a place where the work gets done, so they can learn, earn and compete from where they are. Ardú is Irish for a lifting. Not relief. A lifting.',
  road: {
    start: 'Under the rubble',
    stops: ['Guidance', 'Learning', 'Openings', 'A place that works'],
    end: 'their ambition',
    caption:
      'The road Ardú opens: guidance from people who have walked it, learning that counts, openings that lead to income, and a place where the work gets done.',
  },
} as const;

export const vision = {
  figure: { value: '1,000', label: 'young people a day, at the full build' },
  title: 'A thousand young people a day, lifted.',
  body: 'That is the full size of Ardú: five hundred seats in the hall under the rubble where its founder’s road began, two shifts a day, and a thousand young people walking in with ability and walking out with a client, a certificate, an interview, an income. Mentors who have walked the road. Courses with partner organisations, in cycles that never stop. Power that never cuts, shared with the street after hours. And when the hall is full, the same programme online, beyond the walls.',
  bridge: 'Nobody gets there in one step. Ardú gets there in four.',
} as const;

export const statement = {
  body: 'Gaza’s young people are not short of ability or ambition. They are short of the road: someone who has walked it to guide them, the skills and tools the market asks for, a door that opens, and a place where the work can be done. Ardú lifts them over each of those gaps, and measures itself by one result: young people earning, working and competing from where they are.',
} as const;

export const pillars = {
  title: ['Everything the road to an ambition needs,', 'in one place.'],
  items: [
    {
      icon: 'people',
      title: 'Guidance from people who have walked the road',
      short:
        'Mentors and introductions from people who have done it: how to land the first client, pass the interview, price the work.',
      long: 'Guidance comes first. Mentoring, introductions and the kind of advice you only get from someone who has done it: how to land the first client, pass the interview, price the work and keep the job. Live sessions bring in founders, team leads and academics.',
    },
    {
      icon: 'learn',
      title: 'Learning that counts',
      short:
        'Courses with partner organisations in repeating cycles, with certificates from the partner.',
      long: 'Four course tracks run with partner organisations in repeating cycles, so nobody who misses a round waits long: English; freelancing and remote work; career readiness; digital skills. Certificates come from the partner.',
    },
    {
      icon: 'work',
      title: 'Openings that lead to income',
      short:
        'Freelancer desks, remote-work pipelines and introductions, so a skill becomes a client, a certificate, an interview, an income.',
      long: 'Full-day desks for freelancers, remote-work pipelines with partners, and a portfolio built on real work, so a skill turns into a client, a certificate, an interview, an income.',
    },
    {
      icon: 'power',
      title: 'A place where the work gets done',
      short:
        'Power that stays on, internet that holds, a seat and quiet, so nothing on the road is lost to a blackout.',
      long: 'Five hundred square metres with power that stays on through the working day, internet that holds, light, water and quiet, because a road is no use if the work is lost to a blackout. A hundred seats a shift, two shifts a day, with a team on the ground running the floor.',
    },
  ],
  more: 'What we do',
} as const;

export const changes = {
  title: ['What changes', 'when the road opens.'],
  items: [
    {
      icon: 'graduation',
      text: 'A student whose university now exists only online sits her lectures and her exams on a connection that holds.',
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
    'The measure is not seats filled. It is income earned and work found, published every month.',
  more: 'Our impact',
} as const;

export const direction = {
  title: 'The road there has four stages.',
  lead: 'Each one is a thing you can see, photograph and count, finished before the next begins, with a receipt for everything. The first is open now.',
  steps: [
    {
      number: '01',
      icon: 'clear',
      title: 'Clear',
      text: 'The rubble comes off the hall beneath the home. The first photographs come from here, and the first proof that this is real.',
    },
    {
      number: '02',
      icon: 'light',
      title: 'Light',
      text: 'Power, water and a fibre line that holds. The day the lights come on, a ruin becomes a place.',
    },
    {
      number: '03',
      icon: 'open',
      title: 'Open',
      text: 'A hundred seats, two shifts, the first partner courses, and the first two hundred young people a day. The day the first certificate is issued.',
    },
    {
      number: '04',
      icon: 'grow',
      title: 'Grow',
      text: 'Two hundred seats on the sun’s own power, a second floor towards five hundred, then online beyond the walls. The day the place starts paying part of its own way.',
    },
  ],
  note: 'The full plan, with figures and how every stage is verified, is shared with partners and funders.',
  fund: 'Fund the first stage',
  more: 'For partners and funders',
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

export const ways = {
  title: ['Three ways', 'to lift it.'],
  give: {
    icon: 'heart',
    title: 'Give',
    text: 'Fund the next stage through Ardú’s campaign page. A gift of any size moves it, and every stage comes with its receipts.',
  },
  partner: {
    icon: 'handshake',
    title: 'Partner',
    text: 'Bring a course, trainers, laptops, or jobs for the people who come out of Ardú. The half that money cannot buy.',
  },
  stage: {
    icon: 'landmark',
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
  title: ['Founded by someone', 'who walked this road alone.'],
  body: 'Ahmed Abuhassan was pulled out of the rubble of this home in October 2023. He learned to code afterwards on a borrowed laptop, walking each morning to find a socket and a signal, with nobody ahead of him on the road. Ardú is the lifting he needed, built for the young people who need it now.',
  more: 'About Ardú',
} as const;

export const ctaBand = {
  title: 'Help lift it.',
  body: 'One road began under this rubble. Ardú opens it for thousands of young people over the years ahead. Be part of the first stage.',
} as const;

/* ----------------------------------------------------------------- about */

export const about = {
  hero: {
    title: 'Ardú rises from the rubble its founder was pulled out of.',
    lead: 'In October 2023 an air strike levelled his family’s home in Gaza City. Beneath it, a hall of five hundred square metres stood on columns that held. The road he walked from that day is the road Ardú now opens for others.',
  },
  story: {
    title: 'The story',
    body: [
      'The house above the hall did not survive. The hall did, and so did an idea: that a young person with ability should not have to walk for hours to find a socket and a signal to do their work.',
      'For two years Ardú’s founder did exactly that: learning to code on a borrowed laptop with a cracked screen, charging where there was power, working where there was signal, and mentoring others caught in the same blackout. Along the way he built live websites for local shops, NGOs and startups, and saw the same pattern everywhere. The young people around him were not short of ability or ambition. They were short of the road: someone ahead of them who had walked it, the skills and tools the market asks for, a door that opens, and a place where the work could be done.',
      'Ardú puts all of that in one place, in the hall under that rubble, and opens it to two hundred young people a day at the start and a thousand at the full build.',
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
        icon: 'sparkles',
        title: 'Ability is everywhere. Opportunity is not.',
        text: 'Ardú exists to close that gap, for women and men equally, in separate sections with identical hours and services.',
      },
      {
        icon: 'handheart',
        title: 'Dignity, not charity.',
        text: 'People at Ardú earn, build and compete. The place is a workshop, not a waiting room.',
      },
      {
        icon: 'bookcheck',
        title: 'Open books.',
        text: 'Every pound is held by a trustee, spent against a written quote, and reported with a receipt and a photograph.',
      },
      {
        icon: 'recycle',
        title: 'Built to last.',
        text: 'Ardú earns a growing share of its own keep, so it does not live or die by the next appeal.',
      },
      {
        icon: 'list',
        title: 'Built in order.',
        text: 'Each stage stands on its own and is finished before the next begins.',
      },
    ],
  },
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
  founder: {
    title: 'The founder',
    body: [
      'Ahmed Abuhassan is a self-taught software developer from Gaza City. Before software he worked in electrical installation, which is why Ardú’s power is designed with engineers and technicians he has worked beside. He has built live websites for local shops, NGOs and startups, and mentored young people online through the blackout.',
      'He founded Ardú and leads it, with a team on the ground running the floor, because the place is designed to stand on more than one person.',
    ],
    caption: 'Ahmed Abuhassan, founder of Ardú',
    placeholder: ['From finding a socket', 'to building a place.'],
    linkedin: 'Ahmed on LinkedIn',
    partners: 'Partners are announced here as agreements are signed.',
  },
} as const;

/* ----------------------------------------------------------- what we do */

export const whatWeDo = {
  hero: {
    title:
      'Everything a young person needs to reach their ambition, in one place.',
    lead: 'Ardú lifts young people over what trips them on the road: with people who guide, learning that counts, openings that lead to income, and a place where the work gets done, every day.',
  },
  day: {
    title: 'A day at Ardú',
    body: 'Two four-hour shifts, eight to twelve and twelve to four, a hundred seats each, women and men in separate sections with identical hours and services. Freelancers work full days at their own desks. Partner courses run in the room, and mentors join in person and online.',
    figures: [
      { icon: 'clock', value: '8 to 12', label: 'first shift' },
      { icon: 'clock', value: '12 to 4', label: 'second shift' },
      { icon: 'armchair', value: '100', label: 'seats a shift' },
      { icon: 'users', value: '50 + 50', label: 'women and men, each shift' },
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
    title:
      'The measure is not seats filled. It is income earned and work found.',
    lead: 'Ardú is built around one result: young people in Gaza earning, working and competing from where they are. Here is what that looks like, and where it is going.',
  },
  changes: {
    title: 'What changes',
    lead: 'The people this road is built for. Their own stories follow here, published as they happen.',
  },
  scale: {
    title: 'The scale we are building toward',
    figures: [
      { icon: 'users', value: '200', label: 'young people a day at opening' },
      { icon: 'users', value: '400', label: 'a day at two hundred seats' },
      {
        icon: 'users',
        value: '1,000',
        label: 'a day at the full build of five hundred seats',
      },
    ],
    note: 'These are the numbers Ardú is built for. What it achieves is published as it happens, every month.',
  },
  road: {
    title: 'The road ahead has four stages.',
  },
  measure: {
    title: 'How we measure',
    body: 'Every month Ardú publishes attendance by shift, courses completed and certificates issued, work found and income reported by participants, and the accounts. Supporters receive the statement; partners and funders may ask for the full ledger.',
    items: [
      { icon: 'calendar', text: 'Attendance, by shift' },
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
    lead: 'A hall in Gaza City with two hundred young people a day, power that stays on and internet that holds, ready for the programmes you already run and the opportunities you can open.',
  },
  why: {
    title: 'Why partner',
    items: [
      {
        icon: 'users',
        title: 'A ready audience',
        text: 'Two hundred motivated young adults a day, selected on published criteria, in one place, with the connectivity to join your programme live.',
      },
      {
        icon: 'building',
        title: 'A place that works',
        text: 'Deliver in person or remotely into a room with power, internet, screens and a team on the ground to run the floor.',
      },
      {
        icon: 'chart',
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
    title: 'Lift it with us.',
    lead: 'One road began under this rubble. Every gift opens it a little further for the thousands who come next, and every stage comes with its receipts.',
  },
  give: {
    icon: 'heart',
    title: 'Give',
    body: 'Giving runs through Ardú’s campaign page, on a trustee route that has already carried two years of public giving with every pound accounted for. Give once or monthly, in the amount that is right for you.',
  },
  levels: {
    title: 'What a gift makes possible',
    items: [
      {
        amount: '£150',
        icon: 'armchair',
        title: 'A seat',
        text: 'A chair, a desk and a share of a laptop for one young person.',
      },
      {
        amount: '£750',
        icon: 'laptop',
        title: 'A laptop',
        text: 'Shared by two shifts a day, for those who come without one.',
      },
      {
        amount: '£4,500',
        icon: 'calendar',
        title: 'A month of Ardú',
        text: 'The team, the internet and the lights for a month: two hundred young people a day.',
      },
      {
        amount: '£7,500',
        icon: 'sun',
        title: 'A kilowatt that works twice',
        text: 'Ten seats on power that never cuts by day, and the neighbourhood’s light outside the hall’s hours.',
      },
    ],
    note: 'Any amount counts. The campaign page lists these and other levels in pounds.',
  },
  stage: {
    icon: 'landmark',
    title: 'Fund a stage',
    body: 'Foundations, companies and major donors can take a whole stage and see it through: clearing the rubble; light, water and the fibre line; seats and laptops; the first months of running; the first kilowatts of solar. Each stands on its own and is built in order. Figures, quotes and verification are shared in a direct conversation.',
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
      'Ardú is an unregistered initiative; formal registration is planned. No charitable registration or tax deductibility is claimed. No partner is named before its agreement is signed. Giving runs through Ardú’s campaign page; no payment is collected on this website.',
  },
  share: {
    title: 'Share it',
    body: 'If you cannot give, send Ardú to one person who would want to see the rubble go.',
    text: 'From under the rubble of the home where its founder’s road began, Ardú is rising in Gaza City to lift young people over everything between them and their ambition: guidance, learning, openings and a place that works. A thousand a day at the full build. Not relief. A lifting.',
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
    'Ardú is an unregistered youth initiative in Gaza City; formal registration is planned.',
} as const;
