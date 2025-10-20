import type { Story } from "@ladle/react"
import { ResultsPanel } from "./results-panel"
import { createStoryWithCode } from "../../../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const resultsPanelProps = [
  {
    name: "title",
    type: "string",
    description: "Panel title",
  },
  {
    name: "status",
    type: "string",
    description: "Overall status: success or error",
  },
  {
    name: "results",
    type: "array",
    description: "Array of result objects with type, message, and details",
  },
  {
    name: "emptyMessage",
    type: "string",
    defaultValue: "No results to display",
    description: "Message shown when results array is empty",
  },
]

export const Empty: Story = () => (
  <StoryWithCode
    title="ResultsPanel - Empty"
    description="Empty results panel showing the default empty state message."
    props={resultsPanelProps}
  >
    <div className="h-[500px]">
      <ResultsPanel />
    </div>
  </StoryWithCode>
)

export const Success: Story = () => (
  <StoryWithCode
    title="ResultsPanel - Success"
    description="Results panel showing successful validation with green success messages."
    props={resultsPanelProps}
  >
    <div className="h-[500px]">
      <ResultsPanel
        title="Validation Results"
        status="success"
        results={[
          {
            type: "success",
            message: "Blueprint is valid",
            details: "All services and configurations passed validation",
          },
        ]}
      />
    </div>
  </StoryWithCode>
)

export const Errors: Story = () => (
  <StoryWithCode
    title="ResultsPanel - Errors"
    description="Results panel showing validation errors in red with detailed error messages."
    props={resultsPanelProps}
  >
    <div className="h-[500px]">
      <ResultsPanel
        title="Validation Results"
        status="error"
        results={[
          {
            type: "error",
            message: "Invalid service type",
            details:
              "Service 'my-service' has an invalid type 'webapp'. Valid types are: web, worker, cron, pserv.",
          },
          {
            type: "error",
            message: "Missing required field",
            details: "Service 'api' is missing required field 'runtime'.",
          },
        ]}
      />
    </div>
  </StoryWithCode>
)

export const Mixed: Story = () => (
  <StoryWithCode
    title="ResultsPanel - Mixed Results"
    description="Results panel with a mix of success, warning, error, and info messages. Real-world validation scenario."
    props={resultsPanelProps}
  >
    <div className="h-[500px]">
      <ResultsPanel
        title="Validation Results"
        results={[
          {
            type: "success",
            message: "Service 'web' validated successfully",
          },
          {
            type: "warning",
            message: "Deprecated configuration detected",
            details: "The 'dockerCommand' field is deprecated. Use 'startCommand' instead.",
          },
          {
            type: "error",
            message: "Invalid plan",
            details:
              "Plan 'mega' is not a valid option. Valid plans: free, starter, standard, pro.",
          },
          {
            type: "info",
            message: "3 services found in blueprint",
          },
        ]}
      />
    </div>
  </StoryWithCode>
)

export const CustomEmpty: Story = () => (
  <StoryWithCode
    title="ResultsPanel - Custom Empty Message"
    description="Results panel with a custom empty state message. Useful for guiding users on what action to take."
    props={resultsPanelProps}
  >
    <div className="h-[500px]">
      <ResultsPanel title="Build Logs" emptyMessage="Click 'Build' to see logs" />
    </div>
  </StoryWithCode>
)
