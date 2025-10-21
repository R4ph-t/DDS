"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "validate"
    | "outline"
    | "outline-primary"
    | "outline-secondary"
    | "outline-validate"
    | "outline-destructive"
    | "secondary"
    | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "default", iconLeft, iconRight, children, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          size !== "icon" && "gap-2",
          {
            "bg-primary text-primary-foreground hover:bg-primary/80": variant === "default",
            "bg-destructive text-destructive-foreground hover:bg-destructive/80":
              variant === "destructive",
            "bg-teal-500 text-white hover:bg-teal-400": variant === "validate",
            "border border-zinc-300 dark:border-zinc-600 bg-background hover:bg-accent hover:text-accent-foreground":
              variant === "outline",
            "border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground":
              variant === "outline-primary",
            "border border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-secondary-foreground":
              variant === "outline-secondary",
            "border border-teal-500 text-teal-500 bg-transparent hover:bg-teal-500 hover:text-white":
              variant === "outline-validate",
            "border border-destructive text-destructive bg-transparent hover:bg-destructive hover:text-destructive-foreground":
              variant === "outline-destructive",
            "bg-secondary text-secondary-foreground hover:bg-secondary/70": variant === "secondary",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
          },
          {
            "h-10 px-4 py-2": size === "default",
            "h-9 px-3": size === "sm",
            "h-11 px-8": size === "lg",
            "h-10 w-10 p-0": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {iconLeft && <span className="inline-flex">{iconLeft}</span>}
        {children}
        {iconRight && <span className="inline-flex">{iconRight}</span>}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
