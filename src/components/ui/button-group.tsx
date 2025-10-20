"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation = "horizontal", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        className={cn(
          "inline-flex",
          orientation === "horizontal"
            ? "flex-row [&>button]:rounded-none [&>button:first-child]:rounded-l [&>button:last-child]:rounded-r [&>button:not(:last-child)]:border-r-0"
            : "flex-col [&>button]:rounded-none [&>button:first-child]:rounded-t [&>button:last-child]:rounded-b [&>button:not(:last-child)]:border-b-0",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

ButtonGroup.displayName = "ButtonGroup"

