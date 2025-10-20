import * as React from "react"
import { cn } from "@/lib/utils"
import { IoOpenOutline } from "react-icons/io5"

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "muted" | "subtle"
  external?: boolean
  showExternalIcon?: boolean
  underline?: "always" | "hover" | "never"
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      variant = "default",
      external = false,
      showExternalIcon = true,
      underline = "hover",
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default:
        "text-primary hover:text-primary/80 visited:text-purple-900 dark:visited:text-purple-300",
      muted: "text-muted-foreground hover:text-foreground visited:text-muted-foreground/60",
      subtle:
        "text-foreground hover:text-primary visited:text-purple-900 dark:visited:text-purple-300",
    }

    const underlineStyles = {
      always: "underline",
      hover: "hover:underline",
      never: "no-underline",
    }

    // Default to always underline for subtle variant to ensure visibility
    const finalUnderline = variant === "subtle" && underline === "hover" ? "always" : underline

    // If href starts with http/https and no external prop specified, auto-detect
    const isExternal = external || (props.href && /^https?:\/\//.test(props.href))

    return (
      <a
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1 transition-colors cursor-pointer",
          variantStyles[variant],
          underlineStyles[finalUnderline],
          className
        )}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
        {...props}
      >
        {children}
        {isExternal && showExternalIcon && (
          <IoOpenOutline className="inline-block h-3.5 w-3.5" aria-hidden="true" />
        )}
      </a>
    )
  }
)

Link.displayName = "Link"

export { Link }
