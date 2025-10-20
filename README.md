# Render DDS (Demo Design System)

A React component library for building beautiful Render demos. Built with TypeScript, Tailwind CSS v4, and designed for rapid prototyping.

## Installation

```bash
npm install render-dds
```

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

## License

MIT
