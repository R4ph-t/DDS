"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export type BadgeVariant =
  | "green"
  | "green-light"
  | "yellow"
  | "yellow-light"
  | "blue"
  | "blue-light"
  | "purple"
  | "purple-light"
  | "red"
  | "red-light"
  | "default"
  | "default-light"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: "sm" | "default" | "lg"
}

const badgeVariants: Record<BadgeVariant, string> = {
  // Dark variants - colored background with contrasting text
  green: "bg-teal-500/10 text-teal-400 border-teal-500",
  yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500",
  red: "bg-red-500/10 text-red-400 border-red-500",
  default: "bg-zinc-500/10 text-zinc-400 border-zinc-500",
  
  // Light variants - lighter backgrounds for light mode
  "green-light": "bg-teal-50 text-teal-700 border-teal-300 dark:bg-teal-500/10 dark:text-teal-400 dark:border-teal-500",
  "yellow-light": "bg-yellow-50 text-yellow-700 border-yellow-300 dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-500",
  "blue-light": "bg-blue-50 text-blue-700 border-blue-300 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500",
  "purple-light": "bg-purple-50 text-purple-700 border-purple-300 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500",
  "red-light": "bg-red-50 text-red-700 border-red-300 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500",
  "default-light": "bg-zinc-100 text-zinc-700 border-zinc-300 dark:bg-zinc-500/10 dark:text-zinc-400 dark:border-zinc-500",
}

const badgeSizes = {
  sm: "px-2 py-0.5 text-xs",
  default: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base",
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold uppercase tracking-wide border",
          badgeVariants[variant],
          badgeSizes[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = "Badge"

export { Badge }

