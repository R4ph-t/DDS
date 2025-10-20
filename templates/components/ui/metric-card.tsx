"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  value: string | number
  subtitle?: string
  collapsible?: boolean
  defaultOpen?: boolean
}

const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  (
    {
      className,
      title,
      value,
      subtitle,
      collapsible = false,
      defaultOpen = false,
      children,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen)

    return (
      <div ref={ref} className={cn("border-2 border-border bg-background", className)} {...props}>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">{title}</h3>

          <div className="text-center py-4">
            <div className="text-3xl font-bold mb-2">{value}</div>
            {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
          </div>

          {collapsible && children && (
            <>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between text-sm text-muted-foreground hover:text-foreground transition-colors mt-4"
              >
                <span>{isOpen ? "Hide" : "Show"} detailed breakdown</span>
                <ChevronDown
                  className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")}
                />
              </button>

              {isOpen && <div className="mt-4 pt-4 border-t-2 border-border">{children}</div>}
            </>
          )}

          {!collapsible && children && (
            <div className="mt-4 pt-4 border-t-2 border-border">{children}</div>
          )}
        </div>
      </div>
    )
  }
)

MetricCard.displayName = "MetricCard"

export { MetricCard }
