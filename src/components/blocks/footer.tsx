"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Custom copyright text
   */
  copyright?: string
  /**
   * Array of footer links
   */
  links?: Array<{
    label: string
    href: string
  }>
  /**
   * Make the footer sticky at the bottom of the viewport
   * @default false
   */
  sticky?: boolean
  /**
   * Center the copyright text (and stack links below if present)
   * @default false
   */
  centered?: boolean
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, copyright, links, sticky = false, centered = false, ...props }, ref) => {
    const currentYear = new Date().getFullYear()
    const defaultCopyright = `© ${currentYear} Render. All rights reserved.`

    return (
      <footer
        ref={ref}
        className={cn(
          "border-t border-border bg-background px-6 py-8",
          sticky && "sticky bottom-0 z-50",
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-7xl">
          <div
            className={cn("flex gap-4", {
              "flex-col items-center justify-between md:flex-row": !centered,
              "flex-col items-center justify-center": centered,
            })}
          >
            <p className="text-sm text-muted-foreground">{copyright || defaultCopyright}</p>
            {links && links.length > 0 && (
              <nav className="flex gap-6">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            )}
          </div>
        </div>
      </footer>
    )
  }
)

Footer.displayName = "Footer"

export { Footer }
