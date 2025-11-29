"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
import { Label } from "./label"
import { Textarea } from "./textarea"

export interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-")

    return (
      <div className="space-y-2">
        {label && <Label htmlFor={textareaId}>{label}</Label>}
        <Textarea
          id={textareaId}
          ref={ref}
          error={!!error}
          className={cn(className)}
          {...props}
        />
        {error && <p className="text-sm font-medium text-destructive">{error}</p>}
        {helperText && !error && <p className="text-sm text-muted-foreground">{helperText}</p>}
      </div>
    )
  }
)

FormTextarea.displayName = "FormTextarea"

export { FormTextarea }


