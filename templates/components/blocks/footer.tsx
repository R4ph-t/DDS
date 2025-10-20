import * as React from "react"
import { cn } from "@/lib/utils"

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  copyright?: string
  links?: Array<{
    label: string
    href: string
  }>
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, copyright, links, ...props }, ref) => {
    const currentYear = new Date().getFullYear()
    const defaultCopyright = `© ${currentYear} Render. All rights reserved.`

    return (
      <footer
        ref={ref}
        className={cn("border-t border-border bg-background px-6 py-8", className)}
        {...props}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
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
