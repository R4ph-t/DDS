"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface MDXContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

/**
 * Container for MDX content with Render-styled typography
 * Use with @tailwindcss/typography for rich text formatting
 */
export const MDXContent = React.forwardRef<HTMLDivElement, MDXContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "prose prose-zinc dark:prose-invert max-w-none",
          // Headings
          "prose-headings:font-bold prose-headings:tracking-tight",
          "prose-h1:text-4xl prose-h1:mb-4",
          "prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4",
          "prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3",
          // Links
          "prose-a:text-primary prose-a:no-underline prose-a:font-medium",
          "hover:prose-a:text-primary/80 hover:prose-a:underline",
          // Code
          "prose-code:bg-zinc-100 dark:prose-code:bg-zinc-800",
          "prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded",
          "prose-code:text-sm prose-code:font-mono",
          "prose-code:before:content-none prose-code:after:content-none",
          // Pre (code blocks)
          "prose-pre:bg-zinc-900 dark:prose-pre:bg-zinc-950",
          "prose-pre:border prose-pre:border-zinc-200 dark:prose-pre:border-zinc-800",
          // Lists
          "prose-ul:list-disc prose-ol:list-decimal",
          "prose-li:marker:text-primary",
          // Blockquotes
          "prose-blockquote:border-l-4 prose-blockquote:border-primary",
          "prose-blockquote:pl-4 prose-blockquote:italic",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

MDXContent.displayName = "MDXContent"


