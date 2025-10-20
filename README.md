# Render DDS (Demo Design System)

A React component library for building beautiful Render demos. Built with TypeScript, Tailwind CSS v4, and designed for rapid prototyping.

## Installation

Install directly from GitHub using pnpm (recommended):

```bash
pnpm install github:R4ph-t/DDS
```

Or with a specific version/tag:

```bash
pnpm install github:R4ph-t/DDS#v0.1.2
pnpm install github:R4ph-t/DDS#main
```

**Note:** pnpm is faster and more reliable than npm for GitHub packages. If you must use npm, expect longer install times.

## Usage

### 1. Import Styles

Add the DDS styles to your project:

```css
/* app/globals.css or similar */
@import 'render-dds/styles';
```

### 2. Configure Tailwind

Use the DDS Tailwind preset (recommended):

```js
import ddsPreset from 'render-dds/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [ddsPreset],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Your custom config here
}
```

**Or manually** (if you prefer):

```js
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/render-dds/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  // Rest of your config
}
```

### 3. Import Components

```tsx
import { Button, Alert, Footer, RenderLogo } from 'render-dds'

export default function MyDemo() {
  return (
    <div>
      <RenderLogo variant="full" height={32} />
      <Alert variant="info">
        Welcome to Render!
      </Alert>
      <Button variant="primary">
        Deploy Now
      </Button>
    </div>
  )
}
```

## Available Components

### UI Components
- **Button** - Primary, secondary, destructive, outline variants + action buttons
- **Link** - Accessible links with external link detection
- **Alert** - Info, warning, error, success, help variants
- **Input** - Text input with label
- **Label** - Form labels
- **FormField** - Combined label + input + error message
- **CodeBlock** - Syntax-highlighted code with Shiki
- **CodeEditor** - Interactive code editor with CodeMirror
- **Toast** - Notifications (success, error, info)
- **Tabs** - Tab navigation
- **Collapsible** - Expandable sections
- **StatCard** - Display statistics
- **ProgressBar** - Progress indicators with cost tracking
- **MetricCard** - Collapsible metric cards
- **ResultsPanel** - Validation results display
- **RenderLogo** - Render branding (mark or full logo)
- **Icon** - Ionicons 5 icons

### Block Components
- **Footer** - Page footer with links and copyright
- **Navigation** - Navigation bar
- **HeroMinimal** - Minimal hero section
- **EditorLayout** - Full-page editor layout

### Action Buttons
Pre-configured buttons for common actions:
`SaveButton`, `DeployButton`, `DeleteButton`, `EditButton`, `CreateButton`, `UploadButton`, `DownloadButton`, and more.

## Design Principles

- **Square corners** - No border-radius
- **Solid colors** - No gradients
- **Clean & minimal** - Focus on content
- **Render's palette** - Purple/violet primary colors
- **Dark mode support** - Built-in dark mode

## Development

### Running Ladle (Component Preview)

```bash
npm run ladle
```

Visit `http://localhost:61000` to browse all components.

### Building

```bash
npm run build
```

### Type Checking

```bash
npm run type-check
```

## Tree Shaking

render-dds is fully tree-shakeable. Only import what you need:

```tsx
// ✅ Only Button code is included
import { Button } from 'render-dds'

// ✅ Multiple components
import { Button, Alert, Footer } from 'render-dds'
```

Tailwind CSS will also only include the styles for components you actually use.

## TypeScript

Full TypeScript support with exported types:

```tsx
import type { ButtonProps, AlertProps } from 'render-dds'
```

## Development

### Creating a New Component

Use the component generator to scaffold a new component with its story file:

```bash
# Create a UI component (Button, Alert, Card, etc.)
npm run create:component ComponentName

# Create a block component (Hero, Footer, Navigation, etc.)
npm run create:component ComponentName blocks
```

**Examples:**

```bash
npm run create:component Card
# Creates:
# - src/components/ui/card.tsx
# - stories/ui/card.stories.tsx

npm run create:component Hero blocks
# Creates:
# - src/components/blocks/hero.tsx
# - stories/blocks/hero.stories.tsx
```

**After creating a component:**

1. Add your component logic to the `.tsx` file
2. Update the story with examples
3. Export the component from `src/index.ts`:
   ```ts
   export { Card } from "./components/ui/card"
   export type { CardProps } from "./components/ui/card"
   ```
4. Run `npm run ladle` to preview

### Publishing a New Version

Use the automated release scripts:

```bash
# For bug fixes (0.1.2 → 0.1.3)
npm run release:patch

# For new features (0.1.2 → 0.2.0)
npm run release:minor

# For breaking changes (0.1.2 → 1.0.0)
npm run release:major
```

Each command will:
1. Build the package
2. Bump the version in `package.json`
3. Create a git commit with the version
4. Create a git tag (e.g., `v0.1.3`)
5. Push to GitHub with tags

### Manual Development Workflow

If you prefer manual control:

```bash
# Make your changes
npm run build

# Commit changes
git add -A
git commit -m "Your changes"

# Create version tag
git tag v0.1.x
git push && git push --tags
```

## License

MIT
