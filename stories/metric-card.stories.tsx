import type { Story } from "@ladle/react"
import { MetricCard } from "../src/components/ui/metric-card"
import { createStoryWithCode } from "../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const metricCardProps = [
  {
    name: "title",
    type: "string",
    required: true,
    description: "Card title",
  },
  {
    name: "value",
    type: "string",
    required: true,
    description: "Main metric value",
  },
  {
    name: "subtitle",
    type: "string",
    description: "Additional context text",
  },
  {
    name: "collapsible",
    type: "boolean",
    defaultValue: "false",
    description: "Make the card details collapsible",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Detailed breakdown content",
  },
]

export const Simple: Story = () => (
  <StoryWithCode
    title="MetricCard - Simple"
    description="Simple metric card showing a single value with title and subtitle. No detailed breakdown."
    props={metricCardProps}
  >
    <div className="p-4">
      <MetricCard title="Total Cost" value="$0.0234" subtitle="API cost for this request" />
    </div>
  </StoryWithCode>
)

export const WithBreakdown: Story = () => (
  <StoryWithCode
    title="MetricCard - With Breakdown"
    description="Metric card with children content showing a detailed breakdown. Always visible breakdown."
    props={metricCardProps}
  >
    <div className="p-4">
      <MetricCard title="Quality Score" value="87/100" subtitle="Average across 2 evaluations">
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Technical Accuracy</span>
            <span>9/10</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Clarity</span>
            <span>8/10</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Completeness</span>
            <span>9/10</span>
          </div>
        </div>
      </MetricCard>
    </div>
  </StoryWithCode>
)

export const Collapsible: Story = () => (
  <StoryWithCode
    title="MetricCard - Collapsible"
    description="Collapsible metric card where details can be expanded/collapsed. Great for hiding detailed breakdowns until needed."
    props={metricCardProps}
  >
    <div className="p-4 space-y-4">
      <MetricCard title="Cost Breakdown" value="$0.0456" subtitle="Total API cost" collapsible>
        <div className="space-y-2">
          {[
            { stage: "Embedding", cost: "$0.0012" },
            { stage: "Generation", cost: "$0.0234" },
            { stage: "Evaluation", cost: "$0.0210" },
          ].map((item) => (
            <div
              key={item.stage}
              className="flex justify-between items-center text-sm py-2 border-b-2 border-border last:border-b-0"
            >
              <span className="text-muted-foreground">{item.stage}</span>
              <span className="font-mono text-xs">{item.cost}</span>
            </div>
          ))}
        </div>
      </MetricCard>
    </div>
  </StoryWithCode>
)

export const Grid: Story = () => (
  <StoryWithCode
    title="MetricCard - Grid Layout"
    description="Multiple metric cards in a responsive grid. Perfect for dashboard overviews with various metrics."
    props={metricCardProps}
  >
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <MetricCard title="Confidence Score" value="92%" subtitle="Based on 15/15 verified claims" />
      <MetricCard title="Duration" value="4.2s" subtitle="Total processing time" />
      <MetricCard title="Tokens Used" value="3,542" subtitle="Input + output tokens" />
      <MetricCard title="Documents" value="12" subtitle="Retrieved from RAG" />
    </div>
  </StoryWithCode>
)
