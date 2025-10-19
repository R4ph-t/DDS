import * as React from "react"
import { cn } from "@/lib/utils"

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode
  links?: { label: string; href: string }[]
  actions?: React.ReactNode
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ className, logo, links = [], actions, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          "flex items-center justify-between border-b-2 border-border bg-background px-6 py-4",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-8">
          {logo && <div className="font-bold text-xl">{logo}</div>}
          <ul className="flex items-center gap-6">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {actions && <div className="flex items-center gap-4">{actions}</div>}
      </nav>
    )
  }
)

Navigation.displayName = "Navigation"

export { Navigation }

