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
   * Orientation of the staircase pattern
   */
  orientation?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
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
   * Density of squares (0-1, where higher values show more squares)
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
const generateGridPattern = (
  density: number,
  isDark: boolean,
  orientation: "top-left" | "top-right" | "bottom-left" | "bottom-right"
) => {
  const color = isDark ? "rgb(63, 63, 70)" : "rgb(228, 228, 231)" // zinc-800 : zinc-200 (subtle contrast)
  const squareSize = 90
  const rows = 6
  const cols = 6
  const patternSize = squareSize * cols

  // Create SVG with diagonal staircase pattern
  const squares = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Calculate diagonal distance based on orientation
      let diagonalDistance: number

      switch (orientation) {
        case "top-left":
          diagonalDistance = row + col
          break
        case "top-right":
          diagonalDistance = row + (cols - 1 - col)
          break
        case "bottom-left":
          diagonalDistance = rows - 1 - row + col
          break
        case "bottom-right":
          diagonalDistance = rows - 1 - row + (cols - 1 - col)
          break
      }

      // density controls how far the staircase extends
      // Higher density = more squares (longer staircase)
      // Lower density = fewer squares (shorter staircase)
      const maxDistance = Math.floor(density * (rows + cols - 2))
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

const getBackgroundPosition = (
  orientation: "top-left" | "top-right" | "bottom-left" | "bottom-right"
): string => {
  switch (orientation) {
    case "top-left":
      return "top left"
    case "top-right":
      return "top right"
    case "bottom-left":
      return "bottom left"
    case "bottom-right":
      return "bottom right"
  }
}

export const GridDecoration = React.forwardRef<HTMLDivElement, GridDecorationProps>(
  (
    {
      className,
      position = "top-left",
      orientation = "top-right",
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
      () => generateGridPattern(density, isDark, orientation),
      [density, isDark, orientation]
    )

    const backgroundPosition = getBackgroundPosition(orientation)

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
          backgroundRepeat: "no-repeat",
          backgroundPosition,
          ...style,
        }}
        aria-hidden="true"
        {...props}
      />
    )
  }
)

GridDecoration.displayName = "GridDecoration"
