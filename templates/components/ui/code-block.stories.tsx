import type { Story } from "@ladle/react"
import { CodeBlock } from "./code-block"
import { createStoryWithCode } from "../../../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const sampleCode = `function greet(name: string) {
  console.log(\`Hello, \${name}!\`)
}

greet("World")`

const sampleJSX = `import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="p-4">
      <Button>Click me</Button>
    </div>
  )
}`

const sampleYAML = `services:
  - type: web
    name: my-app
    runtime: node
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production`

const codeBlockProps = [
  {
    name: "code",
    type: "string",
    required: true,
    description: "The code to display",
  },
  {
    name: "language",
    type: "string",
    required: true,
    description: "Programming language for syntax highlighting",
  },
]

export const TypeScript: Story = () => (
  <StoryWithCode
    title="CodeBlock - TypeScript"
    description="Syntax-highlighted TypeScript code. Automatically adapts to light/dark theme using Shiki."
    props={codeBlockProps}
  >
    <div className="space-y-4">
      <p className="text-foreground">Toggle theme to see syntax highlighting adapt automatically</p>
      <CodeBlock code={sampleCode} language="typescript" />
    </div>
  </StoryWithCode>
)

export const JavaScript: Story = () => (
  <StoryWithCode
    title="CodeBlock - JavaScript"
    description="Syntax-highlighted JavaScript code. Great for documentation and code examples."
    props={codeBlockProps}
  >
    <CodeBlock code={sampleCode} language="javascript" />
  </StoryWithCode>
)

export const JSX: Story = () => (
  <StoryWithCode
    title="CodeBlock - JSX/TSX"
    description="Syntax-highlighted JSX/TSX code. Perfect for React component examples."
    props={codeBlockProps}
  >
    <CodeBlock code={sampleJSX} language="tsx" />
  </StoryWithCode>
)

export const Python: Story = () => (
  <StoryWithCode
    title="CodeBlock - Python"
    description="Syntax-highlighted Python code. Supports Python syntax with proper indentation."
    props={codeBlockProps}
  >
    <CodeBlock
      code={`def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))`}
      language="python"
    />
  </StoryWithCode>
)

export const YAML: Story = () => (
  <StoryWithCode
    title="CodeBlock - YAML"
    description="Syntax-highlighted YAML code. Essential for configuration files like render.yaml."
    props={codeBlockProps}
  >
    <CodeBlock code={sampleYAML} language="yaml" />
  </StoryWithCode>
)
