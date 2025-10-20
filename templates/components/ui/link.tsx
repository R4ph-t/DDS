import * as React from "react"
import { cn } from "@/lib/utils"
import { IoOpenOutline } from "react-icons/io5"

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "muted" | "primary"
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
      default: "text-foreground hover:text-primary visited:text-purple-600 dark:visited:text-purple-400",
      muted: "text-muted-foreground hover:text-foreground visited:text-muted-foreground/80",
      primary: "text-primary hover:text-primary/80 visited:text-primary/70",
    }

    const underlineStyles = {
      always: "underline",
      hover: "hover:underline",
      never: "no-underline",
    }

    // If href starts with http/https and no external prop specified, auto-detect
    const isExternal = external || (props.href && /^https?:\/\//.test(props.href))

    return (
      <a
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1 transition-colors cursor-pointer",
          variantStyles[variant],
          underlineStyles[underline],
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

