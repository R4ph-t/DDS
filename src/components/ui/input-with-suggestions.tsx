"use client"

import * as React from "react"
import { FiChevronDown } from "react-icons/fi"
import { cn } from "../../lib/utils"

export interface Suggestion {
  /**
   * Unique value for the suggestion
   */
  value: string
  /**
   * Display label for the suggestion
   */
  label: string
}

export interface InputWithSuggestionsProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  /**
   * Array of suggestion items
   */
  suggestions?: Suggestion[]
  /**
   * Callback when input value changes
   */
  onChange?: (value: string) => void
  /**
   * Callback when a suggestion is selected
   */
  onSelect?: (suggestion: Suggestion) => void
  /**
   * Maximum height of the dropdown
   * @default "300px"
   */
  dropdownMaxHeight?: string
}

const InputWithSuggestions = React.forwardRef<HTMLInputElement, InputWithSuggestionsProps>(
  (
    {
      className,
      suggestions = [],
      onChange,
      onSelect,
      dropdownMaxHeight = "300px",
      value: controlledValue,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [internalValue, setInternalValue] = React.useState("")
    const containerRef = React.useRef<HTMLDivElement>(null)
    const inputRef = React.useRef<HTMLInputElement>(null)

    // Use controlled value if provided, otherwise use internal state
    const value = controlledValue !== undefined ? controlledValue : internalValue

    // Combine refs
    React.useImperativeHandle(ref, () => inputRef.current!)

    // Close dropdown when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      if (controlledValue === undefined) {
        setInternalValue(newValue)
      }
      onChange?.(newValue)
      setIsOpen(true)
    }

    const handleSelect = (suggestion: Suggestion) => {
      if (controlledValue === undefined) {
        setInternalValue(suggestion.value)
      }
      onChange?.(suggestion.value)
      onSelect?.(suggestion)
      setIsOpen(false)
      inputRef.current?.focus()
    }

    const handleToggle = () => {
      setIsOpen(!isOpen)
      inputRef.current?.focus()
    }

    // Filter suggestions based on current input
    const filteredSuggestions = suggestions.filter((suggestion) =>
      suggestion.label.toLowerCase().includes((value as string).toLowerCase())
    )

    return (
      <div ref={containerRef} className="relative w-full">
        <div className="relative flex">
          <input
            ref={inputRef}
            type="text"
            className={cn(
              "flex h-10 w-full border border-input bg-background text-foreground px-3 py-2 text-sm",
              "file:border-0 file:bg-transparent file:text-sm file:font-medium",
              "placeholder:text-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "pr-10", // Add padding for the button
              className
            )}
            value={value}
            onChange={handleInputChange}
            {...props}
          />
          <button
            type="button"
            onClick={handleToggle}
            className={cn(
              "absolute right-0 top-0 h-10 px-3 flex items-center justify-center",
              "border-l border-input bg-muted hover:bg-accent transition-colors",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
              "disabled:pointer-events-none disabled:opacity-50"
            )}
            tabIndex={-1}
            disabled={props.disabled}
          >
            <FiChevronDown
              className={cn(
                "h-4 w-4 text-muted-foreground transition-transform",
                isOpen && "rotate-180"
              )}
            />
          </button>
        </div>

        {isOpen && filteredSuggestions.length > 0 && (
          <div
            className="absolute z-50 w-full mt-1 border border-border bg-popover shadow-md overflow-hidden"
            style={{ maxHeight: dropdownMaxHeight }}
          >
            <div className="overflow-y-auto" style={{ maxHeight: dropdownMaxHeight }}>
              {filteredSuggestions.map((suggestion, index) => (
                <button
                  key={`${suggestion.value}-${index}`}
                  type="button"
                  onClick={() => handleSelect(suggestion)}
                  className={cn(
                    "w-full text-left px-3 py-2 text-sm cursor-pointer",
                    "hover:bg-accent hover:text-accent-foreground",
                    "focus:bg-accent focus:text-accent-foreground focus:outline-none",
                    "transition-colors"
                  )}
                >
                  {suggestion.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
)

InputWithSuggestions.displayName = "InputWithSuggestions"

export { InputWithSuggestions }
