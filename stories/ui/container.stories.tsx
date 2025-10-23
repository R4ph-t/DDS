import type { Story } from "@ladle/react"
import { Container } from "../../src/components/ui/container"
import { createStoryWithCode } from "../../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const containerProps = [
  {
    name: "variant",
    type: '"default" | "bordered" | "elevated" | "ghost" | "frosted"',
    defaultValue: "default",
    description: "Visual style variant",
  },
  {
    name: "padding",
    type: '"none" | "sm" | "default" | "lg"',
    defaultValue: "default",
    description: "Internal padding size",
  },
  {
    name: "fullWidth",
    type: "boolean",
    defaultValue: "false",
    description: "Span full width",
  },
  {
    name: "centered",
    type: "boolean",
    defaultValue: "false",
    description: "Center horizontally with max-width",
  },
  {
    name: "transparent",
    type: "boolean",
    defaultValue: "false",
    description: "Use transparent background (shortcut for variant='ghost')",
  },
]

export const Default: Story = () => (
  <StoryWithCode
    title="Container - Default"
    description="Basic container with default background and padding. Square corners, no border-radius."
    props={containerProps}
  >
    <Container>
      <h3 className="text-xl font-semibold mb-2">Default Container</h3>
      <p className="text-muted-foreground">
        This is a basic container with default styling. It has a card background and standard
        padding.
      </p>
    </Container>
  </StoryWithCode>
)

export const AllVariants: Story = () => (
  <StoryWithCode
    title="Container - All Variants"
    description="Overview of all container variants showing different border and shadow styles."
    props={containerProps}
  >
    <div className="space-y-6">
      <Container variant="default">
        <h3 className="text-lg font-semibold mb-2">Default</h3>
        <p className="text-sm text-muted-foreground">Basic container with card background</p>
      </Container>

      <Container variant="bordered">
        <h3 className="text-lg font-semibold mb-2">Bordered</h3>
        <p className="text-sm text-muted-foreground">Container with 1px solid border</p>
      </Container>

      <Container variant="elevated">
        <h3 className="text-lg font-semibold mb-2">Elevated</h3>
        <p className="text-sm text-muted-foreground">Container with border and subtle shadow</p>
      </Container>

      <Container variant="ghost">
        <h3 className="text-lg font-semibold mb-2">Ghost</h3>
        <p className="text-sm text-muted-foreground">
          Transparent container, inherits parent background
        </p>
      </Container>

      <div
        className="p-4 relative"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(147, 51, 234, 0.1) 0px, rgba(147, 51, 234, 0.1) 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(90deg, rgba(147, 51, 234, 0.1) 0px, rgba(147, 51, 234, 0.1) 1px, transparent 1px, transparent 20px),
            linear-gradient(135deg, #667eea 0%, #764ba2 100%)
          `,
        }}
      >
        <Container variant="frosted">
          <h3 className="text-lg font-semibold mb-2">Frosted</h3>
          <p className="text-sm text-muted-foreground">Glass morphism effect with backdrop blur</p>
        </Container>
      </div>
    </div>
  </StoryWithCode>
)

export const Bordered: Story = () => (
  <StoryWithCode
    title="Container - Bordered"
    description="Container with 1px solid border, perfect for defined sections."
    props={containerProps}
  >
    <Container variant="bordered">
      <h3 className="text-xl font-semibold mb-2">Bordered Container</h3>
      <p className="text-muted-foreground">
        This container has a 1px solid border following DDS design principles. Square corners, no
        border-radius.
      </p>
    </Container>
  </StoryWithCode>
)

export const Elevated: Story = () => (
  <StoryWithCode
    title="Container - Elevated"
    description="Container with border and subtle shadow for depth."
    props={containerProps}
  >
    <Container variant="elevated">
      <h3 className="text-xl font-semibold mb-2">Elevated Container</h3>
      <p className="text-muted-foreground">
        This container appears slightly elevated with a border and subtle shadow.
      </p>
    </Container>
  </StoryWithCode>
)

export const PaddingSizes: Story = () => (
  <StoryWithCode
    title="Container - Padding Sizes"
    description="Different padding options for various spacing needs."
    props={containerProps}
  >
    <div className="space-y-6">
      <Container variant="bordered" padding="none">
        <div className="p-2 bg-muted text-muted-foreground text-sm">No padding</div>
      </Container>

      <Container variant="bordered" padding="sm">
        <div className="bg-muted text-muted-foreground text-sm">Small padding (p-4)</div>
      </Container>

      <Container variant="bordered" padding="default">
        <div className="bg-muted text-muted-foreground text-sm">Default padding (p-6)</div>
      </Container>

      <Container variant="bordered" padding="lg">
        <div className="bg-muted text-muted-foreground text-sm">Large padding (p-8)</div>
      </Container>
    </div>
  </StoryWithCode>
)

export const Centered: Story = () => (
  <StoryWithCode
    title="Container - Centered"
    description="Centered container with max-width, great for page layouts."
    props={containerProps}
  >
    <div className="bg-muted p-4">
      <Container variant="bordered" centered>
        <h3 className="text-xl font-semibold mb-2">Centered Container</h3>
        <p className="text-muted-foreground">
          This container is centered horizontally with a max-width constraint. Perfect for main
          content areas.
        </p>
      </Container>
    </div>
  </StoryWithCode>
)

export const FullWidth: Story = () => (
  <StoryWithCode
    title="Container - Full Width"
    description="Container that spans the full width of its parent."
    props={containerProps}
  >
    <Container variant="bordered" fullWidth>
      <h3 className="text-xl font-semibold mb-2">Full Width Container</h3>
      <p className="text-muted-foreground">
        This container spans the full width of its parent element.
      </p>
    </Container>
  </StoryWithCode>
)

export const Transparent: Story = () => (
  <StoryWithCode
    title="Container - Transparent"
    description="Container with transparent background, useful for overlays or content sections without visual separation."
    props={containerProps}
    code={`import { Container } from "render-dds"

// Using transparent prop
<Container transparent padding="lg">
  <h3>Transparent Container</h3>
  <p>No background color, content floats freely</p>
</Container>

// Or use variant="ghost" (same result)
<Container variant="ghost" padding="lg">
  <h3>Ghost Variant</h3>
</Container>`}
  >
    <div className="bg-gradient-to-r from-purple-100 to-yellow-100 dark:from-purple-900/20 dark:to-yellow-900/20 p-8">
      <Container transparent padding="lg">
        <h3 className="text-xl font-semibold mb-2">Transparent Container</h3>
        <p className="text-muted-foreground">
          This container has no background. It inherits the parent's gradient background, perfect
          for overlaying content without visual barriers.
        </p>
      </Container>
    </div>
  </StoryWithCode>
)

export const Frosted: Story = () => (
  <StoryWithCode
    title="Container - Frosted Glass"
    description="Container with frosted glass effect (backdrop blur). Perfect for overlays on images or gradients."
    props={containerProps}
    code={`import { Container } from "render-dds"

<Container variant="frosted" padding="lg">
  <h3>Frosted Glass Container</h3>
  <p>Backdrop blur with semi-transparent background</p>
</Container>`}
  >
    <div
      className="relative min-h-[400px] p-8 flex items-center justify-center"
      style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px),
          repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,.03) 10px, rgba(255,255,255,.03) 20px),
          linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)
        `,
      }}
    >
      <Container variant="frosted" padding="lg" className="max-w-md">
        <h3 className="text-xl font-semibold mb-2">Frosted Glass Effect</h3>
        <p className="text-muted-foreground mb-4">
          This container uses backdrop-blur to create a frosted glass effect over the colorful
          gradient background with a diagonal pattern. Perfect for hero sections or overlays.
        </p>
        <div className="flex gap-2">
          <div className="h-8 w-8 rounded-full bg-purple-500/50" />
          <div className="h-8 w-8 rounded-full bg-pink-500/50" />
          <div className="h-8 w-8 rounded-full bg-yellow-500/50" />
        </div>
      </Container>
    </div>
  </StoryWithCode>
)

export const NestedContainers: Story = () => (
  <StoryWithCode
    title="Container - Nested"
    description="Example of nested containers for complex layouts."
    props={containerProps}
  >
    <Container variant="bordered" padding="lg">
      <h3 className="text-xl font-semibold mb-4">Outer Container</h3>
      <div className="space-y-4">
        <Container variant="elevated" padding="sm">
          <p className="text-sm">Nested container 1</p>
        </Container>
        <Container variant="elevated" padding="sm">
          <p className="text-sm">Nested container 2</p>
        </Container>
      </div>
    </Container>
  </StoryWithCode>
)
