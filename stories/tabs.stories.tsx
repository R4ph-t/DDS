import type { Story } from "@ladle/react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../src/components/ui/tabs"
import { createStoryWithCode } from "../.ladle/story-helpers"
import { CodeBlock } from "../src/components/ui/code-block"

const StoryWithCode = createStoryWithCode(import.meta.url)

const tabsProps = [
  {
    name: "defaultValue",
    type: "string",
    required: true,
    description: "The value of the tab that should be active by default",
  },
  { name: "value", type: "string", description: "Controlled value of the active tab" },
  {
    name: "onValueChange",
    type: "function",
    description: "Callback when the active tab changes",
  },
]

export const Basic: Story = () => (
  <StoryWithCode
    title="Tabs - Basic"
    description="Basic tabbed interface with three panels. Built with Radix UI for accessibility."
    props={tabsProps}
  >
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Overview</TabsTrigger>
        <TabsTrigger value="tab2">Documentation</TabsTrigger>
        <TabsTrigger value="tab3">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4 border border-border bg-muted">
          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <p className="text-foreground">
            This is the overview tab. It contains general information about your project.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4 border border-border bg-muted">
          <h3 className="text-lg font-semibold mb-2">Documentation</h3>
          <p className="text-foreground">
            Read the docs to learn more about how to use this component.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4 border border-border bg-muted">
          <h3 className="text-lg font-semibold mb-2">Settings</h3>
          <p className="text-foreground">Configure your preferences and settings here.</p>
        </div>
      </TabsContent>
    </Tabs>
  </StoryWithCode>
)

export const WithCode: Story = () => (
  <Tabs defaultValue="preview">
    <TabsList>
      <TabsTrigger value="preview">Preview</TabsTrigger>
      <TabsTrigger value="code">Code</TabsTrigger>
    </TabsList>
    <TabsContent value="preview">
      <div className="p-8 border border-border bg-background">
        <button className="bg-primary text-primary-foreground px-4 py-2 cursor-pointer">
          Example Button
        </button>
      </div>
    </TabsContent>
    <TabsContent value="code">
      <CodeBlock
        code={`import { Button } from "@/components/ui/button"

export default function Example() {
  return <Button>Example Button</Button>
}`}
        language="tsx"
      />
    </TabsContent>
  </Tabs>
)

export const Languages: Story = () => (
  <Tabs defaultValue="typescript">
    <TabsList>
      <TabsTrigger value="typescript">TypeScript</TabsTrigger>
      <TabsTrigger value="javascript">JavaScript</TabsTrigger>
      <TabsTrigger value="python">Python</TabsTrigger>
    </TabsList>
    <TabsContent value="typescript">
      <CodeBlock
        code={`interface User {
  name: string
  email: string
}

const user: User = {
  name: "John Doe",
  email: "john@example.com"
}`}
        language="typescript"
      />
    </TabsContent>
    <TabsContent value="javascript">
      <CodeBlock
        code={`const user = {
  name: "John Doe",
  email: "john@example.com"
}

console.log(user.name)`}
        language="javascript"
      />
    </TabsContent>
    <TabsContent value="python">
      <CodeBlock
        code={`user = {
    "name": "John Doe",
    "email": "john@example.com"
}

print(user["name"])`}
        language="python"
      />
    </TabsContent>
  </Tabs>
)
