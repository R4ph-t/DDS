import * as React from "react"
import { cn } from "../../lib/utils"

export interface EditorLayoutProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "results"> {
  title?: string
  description?: string
  editor?: React.ReactNode
  results?: React.ReactNode
  actions?: React.ReactNode
  links?: Array<{ label: string; href: string }>
}

const EditorLayout = React.forwardRef<HTMLDivElement, EditorLayoutProps>(
  ({ className, title, description, editor, results, actions, links, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex min-h-screen flex-col", className)} {...props}>
        {/* Header */}
        {(title || description || links) && (
          <header className="border-b-2 border-border bg-background px-6 py-8">
            <div className="mx-auto max-w-7xl">
              {title && <h1 className="text-4xl font-bold mb-3">{title}</h1>}
              {description && <p className="text-lg text-muted-foreground mb-4">{description}</p>}
              {links && links.length > 0 && (
                <div className="flex gap-4">
                  {links.map((link, i) => (
                    <a key={i} href={link.href} className="text-sm text-primary hover:underline">
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </header>
        )}

        {/* Main Content */}
        <main className="flex-1 bg-background">
          <div className="mx-auto max-w-7xl p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Editor Section */}
              <div className="space-y-4">
                {editor}
                {actions && <div className="flex gap-3">{actions}</div>}
              </div>

              {/* Results Section */}
              <div className="h-[600px]">{results}</div>
            </div>
          </div>
        </main>
      </div>
    )
  }
)

EditorLayout.displayName = "EditorLayout"

export { EditorLayout }
