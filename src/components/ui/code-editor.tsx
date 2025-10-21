"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
import CodeMirror from "@uiw/react-codemirror"
import { yaml } from "@codemirror/lang-yaml"
import { javascript } from "@codemirror/lang-javascript"
import { json } from "@codemirror/lang-json"
import { python } from "@codemirror/lang-python"

export interface CodeEditorProps {
  value?: string
  onChange?: (value: string) => void
  language?: "yaml" | "javascript" | "typescript" | "json" | "python"
  placeholder?: string
  readOnly?: boolean
  height?: string
  className?: string
}

const languageExtensions = {
  yaml: [yaml()],
  javascript: [javascript()],
  typescript: [javascript({ typescript: true })],
  json: [json()],
  python: [python()],
}

const CodeEditor = React.forwardRef<HTMLDivElement, CodeEditorProps>(
  (
    {
      className,
      value,
      onChange,
      language = "yaml",
      placeholder,
      readOnly = false,
      height = "400px",
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("border border-border", className)}>
        <CodeMirror
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          height={height}
          extensions={languageExtensions[language]}
          editable={!readOnly}
          theme="dark"
          basicSetup={{
            lineNumbers: true,
            highlightActiveLineGutter: true,
            highlightActiveLine: true,
            foldGutter: true,
          }}
        />
      </div>
    )
  }
)

CodeEditor.displayName = "CodeEditor"

export { CodeEditor }
