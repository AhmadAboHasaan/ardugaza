---
name: Ardú
description: The lifted road — a calm, rounded, icon-led system in deep green, teal, sand and white.
colors:
  white: '#ffffff'
  mist: '#eef3f1'
  mist-2: '#e2ebe8'
  deep: '#103634'
  teal: '#1f6f6b'
  teal-tint: '#dcebe8'
  sand: '#c9a227'
  sand-tint: '#f6ecc9'
  cream: '#f3efe4'
  ink: '#10302e'
  text: '#3d4d4a'
  muted: '#5b6865'
typography:
  display:
    fontFamily: 'Bricolage Grotesque, sans-serif'
    fontSize: 'clamp(2.4rem, 4.5vw, 4rem)'
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: '-0.025em'
  headline:
    fontFamily: 'Bricolage Grotesque, sans-serif'
    fontSize: 'clamp(1.9rem, 3.3vw, 2.9rem)'
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: '-0.02em'
  title:
    fontFamily: 'Bricolage Grotesque, sans-serif'
    fontSize: '1.2rem'
    fontWeight: 650
    lineHeight: 1.35
    letterSpacing: '-0.01em'
  body:
    fontFamily: 'Manrope, sans-serif'
    fontSize: '16px'
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 'normal'
  lead:
    fontFamily: 'Manrope, sans-serif'
    fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)'
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 'normal'
  action:
    fontFamily: 'Manrope, sans-serif'
    fontSize: '0.95rem'
    fontWeight: 600
    lineHeight: 1.65
    letterSpacing: '-0.005em'
rounded:
  pill: '999px'
  chip: '14px'
  card: '20px'
  panel: '28px'
spacing:
  gutter: 'clamp(1.25rem, 4vw, 3rem)'
  section: 'clamp(3.5rem, 7vw, 6.5rem)'
  content: '1200px'
components:
  button-primary:
    backgroundColor: '{colors.teal}'
    textColor: '{colors.white}'
    typography: '{typography.action}'
    rounded: '{rounded.pill}'
    padding: '0.85rem 1.45rem'
  button-light:
    backgroundColor: '{colors.sand}'
    textColor: '{colors.deep}'
    typography: '{typography.action}'
    rounded: '{rounded.pill}'
    padding: '0.85rem 1.45rem'
  button-outline:
    borderColor: 'currentColor'
    typography: '{typography.action}'
    rounded: '{rounded.pill}'
    padding: '0.85rem 1.45rem'
  icon-chip:
    backgroundColor: '{colors.teal-tint}'
    textColor: '{colors.teal}'
    rounded: '{rounded.chip}'
    size: '48px'
  card:
    backgroundColor: '{colors.mist}'
    rounded: '{rounded.card}'
    padding: '1.75rem'
  panel:
    backgroundColor: '{colors.mist}'
    rounded: '{rounded.panel}'
    padding: 'clamp(1.75rem, 4vw, 3.5rem)'
---

# Design System: Ardú

## Overview

**Creative North Star: "The lifted road"**

Ardú's whole claim is one gesture: a road rising out of rubble, with the things a young person needs placed along it, ending at their ambition. The brand mark is that gesture in miniature; the hero draws it at full size on load and then keeps a light travelling it; every project's cover is the same road with one stop per stage, and the closing band repeats it as a line. The site moves the way that road does: things arrive as you reach them, bars fill, figures count up, and the stage being funded now pulses. Nothing moves for its own sake.

The surfaces are white and a soft green-tinted mist, with deep green for the hero, the direction panel, the giving card and the footer. Corners are rounded on a fixed scale (pill controls, 14px chips, 20px cards, 28px panels, 32px for the closing band). Elevation is used twice, on the giving card and the mobile menu, and nowhere else: contrast between white and mist carries the structure.

**Key characteristics**

- Two typefaces with clearly different jobs: Bricolage Grotesque (the wordmark's face) for headlines and big figures, Manrope for everything read at length.
- Every list carries an icon chip from one registry (`src/components/ui/Icon.tsx`), so the site scans at a glance and the icon set stays consistent.
- Motion with a job: content rises into place as it is reached, bars fill, figures count, the open stage pulses, a card's cover grows into its project's page. Under reduced motion all of it is off and everything is simply there.
- No uppercase eyebrow labels, no hairline-everything, no middle-dot meta strings. Structure is carried by panels, chips and the two type faces.

## Colors

Deep green (`deep`) is the canvas for the hero, the direction panel, the giving card and the footer; cream (`cream`) is the text on it and sand (`sand`) the single accent on it (the road's tip, the lead button, footer headings). On light surfaces teal (`teal`) carries actions, icons and links, and sand appears only as the current-page marker and a tint behind the name note and the funders panel. Contrast: cream on deep 12:1, sand on deep 5.4:1 (bold or large text only), teal on white 5.9:1, body text on white 7.5:1, muted on white 5.1:1.

## Typography

Bricolage Grotesque is loaded as a variable font (weight axis, 200 to 800) and used at 650 to 700 for h1, h2, h3, figures and amounts. Manrope carries body, leads, buttons, navigation and small print. Headlines are set in sentence case with no coloured or italic word; the emphasis in the hero headline is semantic only.

## Layout

A 1200px content column with a fluid gutter. The hero and footer are full-bleed deep; every other section sits on white, and alternating sections wrap their content in a mist panel so the page reads as a rhythm of white and mist rather than a stack of rules. Inner pages open with a mist page hero (headline and lead), then two-column "split" sections (heading left, body right), card grids and sequences.

## Components

- **Icon chip**: 48px rounded square, teal on teal tint; cream variant on deep, sand variant for the giving card and the sun, deep variant on the sand panel. Small 32px variant inside icon lists.
- **Buttons**: pills. Primary teal on light, light (sand) as the lead action on deep, white on the deep any-amount strip, outline for the second action, text links underlined in teal.
- **Figures**: mist tiles with an icon, a Bricolage number and a muted label.
- **Cards**: mist on white, white on mist; the giving panel is deep and carries a white card holding the gift builder.
- **Gift builder** (`GiftBuilder`): radio chips for the amounts (selected chip turns deep), an "Or enter an amount" field, and, at its foot, an inverted deep block with the live impact line and a white button that names the gift ("Give £50 to Ardú", "Give £100 to Ardú Space"); the block reads on a fast scroll. In a project's builder a segmented control switches between any amount (with the open stage's bar showing the gift as a striped segment ahead of what is raised) and the project's pieces (tiles that turn deep when chosen). Below £5 the button is disabled and the line says why. Two builders exist and never meet: the organisation's (on the home and support pages) and each project's (on its own page).
- **Stage explorer** (`StageExplorer`): a project's stages as tabs on one road, each a round stop (mint with a check when funded, sand ring pulsing when funding is open, outlined next, dashed later) with its name and state; the road fills to the last funded stop; the stage funding now is open when the page loads, any stop opens on click or with the arrow keys, and its panel shows the story, the bar (which fills each time) and what the stage needs.
- **Sequences**: numbered deep circles on a line (how it works, safeguards); vertical on narrow screens.
- **Status tag**: a pill with a dot: teal for a project on the ground, sand for one under construction, mist for one in preparation, deep for one complete. It crowns every project card (on the cover, top left) and every project page.
- **Stage chip**: derived from the books, never typed: mint with a check for Live (funded) and Complete, sand for Funding now, outlined for Next, faint for Later.
- **Progress**: a 10px track with a teal-to-sand fill and a caption that states raised, target, percentage and the date of the last update, so the bar never claims more than the books do.
- **Project card**: a door to the project's page, with no money on it. A deep cover drawn by `ProjectCover` (rubble, the road drawing itself as the card arrives, one stop per stage: filled with a check when funded, ringed and pulsing where funding is open, and a light travelling the stretch the open stage will cover) with the status tag as its crown; below it the ordinal, the name (a link stretched over the whole card), the brief, the stage track, and "Explore the project". A lone card spreads across the row, cover left and story right. On hover the card lifts, the cover leans in and a soft glow follows the pointer.
- **Stage track** (`StageTrack`): on a card, one dot per stage on a line (teal with a check when funded, sand and ringed when funding now, outlined after) with the stage names, and one sentence: "One of four stages funded. Funding now: stage two, Light."
- **Project hero**: a project's own page opens deep, like the home hero: breadcrumb, ordinal and status tag, headline, lead, "Fund {project}" in sand and "Share this project"; beside it the card's cover grown large with each stop named (the card's cover morphs into it when the visitor opens the project), and the standing panel overlapping its foot: the stage open now, its bar, the stages already funded.
- **Section nav** (`SectionNav`): on long pages (a project, About), the sections held under the header as the page scrolls, the one being read marked deep; on a project it carries "Fund this project" in sand. On phones it scrolls sideways and keeps the current section in view.
- **Fund bar** (`FundBar`): on a phone, a project's page keeps a deep bar at the foot of the screen once the hero has scrolled away ("Ardú Space, Stage two, Light: funding now", Fund this project), out of the way while the giving section is on screen.
- **Questions** (`Faq`): mist rows built on `details`, opening in place with a plus that turns; works with no script.
- **Day timeline**: a project's working day drawn as lanes over the hours, each shift a bar that fills as it arrives.
- **Road**: `src/components/content/Road.tsx`, a 640×520 SVG with the rubble, the stroke, four stops and the sand tip; drawn with `stroke-dashoffset` over 1.5s, stops fading in after it.

## Motion

Motion tells the visitor something or answers what they did; nothing moves for decoration alone.

- **On load**: the hero's lines rise in turn; the road draws, its stops pop in, then a light keeps travelling it and dust rises off the rubble. A project's page draws its cover the same way.
- **As the page is read** (`src/components/motion/Motion.tsx`): elements marked `data-reveal` rise into place when they are reached, one after another in a grid (`--i`). Everything already on screen when a page opens is shown at once and never hidden, and nothing is hidden before scripts run, so a page without scripts is simply complete. Figures count up from nothing as they arrive (`CountUp`), and only single numbers do.
- **Always telling the state**: the stage funding now pulses wherever it appears (card cover, stage track, explorer, standing panel); the stretch of road the open stage will cover marches with a light on it.
- **In answer to the visitor**: chips and tiles lift when chosen; the impact line and the bar's preview segment move with the amount; an opened stage's bar fills again; a question opens smoothly in place; cards lift with a glow that follows the pointer; the header gains its shadow and a reading line fills under it as the page scrolls (CSS scroll timelines, where supported).
- **Between pages**: opening a project from its card, the card's cover grows into the page's (`ViewTransition`, the browser's View Transitions; elsewhere the page simply changes).

`prefers-reduced-motion` turns all of it off: no animation or transition anywhere, nothing hidden, the road and covers fully drawn, the travelling lights and dust gone. Print shows everything.

## Content rules carried by the design

No partner names or logos before a signed agreement, no exterior photographs, no street address, no operational figures on the public site, no payment collected here. Photography slots render honest placeholders until approved images exist.
