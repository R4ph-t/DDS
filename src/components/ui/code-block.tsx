"use client"

import * as React from "react"
import { codeToHtml } from "shiki"
import { cn } from "../../lib/utils"

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  language?: string
  showLineNumbers?: boolean
  highlightLines?: number[]
}

const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    {
      className,
      code,
      language = "typescript",
      showLineNumbers = false,
      highlightLines = [],
      ...props
    },
    ref
  ) => {
    const [html, setHtml] = React.useState<string>("")
    const [isDark, setIsDark] = React.useState(false)
    const containerRef = React.useRef<HTMLDivElement>(null)

    // Detect dark mode from parent elements
    React.useEffect(() => {
      const detectDarkMode = () => {
        if (containerRef.current) {
          const element = containerRef.current
          const hasDarkClass = element.closest(".dark") !== null
          setIsDark(hasDarkClass)
        }
      }

      detectDarkMode()

      // Watch for changes to the DOM (when dark class is toggled)
      const observer = new MutationObserver(detectDarkMode)
      const root = document.documentElement
      observer.observe(root, {
        attributes: true,
        attributeFilter: ["class"],
        subtree: true,
      })

      return () => observer.disconnect()
    }, [])

    React.useEffect(() => {
      const generateHtml = async () => {
        const result = await codeToHtml(code, {
          lang: language,
          theme: isDark ? "github-dark" : "github-light",
        })
        setHtml(result)
      }
      generateHtml()
    }, [code, language, isDark])

    // Merge refs
    const mergedRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        // Set internal ref - cast to mutable to allow assignment
        ;(containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node
        // Forward ref
        if (typeof ref === "function") {
          ref(node)
        } else if (ref) {
          ;(ref as React.MutableRefObject<HTMLDivElement | null>).current = node
        }
      },
      [ref]
    )

    return (
      <div
        ref={mergedRef}
        className={cn(
          "relative overflow-x-auto border border-border bg-zinc-50 dark:bg-zinc-900 p-4",
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
