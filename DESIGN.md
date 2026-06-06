---
name: Mandala Generator
description: A warm, creative web app for exploring generative mandala art
colors:
  white: "#ffffff"
  near-black: "#1c1e1e"
  light-paper: "#f8f8f7"
  dark-card: "#343536"
  light-gray: "#eae8e6"
  warm-accent: "#e14d48"
  text-muted: "#8d8d8d"
  text-light: "#fcf9f6"
  purple-accent: "#7d7cce"
typography:
  display:
    fontFamily: "Inter Variable, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.2
  headline:
    fontFamily: "Inter Variable, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(1.25rem, 3vw, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "Inter Variable, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter Variable, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.25
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
  "2xl": "18px"
  "3xl": "22px"
  "4xl": "26px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
components:
  button-primary:
    backgroundColor: "{colors.near-black}"
    textColor: "{colors.text-light}"
    rounded: "{rounded.4xl}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "#353739"
  button-outline:
    backgroundColor: "{colors.light-paper}"
    textColor: "{colors.near-black}"
    rounded: "{rounded.4xl}"
    padding: "12px 24px"
  button-outline-hover:
    backgroundColor: "{colors.light-gray}"
  input-default:
    backgroundColor: "{colors.light-gray}"
    textColor: "{colors.near-black}"
    rounded: "{rounded.3xl}"
    padding: "8px 12px"
  input-focus:
    textColor: "{colors.near-black}"
---

# Design System: The Mandala Studio

## Overview

**Creative North Star: "The Mandala Studio"**

This system supports a creative tool for exploring generative mandala art. The design is warm, approachable, and intentionally playful—inviting casual creators to experiment without technical intimidation. The mandala canvas is the hero; the UI scaffolds the creation without competing for attention. The palette is restrained (mostly neutrals), and interactions feel smooth and responsive. This studio celebrates creativity, symmetry, and the meditative quality of geometric exploration.

**What this explicitly rejects:** corporate coldness, cluttered dashboards, minimalist sterility. The design breathes with warmth and humanity.

**Key Characteristics:**

- Soft, generous border radius (friendly and approachable)
- Grayscale + single accent (warm reddish tone); accent used sparingly for key actions
- Smooth transitions and gentle feedback on interaction
- Content-forward layout (canvas maximized on desktop, adaptive on mobile)
- Accessibility built-in (color-blind safe, keyboard nav, reduced motion support)

## Colors

The Mandala Studio uses a restrained palette rooted in neutrals, with a single warm accent for critical actions and feedback.

### Primary

- **Near Black** (`oklch(0.145 0 0)` / `#1c1e1e`): Primary text, heavy components. Used for buttons, headers, strong foreground content in light mode.

### Neutral

- **White** (`oklch(1 0 0)` / `#ffffff`): Primary background in light mode. Canvas backdrop.
- **Light Paper** (`oklch(0.98 0 0)` / `#f8f8f7`): Secondary surface. Card backgrounds, secondary UI containers.
- **Light Gray** (`oklch(0.922 0 0)` / `#eae8e6`): Borders, dividers, input backgrounds. High enough contrast to feel structured without coldness.
- **Text Muted** (`oklch(0.556 0 0)` / `#8d8d8d`): Placeholder text, secondary labels. Always ≥4.5:1 contrast against light backgrounds.
- **Light Text** (`oklch(0.985 0 0)` / `#fcf9f6`): Text on dark/primary backgrounds. Off-white for warmth, not pure white.

### Accent

- **Warm Reddish Accent** (`oklch(0.577 0.245 27.325)` / `#e14d48`): Error states, critical actions (destructive buttons, warnings). Reserved; used sparingly. ≤5% of any screen.

### Dark Mode Palette

- **Dark Card** (`oklch(0.205 0 0)` / `#343536`): Surfaces in dark mode (cards, inputs). Slightly warmer than pure black for reduced eye strain.
- **Purple Accent** (`oklch(0.488 0.243 264.376)` / `#7d7cce`): Sidebar primary in dark mode. Adds a touch of color depth without overwhelming.

### The Warmth Rule

This palette explicitly avoids corporate coldness. Gray tints favor neutrality with a hair toward warm (slightly reduced blue channel), never toward clinical blue. The single saturated accent (warm reddish tone) is reserved for states that demand attention; its rarity is the point.

## Typography

**Display Font:** Inter Variable (single family, weight contrast carries hierarchy)
**Fallback:** -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif

**Character:** Clean, modern sans-serif with natural proportions. The variable weight axis allows semantic hierarchy without font switching. At small sizes, the typeface remains readable; at display sizes, it's warm and inviting, not cold.

### Hierarchy

- **Display** (`clamp(2rem, 5vw, 3rem)`, 600 weight): Hero headlines, main title. Used rarely (≤1 per screen). Line height 1.2 for tight, confident composition.
- **Headline** (`clamp(1.25rem, 3vw, 1.5rem)`, 500 weight): Section headings, tool names. Line height 1.3 for breathing room.
- **Body** (`1rem`, 400 weight): Primary content, instructions, descriptions. Maximum line length 65–75 characters (enforced via container width). Line height 1.5 for readability.
- **Label** (`0.875rem`, 500 weight): Form labels, button text, metadata. Line height 1.25. Use sentence case; all-caps reserved for short system labels (≤3 words) and badges only.

### Named Rules

**The Single-Family Rule.** Inter Variable in multiple weights replaces font mixing. This eliminates the "indecision" feel of three competing typefaces and ensures consistency at any scale.

## Elevation

The system is **flat by default with subtle interactive feedback**. No heavy drop shadows. Depth is conveyed through:

- Tonal layering (light gray surfaces over white background)
- Focus rings (ring-3 width, subtle ring/30 opacity on light; visible 3:1 contrast for accessibility)
- Micro-transitions (200ms ease-out on hover/focus state changes)
- Input backgrounds (10–15% opacity of input color over base, not pure white)

This approach keeps the interface light and airy, while the mandala canvas remains the visual focus.

### Elevation Vocabulary (Shadow Strategy)

No persistent drop shadows. Shadows appear only in rare states:

- **Focus Ring:** `ring-3 ring-{ring}/30` (light mode) or `ring-3 ring-{ring}` (dark mode). Indicates keyboard navigation focus.
- **Hover Transition:** 200ms cubic-bezier(0.4, 0, 0.2, 1) (standard easing). Background color lightens/darkens 5–10% on interaction.

### Named Rules

**The Flat-By-Default Rule.** No persistent shadows. Surfaces are flat; focus and state change are conveyed through color shift and focus ring only.

## Components

### Buttons

- **Shape:** Extremely rounded (pill-style): `rounded-4xl` (26px radius). Approachable, playful, inviting.
- **Primary:** Solid dark background (`near-black`), light text (`text-light`), 12px vertical × 24px horizontal padding. Transitions on hover to slightly lighter shade (`#353739`). On focus: `focus-visible:ring-3 focus-visible:ring-{ring}/30`.
- **Outline:** Light background (`light-paper`), dark text, same pill radius. Hover shifts background to `light-gray`. Secondary choice when primary action is already prominent.
- **Secondary / Ghost / Link:** Background-less or very subtle tints. Useful for toggles, filters, or secondary actions within a group.

### Inputs / Fields

- **Style:** `rounded-3xl` (22px, slightly less round than buttons), light-gray background at 50% opacity, dark text. Padding: 8px vertical × 12px horizontal. Transitions on focus to show a focus ring (`ring-3`).
- **Focus:** Border shifts to `ring` color with 3px ring opacity 30%. No background color change on focus (reduces cognitive load).
- **Placeholder:** `text-muted-foreground` (≥4.5:1 contrast).

### Cards / Containers

- **Corner Style:** `rounded-lg` (10px) for most cards. Balanced between modern and warm.
- **Background:** `light-paper` (`#f8f8f7`) in light mode; `dark-card` in dark mode.
- **Shadow Strategy:** None. Layering via tonal difference from background.
- **Border:** Optional `1px solid {border}` for definition.
- **Internal Padding:** Scales from `md` (16px) for small cards to `lg` (24px) for larger content containers.

### Sliders

- **Track:** Light gray background, 4px height.
- **Thumb:** Near-black circle, 16px diameter. Smooth transitions on drag. Focus ring visible on keyboard interaction.

### Switches

- **Style:** Pill-shaped toggle. Off: `light-gray` background; On: Primary color background. Smooth transition 200ms.
- **Accessible:** Always paired with a text label.

### Navigation / Control Panel

- **Density:** Compact but not cramped. Vertical spacing `md` (16px) between control groups. Icons + text labels for all primary controls.
- **Mobile:** Drawer-based (slide-in from edge) on screens <768px. Maintains full access without reflow.

## Do's and Don'ts

### Do:

- **Do** use the warm reddish accent for errors, destructive actions, and warnings only. Never as ambient decoration.
- **Do** pair text labels with icons on all interactive elements. Screen readers + visual users both benefit.
- **Do** respect `prefers-reduced-motion` by removing transitions and animations on state changes; instant transitions are fine.
- **Do** test all text at 18px small-text size (body 1rem, label 0.875rem) for ≥4.5:1 contrast against their backgrounds.
- **Do** keep buttons, inputs, and cards very rounded (pill-style, `rounded-3xl` or `rounded-4xl`). The roundedness is part of the warm, approachable character.
- **Do** maximize canvas space on desktop; adapt the control panel to mobile (drawer or collapsible).

### Don't:

- **Don't** use the SaaS corporate look (sharp corners, blue/gray bleakness, clinical symmetry). Warmth and playfulness come first.
- **Don't** clutter the interface with too many visible controls at once. Group related sliders/switches and use collapsibles or drawers.
- **Don't** use the minimalist coldness aesthetic (sterile white, hard shadows, harsh contrast). This is a studio, not an operating room.
- **Don't** pair colors that are both desaturated and on the cool end of neutral. Bias toward warm or neutral if you must tint.
- **Don't** use red/green color pairs without additional visual markers (icons, checkmarks). Color-blind users must distinguish states.
- **Don't** animate layout properties (width, height, left/top) without careful performance testing; transform and opacity are safer.
- **Don't** use side-stripe borders (`border-left` or `border-right` > 1px) as accent. Use full borders, tints, or icon + color combinations instead.
- **Don't** gate content visibility on a transition. All content should be visible by default; transitions enhance, not reveal.
