"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface NavigationLink {
  /**
   * Text label for the link
   */
  label: string
  /**
   * URL or path for the link
   */
  href: string
  /**
   * Optional icon to display before the label
   */
  icon?: React.ReactNode
  /**
   * Whether this link is active (current page)
   * @default false
   */
  active?: boolean
}

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Logo or brand element displayed on the left
   */
  logo?: React.ReactNode
  /**
   * Array of navigation links
   */
  links?: NavigationLink[]
  /**
   * Action buttons or elements displayed on the right (e.g., theme toggle, login button)
   */
  actions?: React.ReactNode
  /**
   * Position of the links in the navigation
   * @default "left"
   */
  linksPosition?: "left" | "center" | "right"
  /**
   * Make the navigation sticky at the top of the viewport
   * @default false
   */
  sticky?: boolean
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  (
    { className, logo, links = [], actions, linksPosition = "left", sticky = false, ...props },
    ref
  ) => {
    return (
      <nav
        ref={ref}
        className={cn(
          "flex items-center border-b border-border bg-background px-6 py-4",
          linksPosition === "center" && "relative min-h-[60px]",
          sticky && "sticky top-0 z-50",
          className
        )}
        {...props}
      >
        {logo && <div className="text-xl">{logo}</div>}
        {links.length > 0 && (
          <ul
            className={cn("flex items-center gap-6", {
              "ml-8": linksPosition === "left" && logo,
              "absolute left-1/2 -translate-x-1/2": linksPosition === "center",
              "ml-auto": linksPosition === "right",
            })}
          >
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium transition-colors",
                    link.active
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                  aria-current={link.active ? "page" : undefined}
                >
                  {link.icon && <span className="inline-flex">{link.icon}</span>}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        {actions && (
          <div
            className={cn("flex items-center gap-4", {
              "ml-auto": linksPosition !== "right",
              "ml-8": linksPosition === "right",
            })}
          >
            {actions}
          </div>
        )}
      </nav>
    )
  }
)

Navigation.displayName = "Navigation"

export { Navigation }
