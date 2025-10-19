import type { Story } from "@ladle/react"
import { FormField } from "./form-field"

export const Default: Story = () => (
  <FormField label="Email" placeholder="Enter your email" type="email" />
)

export const WithHelperText: Story = () => (
  <FormField
    label="Password"
    type="password"
    placeholder="Enter your password"
    helperText="Must be at least 8 characters"
  />
)

export const WithError: Story = () => (
  <FormField
    label="Username"
    placeholder="Enter username"
    error="This username is already taken"
  />
)

export const Disabled: Story = () => (
  <FormField
    label="Service Name"
    placeholder="my-service"
    disabled
    value="my-service"
  />
)

export const Form: Story = () => (
  <form className="max-w-md space-y-4 p-4">
    <FormField
      label="Project Name"
      placeholder="my-awesome-app"
      helperText="This will be used as your service URL"
    />
    <FormField
      label="Repository URL"
      placeholder="https://github.com/username/repo"
      type="url"
    />
    <FormField
      label="Environment"
      as="select"
      helperText="Select the deployment environment"
    >
      <option>Production</option>
      <option>Staging</option>
      <option>Development</option>
    </FormField>
    <button
      type="submit"
      className="w-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
    >
      Deploy
    </button>
  </form>
)

