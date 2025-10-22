# DDS Component Library

Complete reference for all components in the Demo Design System.

## UI Components

### code-block

**Purpose**: Display syntax-highlighted code (read-only)  
**Uses**: Shiki for highlighting  
**Languages**: TypeScript, JavaScript, Python, YAML, JSON, etc.

```tsx
import { CodeBlock } from "@/components/ui/code-block"

<CodeBlock
  code={`console.log("Hello")`}
  language="javascript"
  theme="dark"
/>
```

### code-editor

**Purpose**: Interactive code editing with syntax highlighting  
**Uses**: CodeMirror  
**Languages**: YAML, JavaScript, TypeScript, JSON, Python

```tsx
import { CodeEditor } from "@/components/ui/code-editor"

const [code, setCode] = useState("")

<CodeEditor
  value={code}
  onChange={setCode}
  language="yaml"
  height="500px"
  placeholder="Paste your code..."
/>
```

### results-panel

**Purpose**: Display validation results, logs, or output  
**Supports**: Success, error, warning, info messages

```tsx
import { ResultsPanel } from "@/components/ui/results-panel"

<ResultsPanel
  title="Validation Results"
  results={[
    {
      type: "success",
      message: "Valid configuration",
      details: "All checks passed"
    }
  ]}
  emptyMessage="No results yet"
/>
```

### stat-card

**Purpose**: Display key metrics and statistics  
**Features**: Value, change indicator, icon support

```tsx
import { StatCard } from "@/components/ui/stat-card"

<StatCard
  label="Total Users"
  value="12,543"
  change="+8.2%"
  changeType="positive"
  icon={<UserIcon />}
/>
```

### metric-card

**Purpose**: Collapsible metric cards with detailed breakdowns  
**Inspired by**: Logfire demo metrics

```tsx
import { MetricCard } from "@/components/ui/metric-card"

<MetricCard
  title="Quality Score"
  value="87/100"
  subtitle="Average across 2 evaluations"
  collapsible
>
  <div className="space-y-3">
    <div className="flex justify-between">
      <span>Accuracy</span>
      <span>9/10</span>
    </div>
  </div>
</MetricCard>
```

### progress-bar

**Purpose**: Show progress with labels and percentages  
**Features**: Multiple colors, sizes, labels

```tsx
import { ProgressBar } from "@/components/ui/progress-bar"

<ProgressBar
  value={65}
  max={100}
  label="Processing..."
  showPercentage
  color="primary"
  size="md"
/>
```

### toast

**Purpose**: Toast notification system  
**Includes**: useToast hook for easy usage  
**Types**: success, error, info

```tsx
import { useToast } from "@/components/hooks/use-toast"
import { ToastContainer } from "@/components/ui/toast"

const { toasts, removeToast, success, error, info } = useToast()

// Show toast
success("Operation completed!")

// Render container
<ToastContainer toasts={toasts} removeToast={removeToast} />
```

### spinner

**Purpose**: Loading spinner for async operations  
**Sizes**: xs, sm, default, lg, xl  
**Variants**: primary, secondary, white, foreground  
**Features**: Render mark inside by default (can be disabled)

```tsx
import { Spinner } from "@/components/ui/spinner"

// Basic spinner (with Render mark)
<Spinner />

// Without mark
<Spinner showMark={false} />

// With label
<Spinner label="Loading..." />

// Different sizes and variants
<Spinner size="lg" variant="secondary" />

// In button
<Button disabled>
  <Spinner size="xs" variant="white" />
  Loading...
</Button>

// Full screen
<div className="min-h-screen flex items-center justify-center">
  <Spinner size="xl" label="Loading your content..." />
</div>
```

### form-field

**Purpose**: Enhanced form inputs with validation  
**Features**: Labels, errors, helper text

```tsx
import { FormField } from "@/components/ui/form-field"

<FormField
  label="Email"
  type="email"
  placeholder="you@example.com"
  error="Invalid email address"
  helperText="We'll never share your email"
/>
```

### theme-toggle

**Purpose**: Toggle between light and dark modes  
**Features**: Works with Tailwind dark mode, localStorage persistence, system preference detection

```tsx
import { ThemeProvider } from "@/components/providers/theme-provider"
import { ThemeToggle } from "@/components/ui/theme-toggle"

// Add to globals.css (Tailwind v4):
// @variant dark (.dark &);

// Wrap your app with ThemeProvider
<ThemeProvider>
  <ThemeToggle variant="outline" size="default" />
</ThemeProvider>

// Use the hook to access theme state
import { useTheme } from "@/components/hooks/use-theme"
const { theme, setTheme, toggleTheme } = useTheme()
```

### container

**Purpose**: Layout container with consistent styling  
**Features**: Multiple variants, padding options, width control

```tsx
import { Container } from "@/components/ui/container"

<Container variant="bordered" padding="default" centered>
  <h1>Content goes here</h1>
</Container>
```

### card

**Purpose**: Content card with header, content, and footer sections  
**Features**: Outlined and elevated variants, composable sections

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

<Card variant="outlined">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content here</p>
  </CardContent>
  <CardFooter>
    <button>Action</button>
  </CardFooter>
</Card>
```

## Block Components

### navigation

**Purpose**: Flexible navigation bar with positioning control  
**Features**: Logo, links with icons, action buttons, three positioning modes

```tsx
import { Navigation } from "@/components/blocks/navigation"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { FiHome, FiBook } from "react-icons/fi"

// Links on the left (default)
<Navigation
  logo="MyApp"
  links={[
    { label: "Home", href: "/", icon: <FiHome /> },
    { label: "Docs", href: "/docs", icon: <FiBook /> }
  ]}
  actions={<ThemeToggle />}
/>

// Links centered
<Navigation
  logo="MyApp"
  links={[
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" }
  ]}
  linksPosition="center"
  actions={<ThemeToggle />}
/>

// Links on the right
<Navigation
  logo="MyApp"
  links={[
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" }
  ]}
  linksPosition="right"
  actions={<ThemeToggle />}
/>
```

**Props**:
- `logo` - Logo or brand element (left side)
- `links` - Array of `{ label, href, icon?, active? }` objects
- `linksPosition` - `"left"` (default) | `"center"` | `"right"`
- `actions` - Action buttons or elements (right side)
- `sticky` - Make navigation sticky at top (default: `false`)
- `currentPath` - Current pathname for automatic active link detection

**Active State**:
Pass the current pathname to automatically highlight the active page:

```tsx
import { usePathname } from "next/navigation"

const pathname = usePathname()

<Navigation
  currentPath={pathname}
  links={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ]}
/>
```

Links are automatically marked as active when their `href` matches `currentPath`. You can manually override with `active: true` if needed.

### hero-minimal

**Purpose**: Minimal hero section  
**Features**: Title, subtitle, CTA buttons

```tsx
import { HeroMinimal } from "@/components/blocks/hero-minimal"

<HeroMinimal
  title="Build and Deploy with Confidence"
  subtitle="Deploy from GitHub to production in seconds"
>
  <button className="bg-primary px-6 py-3">Get Started</button>
  <button className="border-2 px-6 py-3">Learn More</button>
</HeroMinimal>
```

### editor-layout

**Purpose**: Complete layout for code editing tools  
**Inspired by**: Blueprint Validator  
**Features**: Split layout, header, actions

```tsx
import { EditorLayout } from "@/components/blocks/editor-layout"
import { CodeEditor } from "@/components/ui/code-editor"
import { ResultsPanel } from "@/components/ui/results-panel"

<EditorLayout
  title="My Validator"
  description="Validate your configuration"
  links={[
    { label: "Documentation", href: "/docs" }
  ]}
  editor={
    <CodeEditor
      value={code}
      onChange={setCode}
      language="yaml"
    />
  }
  results={
    <ResultsPanel
      title="Results"
      results={results}
    />
  }
  actions={
    <>
      <button onClick={validate}>Validate</button>
      <button onClick={clear}>Clear</button>
    </>
  }
/>
```

## Design Tokens

All components follow these design principles:

### Colors
- **Primary**: Blue (customizable)
- **Success**: Green
- **Warning**: Yellow
- **Error**: Red
- **Muted**: Gray/Zinc

### Layout
- **Corners**: Square (border-radius: 0)
- **Borders**: 1px solid borders
- **Spacing**: Consistent padding/margins

### Typography
- **Font**: System font stack
- **Sizes**: Tailwind default scale
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Shadows
- Minimal shadows
- Focus states with border highlights

## Customization

### Theming

Update `tailwind.config.ts`:

```ts
colors: {
  primary: {
    DEFAULT: "hsl(YOUR_HUE, 83%, 58%)",
    foreground: "hsl(0, 0%, 100%)",
  },
}
```

### CSS Variables

Modify `globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --radius: 0; /* Keep at 0 for square corners */
}
```

## Integration with shadcn

DDS components are designed to work alongside shadcn/ui:

```bash
# Install shadcn components
npx shadcn@latest add button card dialog

# Use together
import { Button } from "@/components/ui/button" // shadcn
import { CodeEditor } from "@/components/ui/code-editor" // DDS
```

## Best Practices

1. **Square Corners**: Keep `--radius: 0` for consistency
2. **Solid Colors**: Avoid gradients
3. **1px Borders**: Use `border` class (not border-2)
4. **Dark Mode**: All components support dark mode (add `@variant dark` to CSS)
5. **Collapsible Details**: Use for complex data displays
6. **Toast Feedback**: Provide user feedback for actions

## Component Dependencies

- **Tailwind CSS** - Required
- **tailwindcss-animate** - For animations
- **Shiki** - For code highlighting
- **CodeMirror** - For code editing
- **Lucide React** - For icons
- **clsx + tailwind-merge** - For className utilities
- **shadcn/ui** - Optional but recommended

## Performance

All components are optimized for:
- Tree-shaking
- Code splitting
- Minimal bundle size
- Fast rendering

## Accessibility

Components follow accessibility best practices:
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Focus management
- Color contrast compliance


