import type { Story } from "@ladle/react"
import { FormField } from "./form-field"
import { createStoryWithCode } from "../../../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const formFieldProps = [
  {
    name: "label",
    type: "string",
    required: true,
    description: "Field label",
  },
  {
    name: "placeholder",
    type: "string",
    description: "Input placeholder text",
  },
  {
    name: "type",
    type: "string",
    defaultValue: "text",
    description: "Input type (text, email, password, etc.)",
  },
  {
    name: "helperText",
    type: "string",
    description: "Helper text displayed below the input",
  },
  {
    name: "error",
    type: "string",
    description: "Error message (shows field in error state)",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disable the input",
  },
  {
    name: "value",
    type: "string",
    description: "Input value",
  },
]

export const Default: Story = () => (
  <StoryWithCode
    title="FormField - Default"
    description="Basic form field with label and placeholder. A complete input component ready for forms."
    props={formFieldProps}
  >
    <FormField label="Email" placeholder="Enter your email" type="email" />
  </StoryWithCode>
)

export const WithHelperText: Story = () => (
  <StoryWithCode
    title="FormField - With Helper Text"
    description="Form field with helper text providing additional guidance or requirements."
    props={formFieldProps}
  >
    <FormField
      label="Password"
      type="password"
      placeholder="Enter your password"
      helperText="Must be at least 8 characters"
    />
  </StoryWithCode>
)

export const WithError: Story = () => (
  <StoryWithCode
    title="FormField - With Error"
    description="Form field showing an error state with an error message. The input border turns red."
    props={formFieldProps}
  >
    <FormField
      label="Username"
      placeholder="Enter username"
      error="This username is already taken"
    />
  </StoryWithCode>
)

export const Disabled: Story = () => (
  <StoryWithCode
    title="FormField - Disabled"
    description="Disabled form field. Use for read-only or computed values."
    props={formFieldProps}
  >
    <FormField label="Service Name" placeholder="my-service" disabled value="my-service" />
  </StoryWithCode>
)

export const Form: Story = () => (
  <StoryWithCode
    title="FormField - Complete Form"
    description="Multiple form fields combined into a complete form layout. Shows real-world usage with different field types."
    props={formFieldProps}
  >
    <form className="max-w-md space-y-4 p-8">
      <FormField
        label="Project Name"
        placeholder="my-awesome-app"
        helperText="This will be used as your service URL"
      />
      <FormField label="Repository URL" placeholder="https://github.com/username/repo" type="url" />
      <FormField label="Region" placeholder="us-west-2" helperText="Select the deployment region" />
      <button
        type="submit"
        className="w-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer"
      >
        Deploy Service
      </button>
    </form>
  </StoryWithCode>
)
