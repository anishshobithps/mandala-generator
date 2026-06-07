# The Mandala Studio

![GitHub Health](https://shieldcn.dev/group/github/stars/anishshobithps/themandalastudio+github/last-commit/anishshobithps/themandalastudio+github/commits/anishshobithps/themandalastudio+github/license/anishshobithps/themandalastudio.svg?variant=secondary)

An interactive mandala design generator built with React 19, TypeScript, and Vite. Generates infinite unique mandala patterns rendered as SVG with configurable parameters, animations, and color schemes.

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 8 with Rolldown
- **Rendering**: SVG via `@svgdotjs/svg.js`
- **UI Components**: Radix UI + shadcn/ui
- **Styling**: Tailwind CSS v4
- **Color**: `culori` for OKLCH color manipulation and gradients
- **URL State**: `nuqs` for full config persistence via query params

## Features

- Real-time SVG mandala generation
- 10 pattern types: petals, arcs, triangles, diamonds, polygons, waves, crosses, teardrop, chevron, lotus
- Controls for rings (2-8), symmetry (4-24), complexity (1-10), scale, and animation speed
- OKLCH color editor for background, primary, secondary, and accent colors
- Fill toggle and animation toggle with configurable speed
- Randomization with per-parameter locking
- Full config persistence in the URL — every slider, color, and toggle is shareable and survives reload
- Seed-based generation for reproducible patterns; manual edits encoded as a compact base64 param
- SVG export at 512px, 1080px, 2048px, or 4096px with optional animation and background
- Responsive layout: sidebar on desktop, bottom-sheet drawer on mobile
- Light/dark theme with keyboard shortcut `D` to toggle

## Development

### Prerequisites

- Node.js 22+
- pnpm

### Getting Started

```bash
pnpm install
pnpm dev
```

### Scripts

```bash
pnpm dev          # Start dev server
pnpm build        # Type-check and build for production
pnpm preview      # Preview production build
pnpm lint         # Run ESLint
pnpm typecheck    # Run TypeScript type checker
pnpm format       # Format with Prettier + Tailwind plugin
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```
VITE_UMAMI_WEBSITE_ID=your-umami-website-id
```
