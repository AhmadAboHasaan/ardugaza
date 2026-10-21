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

Ardú's whole claim is one gesture: a road rising out of rubble, with the things a young person needs placed along it, ending at their ambition. The brand mark is that gesture in miniature; the hero draws it at full size, once, on load; the direction panel and the closing band repeat it as a line. Everything else on the site stays quiet so that the road is the thing people remember.

The surfaces are white and a soft green-tinted mist, with deep green for the hero, the direction panel, the giving card and the footer. Corners are rounded on a fixed scale (pill controls, 14px chips, 20px cards, 28px panels, 32px for the closing band). Elevation is used twice, on the giving card and the mobile menu, and nowhere else: contrast between white and mist carries the structure.

**Key characteristics**

- Two typefaces with clearly different jobs: Bricolage Grotesque (the wordmark's face) for headlines and big figures, Manrope for everything read at length.
- Every list carries an icon chip from one registry (`src/components/ui/Icon.tsx`), so the site scans at a glance and the icon set stays consistent.
- One load animation (the road), hover lifts on cards, and a complete reduced-motion experience: the road renders fully drawn.
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
- **Cards**: mist on white, white on mist; the giving panel is deep, carries a white card of four level tiles and, under them, an inverted deep strip with a white any-amount button (the one block that reads on a fast scroll), and has the only shadow on the page.
- **Steps and sequences**: a line with chips (direction) or numbered deep circles (how it works, safeguards); vertical on narrow screens.
- **Road**: `src/components/content/Road.tsx`, a 640×520 SVG with the rubble, the stroke, four stops and the sand tip; drawn with `stroke-dashoffset` over 1.5s, stops fading in after it.

## Motion

The road draws once on load; nothing else moves on its own. Cards lift 3px on hover. `prefers-reduced-motion` disables all animation and transitions and leaves the road fully drawn.

## Content rules carried by the design

No partner names or logos before a signed agreement, no exterior photographs, no street address, no operational figures on the public site, no payment collected here. Photography slots render honest placeholders until approved images exist.
