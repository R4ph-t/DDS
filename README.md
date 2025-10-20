# DDS - Demo Design System

A CLI tool for rapidly setting up beautiful demo projects with pre-built components, Tailwind CSS, and shadcn/ui integration.

## Features

- 🎨 **Square, clean design** - No rounded corners, solid colors (matches Render style)
- 🚀 **Built on shadcn/ui** - Extends shadcn with demo-specific components
- 💻 **Code highlighting** - Syntax highlighting with Shiki
- ✏️ **Code editing** - Interactive CodeMirror editor
- 📦 **Component library** - Navigation, forms, code editors, metrics, and more
- ⚡ **Fast setup** - Get started in minutes
- 🔧 **Own the code** - Components copied to your project, fully customizable

## Installation

```bash
npm install -g dds-cli
```

Or use directly with npx:

```bash
npx dds-cli init
```

## Quick Start

### 1. Initialize DDS in your Next.js project

```bash
# In your Next.js project directory
npx dds-cli init
```

This will:
- Install Tailwind CSS with square corners configuration
- Set up shadcn/ui integration
- Install Shiki for syntax highlighting
- Install CodeMirror for code editing
- Configure utilities and styles

### 2. Add components

```bash
# Add specific components
npx dds-cli add navigation code-block

# Or select from a list
npx dds-cli add
```

### 3. Use components in your app

Components work directly in your Next.js pages - no preview tool needed!

## Available Components

### UI Components

- **code-block** - Syntax-highlighted code blocks with Shiki (read-only display)
- **code-editor** - Interactive code editor with CodeMirror (YAML, JavaScript, JSON, Python)
- **results-panel** - Panel for displaying validation results or output
- **stat-card** - Dashboard statistics cards
- **metric-card** - Collapsible metric cards with breakdowns (inspired by Logfire demo)
- **progress-bar** - Progress bars with labels and percentages
- **toast** - Toast notification system with useToast hook
- **form-field** - Enhanced form inputs with validation

### Block Components

- **navigation** - Clean navigation bar
- **hero-minimal** - Minimal hero section
- **editor-layout** - Split layout for editor and results (like [Blueprint Validator](https://blueprint-validator.onrender.com/))

## Usage Examples

### Code Block

```tsx
import { CodeBlock } from "@/components/ui/code-block"

export default function Page() {
  return (
    <CodeBlock
      code={`console.log("Hello, world!")`}
      language="javascript"
    />
  )
}
```

### Navigation

```tsx
import { Navigation } from "@/components/blocks/navigation"

export default function Page() {
  return (
    <Navigation
      logo="MyApp"
      links={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs" },
      ]}
      actions={
        <button className="bg-primary px-4 py-2 text-primary-foreground">
          Sign In
        </button>
      }
    />
  )
}
```

### Stat Card

```tsx
import { StatCard } from "@/components/ui/stat-card"

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <StatCard
        label="Total Users"
        value="12,543"
        change="+8.2%"
        changeType="positive"
      />
      <StatCard
        label="Revenue"
        value="$54,239"
        change="+12.5%"
        changeType="positive"
      />
      <StatCard
        label="Active Projects"
        value="324"
      />
    </div>
  )
}
```

### Code Editor

```tsx
"use client"
import { CodeEditor } from "@/components/ui/code-editor"
import { useState } from "react"

export default function EditorPage() {
  const [code, setCode] = useState("")
  
  return (
    <CodeEditor
      value={code}
      onChange={setCode}
      language="yaml"
      placeholder="Paste your YAML here..."
      height="500px"
    />
  )
}
```

### Editor Layout (Complete Tool)

Build a complete tool like the [Blueprint Validator](https://blueprint-validator.onrender.com/):

```tsx
"use client"
import { EditorLayout } from "@/components/blocks/editor-layout"
import { CodeEditor } from "@/components/ui/code-editor"
import { ResultsPanel } from "@/components/ui/results-panel"
import { useState } from "react"

export default function ValidatorPage() {
  const [code, setCode] = useState("")
  const [results, setResults] = useState([])

  const handleValidate = () => {
    // Your validation logic
    setResults([
      {
        type: "success",
        message: "Valid!",
        details: "Everything looks good"
      }
    ])
  }

  return (
    <EditorLayout
      title="My Validator"
      description="Validate your code"
      links={[
        { label: "Documentation", href: "/docs" }
      ]}
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
          title="Results"
          results={results}
          emptyMessage="Click validate to see results"
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

## Design Philosophy

DDS follows a clean, modern design aesthetic:

- **Square corners** - No border-radius for a clean look
- **Solid colors** - No gradients or complex patterns
- **High contrast** - Clear hierarchy and readability
- **Minimal animations** - Subtle transitions only

## Using with shadcn/ui

DDS components work seamlessly with shadcn components:

```bash
# Install shadcn components as needed
npx shadcn@latest add button card input
```

Then use them together:

```tsx
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

## Development

Build the CLI:

```bash
npm install
npm run build
```

Test locally:

```bash
npm run test
```

## License

MIT

