/**
 * Ardú · site content v3 · October 2026.
 * Every string on the site lives here. Figures are estimates at Gaza prices
 * in October 2026, confirmed by written quotes before any spending.
 */

export const project = {
  name: 'Ardú',
  title: 'Ardú · Under the rubble, a room for 200 young people a day',
  planTitle: 'The full plan · Ardú',
  description:
    'A youth initiative in Gaza City: a hall cleared from the rubble of a home, lit, connected and kept open, with every stage you can see, photograph and count. Not relief. A lifting.',
  ogTitle: 'Under the rubble of a home in Gaza City, a room for 200 young people a day.',
  ogDescription: 'Ardú clears it, lights it, connects it and keeps it open. Five stages, each with its receipts.',
  founder: 'Ahmed Abuhassan',
  founderLinkedin: 'https://www.linkedin.com/in/ahmadabohassan',
  figuresDate: 'October 2026',
} as const;

export const nav = [
  { href: '/#place', label: 'The place' },
  { href: '/#stages', label: 'Stages' },
  { href: '/#trust', label: 'Trust' },
  { href: '/plan', label: 'Full plan' },
] as const;

export const hero = {
  lead:
    'Ardú clears it, lights it, connects it and keeps it open. A seat, power that stays on, a connection that holds, and people who have walked the road. Not relief. A lifting.',
  statusLive: 'Stage one, clearing the rubble, is open for funding.',
  statusPending: 'Stage one, clearing the rubble, opens for funding on',
  poster: {
    top: ['Gaza City', 'Stage one'],
    title: ['Room for', 'possibility.'],
    seats: 100,
    bottom: 'planned seats per shift · two shifts a day',
    note: 'Schematic, not a floor plan. Interior photographs follow stage one.',
  },
  caption: 'A seat is the beginning. Power, connection and people make it work.',
  foot: ['One room. Two hundred futures a day.', 'The stages are below'],
} as const;

export const why = {
  lead: ['A seat. A socket. A connection that stays on.', 'Somebody who has walked the road.'],
  body:
    'Young people in Gaza have the talent. What they do not have is a place to sit, power that lasts a working day, a connection that holds, and somebody who has walked the road before them. Ardú puts those four things in one room and measures itself by one result: young people earning, working and competing from where they are.',
  nameNote: 'Irish for “a lifting, a raising up.”',
} as const;

export const place = {
  body1:
    'A family home in central Gaza City was brought down in the war. Beneath it stands a hall of about 500 square metres, on columns that held. Stage one clears the rubble, and what comes out of it, steel and stone, goes back into preparing the space.',
  body2:
    'Nothing in the opening needs cement, so the opening does not wait on the crossings. The hall is family property, used by Ardú at a symbolic rent that enters the accounts, and before anyone sits under it an engineer signs off the structure.',
  small:
    'Interior photographs follow stage one. For the safety of the people in it, the exact location is shared with funders and partners and not published.',
  caption: 'Central Gaza City · about 500 m² · interior photographs to follow',
  placeholder: {
    measure: '500 m²',
    label: 'A floor you can stand on',
    note: 'Spatial study only, not an architectural plan',
  },
} as const;

export const stages = [
  {
    id: 'rubble',
    number: '01',
    title: 'Clear the rubble',
    short: 'The hall beneath the home is freed. The first photographs come from here.',
    amount: 'about $15,000',
    detail:
      'The home’s rubble is removed and the hall beneath it is freed. Salvaged steel and stone go into preparing the floor and the space.',
    evidence: 'Before-and-after photographs; labour and haulage receipts.',
  },
  {
    id: 'light',
    number: '02',
    title: 'Light, water, line',
    short: 'Wiring and lighting, toilets and water, the fibre line and the network.',
    amount: 'about $30,000',
    detail:
      'Wiring and lighting ($10–12k), toilets and water ($10–12k), fibre installation ($5–8k), internal network and UPS ($3–4k). The space becomes a place.',
    evidence: 'Invoices; the fibre contract; photographs.',
  },
  {
    id: 'seats',
    number: '03',
    title: 'Seats and laptops',
    short: '100 seats, and 10 shared laptops for those who come without one.',
    amount: 'about $20,000',
    detail:
      'Furniture for 100 seats, and 10 shared laptops at $950–1,000 each, bought locally as they become available, for the people who come without one. With the engineer’s structural report, a secured equipment room and a 10% reserve on top, about $10,000.',
    evidence: 'Quotes and invoices; photographs of the room ready for its first morning.',
  },
  {
    id: 'running',
    number: '04',
    title: 'Keep the doors open',
    short: 'Six months of running at about $6,000 a month: a team of four, internet, consumables, maintenance.',
    amount: '$35,000',
    detail:
      'A team of four on written contracts at $4,000 a month between them to start, stepping up together as funding grows; a part-time accountant by contract keeps the books; internet, consumables and maintenance. From the first month the place starts paying for part of itself.',
    evidence: 'Contracts; the monthly payroll sheet; attendance; the course calendar.',
  },
  {
    id: 'grow',
    number: '05',
    title: 'Grow on the numbers',
    short: 'To 200 seats and 20 kilowatts, then a second floor, then online.',
    amount: 'block by block',
    detail:
      'To 200 seats and 20 kilowatts in the current hall, ten seats and one kilowatt at a time. Then a second floor towards 500 seats when the engineer confirms it ($70,000–$100,000). Then the same programme online, beyond the walls. Each step is built only when the numbers and the structure say so.',
    evidence: 'Structural report; photographs; the inverter’s own monitoring data.',
  },
] as const;

export const stagesCopy = {
  intro:
    'Every stage is a thing on the ground with its own receipts, funded in order and spent against written quotes. Estimates at Gaza prices, October 2026.',
  totalLabel: 'Doors open at 100 seats · stages 1 to 4 with the reserve',
  total: 'about $110,000',
  sun: {
    title: 'The sun has its own chapter.',
    text:
      'A kilowatt of solar with storage costs about $10,000 in Gaza City today and powers ten seats. The first ten kilowatts are being arranged separately with people in Ireland’s renewable-energy sector, and will be announced here the day they are agreed. Seats go in as kilowatts arrive, ten at a time, because in Gaza today a seat without its own power is not a seat.',
  },
  caveat:
    'Every stage stands on its own and is built in order: the first $15,000 lifts the rubble whether or not another dollar arrives. Estimates at Gaza prices as of October 2026; major expenses require written quotes before spending. Stage five is additional and conditional.',
  detailHeadings: { buys: 'What it buys', verify: 'How you verify it' },
} as const;

export const impact = {
  intro: 'Planned capacity, never claimed as impact already achieved.',
  toggle: ['At opening', 'Full phase one'],
  scenarios: {
    opening: {
      label: 'Opening plan · subject to the engineer’s sign-off',
      seats: 100 as const,
      perShift: '100',
      perDay: '200',
      seatDays: '≈ 57,600',
      note: 'Two four-hour shifts, 8 to 12 and 12 to 4, for adults 18 and over. Women and men in separate sections with identical hours and services. Intake criteria are published before the first intake.',
    },
    full: {
      label: 'End of phase one · 20 kilowatts, 200 seats',
      seats: 200 as const,
      perShift: '200',
      perDay: '400',
      seatDays: '≈ 115,000',
      note: 'Reached ten seats and one kilowatt at a time. A second floor towards 500 seats, up to 1,000 a day, follows only if the engineer confirms it.',
    },
  },
  statLabels: ['Seats per shift', 'Young adults a day', 'Seat-days a year'],
  bullets: [
    'A student whose university now exists only online can sit her lectures and her exams on a connection that holds.',
    'Four course tracks with partner organisations, in repeating cycles so nobody who misses a round waits long: English, freelancing and remote work, career readiness, digital skills. Certificates come from the partner.',
    'Live sessions with people who run organisations, teach at universities and lead teams.',
    'Paid desks for freelancers, 8 to 4, at $50 a month.',
    'Outside the hall’s hours, the street: surplus power and eight-hour blocks of internet at under half the market price.',
  ],
  closing: 'The measure is not seats filled. It is income earned and work found, published every month.',
  strip: [
    { value: '4', label: 'positions in Gaza at opening, on written contracts' },
    { value: '4', label: 'course tracks in repeating cycles, with partners' },
  ],
} as const;

export const energy = {
  intro:
    'Every kilowatt Ardú installs powers ten seats by day. Outside the hall’s hours and on days off, its surplus goes to the houses on the street at half the market price, and the fibre line does the same with hours of internet. Together with desk fees, that income goes to the running costs, every shekel recorded and published.',
  facts: [
    { value: '1 kW', label: 'ten seats, all day' },
    { value: '6 to 8 months', label: 'payback at today’s prices*' },
  ],
  invitation: 'Select a stage to follow the power.',
  replay: 'Follow the power',
  rules: 'Surplus only. Always below the market price. A published tariff and a numbered receipt for every shekel. Everything to the running costs.',
  caveat:
    '*Against generator-line prices of $10 to $12 per kilowatt-hour and about $10,000 per installed kilowatt in Gaza City, October 2026. Planned, not live monitoring data.',
} as const;

export const energyStages = [
  { name: 'Sun', title: 'Both shifts sit inside daylight.', text: 'Most of what the panels make is used as it is made, so storage stays small.' },
  { name: 'Generation', title: 'One kilowatt per ten seats.', text: 'Panels are added one kilowatt at a time, one for every block of ten seats, on an inverter with headroom to 20 kW.' },
  { name: 'Storage', title: 'Sized for the gaps, not the night.', text: 'Storage covers the hours around the shifts; the generator line is kept for the odd hour.' },
  { name: 'The hall', title: 'Ten seats per kilowatt, 8 to 4.', text: 'Power that stays on for the seats, the network, the lights and the fans.' },
  { name: 'The street', title: 'Surplus at half the market price.', text: 'Outside the hall’s hours and on days off, surplus power and eight-hour blocks of internet go to the houses on the street, under a published tariff.' },
  { name: 'Running costs', title: 'Every shekel back into the place.', text: 'Income from the street and from desks goes to the running costs, with a numbered receipt for each, and is published monthly.' },
] as const;

export const trust = {
  intro: 'Accountability is part of the infrastructure. This is the system behind every contribution.',
  steps: [
    { title: 'One route in.', text: 'Contributions are held in the UK by an academic trustee under a signed agreement and released stage by stage.' },
    { title: 'A stage at a time.', text: 'Each release goes to an account used only for Ardú, against the agreed stage.' },
    { title: 'A record for every expense.', text: 'Numbered ledger entries, receipts, contracts and photographs of what was bought and built.' },
    { title: 'Separate duties, monthly statements.', text: 'Whoever spends does not keep the books. Accounts are reconciled monthly and supporters receive an itemised statement.' },
  ],
  close: 'Funders and partners may request the full ledger, with the personal data of staff and students protected.',
  small:
    'Ardú is an unregistered initiative; formal registration is planned. No charitable registration or tax deductibility is claimed. No partner is named before its agreement is signed.',
} as const;

export const who = {
  lead: 'Ardú is designed to run without its founder in the room.',
  body:
    'Ardú was founded by Ahmed Abuhassan, a self-taught developer from Gaza City who learned and worked through the conditions this place is built to remove, and who worked in electrical installation before software. He leads the initiative. A site manager runs the floor, and the books are kept by someone else.',
  caption: 'Ahmed Abuhassan · founder of Ardú',
  portraitPlaceholder: 'Approved portrait to follow',
  partners: 'Partners are announced here as agreements are signed.',
} as const;

export const doors = {
  lead: ['A seat. Power. A connection.', 'The conditions to begin a professional future.'],
  youth: {
    title: 'Young people in Gaza',
    text: 'Criteria and registration are published before the first intake. Leave your name and we will tell you when.',
    cta: 'Register interest',
    mailSubject: 'Ardú · register my interest',
  },
  organisations: {
    title: 'Organisations',
    text: 'Bring a course, trainers, laptops or jobs for the people who come out of Ardú.',
    cta: 'Write to info@ardugaza.org',
    mailSubject: 'Ardú · an organisation with something to offer',
  },
  supporters: {
    title: 'Supporters',
    text: 'Fund a stage. The rubble is $15,000. A seat is $200. A month of the doors staying open is $6,000. A kilowatt that puts ten seats on power that never cuts is $10,000.',
    ctaLive: 'Fund a stage',
    ctaPending: 'Get the launch update',
    pendingText: 'Giving opens on the date above through the trustee route. Until then, write to us.',
    note: 'On the giving page the figures appear in pounds: after platform and transfer fees, a pound given there arrives in Gaza as about a dollar. No payment is collected on this website.',
  },
} as const;

export const footer = {
  tagline: 'Built in Gaza. Not relief. A lifting.',
  figures: 'Planning figures · October 2026',
} as const;

export const plan = {
  meta: 'For funders and partners · updated October 2026',
  intro:
    'This page carries the detail behind the five stages: the figures and how they were built, what each stage buys, how spending is verified, how the place earns part of its own keep, and what is still open. Every number is an estimate at Gaza prices in October 2026, confirmed by written quotes before any money is spent. Where a figure depends on a condition, the condition is stated next to it.',
  sections: [
    {
      n: '1',
      title: 'The place',
      body: [
        'A hall of about 500 square metres with a six-metre ceiling under a family home in central Gaza City. The home was brought down in the war; the hall’s columns held, its roof and walls did not. Stage one removes the rubble above and around it, sorts what can be reused, and prepares the floor. The opening uses sheeting, salvaged steel and wood, and no cement, so it does not depend on construction materials crossing into Gaza. An engineer’s structural report is obtained before the hall carries any load. The hall is the family’s property, used by Ardú under a written agreement at a symbolic rent that is entered in the accounts. The exact location is shared with funders and partners on request and is not published.',
      ],
    },
    {
      n: '2',
      title: 'Stages, amounts and verification',
      table: [
        ['1 · Clear the rubble', 'Clearance, sorting of salvage, preparation of the floor and the space.', 'about $15,000', 'Before-and-after photographs; labour and haulage receipts.'],
        ['2 · Light, water, line', 'Wiring and lighting ($10–12k), toilets and water ($10–12k), fibre installation ($5–8k), internal network and UPS ($3–4k).', 'about $30,000', 'Invoices; the fibre contract; photographs.'],
        ['3 · Seats and laptops', 'Furniture for 100 seats; 10 shared laptops at $950–1,000 each, bought locally as they become available.', 'about $20,000', 'Quotes and invoices; photographs.'],
        ['Reserve', 'Engineer’s structural report, secured equipment room, 10% reserve.', 'about $10,000', 'Report; invoices.'],
        ['4 · Keep the doors open', 'A team of four on written contracts ($4,000 a month between them to start), a part-time accountant by contract, internet, consumables, maintenance and the generator line for the odd hour.', 'about $6,000 a month; $35,000 for six months', 'Contracts; the monthly payroll sheet; attendance; the course calendar.'],
        ['Solar, separately', 'About 10 kW of solar with storage at today’s price of about $10,000 per kW, on a hybrid inverter with headroom to 20 kW; arranged separately with contacts in Ireland’s renewable-energy sector.', 'about $100,000', 'Quotes; installation photographs; the inverter’s own monitoring data.'],
        ['5 · Grow on the numbers', 'Ten seats and one kilowatt at a time to 200 seats and 20 kW; a steel second floor and cement finishing when materials allow, towards 500 seats, conditional on the engineer’s confirmation.', 'about $12,000 per block; second floor $70,000–$100,000', 'Structural report; photographs.'],
      ],
      body: ['Doors open at 100 seats: about $110,000 with the reserve inside, plus the solar system arranged separately. Every stage stands on its own and is built in order. Stage five is additional and conditional.'],
    },
    {
      n: '3',
      title: 'Capacity and the working day',
      body: [
        'Two four-hour shifts for the supported group, 8 to 12 and 12 to 4, 100 seats per shift, 50 women and 50 men in separate sections with identical hours and services, which is 200 young adults a day at opening and 400 a day at 200 seats. Freelancers rent full-day desks, 8 to 4, at $50 a month, by capacity, added block by block like every other seat. Intake is adults 18 and over, on criteria published before the first intake that weigh ability and financial situation together. In seat-days: about 57,600 a year at opening, about 115,000 at 200 seats, about 288,000 at the full build.',
      ],
    },
    {
      n: '4',
      title: 'Energy: the design and the arithmetic',
      body: [
        'In October 2026 a kilowatt of installed solar with storage costs about $10,000 in Gaza City, and a kilowatt-hour from the generator lines costs $10 to $12. One kilowatt yields about 135 kWh a month, worth $1,350 to $1,600 at line prices, so a kilowatt repays itself in six to eight months. The line cannot be the baseline: 100 seats draw about 50 to 55 kWh a day, which is more than $13,000 a month from the lines, more than twice the whole running cost at launch.',
        'The design is a hybrid inverter and storage with headroom to 20 kW, panels added one kilowatt per block of ten seats, both shifts inside daylight so storage only covers the gaps, and the generator line kept for the odd hour. The policy is to buy kilowatts as fast as they are funded while the payback stays under two years, to re-quote before every purchase, and to treat falling prices as cheaper growth. Every figure here is at today’s prices.',
      ],
    },
    {
      n: '5',
      title: 'Earned income',
      body: [
        'Three lines. Desks: $50 a month per freelancer desk. Surplus power: a 10 kW system produces about 1,350 kWh a month; the hall uses most of it on working days, and days off and the hours before and after the shifts leave about 400 to 500 kWh a month, which at half the market price is $2,000 to $3,000 a month. Internet hours: the fibre line costs about $500 a month; outside the hall’s hours its capacity is sold to the street in eight-hour blocks at under half the market price, and the line pays for itself first. The target is half of launch-level running costs covered by these three lines within the first year, with the actual figure published every month. Four rules govern all three: surplus only; always below the market price; a published tariff and a numbered receipt for every shekel; everything into the running costs.',
      ],
    },
    {
      n: '6',
      title: 'Running costs and the team',
      body: [
        'Four positions on written contracts at opening: the founder as chief executive, a mentor-director who runs the floor and the programme, and one service member for each section, $4,000 a month between them to start, stepping up together as funding grows. A part-time accountant by contract keeps the books; technical maintenance of the network and the power system is by call-out contract. Fixed costs are about $2,000 a month (internet, consumables, communications, maintenance and the generator line for the odd hour), so running costs are about $6,000 a month at launch. Trainers come on per-course contracts with partner organisations and sit outside payroll. The team grows to eight as the hall grows to 200 seats, and running costs grow with it. Spending, recording and approval sit with different people.',
      ],
    },
    {
      n: '7',
      title: 'Accountability',
      body: [
        'Contributions are held in the UK by an academic trustee under a signed agreement, on the model already used to fund the founder’s own studies, and released stage by stage to a bank account used only for Ardú. Every expense has a numbered ledger entry, a receipt, and where it applies a contract and a photograph of what was bought or built. The person who spends is not the person who keeps the books. Accounts are reconciled monthly and supporters receive an itemised monthly statement. Funders and partners may request the full ledger, with the personal data of staff and students protected.',
      ],
    },
    {
      n: '8',
      title: 'Status and what is still open',
      body: [
        'As of October 2026 Ardú is an unregistered initiative with a plan, a site, a brand, a public presence and an open giving page; formal registration is planned and no charitable registration or tax deductibility is claimed. Open before the first spend: the engineer’s structural report, two written quotes for each stage, the family use agreement, the first tariff for desks, power and internet hours, and the published intake criteria. No partner is named before its agreement is signed.',
      ],
    },
    {
      n: '9',
      title: 'The four-year picture',
      body: [
        'Capital: about $110,000 to open at 100 seats, about $100,000 for the first ten kilowatts, about $120,000 to reach 200 seats and 20 kW, and $70,000 to $100,000 for the second floor if it is confirmed, which is $400,000 to $430,000 in all. Running: about $6,000 a month at launch, rising with the team to about $23,000 a month at full strength, roughly $830,000 over four years. Together about $1.25 million over four years before earned income. The earned-income target of half the running costs from the place itself would take a large part of that off the donors, and the actual figures are published as they happen rather than promised in advance.',
      ],
    },
    {
      n: '10',
      title: 'How to fund it and how to reach us',
      body: [
        'The units: the rubble, $15,000. Light, water and line, $30,000. Seats and laptops, $20,000. A month of the doors staying open, $6,000. A kilowatt, $10,000. Contributions go through the giving page, which runs on the trustee route above; larger contributions are arranged in a direct conversation at info@ardugaza.org.',
      ],
    },
  ],
} as const;
