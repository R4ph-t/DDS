"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface GridDecorationProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  /**
   * Position of the grid decoration
   */
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"
  /**
   * Width in pixels or CSS value
   */
  width?: number | string
  /**
   * Height in pixels or CSS value
   */
  height?: number | string
  /**
   * Opacity of the grid (0-1)
   */
  opacity?: number
  /**
   * Density of squares (0-1, where 1 is all squares present)
   */
  density?: number
}

const positionStyles = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
}

// Generate a staircase pattern - squares step diagonally from corner
const generateGridPattern = (density: number, isDark: boolean) => {
  const color = isDark ? "rgb(63, 63, 70)" : "rgb(228, 228, 231)" // zinc-800 : zinc-200 (subtle contrast)
  const squareSize = 90
  const rows = 6
  const cols = 6
  const patternSize = squareSize * cols

  // Create SVG with diagonal staircase pattern
  const squares = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Create a diagonal staircase from top-left corner
      // Distance from the top-left corner (diagonal distance)
      const diagonalDistance = row + col

      // density controls how far the staircase extends
      // Lower density = more squares (longer staircase)
      // Higher density = fewer squares (shorter staircase)
      const maxDistance = Math.floor((1 - density) * (rows + cols - 2))
      const shouldShow = diagonalDistance <= maxDistance

      if (shouldShow) {
        squares.push(
          `<rect x="${col * squareSize}" y="${row * squareSize}" width="${squareSize}" height="${squareSize}" fill="none" stroke="${color}" stroke-width="1"/>`
        )
      }
    }
  }

  const svg = `
    <svg width="${patternSize}" height="${patternSize}" xmlns="http://www.w3.org/2000/svg">
      ${squares.join("")}
    </svg>
  `

  return `url('data:image/svg+xml;utf8,${encodeURIComponent(svg)}')`
}

export const GridDecoration = React.forwardRef<HTMLDivElement, GridDecorationProps>(
  (
    {
      className,
      position = "top-left",
      width = 450,
      height = 450,
      opacity = 0.5,
      density = 0.6,
      style,
      ...props
    },
    ref
  ) => {
    const widthValue = typeof width === "number" ? `${width}px` : width
    const heightValue = typeof height === "number" ? `${height}px` : height

    // Determine if we're in dark mode - using a simple class check
    const [isDark, setIsDark] = React.useState(false)

    React.useEffect(() => {
      const checkDarkMode = () => {
        setIsDark(document.documentElement.classList.contains("dark"))
      }

      checkDarkMode()

      const observer = new MutationObserver(checkDarkMode)
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      })

      return () => observer.disconnect()
    }, [])

    const backgroundImage = React.useMemo(
      () => generateGridPattern(density, isDark),
      [density, isDark]
    )

    return (
      <div
        ref={ref}
        className={cn(
          "absolute pointer-events-none select-none overflow-hidden",
          positionStyles[position],
          className
        )}
        style={{
          width: widthValue,
          height: heightValue,
          opacity,
          backgroundImage,
          backgroundSize: "540px 540px",
          backgroundRepeat: "repeat",
          ...style,
        }}
        aria-hidden="true"
        {...props}
      />
    )
  }
)

GridDecoration.displayName = "GridDecoration"
