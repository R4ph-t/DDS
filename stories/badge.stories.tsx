import type { Story } from "@ladle/react"
import { Badge } from "../src/components/ui/badge"
import { createStoryWithCode } from "../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const badgeProps = [
  {
    name: "variant",
    type: '"green" | "green-light" | "yellow" | "yellow-light" | "blue" | "blue-light" | "purple" | "purple-light" | "red" | "red-light" | "default" | "default-light"',
    defaultValue: "default",
    description: "Color variant of the badge",
  },
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    defaultValue: "default",
    description: "Size of the badge",
  },
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "Badge text content",
  },
]

export const Default: Story = () => (
  <StoryWithCode
    title="Badge - Default"
    description="Basic badge for displaying status, categories, or labels."
    props={badgeProps}
  >
    <Badge>DEFAULT</Badge>
  </StoryWithCode>
)

export const Colors: Story = () => (
  <StoryWithCode
    title="Badge - Color Variants"
    description="Badges come in multiple color variants. Dark variants work best on dark backgrounds."
    props={badgeProps}
  >
    <div className="flex flex-wrap gap-3">
      <Badge variant="green">GREEN</Badge>
      <Badge variant="yellow">YELLOW</Badge>
      <Badge variant="blue">BLUE</Badge>
      <Badge variant="purple">PURPLE</Badge>
      <Badge variant="red">RED</Badge>
      <Badge variant="default">DEFAULT</Badge>
    </div>
  </StoryWithCode>
)

export const LightColors: Story = () => (
  <StoryWithCode
    title="Badge - Light Variants"
    description="Light variants that adapt between light and dark mode. Better for mixed theme support."
    props={badgeProps}
  >
    <div className="flex flex-wrap gap-3">
      <Badge variant="green-light">GREEN</Badge>
      <Badge variant="yellow-light">YELLOW</Badge>
      <Badge variant="blue-light">BLUE</Badge>
      <Badge variant="purple-light">PURPLE</Badge>
      <Badge variant="red-light">RED</Badge>
      <Badge variant="default-light">DEFAULT</Badge>
    </div>
  </StoryWithCode>
)

export const Sizes: Story = () => (
  <StoryWithCode
    title="Badge - Sizes"
    description="Badges are available in three sizes."
    props={badgeProps}
  >
    <div className="flex items-center gap-3">
      <Badge variant="blue" size="sm">SMALL</Badge>
      <Badge variant="blue" size="default">DEFAULT</Badge>
      <Badge variant="blue" size="lg">LARGE</Badge>
    </div>
  </StoryWithCode>
)

export const UseCases: Story = () => (
  <StoryWithCode
    title="Badge - Use Cases"
    description="Common use cases for badges: status indicators, tags, labels, and categories."
    props={badgeProps}
  >
    <div className="space-y-6">
      {/* Status indicators */}
      <div>
        <p className="text-sm text-muted-foreground mb-2">Status indicators:</p>
        <div className="flex gap-3">
          <Badge variant="green">ACTIVE</Badge>
          <Badge variant="yellow">PENDING</Badge>
          <Badge variant="red">FAILED</Badge>
          <Badge variant="blue">DEPLOYING</Badge>
        </div>
      </div>
      
      {/* Categories */}
      <div>
        <p className="text-sm text-muted-foreground mb-2">Categories/Tags:</p>
        <div className="flex gap-3">
          <Badge variant="purple">VOTING</Badge>
          <Badge variant="blue-light">API</Badge>
          <Badge variant="green-light">DATABASE</Badge>
          <Badge variant="yellow-light">CACHE</Badge>
        </div>
      </div>
      
      {/* Priority levels */}
      <div>
        <p className="text-sm text-muted-foreground mb-2">Priority levels:</p>
        <div className="flex gap-3">
          <Badge variant="red" size="sm">HIGH</Badge>
          <Badge variant="yellow" size="sm">MEDIUM</Badge>
          <Badge variant="green" size="sm">LOW</Badge>
        </div>
      </div>
    </div>
  </StoryWithCode>
)

export const Voting: Story = () => (
  <StoryWithCode
    title="Badge - Voting Example"
    description="Recreating the voting badge from the design reference."
    props={badgeProps}
  >
    <div className="p-8 bg-zinc-950 flex items-center justify-center">
      <Badge variant="green" size="lg">VOTING</Badge>
    </div>
  </StoryWithCode>
)

