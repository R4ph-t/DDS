import type { Story } from "@ladle/react"
import { ProgressBar } from "../src/components/ui/progress-bar"
import { createStoryWithCode } from "../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const progressBarProps = [
  {
    name: "value",
    type: "number",
    required: true,
    description: "Progress value (0-100)",
  },
  {
    name: "label",
    type: "string",
    description: "Label text displayed above the bar",
  },
  {
    name: "showPercentage",
    type: "boolean",
    defaultValue: "false",
    description: "Show percentage value",
  },
  {
    name: "color",
    type: "string",
    defaultValue: "primary",
    description: "Bar color: primary, success, warning, error",
  },
  {
    name: "size",
    type: "string",
    defaultValue: "md",
    description: "Bar height: sm, md, lg",
  },
]

export const Default: Story = () => (
  <StoryWithCode
    title="ProgressBar - Default"
    description="Basic progress bar at 45% completion. Simple and clean without labels or percentages."
    props={progressBarProps}
  >
    <div className="p-4 space-y-4">
      <ProgressBar value={45} />
    </div>
  </StoryWithCode>
)

export const WithLabel: Story = () => (
  <StoryWithCode
    title="ProgressBar - With Label"
    description="Progress bar with label text and percentage display. Ideal for showing current operation status."
    props={progressBarProps}
  >
    <div className="p-4 space-y-4">
      <ProgressBar value={65} label="Loading..." showPercentage />
    </div>
  </StoryWithCode>
)

export const Colors: Story = () => (
  <StoryWithCode
    title="ProgressBar - Colors"
    description="All available color variants: primary (purple), success (green), warning (yellow), and error (red)."
    props={progressBarProps}
  >
    <div className="p-4 space-y-4">
      <ProgressBar value={30} label="Primary" color="primary" showPercentage />
      <ProgressBar value={75} label="Success" color="success" showPercentage />
      <ProgressBar value={50} label="Warning" color="warning" showPercentage />
      <ProgressBar value={20} label="Error" color="error" showPercentage />
    </div>
  </StoryWithCode>
)

export const Sizes: Story = () => (
  <StoryWithCode
    title="ProgressBar - Sizes"
    description="Three size variants: sm (small), md (medium/default), and lg (large). Choose based on visual hierarchy needs."
    props={progressBarProps}
  >
    <div className="p-4 space-y-4">
      <ProgressBar value={60} label="Small" size="sm" showPercentage />
      <ProgressBar value={60} label="Medium" size="md" showPercentage />
      <ProgressBar value={60} label="Large" size="lg" showPercentage />
    </div>
  </StoryWithCode>
)

export const Processing: Story = () => (
  <StoryWithCode
    title="ProgressBar - Processing Example"
    description="Real-world example showing multiple processing stages with different progress levels and colors."
    props={progressBarProps}
  >
    <div className="p-4 space-y-4">
      <ProgressBar value={15} label="Embedding..." showPercentage />
      <ProgressBar value={45} label="Generating..." showPercentage />
      <ProgressBar value={85} label="Validating..." showPercentage color="success" />
    </div>
  </StoryWithCode>
)
