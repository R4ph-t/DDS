import type { Story } from "@ladle/react"
import { StatCard } from "./stat-card"

export const Default: Story = () => (
  <StatCard label="Total Revenue" value="$45,231" />
)

export const WithPositiveChange: Story = () => (
  <StatCard
    label="Active Users"
    value="2,345"
    change="+12.5% from last month"
    changeType="positive"
  />
)

export const WithNegativeChange: Story = () => (
  <StatCard
    label="Bounce Rate"
    value="42.3%"
    change="-3.2% from last month"
    changeType="negative"
  />
)

export const WithIcon: Story = () => (
  <StatCard
    label="Total Deployments"
    value="1,234"
    change="+20% this week"
    changeType="positive"
    icon={
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    }
  />
)

export const Grid: Story = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
    <StatCard label="Total Users" value="12,543" change="+8.2%" changeType="positive" />
    <StatCard label="Revenue" value="$54,239" change="+12.5%" changeType="positive" />
    <StatCard label="Conversion Rate" value="3.24%" change="-0.5%" changeType="negative" />
  </div>
)

