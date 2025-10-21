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

### 2. Include Fonts

The design system uses **Inter** (body text) and **Roboto Light** (headers) as free alternatives to Render's brand fonts.

**For Next.js projects** (recommended):

```tsx
// app/layout.tsx
import { Inter, Roboto } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const roboto = Roboto({ 
  weight: '300',
  subsets: ['latin'],
  variable: '--font-roboto',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

Then update your CSS:

```css
/* app/globals.css */
@import 'render-dds/styles';

body {
  font-family: var(--font-inter), 'Inter', -apple-system, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-roboto), 'Roboto', -apple-system, sans-serif;
}
```

**For other projects**, add to your HTML:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Roboto:wght@300&display=swap" rel="stylesheet">
```

### 3. Configure Tailwind

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

### 4. Set Up Theme Provider (Optional)

For dark mode support, wrap your app with `ThemeProvider`:

```tsx
// app/layout.tsx (Next.js App Router)
import { ThemeProvider } from 'render-dds'
import 'render-dds/styles'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### 5. Import Components

```tsx
import { Button, Alert, Footer, RenderLogo, ThemeToggle } from 'render-dds'

export default function MyDemo() {
  return (
    <div>
      <nav className="flex justify-between p-4">
        <RenderLogo variant="full" height={32} />
        <ThemeToggle />
      </nav>
      <Alert variant="info">
        Welcome to Render!
      </Alert>
      <Button variant="default">
        Deploy Now
      </Button>
    </div>
  )
}
```

### 6. Using MDX Content (Optional)

For rich text content, use the `MDXContent` component:

```tsx
import { MDXContent } from 'render-dds'

export default function BlogPost() {
  return (
    <MDXContent>
      <h1>My Blog Post</h1>
      <p>This content is beautifully styled with <code>@tailwindcss/typography</code>.</p>
      <ul>
        <li>Automatic heading styles</li>
        <li>Beautiful links and code blocks</li>
        <li>Dark mode support</li>
      </ul>
    </MDXContent>
  )
}
```

**Note:** The `@tailwindcss/typography` plugin is included in the preset.

## Available Components

### UI Components
- **Button** - Primary, secondary, destructive, outline variants + action buttons
- **ButtonGroup** - Group related buttons together with connected borders
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
- **GridDecoration** - Decorative 90x90px grid background pattern
- **ThemeToggle** - Dark/light mode toggle button
- **Container** - Layout container with variants (bordered, elevated, ghost)
- **Card** - Content card with header, content, footer sections
- **Icon** - Ionicons 5 icons

### Block Components
- **Footer** - Page footer with links and copyright
- **Navigation** - Navigation bar
- **HeroMinimal** - Minimal hero section
- **EditorLayout** - Full-page editor layout
- **MDXContent** - Rich text container with typography styles

### Providers
- **ThemeProvider** - Context provider for dark/light mode management

### Action Buttons
Pre-configured buttons for common actions:
`SaveButton`, `DeployButton`, `DeleteButton`, `EditButton`, `CreateButton`, `UploadButton`, `DownloadButton`, and more.

## Design Principles

- **Square corners** - No border-radius
- **1px borders** - Clean, minimal borders
- **Solid colors** - No gradients
- **Clean & minimal** - Focus on content
- **Render's palette** - Purple/violet primary colors
- **Dark mode support** - Built-in dark mode (requires Tailwind v4 `@variant dark`)

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
