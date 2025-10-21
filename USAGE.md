# DDS Usage Guide

## Installation

### Global Installation

```bash
npm install -g dds-cli
```

### Local Usage (via npx)

```bash
npx dds-cli init
```

## Getting Started

### 1. Create a New Next.js Project

```bash
npx create-next-app@latest my-demo
cd my-demo
```

### 2. Initialize DDS

```bash
npx dds-cli init
```

This will:
- Install Tailwind CSS with square corners and solid colors
- Set up shadcn/ui
- Install Shiki for code highlighting
- Install CodeMirror for code editing
- Optionally set up Ladle for component preview

### 3. Add Components

```bash
# Add specific components
npx dds-cli add navigation code-editor

# Or select from a list
npx dds-cli add
```

### 4. Preview Components (if Ladle installed)

```bash
npm run ladle
```

## Component Showcase

### Blueprint Validator Style Tool

Build a complete validation tool like the [Blueprint Validator](https://blueprint-validator.onrender.com/):

```tsx
"use client"
import { EditorLayout } from "@/components/blocks/editor-layout"
import { CodeEditor } from "@/components/ui/code-editor"
import { ResultsPanel } from "@/components/ui/results-panel"
import { useState } from "react"

export default function ValidatorPage() {
  const [code, setCode] = useState("")
  const [results, setResults] = useState([])

  const handleValidate = async () => {
    // Your validation logic
    const response = await fetch("/api/validate", {
      method: "POST",
      body: JSON.stringify({ code }),
    })
    const data = await response.json()
    
    setResults([
      {
        type: data.valid ? "success" : "error",
        message: data.message,
        details: data.details,
      },
    ])
  }

  return (
    <EditorLayout
      title="Blueprint Validator"
      description="Validate your render.yaml blueprint"
      editor={
        <CodeEditor
          value={code}
          onChange={setCode}
          language="yaml"
          height="500px"
        />
      }
      results={
        <ResultsPanel
          title="Validation Results"
          results={results}
        />
      }
      actions={
        <>
          <button
            onClick={handleValidate}
            className="bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground"
          >
            Validate
          </button>
          <button
            onClick={() => setCode("")}
            className="border-2 border-border px-6 py-2 text-sm font-semibold"
          >
            Clear
          </button>
        </>
      }
    />
  )
}
```

### Progress Tracking

Show processing progress with metrics:

```tsx
"use client"
import { ProgressBar } from "@/components/ui/progress-bar"
import { MetricCard } from "@/components/ui/metric-card"
import { useState } from "react"

export default function ProcessingPage() {
  const [progress, setProgress] = useState(0)
  const [metrics, setMetrics] = useState({
    cost: "$0.00",
    duration: "0s",
    tokens: 0,
  })

  return (
    <div className="p-6 space-y-6">
      <ProgressBar
        value={progress}
        label="Processing..."
        showPercentage
        color="primary"
      />

      <div className="grid grid-cols-3 gap-4">
        <MetricCard title="Cost" value={metrics.cost} subtitle="API cost" />
        <MetricCard title="Duration" value={metrics.duration} subtitle="Processing time" />
        <MetricCard title="Tokens" value={metrics.tokens} subtitle="Total used" />
      </div>
    </div>
  )
}
```

### Toast Notifications

```tsx
"use client"
import { useToast } from "@/components/hooks/use-toast"
import { ToastContainer } from "@/components/ui/toast"

export default function FormPage() {
  const { toasts, removeToast, success, error } = useToast()

  const handleSubmit = async () => {
    try {
      await submitForm()
      success("Form submitted successfully!")
    } catch (err) {
      error("Failed to submit form")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Your form fields */}
      </form>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </>
  )
}
```

### Data Dashboard

```tsx
import { MetricCard } from "@/components/ui/metric-card"
import { StatCard } from "@/components/ui/stat-card"

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <StatCard
          label="Active Users"
          value="2,543"
          change="+12.5%"
          changeType="positive"
        />
        <StatCard
          label="Revenue"
          value="$45,231"
          change="+8.2%"
          changeType="positive"
        />
        <StatCard
          label="Conversion"
          value="3.2%"
          change="-0.5%"
          changeType="negative"
        />
      </div>

      <MetricCard
        title="Quality Breakdown"
        value="87/100"
        subtitle="Average score"
        collapsible
      >
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Accuracy</span>
            <span>9/10</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Clarity</span>
            <span>8/10</span>
          </div>
        </div>
      </MetricCard>
    </div>
  )
}
```

## Tips

### Using with shadcn

DDS is built to work seamlessly with shadcn components:

```bash
# Install shadcn components
npx shadcn@latest add button card dialog

# Use them together with DDS
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/blocks/navigation"

export default function Page() {
  return (
    <Navigation
      logo="App"
      actions={<Button>Sign In</Button>}
    />
  )
}
```

### Customizing Colors

Update `tailwind.config.ts` to match your brand:

```ts
colors: {
  primary: {
    DEFAULT: "hsl(262, 83%, 58%)", // Your brand color
    foreground: "hsl(0, 0%, 100%)",
  },
}
```

### Dark Mode

DDS components support dark mode out of the box with Tailwind's class-based dark mode.

#### Setup

**1. Add the dark mode variant to your CSS (Tailwind v4):**

```css
/* app/globals.css */
@import "tailwindcss";
@import "render-dds/styles";

@variant dark (.dark &);

/* rest of your styles */
```

**2. Wrap your app with the `ThemeProvider`:**

```tsx
// app/layout.tsx or pages/_app.tsx
import { ThemeProvider, ThemeScript } from "render-dds"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background text-foreground">
      <head>
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

**Important:** 
- Add `bg-background text-foreground` to your `<html>` element to use the DDS theme colors
- Add `<ThemeScript />` in the `<head>` to prevent flash of unstyled content (FOUC) when navigating
- If you use a custom `storageKey` prop on `ThemeProvider`, pass the same key to `ThemeScript`: `<ThemeScript storageKey="my-theme" />`

#### Using the Theme Toggle

```tsx
import { ThemeToggle } from "render-dds"

export default function Navigation() {
  return (
    <nav>
      {/* Your navigation content */}
      <ThemeToggle variant="outline" />
    </nav>
  )
}
```

#### Programmatic Theme Control

```tsx
"use client"
import { useTheme } from "render-dds"

export default function Settings() {
  const { theme, setTheme, toggleTheme } = useTheme()

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}
```

## Real-World Examples

DDS is inspired by and works great for:

1. **[Blueprint Validator](https://blueprint-validator.onrender.com/)** - Code validation tools
2. **Shadow Content Generator** - Form-heavy apps with progress tracking
3. **Logfire Demo** - Data visualization dashboards

See the README for complete component documentation.


