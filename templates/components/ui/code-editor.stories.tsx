import type { Story } from "@ladle/react"
import { CodeEditor } from "./code-editor"
import { useState } from "react"
import { createStoryWithCode } from "../../../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const codeEditorProps = [
  {
    name: "value",
    type: "string",
    required: true,
    description: "Editor content",
  },
  {
    name: "onChange",
    type: "function",
    description: "Callback when content changes",
  },
  {
    name: "language",
    type: "string",
    defaultValue: "yaml",
    description: "Syntax highlighting language",
  },
  {
    name: "readOnly",
    type: "boolean",
    defaultValue: "false",
    description: "Make editor read-only",
  },
  {
    name: "placeholder",
    type: "string",
    description: "Placeholder text when empty",
  },
  {
    name: "height",
    type: "string",
    defaultValue: "400px",
    description: "Editor height",
  },
]

const yamlExample = `services:
  - type: web
    name: my-web-service
    runtime: node
    plan: starter
    buildCommand: npm install
    startCommand: npm start`

const jsExample = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`

export const YAML: Story = () => {
  const [value, setValue] = useState(yamlExample)
  return (
    <StoryWithCode
      title="CodeEditor - YAML"
      description="Interactive YAML code editor. Perfect for editing render.yaml blueprints and configuration files."
      props={codeEditorProps}
    >
      <CodeEditor value={value} onChange={setValue} language="yaml" />
    </StoryWithCode>
  )
}

export const JavaScript: Story = () => {
  const [value, setValue] = useState(jsExample)
  return (
    <StoryWithCode
      title="CodeEditor - JavaScript"
      description="JavaScript code editor with syntax highlighting and editing support."
      props={codeEditorProps}
    >
      <CodeEditor value={value} onChange={setValue} language="javascript" />
    </StoryWithCode>
  )
}

export const JSON: Story = () => {
  const [value, setValue] = useState('{\n  "name": "DDS",\n  "version": "1.0.0"\n}')
  return (
    <StoryWithCode
      title="CodeEditor - JSON"
      description="JSON code editor for configuration and data editing."
      props={codeEditorProps}
    >
      <CodeEditor value={value} onChange={setValue} language="json" />
    </StoryWithCode>
  )
}

export const ReadOnly: Story = () => {
  return (
    <StoryWithCode
      title="CodeEditor - Read Only"
      description="Read-only code editor for displaying code without editing. Useful for examples and documentation."
      props={codeEditorProps}
    >
      <CodeEditor value={yamlExample} language="yaml" readOnly />
    </StoryWithCode>
  )
}

export const WithPlaceholder: Story = () => {
  const [value, setValue] = useState("")
  return (
    <StoryWithCode
      title="CodeEditor - With Placeholder"
      description="Empty editor with placeholder text to guide users."
      props={codeEditorProps}
    >
      <CodeEditor
        value={value}
        onChange={setValue}
        language="yaml"
        placeholder="Paste your YAML here..."
      />
    </StoryWithCode>
  )
}

export const CustomHeight: Story = () => {
  const [value, setValue] = useState(yamlExample)
  return (
    <StoryWithCode
      title="CodeEditor - Custom Height"
      description="Code editor with custom height. Adjust based on available space and content needs."
      props={codeEditorProps}
    >
      <CodeEditor value={value} onChange={setValue} language="yaml" height="600px" />
    </StoryWithCode>
  )
}
