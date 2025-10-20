import * as React from "react"
import { cn } from "@/lib/utils"

export type ResultStatus = "success" | "error" | "warning" | "info" | "idle"

export interface ResultsPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  status?: ResultStatus
  results?: Array<{
    type: ResultStatus
    message: string
    details?: string
  }>
  emptyMessage?: string
}

const statusStyles = {
  success: "!border-green-600 bg-green-50 text-green-900 dark:bg-green-950 dark:text-green-100",
  error: "!border-red-600 bg-red-50 text-red-900 dark:bg-red-950 dark:text-red-100",
  warning:
    "!border-yellow-600 bg-yellow-50 text-yellow-900 dark:bg-yellow-950 dark:text-yellow-100",
  info: "!border-blue-600 bg-blue-50 text-blue-900 dark:bg-blue-950 dark:text-blue-100",
  idle: "border-border bg-muted text-muted-foreground",
}

const statusIcons = {
  success: "✓",
  error: "✖",
  warning: "⚠",
  info: "ℹ",
  idle: "",
}

const ResultsPanel = React.forwardRef<HTMLDivElement, ResultsPanelProps>(
  (
    {
      className,
      title = "Results",
      status = "idle",
      results = [],
      emptyMessage = "No results yet",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("flex h-full flex-col border-2 border-border bg-background", className)}
        {...props}
      >
        <div className="border-b-2 border-border bg-muted px-4 py-3">
          <h3 className="font-semibold">{title}</h3>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {results.length === 0 ? (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              {emptyMessage}
            </div>
          ) : (
            <div className="space-y-3">
              {results.map((result, i) => (
                <div key={i} className={cn("border p-3", statusStyles[result.type])}>
                  <div className="flex items-start gap-2">
                    <span className="font-bold">{statusIcons[result.type]}</span>
                    <div className="flex-1">
                      <p className="font-medium">{result.message}</p>
                      {result.details && (
                        <p className="mt-1 text-sm opacity-80">{result.details}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
)

ResultsPanel.displayName = "ResultsPanel"

export { ResultsPanel }
