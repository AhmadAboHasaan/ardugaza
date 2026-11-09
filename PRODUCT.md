# Ardú

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

User-specified: Next.js App Router, React, strict TypeScript, Tailwind CSS, Storybook, Vitest, React Testing Library, Playwright, ESLint, Prettier. Server components by default.

## Users

Institutional funders first, followed by corporate partners and international individual supporters. Universities, professional networks, journalists and eventually young adults in Gaza are secondary audiences.

## Product Purpose

Make the infrastructure for professional progress available to young people in Gaza: a seat, electricity, connectivity, skills, mentorship and opportunities. The public site is promotional: it presents the entity, its direction, the impact it is built to deliver and the ways to support it, so that a visitor's first reaction is that this must be supported. The site presents Ardú as an organisation: its vision, who it serves (university students and graduates in technology and medicine first), the results it measures itself by, and the projects that carry it, each with a status tag, stages and a hand-updated funding bar on its own page. The primary action is “Support Ardú”, a gift to the organisation; a gift to one project is a separate choice made on that project's own page, reached from its card, and the two never share a panel or a checkout. The secondary action is “Partner with us”. Operational detail is shared with partners and funders on request, not published. The site never shows a funding button that leads to an unavailable route.

## Positioning

An organisation born under the rubble of its founder's family home, working through projects it funds and reports in the open; its first project, Ardú Space, restores a roughly 500 m² hall in central Gaza City. Success concerns degrees kept, income earned and work found. All impact figures describe plans, not achievements, until the first cohort reports.

## Operating Context

Factual authority: docs/ardu-project-summary.pdf, October 2026, prepared by founder Ahmed Abuhassan. Opening: 100 seats per shift, two four-hour shifts a day, about 200 adults a day and 57,600 seat-days a year, subject to structural sign-off. Four positions at opening, four planned course tracks. End of phase one: 200 seats per shift, 400 a day, 20 kW. Full build: 500 seats per shift and up to 1,000 a day, conditional on funding and structural confirmation.

## Capabilities and Constraints

Payroll, energy arithmetic and running costs live in the partner brief (shared on request) and must not appear on the public site; the e2e suite checks this. Programme pages publish no amounts: each stage carries an indicator out of a hundred showing how far its funding has come, with the date it was last updated by hand; stage status is derived from the indicators, never typed. All funding goes to Ardú's general fund, which Ardú directs across its programmes: giving runs only through Ardú's one hosted Stripe checkout configured in src/data/integrations.ts, every link carrying the reference `ardu-general`; no programme has a checkout of its own, and the campaign page used until 18 October 2026 is closed. Mu’een's figures are published only as dated totals from its own dashboard, never a student's name or account; its founders are not named and its bot is not linked until the founder decides. No legal, tax, partner or achieved-impact claims may be invented.

## Brand Commitments

Ardú means “a lifting, a raising up”; explain after the value proposition. Editorial, architectural, technological and human; dignified, specific, warm and credible. Avoid charity templates, pity, fabricated documentary images and generic startup styling.

## Evidence on Hand

The supplied PDF describes the proposed accountability model: UK academic trustee and signed agreement, package-specific transfers, numbered ledger, receipts, salary contracts, installed equipment photographs, separated recording/spending, monthly reconciliation and statements, protected ledger access. Ardú is an unregistered initiative; registration is planned. The PDF provides https://www.linkedin.com/in/ahmadabohassan as the founder contact. No signed partner agreements or approved photographs supplied.

## Product Principles

1. Distinguish plans, estimates and conditions from achieved results.
2. Make the use of support traceable to specific infrastructure.
3. Show agency and professional opportunity.
4. Keep unsupported integrations explicitly unavailable.

## Accessibility & Inclusion

Target WCAG 2.2 AA, keyboard and touch access, reduced motion, semantic data equivalents and deliberate composition from 320px to wide desktop. Initial intake planned for adults 18+, separate men's and women's sessions with identical hours and services; criteria published before intake.

## Workflow

The user explicitly delegated design selection and routine implementation decisions and requested no approval interruptions. Initialization uses their detailed brief and source document in place of another interview. Figma explorations precede code; no standing image-generation workflow preference is inferred.
