"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: string | number
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  icon?: React.ReactNode
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, label, value, change, changeType = "neutral", icon, ...props }, ref) => {
    const changeColors = {
      positive: "text-green-600 dark:text-green-400",
      negative: "text-red-600 dark:text-red-400",
      neutral: "text-muted-foreground",
    }

    return (
      <div
        ref={ref}
        className={cn("border-2 border-border bg-card p-6 text-card-foreground", className)}
        {...props}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{label}</p>
            <p className="mt-2 text-3xl font-bold">{value}</p>
            {change && (
              <p className={cn("mt-2 text-sm font-medium", changeColors[changeType])}>{change}</p>
            )}
          </div>
          {icon && <div className="text-muted-foreground">{icon}</div>}
        </div>
      </div>
    )
  }
)

StatCard.displayName = "StatCard"

export { StatCard }
