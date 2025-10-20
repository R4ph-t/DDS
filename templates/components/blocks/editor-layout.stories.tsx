import type { Story } from "@ladle/react"
import { EditorLayout } from "./editor-layout"
import { CodeEditor } from "../ui/code-editor"
import { ResultsPanel } from "../ui/results-panel"
import { useState } from "react"
import { createStoryWithCode } from "../../../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const editorLayoutProps = [
  {
    name: "title",
    type: "string",
    required: true,
    description: "Page title",
  },
  {
    name: "description",
    type: "string",
    description: "Page description",
  },
  {
    name: "links",
    type: "array",
    description: "Documentation or help links",
  },
  {
    name: "editor",
    type: "ReactNode",
    required: true,
    description: "Code editor component (left side)",
  },
  {
    name: "results",
    type: "ReactNode",
    required: true,
    description: "Results panel component (right side)",
  },
  {
    name: "actions",
    type: "ReactNode",
    description: "Action buttons in the header",
  },
]

const yamlExample = `services:
  - type: web
    name: my-web-service
    runtime: node
    plan: starter`

export const BlueprintValidator: Story = () => {
  const [code, setCode] = useState(yamlExample)
  const [results, setResults] = useState<any[]>([])

  const handleValidate = () => {
    // Simulate validation
    setResults([
      {
        type: "success",
        message: "Blueprint is valid",
        details: "All services passed validation",
      },
    ])
  }

  const handleClear = () => {
    setCode("")
    setResults([])
  }

  return (
    <StoryWithCode
      title="EditorLayout - Blueprint Validator"
      description="Full-featured editor layout for validation tools. Includes header with title, description, documentation links, and action buttons."
      props={editorLayoutProps}
    >
      <EditorLayout
        title="Blueprint Validator"
        description="Validate your render.yaml blueprint against the official schema"
        links={[{ label: "View Blueprint Specification", href: "#" }]}
        editor={
          <CodeEditor
            value={code}
            onChange={setCode}
            language="yaml"
            placeholder="Paste your render.yaml here..."
            height="500px"
          />
        }
        results={
          <ResultsPanel
            title="Validation Results"
            results={results}
            emptyMessage="Paste or write your blueprint and click validate"
          />
        }
        actions={
          <>
            <button
              onClick={handleValidate}
              className="bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground"
            >
              Validate Blueprint
            </button>
            <button
              onClick={handleClear}
              className="border-2 border-border px-6 py-2 text-sm font-semibold"
            >
              Clear
            </button>
          </>
        }
      />
    </StoryWithCode>
  )
}

export const CodePlayground: Story = () => {
  const [code, setCode] = useState('console.log("Hello, world!")')
  const [output, setOutput] = useState<any[]>([])

  const handleRun = () => {
    setOutput([
      {
        type: "info",
        message: "Code executed successfully",
        details: "Output: Hello, world!",
      },
    ])
  }

  return (
    <StoryWithCode
      title="EditorLayout - Code Playground"
      description="Interactive code playground layout. Allows users to write and execute code with real-time output."
      props={editorLayoutProps}
    >
      <EditorLayout
        title="JavaScript Playground"
        description="Test your JavaScript code"
        editor={<CodeEditor value={code} onChange={setCode} language="javascript" height="500px" />}
        results={
          <ResultsPanel
            title="Console Output"
            results={output}
            emptyMessage="Click 'Run' to execute your code"
          />
        }
        actions={
          <>
            <button
              onClick={handleRun}
              className="bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground cursor-pointer"
            >
              Run Code
            </button>
            <button
              onClick={() => setCode("")}
              className="border-2 border-border px-6 py-2 text-sm font-semibold cursor-pointer"
            >
              Clear
            </button>
          </>
        }
      />
    </StoryWithCode>
  )
}

export const Minimal: Story = () => {
  const [code, setCode] = useState("")

  return (
    <StoryWithCode
      title="EditorLayout - Minimal"
      description="Minimal editor layout with just a title, editor, and results panel. No description, links, or actions."
      props={editorLayoutProps}
    >
      <EditorLayout
        title="Editor"
        editor={<CodeEditor value={code} onChange={setCode} language="yaml" height="500px" />}
        results={<ResultsPanel emptyMessage="No output" />}
      />
    </StoryWithCode>
  )
}
