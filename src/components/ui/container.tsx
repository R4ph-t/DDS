"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual variant of the container
   * @default "default"
   */
  variant?: "default" | "bordered" | "elevated" | "ghost"
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
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      className,
      variant = "default",
      padding = "default",
      fullWidth = false,
      centered = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative",
          {
            // Variant styles
            "bg-card text-card-foreground": variant === "default",
            "border border-border bg-card text-card-foreground": variant === "bordered",
            "border border-border bg-card text-card-foreground shadow-sm": variant === "elevated",
            "bg-transparent": variant === "ghost",
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

