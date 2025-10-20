import type { Story } from "@ladle/react"
import { StatCard } from "../src/components/ui/stat-card"
import { createStoryWithCode } from "../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const statCardProps = [
  {
    name: "label",
    type: "string",
    required: true,
    description: "Metric label",
  },
  {
    name: "value",
    type: "string",
    required: true,
    description: "Metric value to display",
  },
  {
    name: "change",
    type: "string",
    description: "Change description (e.g., '+12.5% from last month')",
  },
  {
    name: "changeType",
    type: "string",
    description: "positive or negative (affects text color)",
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "Optional icon to display",
  },
]

export const Default: Story = () => (
  <StoryWithCode
    title="StatCard - Default"
    description="Basic stat card with just a label and value. Perfect for simple metrics without change indicators."
    props={statCardProps}
  >
    <StatCard label="Total Revenue" value="$45,231" />
  </StoryWithCode>
)

export const WithPositiveChange: Story = () => (
  <StoryWithCode
    title="StatCard - With Positive Change"
    description="Stat card showing a positive change indicator. Use changeType='positive' for metrics that improved."
    props={statCardProps}
  >
    <StatCard
      label="Active Users"
      value="2,345"
      change="+12.5% from last month"
      changeType="positive"
    />
  </StoryWithCode>
)

export const WithNegativeChange: Story = () => (
  <StoryWithCode
    title="StatCard - With Negative Change"
    description="Stat card showing a negative change indicator. Use changeType='negative' for metrics that declined."
    props={statCardProps}
  >
    <StatCard
      label="Bounce Rate"
      value="42.3%"
      change="-3.2% from last month"
      changeType="negative"
    />
  </StoryWithCode>
)

export const WithIcon: Story = () => (
  <StoryWithCode
    title="StatCard - With Icon"
    description="Stat card with a custom icon. Icons help users quickly identify metrics at a glance."
    props={statCardProps}
  >
    <StatCard
      label="Total Deployments"
      value="1,234"
      change="+20% this week"
      changeType="positive"
      icon={
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      }
    />
  </StoryWithCode>
)

export const Grid: Story = () => (
  <StoryWithCode
    title="StatCard - Grid Layout"
    description="Multiple stat cards in a responsive grid layout. Great for dashboard overviews with multiple metrics."
    props={statCardProps}
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <StatCard label="Total Users" value="12,543" change="+8.2%" changeType="positive" />
      <StatCard label="Revenue" value="$54,239" change="+12.5%" changeType="positive" />
      <StatCard label="Conversion Rate" value="3.24%" changeType="negative" />
    </div>
  </StoryWithCode>
)
