import type { Story } from "@ladle/react"
import { CodeBlock } from "./code-block"

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

export const TypeScript: Story = () => (
  <CodeBlock code={sampleCode} language="typescript" />
)

export const JavaScript: Story = () => (
  <CodeBlock code={sampleCode} language="javascript" />
)

export const JSX: Story = () => (
  <CodeBlock code={sampleJSX} language="tsx" />
)

export const LightTheme: Story = () => (
  <CodeBlock code={sampleCode} language="typescript" theme="light" />
)

export const Python: Story = () => (
  <CodeBlock
    code={`def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))`}
    language="python"
  />
)

