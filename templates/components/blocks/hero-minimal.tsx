import * as React from "react"
import { cn } from "@/lib/utils"

export interface HeroMinimalProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
  subtitle?: string
  children?: React.ReactNode
}

const HeroMinimal = React.forwardRef<HTMLElement, HeroMinimalProps>(
  ({ className, title, subtitle, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("border-b-2 border-border bg-background py-20 px-6 text-center", className)}
        {...props}
      >
        <div className="mx-auto max-w-4xl">
          {title && <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl">{title}</h1>}
          {subtitle && (
            <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground">{subtitle}</p>
          )}
          {children && (
            <div className="flex flex-wrap items-center justify-center gap-4">{children}</div>
          )}
        </div>
      </section>
    )
  }
)

HeroMinimal.displayName = "HeroMinimal"

export { HeroMinimal }
