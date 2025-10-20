import * as React from "react"
import { cn } from "../../lib/utils"
import { Label } from "./label"
import { Input } from "./input"

export interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-")

    return (
      <div className="space-y-2">
        {label && <Label htmlFor={inputId}>{label}</Label>}
        <Input
          id={inputId}
          ref={ref}
          className={cn(error && "border-destructive focus-visible:ring-destructive", className)}
          {...props}
        />
        {error && <p className="text-sm font-medium text-destructive">{error}</p>}
        {helperText && !error && <p className="text-sm text-muted-foreground">{helperText}</p>}
      </div>
    )
  }
)

FormField.displayName = "FormField"

export { FormField }
