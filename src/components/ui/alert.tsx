"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
import {
  IoInformationCircle,
  IoWarning,
  IoCheckmarkCircle,
  IoCloseCircle,
  IoHelpCircle,
} from "react-icons/io5"

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "warning" | "error" | "success" | "help"
  title?: string
  icon?: React.ReactNode
  showIcon?: boolean
}

const alertConfig = {
  info: {
    icon: IoInformationCircle,
    containerClass:
      "!border-l-blue-500 bg-blue-50 dark:bg-blue-950/30 text-blue-900 dark:text-blue-100",
    iconClass: "text-blue-500",
    titleClass: "text-blue-900 dark:text-blue-100",
  },
  warning: {
    icon: IoWarning,
    containerClass:
      "!border-l-yellow-500 bg-yellow-50 dark:bg-yellow-950/30 text-yellow-900 dark:text-yellow-100",
    iconClass: "text-yellow-500",
    titleClass: "text-yellow-900 dark:text-yellow-100",
  },
  error: {
    icon: IoCloseCircle,
    containerClass: "!border-l-red-500 bg-red-50 dark:bg-red-950/30 text-red-900 dark:text-red-100",
    iconClass: "text-red-500",
    titleClass: "text-red-900 dark:text-red-100",
  },
  success: {
    icon: IoCheckmarkCircle,
    containerClass:
      "!border-l-teal-500 bg-teal-50 dark:bg-teal-950/30 text-teal-900 dark:text-teal-100",
    iconClass: "text-teal-500",
    titleClass: "text-teal-900 dark:text-teal-100",
  },
  help: {
    icon: IoHelpCircle,
    containerClass:
      "!border-l-purple-500 bg-purple-50 dark:bg-purple-950/30 text-purple-900 dark:text-purple-100",
    iconClass: "text-purple-500",
    titleClass: "text-purple-900 dark:text-purple-100",
  },
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "info", title, icon, showIcon = true, children, ...props }, ref) => {
    const config = alertConfig[variant]
    const IconComponent = config.icon

    return (
      <div
        ref={ref}
        role="alert"
        className={cn("relative w-full border-l-4 p-4", config.containerClass, className)}
        {...props}
      >
        <div className="flex gap-3">
          {showIcon && (
            <div className="flex-shrink-0">
              {icon || <IconComponent className={cn("h-5 w-5", config.iconClass)} />}
            </div>
          )}
          <div className="flex-1">
            {title && <h5 className={cn("mb-1 font-semibold", config.titleClass)}>{title}</h5>}
            <div className="text-sm leading-relaxed">{children}</div>
          </div>
        </div>
      </div>
    )
  }
)

Alert.displayName = "Alert"

export { Alert }
