"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface NavigationLink {
  label: string
  href: string
  icon?: React.ReactNode
}

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode
  links?: NavigationLink[]
  actions?: React.ReactNode
  /**
   * Position of the links in the navigation
   * @default "left"
   */
  linksPosition?: "left" | "center" | "right"
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ className, logo, links = [], actions, linksPosition = "left", ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          "flex items-center border-b border-border bg-background px-6 py-4",
          className
        )}
        {...props}
      >
        {logo && <div className="text-xl">{logo}</div>}
        {links.length > 0 && (
          <ul
            className={cn("flex items-center gap-6", {
              "ml-8": linksPosition === "left" && logo,
              "mx-auto": linksPosition === "center",
              "ml-auto": linksPosition === "right",
            })}
          >
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.icon && <span className="inline-flex">{link.icon}</span>}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        {actions && <div className="flex items-center gap-4 ml-auto">{actions}</div>}
      </nav>
    )
  }
)

Navigation.displayName = "Navigation"

export { Navigation }
