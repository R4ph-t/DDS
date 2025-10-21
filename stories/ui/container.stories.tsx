import type { Story } from "@ladle/react"
import { Container } from "../../src/components/ui/container"
import { createStoryWithCode } from "../../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const containerProps = [
  {
    name: "variant",
    type: '"default" | "bordered" | "elevated" | "ghost"',
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
        This is a basic container with default styling. It has a card background and standard padding.
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
        <p className="text-sm text-muted-foreground">Transparent container, inherits parent background</p>
      </Container>
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
          This container is centered horizontally with a max-width constraint. Perfect for main content
          areas.
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
      <p className="text-muted-foreground">This container spans the full width of its parent element.</p>
    </Container>
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

