"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
import { RenderLogo } from "./render-logo"

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
  /**
   * Show Render mark inside the spinner
   * @default true
   */
  showMark?: boolean
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "default", variant = "primary", label, showMark = true, ...props }, ref) => {
    const markSizes = {
      xs: 8,
      sm: 12,
      default: 16,
      lg: 24,
      xl: 32,
    }

    return (
      <div
        ref={ref}
        className={cn("inline-flex flex-col items-center justify-center gap-2", className)}
        role="status"
        aria-label={label || "Loading"}
        {...props}
      >
        <div className="relative inline-flex items-center justify-center">
          <div
            className={cn(
              "animate-spin rounded-full border-2 border-solid",
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
          {showMark && (
            <div className="absolute inset-0 flex items-center justify-center animate-pulse-subtle">
              <RenderLogo
                variant="mark"
                height={markSizes[size]}
                className={cn({
                  "text-primary": variant === "primary",
                  "text-secondary": variant === "secondary",
                  "text-white": variant === "white",
                  "text-foreground": variant === "foreground",
                })}
              />
            </div>
          )}
        </div>
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
