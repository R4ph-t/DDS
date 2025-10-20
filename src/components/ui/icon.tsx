import * as React from "react"
import { cn } from "../../lib/utils"

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string
}

/**
 * Wrapper component for react-icons (Ionicons 5) to ensure consistent styling
 *
 * Usage:
 * import { IoCheckmarkCircle } from "@/components/ui/icon"
 * <IoCheckmarkCircle className="h-5 w-5 text-primary" />
 *
 * All Ionicons are available - just import from this file
 */
const Icon = React.forwardRef<SVGElement, IconProps & { as: React.ComponentType<any> }>(
  ({ as: Component, className, size = 20, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn("inline-block", className)}
        style={{ width: size, height: size }}
        {...props}
      />
    )
  }
)

Icon.displayName = "Icon"

export { Icon }

// Re-export Ionicons 5 for convenience
export * from "react-icons/io5" // Ionicons 5 (modern, clean)
