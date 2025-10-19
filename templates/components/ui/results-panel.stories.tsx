import type { Story } from "@ladle/react"
import { ResultsPanel } from "./results-panel"

export const Empty: Story = () => (
  <div className="h-[500px]">
    <ResultsPanel />
  </div>
)

export const Success: Story = () => (
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
)

export const Errors: Story = () => (
  <div className="h-[500px]">
    <ResultsPanel
      title="Validation Results"
      status="error"
      results={[
        {
          type: "error",
          message: "Invalid service type",
          details: "Service 'my-service' has an invalid type 'webapp'. Valid types are: web, worker, cron, pserv.",
        },
        {
          type: "error",
          message: "Missing required field",
          details: "Service 'api' is missing required field 'runtime'.",
        },
      ]}
    />
  </div>
)

export const Mixed: Story = () => (
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
          details: "Plan 'mega' is not a valid option. Valid plans: free, starter, standard, pro.",
        },
        {
          type: "info",
          message: "3 services found in blueprint",
        },
      ]}
    />
  </div>
)

export const CustomEmpty: Story = () => (
  <div className="h-[500px]">
    <ResultsPanel
      title="Build Logs"
      emptyMessage="Click 'Build' to see logs"
    />
  </div>
)

