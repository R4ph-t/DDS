import type { Story } from "@ladle/react"
import { Spinner } from "../../src/components/ui/spinner"
import { createStoryWithCode } from "../../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const spinnerProps = [
  {
    name: "size",
    type: '"xs" | "sm" | "default" | "lg" | "xl"',
    defaultValue: "default",
    description: "Size of the spinner",
  },
  {
    name: "variant",
    type: '"primary" | "secondary" | "white" | "foreground"',
    defaultValue: "primary",
    description: "Color variant of the spinner",
  },
  {
    name: "label",
    type: "string",
    description: "Optional text label displayed below the spinner",
  },
  {
    name: "showMark",
    type: "boolean",
    defaultValue: "true",
    description: "Show Render mark inside the spinner",
  },
]

export const Default: Story = () => (
  <StoryWithCode
    title="Spinner - Default"
    description="Basic spinner with primary color."
    props={spinnerProps}
    code={`import { Spinner } from "render-dds"

<Spinner />`}
  >
    <Spinner />
  </StoryWithCode>
)

export const Sizes: Story = () => (
  <StoryWithCode
    title="Spinner - Sizes"
    description="Spinners in different sizes: xs, sm, default, lg, xl."
    props={spinnerProps}
    code={`import { Spinner } from "render-dds"

<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="default" />
<Spinner size="lg" />
<Spinner size="xl" />`}
  >
    <div className="flex items-center gap-8">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="default" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  </StoryWithCode>
)

export const Variants: Story = () => (
  <StoryWithCode
    title="Spinner - Variants"
    description="Spinners in different color variants."
    props={spinnerProps}
    code={`import { Spinner } from "render-dds"

<Spinner variant="primary" />
<Spinner variant="secondary" />
<Spinner variant="foreground" />
<Spinner variant="white" /> {/* Use on dark backgrounds */}`}
  >
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="primary" />
        <span className="text-xs text-muted-foreground">Primary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="secondary" />
        <span className="text-xs text-muted-foreground">Secondary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="foreground" />
        <span className="text-xs text-muted-foreground">Foreground</span>
      </div>
      <div className="flex flex-col items-center gap-2 p-4 bg-zinc-900">
        <Spinner variant="white" />
        <span className="text-xs text-white">White</span>
      </div>
    </div>
  </StoryWithCode>
)

export const WithLabel: Story = () => (
  <StoryWithCode
    title="Spinner - With Label"
    description="Spinner with a text label below it."
    props={spinnerProps}
    code={`import { Spinner } from "render-dds"

<Spinner label="Loading..." />
<Spinner label="Processing" size="lg" />
<Spinner label="Please wait" size="sm" variant="secondary" />`}
  >
    <div className="flex items-start gap-8">
      <Spinner label="Loading..." />
      <Spinner label="Processing" size="lg" />
      <Spinner label="Please wait" size="sm" variant="secondary" />
    </div>
  </StoryWithCode>
)

export const InButton: Story = () => (
  <StoryWithCode
    title="Spinner - In Button"
    description="Spinner used inside buttons for loading states."
    props={spinnerProps}
    code={`import { Spinner } from "render-dds"
import { Button } from "render-dds"

<Button disabled>
  <Spinner size="xs" variant="white" />
  Loading...
</Button>

<Button variant="outline" disabled>
  <Spinner size="xs" variant="primary" />
  Processing
</Button>`}
  >
    <div className="flex items-center gap-4">
      <button className="inline-flex items-center justify-center gap-2 h-10 px-4 bg-primary text-primary-foreground cursor-not-allowed opacity-50">
        <Spinner size="xs" variant="white" />
        Loading...
      </button>
      <button className="inline-flex items-center justify-center gap-2 h-10 px-4 border border-input bg-background text-foreground cursor-not-allowed opacity-50">
        <Spinner size="xs" variant="primary" />
        Processing
      </button>
    </div>
  </StoryWithCode>
)

export const Centered: Story = () => (
  <StoryWithCode
    title="Spinner - Centered"
    description="Full-screen centered spinner for page loading states."
    props={spinnerProps}
    code={`import { Spinner } from "render-dds"

<div className="min-h-screen flex items-center justify-center">
  <Spinner size="xl" label="Loading your content..." />
</div>`}
  >
    <div className="min-h-[400px] flex items-center justify-center border border-border">
      <Spinner size="xl" label="Loading your content..." />
    </div>
  </StoryWithCode>
)

export const AllSizesWithLabels: Story = () => (
  <StoryWithCode
    title="Spinner - All Sizes With Labels"
    description="Complete overview of all spinner sizes with labels."
    props={spinnerProps}
  >
    <div className="flex items-start gap-8">
      <Spinner size="xs" label="Extra Small" />
      <Spinner size="sm" label="Small" />
      <Spinner size="default" label="Default" />
      <Spinner size="lg" label="Large" />
      <Spinner size="xl" label="Extra Large" />
    </div>
  </StoryWithCode>
)

export const WithoutMark: Story = () => (
  <StoryWithCode
    title="Spinner - Without Mark"
    description="Spinners without the Render mark inside."
    props={spinnerProps}
    code={`import { Spinner } from "render-dds"

<Spinner showMark={false} />
<Spinner size="lg" showMark={false} variant="secondary" />`}
  >
    <div className="flex items-center gap-8">
      <Spinner showMark={false} />
      <Spinner size="sm" showMark={false} />
      <Spinner size="lg" showMark={false} variant="secondary" />
      <Spinner size="xl" showMark={false} variant="foreground" />
    </div>
  </StoryWithCode>
)

