import type { Story } from "@ladle/react"
import {
  InputWithSuggestions,
  type Suggestion,
} from "../../src/components/ui/input-with-suggestions"
import { createStoryWithCode } from "../../.ladle/story-helpers"
import { useState } from "react"

const StoryWithCode = createStoryWithCode(import.meta.url)

const inputSuggestionsProps = [
  {
    name: "suggestions",
    type: "Suggestion[]",
    description: "Array of suggestion items with value and label",
    required: true,
  },
  {
    name: "onChange",
    type: "(value: string) => void",
    description: "Callback when input value changes",
  },
  {
    name: "onSelect",
    type: "(suggestion: Suggestion) => void",
    description: "Callback when a suggestion is selected",
  },
  {
    name: "dropdownMaxHeight",
    type: "string",
    defaultValue: "300px",
    description: "Maximum height of the dropdown",
  },
]

const countrySuggestions: Suggestion[] = [
  { value: "United States", label: "United States" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "Canada", label: "Canada" },
  { value: "Australia", label: "Australia" },
  { value: "Germany", label: "Germany" },
  { value: "France", label: "France" },
  { value: "Japan", label: "Japan" },
  { value: "Brazil", label: "Brazil" },
  { value: "India", label: "India" },
  { value: "China", label: "China" },
]

const programmingLanguages: Suggestion[] = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "ruby", label: "Ruby" },
  { value: "php", label: "PHP" },
  { value: "swift", label: "Swift" },
]

const emailDomains: Suggestion[] = [
  { value: "@gmail.com", label: "@gmail.com" },
  { value: "@yahoo.com", label: "@yahoo.com" },
  { value: "@outlook.com", label: "@outlook.com" },
  { value: "@icloud.com", label: "@icloud.com" },
  { value: "@hotmail.com", label: "@hotmail.com" },
]

export const Default: Story = () => {
  const [value, setValue] = useState("")

  return (
    <StoryWithCode
      title="Input With Suggestions - Default"
      description="Input field with a dropdown of suggested values. The dropdown button is on the right side."
      props={inputSuggestionsProps}
      code={`import { InputWithSuggestions, type Suggestion } from "@/components/ui/input-with-suggestions"
import { useState } from "react"

const suggestions: Suggestion[] = [
  { value: "United States", label: "United States" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "Canada", label: "Canada" },
  // ... more suggestions
]

export function Example() {
  const [value, setValue] = useState("")

  return (
    <InputWithSuggestions
      placeholder="Select a country..."
      suggestions={suggestions}
      value={value}
      onChange={setValue}
      onSelect={(suggestion) => console.log("Selected:", suggestion)}
    />
  )
}`}
    >
      <div className="w-full max-w-md space-y-2">
        <label className="text-sm font-medium">Country</label>
        <InputWithSuggestions
          placeholder="Select a country..."
          suggestions={countrySuggestions}
          value={value}
          onChange={setValue}
          onSelect={(suggestion) => console.log("Selected:", suggestion)}
        />
        {value && <p className="text-sm text-muted-foreground">Selected: {value}</p>}
      </div>
    </StoryWithCode>
  )
}

export const ProgrammingLanguages: Story = () => {
  const [value, setValue] = useState("")

  return (
    <StoryWithCode
      title="Input With Suggestions - Programming Languages"
      description="Example with programming language suggestions."
      props={inputSuggestionsProps}
    >
      <div className="w-full max-w-md space-y-2">
        <label className="text-sm font-medium">Favorite Language</label>
        <InputWithSuggestions
          placeholder="Type or select..."
          suggestions={programmingLanguages}
          value={value}
          onChange={setValue}
          onSelect={(suggestion) => setValue(suggestion.value)}
        />
      </div>
    </StoryWithCode>
  )
}

export const EmailAutocomplete: Story = () => {
  const [email, setEmail] = useState("")

  // Generate suggestions based on current input
  const emailSuggestions: Suggestion[] = email.includes("@")
    ? []
    : emailDomains.map((domain) => ({
        value: email + domain.value,
        label: email + domain.value,
      }))

  return (
    <StoryWithCode
      title="Input With Suggestions - Email Autocomplete"
      description="Email input that suggests domains as you type."
      props={inputSuggestionsProps}
    >
      <div className="w-full max-w-md space-y-2">
        <label className="text-sm font-medium">Email Address</label>
        <InputWithSuggestions
          type="email"
          placeholder="your.email"
          suggestions={emailSuggestions}
          value={email}
          onChange={setEmail}
          onSelect={(suggestion) => setEmail(suggestion.value)}
        />
        <p className="text-xs text-muted-foreground">Start typing to see domain suggestions</p>
      </div>
    </StoryWithCode>
  )
}

export const LimitedHeight: Story = () => {
  const [value, setValue] = useState("")

  const manySuggestions: Suggestion[] = Array.from({ length: 50 }, (_, i) => ({
    value: `Option ${i + 1}`,
    label: `Option ${i + 1}`,
  }))

  return (
    <StoryWithCode
      title="Input With Suggestions - Limited Height"
      description="Dropdown with custom max height for scrolling through many options."
      props={inputSuggestionsProps}
    >
      <div className="w-full max-w-md space-y-2">
        <label className="text-sm font-medium">Select Option</label>
        <InputWithSuggestions
          placeholder="Select from many options..."
          suggestions={manySuggestions}
          value={value}
          onChange={setValue}
          dropdownMaxHeight="200px"
        />
      </div>
    </StoryWithCode>
  )
}

export const FreeTextAllowed: Story = () => {
  const [value, setValue] = useState("")

  return (
    <StoryWithCode
      title="Input With Suggestions - Free Text Allowed"
      description="You can type anything you want - suggestions are optional. Free text is fully supported."
      props={inputSuggestionsProps}
    >
      <div className="w-full max-w-md space-y-2">
        <label className="text-sm font-medium">Country or Region</label>
        <InputWithSuggestions
          placeholder="Type any country or region..."
          suggestions={countrySuggestions}
          value={value}
          onChange={setValue}
        />
        {value && (
          <p className="text-sm text-muted-foreground">
            You entered: <strong>{value}</strong>
            {!countrySuggestions.find((s) => s.value === value) && " (custom value)"}
          </p>
        )}
        <p className="text-xs text-muted-foreground">
          Try typing "Antarctica" or any custom value - it works!
        </p>
      </div>
    </StoryWithCode>
  )
}

export const Disabled: Story = () => (
  <StoryWithCode
    title="Input With Suggestions - Disabled"
    description="Disabled state for the input with suggestions."
    props={inputSuggestionsProps}
  >
    <div className="w-full max-w-md space-y-2">
      <label className="text-sm font-medium">Country (Disabled)</label>
      <InputWithSuggestions
        placeholder="Select a country..."
        suggestions={countrySuggestions}
        disabled
      />
    </div>
  </StoryWithCode>
)
