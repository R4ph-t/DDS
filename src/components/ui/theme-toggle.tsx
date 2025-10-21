"use client"

import * as React from "react"
import { FiSun, FiMoon } from "react-icons/fi"
import { cn } from "../../lib/utils"
import { useTheme } from "../hooks/use-theme"

export interface ThemeToggleProps {
  /**
   * Custom className for the toggle button
   */
  className?: string
  /**
   * Size variant of the toggle button
   * @default "default"
   */
  size?: "sm" | "default" | "lg"
  /**
   * Style variant of the toggle button
   * @default "outline"
   */
  variant?: "outline" | "ghost" | "solid"
  /**
   * Show labels next to icons
   * @default false
   */
  showLabel?: boolean
}

const ThemeToggle = React.forwardRef<HTMLButtonElement, ThemeToggleProps>(
  ({ className, size = "default", variant = "outline", showLabel = false }, ref) => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Avoid hydration mismatch
    React.useEffect(() => {
      setMounted(true)
    }, [])

    if (!mounted) {
      return (
        <button
          ref={ref}
          disabled
          className={cn(
            "inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
            {
              "border border-zinc-300 dark:border-zinc-600 bg-background": variant === "outline",
              "": variant === "ghost",
              "bg-primary text-primary-foreground": variant === "solid",
            },
            {
              "h-8 px-2 text-xs": size === "sm",
              "h-10 px-3 text-sm": size === "default",
              "h-12 px-4 text-base": size === "lg",
            },
            className
          )}
        >
          <div
            className={cn({
              "h-3 w-3": size === "sm",
              "h-4 w-4": size === "default",
              "h-5 w-5": size === "lg",
            })}
          />
        </button>
      )
    }

    const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light")
    }

    return (
      <button
        ref={ref}
        onClick={toggleTheme}
        className={cn(
          "inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          {
            // Variant styles
            "border border-zinc-300 dark:border-zinc-600 bg-background hover:bg-accent hover:text-accent-foreground":
              variant === "outline",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "bg-primary text-primary-foreground hover:bg-primary/80": variant === "solid",
          },
          {
            // Size styles
            "h-8 px-2 text-xs": size === "sm",
            "h-10 px-3 text-sm": size === "default",
            "h-12 px-4 text-base": size === "lg",
          },
          className
        )}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? (
          <>
            <FiMoon
              className={cn({
                "h-3 w-3": size === "sm",
                "h-4 w-4": size === "default",
                "h-5 w-5": size === "lg",
              })}
            />
            {showLabel && <span>Dark</span>}
          </>
        ) : (
          <>
            <FiSun
              className={cn({
                "h-3 w-3": size === "sm",
                "h-4 w-4": size === "default",
                "h-5 w-5": size === "lg",
              })}
            />
            {showLabel && <span>Light</span>}
          </>
        )}
      </button>
    )
  }
)

ThemeToggle.displayName = "ThemeToggle"

export { ThemeToggle }
