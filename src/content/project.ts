export const project = {
  name: 'Ardú',
  title: 'Ardú — Make room for a future',
  description:
    'A youth initiative in Gaza creating a reliable place to learn, work and build a career. Explore the opening plan, funding packages and accountability model.',
  founder: 'Ahmed Abuhassan',
  linkedin: 'https://www.linkedin.com/in/ahmadabohassan',
  sourceDate: 'September 2026',
} as const;

export const packages = [
  {
    id: 'building',
    number: '01',
    title: 'Open the doors',
    amount: '$117k–$149k',
    short: 'The building. The connection. The next seat.',
    detail:
      'Restore the hall with sheeting and salvaged steel. Provide sanitation, water, lighting, wiring, ventilation, a shared 500 Mbps fibre line, furniture for 200 seats, 20 shared laptops and a secured equipment room. Includes a 10% contingency.',
    evidence:
      'Structural report, itemized invoices, fibre contract and photographs of each stage.',
  },
  {
    id: 'energy',
    number: '02',
    title: 'Energy independence',
    amount: 'About $80k',
    short: 'Solar generation and battery storage.',
    detail:
      'An indicative system-only price for 50 kW of solar, batteries and inverters, sized for the full build. Cabling, installation and installer fees are excluded and will be quoted at the site survey and added openly.',
    evidence:
      'Written quotes, installation photographs and system monitoring data.',
  },
  {
    id: 'running',
    number: '03',
    title: 'Keep the doors open',
    amount: '$48k',
    short: 'The first six months of running.',
    detail:
      'Eight positions in Gaza on written contracts, internet, consumables, communications and the first course cycles. Staff begin at a quarter of full salary and step up together as funding grows.',
    evidence:
      'Contracts, monthly payroll, attendance records and the course calendar.',
  },
  {
    id: 'expansion',
    number: '04',
    title: 'Room to grow',
    amount: '$70k–$100k',
    short: 'A second floor. A conditional next chapter.',
    detail:
      'A steel second floor and cement finishing when materials allow. Expansion to 500 seats per session depends on funding and structural confirmation. An under-18 programme would need its own staff and rules.',
    evidence: 'Engineer’s structural assessment and construction photographs.',
  },
] as const;

export const tracks = [
  {
    name: 'English',
    text: 'The language to participate in international professional life.',
  },
  {
    name: 'Freelancing & remote work',
    text: 'Practical pathways to work beyond the limits of geography.',
  },
  {
    name: 'Career readiness',
    text: 'Preparation for professional opportunities and the conversations that lead to them.',
  },
  {
    name: 'Digital skills',
    text: 'Recurring learning cycles, delivered with partners as agreements are signed.',
  },
] as const;

export const energyStages = [
  {
    name: 'Sun',
    title: 'Start with what reaches the roof.',
    text: 'The planned system uses solar energy. Panel mounting and the balance between generation and storage will be determined at the site survey.',
  },
  {
    name: 'Generation',
    title: 'Power for the full ambition.',
    text: 'Approximately 50 kW of planned solar capacity, sized for the full 500-seat build rather than a smaller opening-only system.',
  },
  {
    name: 'Storage',
    title: 'Keep the working day connected.',
    text: 'Battery storage is part of the plan. Final capacity and operating performance depend on engineering design and the site survey.',
  },
  {
    name: 'Ardú',
    title: 'The hall comes first.',
    text: 'Stable power for workspaces, the network, lighting and ventilation. Commissioning and verified performance come before any operational claim.',
  },
  {
    name: 'Community',
    title: 'Useful energy beyond the walls.',
    text: 'The plan directs modest surplus to nearby community uses such as water wells and street lighting.',
  },
  {
    name: 'Reserve',
    title: 'Let surplus support the future.',
    text: 'Surplus beyond 5 kW is proposed for sale to nearby homes and businesses under written agreements, with proceeds held in the project reserve.',
  },
] as const;

export const accountability = [
  {
    title: 'One route in',
    text: 'The intended model holds contributions in the UK with an academic trustee under a signed trustee agreement.',
  },
  {
    title: 'A package at a time',
    text: 'Transfers go to an account in the founder’s name used only for Ardú, against the agreed spending package.',
  },
  {
    title: 'A record for every expense',
    text: 'Numbered ledger entries, purchase receipts, salary contracts and photographs of installed equipment.',
  },
  {
    title: 'Separate duties. Monthly checks.',
    text: 'Recording is separate from spending. Accounts are reconciled monthly and supporters receive itemized statements.',
  },
] as const;

export const roadmap = [
  {
    when: 'Opening',
    title: 'Make the basics reliable.',
    text: 'Restore and equip the hall, obtain structural sign-off and commission the power system.',
  },
  {
    when: 'Year one',
    title: 'Build a working rhythm.',
    text: 'Begin four recurring course tracks and live sessions. Paid desks are planned from month three. Share monthly spending statements.',
  },
  {
    when: 'Year two',
    title: 'Grow what sustains the place.',
    text: 'Increase earned income from desks and courses. Progress the salary ladder as funding grows. Build the second floor only if funded and structurally confirmed.',
  },
  {
    when: 'Years three / four',
    title: 'Reach beyond one building.',
    text: 'If expansion proceeds, work toward 500 seats per session, a separately staffed under-18 programme and wider online delivery.',
  },
] as const;
