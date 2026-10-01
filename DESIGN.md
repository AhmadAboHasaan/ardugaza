---
name: Ardú
description: Open frame — dignified, concrete infrastructure for professional opportunity.
colors:
  paper: "#f4f4ed"
  ink: "#282a25"
  muted: "#606259"
  accent: "#e4ec8b"
  line: "#c8cabd"
  dark-line: "#5a5e4d"
  surface: "#e8e9df"
  ink-hover: "#414638"
  text-hover: "#535a37"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(3.6rem, 6.55vw, 6rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2.3rem, 4.1vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  lead:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(1.2rem, 1.7vw, 1.55rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.025em"
  action:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
    lineHeight: 1.65
    letterSpacing: "normal"
rounded:
  square: "0"
spacing:
  space-1: "0.5rem"
  space-2: "1rem"
  space-3: "1.5rem"
  space-4: "2rem"
  space-5: "3rem"
  space-6: "4rem"
  space-7: "6rem"
  space-8: "8rem"
  gutter: "clamp(1.25rem, 4.4vw, 5rem)"
  section: "clamp(4.5rem, 8vw, 8rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    rounded: "{rounded.square}"
    padding: "0.8rem 1.25rem"
  button-light:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.square}"
    padding: "0.8rem 1.25rem"
  button-text:
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.square}"
    padding: "0.8rem 0"
  button-primary-hover:
    backgroundColor: "{colors.ink-hover}"
  button-text-hover:
    textColor: "{colors.text-hover}"
---

# Design System: Ardú

## Overview

**Creative North Star: "Open frame"**

Open frame gives Ardú a practical, architectural visual language: generous editorial columns, useful rules, square controls and a repeatable seat symbol. It is warm through paper and citron, precise through clear typography and visible conditions.

The system presents professional opportunity with dignity. Diagrams are explicitly schematic; missing approved photography remains an honest placeholder. There are no invented documentary images, partner marks or achieved-impact claims.

**Key Characteristics:**

- Manrope throughout, with a fluid display hierarchy.
- Flat tonal fields and fine rules rather than elevated cards.
- Square controls and repeated open-frame geometry.
- Finite explanatory motion with a complete reduced-motion experience.

## Colors

Warm near-neutrals support one pale citron accent. The frontmatter records the normative values extracted from `src/styles/globals.css`.

### Primary

- **Citron (`accent`)** gives the seat illustration, accountability field, support field and selected energy stage a clear shared identity. It can fill a complete section; it is not restricted to tiny accents.

### Neutral

- **Paper (`paper`)** is the main canvas and reversed text on ink.
- **Charcoal (`ink`)** carries headings, controls and the dark energy field.
- **Quiet olive (`muted`)** carries supporting text on pale surfaces.
- **Warm surface (`surface`)** groups the place section and image placeholders.
- **Fine rule (`line`)** divides pale content; **dark rule (`dark-line`)** divides the energy section.
- **Ink hover (`ink-hover`)** and **text hover (`text-hover`)** are the actual action-state colors.

**The Contrast Rule.** Use ink on citron and paper on ink; muted text belongs on the pale surfaces.

## Typography

**Display and Body Font:** Manrope, with sans-serif fallback. The application supplies the font through Next.js and Storybook supplies the same family. Weight and scale create hierarchy without introducing another typeface.

### Hierarchy

- **Display:** primary proposition; the desktop fluid ramp is in the frontmatter. Below the mobile breakpoint it uses `clamp(3.3rem, 10.5vw, 5.5rem)`.
- **Headline:** major section headings, medium weight and balanced wrapping.
- **Title:** programme and stage headings, semibold with a more comfortable line height.
- **Body:** readable prose with a maximum measure of 65ch.
- **Lead:** a larger introduction, kept distinct from both body and headings.
- **Action:** semibold sentence-case controls; compact layouts reduce their type size.

Numbers in impact statistics and package amounts use tabular figures. Captions and notes remain secondary; their individual small sizes are implementation details, not a reusable display-label scale.

**The Reading Rule.** Keep paragraph measures within 65 characters and let headings balance naturally.

## Layout

The document is capped at 1800px with shared fluid horizontal gutters and section spacing. Desktop compositions use unequal editorial columns; content lists use two or four columns where the information supports comparison. Most repeated gaps draw from the half-rem-based spacing tokens.

At 1100px and below, gaps tighten. At 767px and below, primary compositions stack, navigation becomes a disclosure, programme rows remain readable, and the energy path becomes a three-by-two grid. Four-column accountability and roadmap lists become two columns, then one below 360px. The 1800px breakpoint adds fine outer document rules. Preserve source order: introductory copy and actions precede the seat illustration on mobile.

## Elevation & Depth

Depth comes from paper, surface, citron and charcoal fields, with fine dividing rules. There are no elevation shadows. The hero's inset citron highlight is a typographic underline effect, not an elevated surface. The mobile navigation overlays the document without a shadow.

**The Flat Surface Rule.** Separate content with space, rules and tonal fields; do not introduce floating card shadows.

## Shapes

Controls and surfaces have square corners. Open rectangular seat marks repeat in a 20-column matrix; a filled seat identifies the next-seat motif. Fine structural lines also appear in the schematic hall drawing. Neither is a measured architectural plan. Borders carry grouping and affordance, not a universal box around every section.

## Components

### Buttons and action links

Direct, square and sentence-case. Primary uses ink and paper; light uses citron and ink; text actions use an underline rule with no horizontal padding. Filled actions have a 52px minimum height; text actions have a 44px minimum. The shared inline arrow is decorative SVG. Navigation actions are real anchors; the energy replay action is a real button.

Primary and text hover colors apply only to fine pointers capable of hovering. Press feedback scales to 0.98 over the fast duration. Focus uses a 3px current-color outline offset by 5px. State transitions use 200ms; press feedback uses 140ms. Reduced motion removes transitions.

### Navigation

A text wordmark and structural mark anchor a horizontal header. The compact layout uses a bordered menu button, `aria-expanded` and a disclosed link list. Escape closes the list and restores trigger focus; choosing a section closes it. The navigation is a disclosure, not a modal.

### Funding disclosure

Native `details` and `summary` provide a fine-ruled package row: number, title, qualification, amount and SVG plus. Opening rotates the plus and exposes two evidence columns; narrow layouts place the amount beneath the title and stack the detail. Pointer hover gives the summary a surface tone. Keep all material cost qualifications visible outside the disclosure too.

### Capacity comparison and seat matrix

Two adjacent native buttons indicate the selected scenario with ink fill and paper text. Statistical values update in a polite live region; the decorative matrix stays hidden from assistive technology. The seat matrix has one finite entrance (700ms). Never use the diagram as the sole carrier of capacity data.

### Energy path

Six native stage buttons select an immediate explanatory heading and paragraph. The current stage is citron on ink; hover adds an accent border. “Follow the power” replays a finite sequential stage entrance, with 120ms stagger and 700ms per stage, rather than a continuous line animation. This is the accepted implemented adaptation of the original direction contract. Reduced-motion users retain every stage and explanation without the entrance.

### Media frames

Use a semantic figure with a visible caption. Approved imagery uses responsive image rendering; unavailable imagery uses a labeled schematic or typographic placeholder. This component does not manufacture evidence.

## Do's and Don'ts

### Do:

- Do preserve the planned, estimated and conditional status beside numerical claims.
- Do keep visible keyboard focus and native link, button and disclosure semantics.
- Do use explicit schematic captions and approved-image placeholders.
- Do keep explanatory motion finite and remove animation for reduced-motion users.

### Don't:

- Don't substitute fabricated documentary photography or unapproved partner logos.
- Don't turn every content group into a raised card.
- Don't hide material caveats inside an illustration or hover-only interaction.
- Don't add continuous decorative movement.
