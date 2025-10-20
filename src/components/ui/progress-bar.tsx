import * as React from "react"
import { cn } from "../../lib/utils"

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  label?: string
  showPercentage?: boolean
  size?: "sm" | "md" | "lg"
  color?: "primary" | "success" | "warning" | "error"
}

const sizeStyles = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3",
}

const colorStyles = {
  primary: "bg-primary",
  success: "bg-green-600",
  warning: "bg-yellow-600",
  error: "bg-red-600",
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      className,
      value,
      max = 100,
      label,
      showPercentage = false,
      size = "md",
      color = "primary",
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100))

    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {(label || showPercentage) && (
          <div className="flex items-center justify-between text-sm">
            {label && <span className="text-foreground">{label}</span>}
            {showPercentage && (
              <span className="text-muted-foreground">{percentage.toFixed(0)}%</span>
            )}
          </div>
        )}
        <div className={cn("w-full bg-muted border-2 border-border", sizeStyles[size])}>
          <div
            className={cn("h-full transition-all duration-300 ease-out", colorStyles[color])}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }
)

ProgressBar.displayName = "ProgressBar"

export { ProgressBar }
