"use client"

import * as React from "react"
import { codeToHtml } from "shiki"
import { cn } from "@/lib/utils"

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  language?: string
  theme?: "dark" | "light"
  showLineNumbers?: boolean
  highlightLines?: number[]
}

const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    {
      className,
      code,
      language = "typescript",
      theme = "dark",
      showLineNumbers = false,
      highlightLines = [],
      ...props
    },
    ref
  ) => {
    const [html, setHtml] = React.useState<string>("")

    React.useEffect(() => {
      const generateHtml = async () => {
        const result = await codeToHtml(code, {
          lang: language,
          theme: theme === "dark" ? "github-dark" : "github-light",
        })
        setHtml(result)
      }
      generateHtml()
    }, [code, language, theme])

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-x-auto border-2 border-border bg-muted p-4",
          className
        )}
        {...props}
      >
        {html ? (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <pre className="text-sm">
            <code>{code}</code>
          </pre>
        )}
      </div>
    )
  }
)

CodeBlock.displayName = "CodeBlock"

export { CodeBlock }

