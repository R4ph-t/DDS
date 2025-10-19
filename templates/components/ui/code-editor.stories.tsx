import type { Story } from "@ladle/react"
import { CodeEditor } from "./code-editor"
import { useState } from "react"

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
  return <CodeEditor value={value} onChange={setValue} language="yaml" />
}

export const JavaScript: Story = () => {
  const [value, setValue] = useState(jsExample)
  return <CodeEditor value={value} onChange={setValue} language="javascript" />
}

export const JSON: Story = () => {
  const [value, setValue] = useState('{\n  "name": "DDS",\n  "version": "1.0.0"\n}')
  return <CodeEditor value={value} onChange={setValue} language="json" />
}

export const ReadOnly: Story = () => {
  return <CodeEditor value={yamlExample} language="yaml" readOnly />
}

export const WithPlaceholder: Story = () => {
  const [value, setValue] = useState("")
  return (
    <CodeEditor
      value={value}
      onChange={setValue}
      language="yaml"
      placeholder="Paste your YAML here..."
    />
  )
}

export const CustomHeight: Story = () => {
  const [value, setValue] = useState(yamlExample)
  return <CodeEditor value={value} onChange={setValue} language="yaml" height="600px" />
}

