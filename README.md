# Mandala Generator

A beautifully crafted, interactive mandala design generator built with React, TypeScript, and Vite. Create infinite unique mandala patterns with customizable parameters, animations, and color schemes.

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **UI Components**: Radix UI + Custom UI layer with shadcn/ui patterns
- **Animation**: HTML5 Canvas with requestAnimationFrame
- **Styling**: Tailwind CSS with custom design tokens

## Project Structure

```
src/
├── components/              # React components
│   ├── ui/                 # Reusable UI components (button, tooltip, slider, etc.)
│   ├── mandala-canvas.tsx  # Main canvas renderer
│   ├── control-panel.tsx   # Settings & parameter controls
│   ├── app-footer.tsx      # Footer component
│   └── ...
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions & helpers
│   ├── patterns/           # Mandala pattern generators
│   ├── renderer/           # Canvas rendering logic
│   └── ...
├── types/                   # TypeScript type definitions
└── App.tsx                 # Main app component
```

## Development

### Prerequisites
- Node.js 18+
- pnpm

### Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Development Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checker

## Available UI Components

The project includes a curated set of UI components built on Radix UI:

- **Button** - Primary action button
- **Tooltip** - Hover tooltips (Radix UI)
- **Slider** - Value range slider
- **Switch** - Toggle switch
- **Label** - Form label
- **Separator** - Visual divider
- **Collapsible** - Expandable sections
- **Drawer** - Mobile-friendly side drawer
- **ScrollArea** - Custom scrollbar styling

To use a component:

```tsx
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"

export function MyComponent() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

## Features

- 🎨 **Real-time mandala generation** with Canvas API
- ⚙️ **Fine-grained controls** for rings, symmetry, complexity, scale
- 🎬 **Smooth animations** with configurable speed
- 🌈 **Custom color palettes** with gradient support
- 📱 **Responsive design** for desktop and mobile
- 🔄 **Randomization** with optional parameter locking
- 🎯 **Seed-based generation** for reproducible patterns

## Git Configuration

The following directories are excluded from version control:

- `.agents/`, `.gemini/`, `.cursor/`, `.kiro/`, `.qoder/`, `.claude/` - AI agent skill directories
- `.impeccable/` - Design tool configuration

These are automatically ignored via `.gitignore` and don't need to be committed.

## License

MIT
