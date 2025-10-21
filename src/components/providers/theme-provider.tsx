"use client"

import * as React from "react"

export type Theme = "light" | "dark"

export interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined)

export interface ThemeProviderProps {
  /**
   * The children to render
   */
  children: React.ReactNode
  /**
   * Default theme to use
   * @default "light"
   */
  defaultTheme?: Theme
  /**
   * Storage key for localStorage
   * @default "theme"
   */
  storageKey?: string
  /**
   * Enable system preference detection
   * @default true
   */
  enableSystem?: boolean
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "theme",
  enableSystem = true,
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(() => {
    // Server-side: use default
    if (typeof window === "undefined") return defaultTheme

    // Check localStorage first
    const stored = localStorage.getItem(storageKey) as Theme | null
    if (stored === "light" || stored === "dark") return stored

    // Check system preference (if enabled)
    if (enableSystem && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    }

    return defaultTheme
  })

  React.useEffect(() => {
    const root = document.documentElement

    // Remove both classes first
    root.classList.remove("light", "dark")

    // Add the current theme class
    root.classList.add(theme)

    // Save to localStorage
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])

  // Listen to system theme changes (if enabled)
  React.useEffect(() => {
    if (!enableSystem) return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if no user preference is stored
      if (localStorage.getItem(storageKey)) return

      setThemeState(e.matches ? "dark" : "light")
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [enableSystem, storageKey])

  const setTheme = React.useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
  }, [])

  const toggleTheme = React.useCallback(() => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"))
  }, [])

  const value = React.useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme, setTheme, toggleTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useThemeContext() {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider")
  }

  return context
}
