"use client"

import { useThemeContext } from "../providers/theme-provider"

export function useTheme() {
  return useThemeContext()
}

export type { Theme } from "../providers/theme-provider"
