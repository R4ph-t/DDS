"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
import { IoChevronDown } from "react-icons/io5"

export interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  icon?: React.ReactNode
}

const Collapsible = React.forwardRef<HTMLDivElement, CollapsibleProps>(
  (
    {
      className,
      title,
      defaultOpen = false,
      open: controlledOpen,
      onOpenChange,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen)
    const isOpen = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen

    const handleToggle = () => {
      const newOpen = !isOpen
      if (controlledOpen === undefined) {
        setUncontrolledOpen(newOpen)
      }
      onOpenChange?.(newOpen)
    }

    return (
      <div ref={ref} className={cn("border border-border bg-card", className)} {...props}>
        <button
          type="button"
          onClick={handleToggle}
          className={cn(
            "flex w-full items-center justify-between p-4 text-left font-medium transition-colors cursor-pointer",
            "hover:bg-muted/50",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
          aria-expanded={isOpen}
        >
          <span className="flex items-center gap-2">
            {icon}
            {title}
          </span>
          <IoChevronDown
            className={cn("h-5 w-5 transition-transform duration-200", isOpen && "rotate-180")}
          />
        </button>
        {isOpen && <div className="border-t border-border p-4 text-sm">{children}</div>}
      </div>
    )
  }
)

Collapsible.displayName = "Collapsible"

export { Collapsible }
