import type { Story } from "@ladle/react"
import { Textarea } from "../src/components/ui/textarea"
import { FormTextarea } from "../src/components/ui/form-textarea"
import { createStoryWithCode } from "../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const textareaProps = [
  {
    name: "placeholder",
    type: "string",
    description: "Placeholder text",
  },
  {
    name: "error",
    type: "boolean",
    defaultValue: "false",
    description: "Show error styling",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disable the textarea",
  },
  {
    name: "rows",
    type: "number",
    description: "Number of visible text lines",
  },
]

const formTextareaProps = [
  ...textareaProps,
  {
    name: "label",
    type: "string",
    description: "Field label",
  },
  {
    name: "error",
    type: "string",
    description: "Error message (shows field in error state)",
  },
  {
    name: "helperText",
    type: "string",
    description: "Helper text displayed below the textarea",
  },
]

export const Default: Story = () => (
  <StoryWithCode
    title="Textarea - Default"
    description="Basic textarea for multi-line text input."
    props={textareaProps}
  >
    <Textarea placeholder="Enter your message..." />
  </StoryWithCode>
)

export const WithError: Story = () => (
  <StoryWithCode
    title="Textarea - Error State"
    description="Textarea with error styling for validation feedback."
    props={textareaProps}
  >
    <Textarea placeholder="Enter your message..." error />
  </StoryWithCode>
)

export const Disabled: Story = () => (
  <StoryWithCode
    title="Textarea - Disabled"
    description="Disabled textarea for read-only content."
    props={textareaProps}
  >
    <Textarea placeholder="This textarea is disabled" disabled />
  </StoryWithCode>
)

export const FormTextareaDefault: Story = () => (
  <StoryWithCode
    title="FormTextarea - Default"
    description="Textarea with label and helper text, ready for forms."
    props={formTextareaProps}
  >
    <FormTextarea
      label="Description"
      placeholder="Enter a detailed description..."
      helperText="Provide as much detail as possible"
    />
  </StoryWithCode>
)

export const FormTextareaWithError: Story = () => (
  <StoryWithCode
    title="FormTextarea - With Error"
    description="FormTextarea showing error state with validation message."
    props={formTextareaProps}
  >
    <FormTextarea
      label="Comments"
      placeholder="Enter your comments..."
      error="Comments must be at least 20 characters"
    />
  </StoryWithCode>
)

export const FormExample: Story = () => (
  <StoryWithCode
    title="FormTextarea - In Form"
    description="FormTextarea used within a complete form layout."
    props={formTextareaProps}
  >
    <form className="max-w-md space-y-4 p-8">
      <FormTextarea
        label="Feedback"
        placeholder="Tell us what you think..."
        helperText="Your feedback helps us improve"
      />
      <FormTextarea
        label="Bug Report"
        placeholder="Describe the issue in detail..."
        rows={6}
      />
      <button
        type="submit"
        className="w-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer"
      >
        Submit
      </button>
    </form>
  </StoryWithCode>
)


