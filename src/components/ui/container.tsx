"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual variant of the container
   * @default "default"
   */
  variant?: "default" | "bordered" | "elevated" | "ghost" | "frosted"
  /**
   * Padding size
   * @default "default"
   */
  padding?: "none" | "sm" | "default" | "lg"
  /**
   * Whether the container spans the full width
   * @default false
   */
  fullWidth?: boolean
  /**
   * Center the content horizontally
   * @default false
   */
  centered?: boolean
  /**
   * Use transparent background (shortcut for variant="ghost")
   * @default false
   */
  transparent?: boolean
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      className,
      variant = "default",
      padding = "default",
      fullWidth = false,
      centered = false,
      transparent = false,
      children,
      ...props
    },
    ref
  ) => {
    // If transparent prop is true, override variant to ghost
    const effectiveVariant = transparent ? "ghost" : variant

    return (
      <div
        ref={ref}
        className={cn(
          "relative",
          {
            // Variant styles
            "bg-card text-card-foreground": effectiveVariant === "default",
            "border border-border bg-card text-card-foreground": effectiveVariant === "bordered",
            "border border-border bg-card text-card-foreground shadow-sm": effectiveVariant === "elevated",
            "bg-transparent": effectiveVariant === "ghost",
            "backdrop-blur-md bg-background/70 border border-border/50": effectiveVariant === "frosted",
          },
          {
            // Padding styles
            "p-0": padding === "none",
            "p-4": padding === "sm",
            "p-6": padding === "default",
            "p-8": padding === "lg",
          },
          {
            // Width styles
            "w-full": fullWidth,
            "max-w-7xl": !fullWidth && !centered,
            "max-w-7xl mx-auto": !fullWidth && centered,
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = "Container"

export { Container }
