"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Size of the spinner
   * @default "default"
   */
  size?: "xs" | "sm" | "default" | "lg" | "xl"
  /**
   * Color variant of the spinner
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "white" | "foreground"
  /**
   * Show with a label
   */
  label?: string
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "default", variant = "primary", label, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("inline-flex flex-col items-center justify-center gap-2", className)}
        role="status"
        aria-label={label || "Loading"}
        {...props}
      >
        <div
          className={cn(
            "animate-spin border-2 border-solid",
            {
              // Sizes
              "h-4 w-4": size === "xs",
              "h-6 w-6": size === "sm",
              "h-8 w-8": size === "default",
              "h-12 w-12": size === "lg",
              "h-16 w-16": size === "xl",
            },
            {
              // Variants
              "border-primary border-t-transparent": variant === "primary",
              "border-secondary border-t-transparent": variant === "secondary",
              "border-white border-t-transparent": variant === "white",
              "border-foreground border-t-transparent": variant === "foreground",
            }
          )}
        />
        {label && (
          <span
            className={cn("text-sm font-medium text-muted-foreground", {
              "text-xs": size === "xs",
              "text-sm": size === "sm" || size === "default",
              "text-base": size === "lg",
              "text-lg": size === "xl",
            })}
          >
            {label}
          </span>
        )}
      </div>
    )
  }
)

Spinner.displayName = "Spinner"

export { Spinner }

