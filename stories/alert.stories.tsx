import type { Story } from "@ladle/react"
import { Alert } from "../src/components/ui/alert"
import { createStoryWithCode } from "../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const alertProps = [
  {
    name: "variant",
    type: "string",
    defaultValue: "info",
    description: "Alert type: info, warning, error, success, help",
  },
  { name: "title", type: "string", description: "Alert title (optional)" },
  {
    name: "showIcon",
    type: "boolean",
    defaultValue: "true",
    description: "Show/hide the icon",
  },
  { name: "children", type: "ReactNode", required: true, description: "Alert content" },
]

export const Info: Story = () => (
  <StoryWithCode
    title="Alert - Info"
    description="Informational alert for providing helpful context or additional details to users."
    props={alertProps}
  >
    <Alert variant="info" title="Information">
      This is an informational message. Use this to provide helpful context or additional details.
    </Alert>
  </StoryWithCode>
)

export const Warning: Story = () => (
  <StoryWithCode
    title="Alert - Warning"
    description="Warning alert to caution users about potential issues or actions that require attention."
    props={alertProps}
  >
    <Alert variant="warning" title="Warning">
      This action may have unintended consequences. Please review before proceeding.
    </Alert>
  </StoryWithCode>
)

export const Error: Story = () => (
  <StoryWithCode
    title="Alert - Error"
    description="Error alert for displaying critical problems that need immediate attention."
    props={alertProps}
  >
    <Alert variant="error" title="Error">
      Something went wrong. Please check your input and try again.
    </Alert>
  </StoryWithCode>
)

export const Success: Story = () => (
  <StoryWithCode
    title="Alert - Success"
    description="Success alert for confirming completed actions or positive outcomes."
    props={alertProps}
  >
    <Alert variant="success" title="Success">
      Your changes have been saved successfully!
    </Alert>
  </StoryWithCode>
)

export const Help: Story = () => (
  <StoryWithCode
    title="Alert - Help"
    description="Help alert for providing assistance, tips, or links to documentation."
    props={alertProps}
  >
    <Alert variant="help" title="Need Help?">
      Check out our documentation or contact support for assistance.
    </Alert>
  </StoryWithCode>
)

export const WithoutTitle: Story = () => (
  <StoryWithCode
    title="Alert - Without Title"
    description="Alert with content only, no title. Useful for simple, brief messages."
    props={alertProps}
  >
    <Alert variant="info">This alert doesn't have a title, just content.</Alert>
  </StoryWithCode>
)

export const WithoutIcon: Story = () => (
  <StoryWithCode
    title="Alert - Without Icon"
    description="Alert with icon disabled via showIcon={false}. For a more minimalist appearance."
    props={alertProps}
  >
    <Alert variant="warning" title="No Icon" showIcon={false}>
      This alert has the icon disabled.
    </Alert>
  </StoryWithCode>
)

export const MultipleAlerts: Story = () => (
  <StoryWithCode
    title="Alert - Multiple Alerts"
    description="Example of stacking multiple alerts with different variants. Uses space-y-4 for consistent spacing."
    props={alertProps}
  >
    <div className="space-y-4">
      <Alert variant="info" title="Information">
        This is an informational message.
      </Alert>
      <Alert variant="warning" title="Warning">
        This is a warning message.
      </Alert>
      <Alert variant="error" title="Error">
        This is an error message.
      </Alert>
      <Alert variant="success" title="Success">
        This is a success message.
      </Alert>
      <Alert variant="help" title="Help">
        This is a help message.
      </Alert>
    </div>
  </StoryWithCode>
)
