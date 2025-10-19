import type { Story } from "@ladle/react"
import { MetricCard } from "./metric-card"

export const Simple: Story = () => (
  <div className="p-4">
    <MetricCard
      title="Total Cost"
      value="$0.0234"
      subtitle="API cost for this request"
    />
  </div>
)

export const WithBreakdown: Story = () => (
  <div className="p-4">
    <MetricCard
      title="Quality Score"
      value="87/100"
      subtitle="Average across 2 evaluations"
    >
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
)

export const Collapsible: Story = () => (
  <div className="p-4 space-y-4">
    <MetricCard
      title="Cost Breakdown"
      value="$0.0456"
      subtitle="Total API cost"
      collapsible
    >
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
)

export const Grid: Story = () => (
  <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    <MetricCard
      title="Confidence Score"
      value="92%"
      subtitle="Based on 15/15 verified claims"
    />
    <MetricCard
      title="Duration"
      value="4.2s"
      subtitle="Total processing time"
    />
    <MetricCard
      title="Tokens Used"
      value="3,542"
      subtitle="Input + output tokens"
    />
    <MetricCard
      title="Documents"
      value="12"
      subtitle="Retrieved from RAG"
    />
  </div>
)

