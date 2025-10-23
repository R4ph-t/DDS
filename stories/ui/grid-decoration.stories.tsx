import type { Story } from "@ladle/react"
import { GridDecoration } from "../../src/components/ui/grid-decoration"
import { createStoryWithCode } from "../../.ladle/story-helpers"
import { Button } from "../../src/components/ui/button"

const StoryWithCode = createStoryWithCode(import.meta.url)

const gridProps = [
  {
    name: "position",
    type: '"top-left" | "top-right" | "bottom-left" | "bottom-right" | "center" | "below-nav-left" | "below-nav-right"',
    defaultValue: "top-left",
    description: "Position of the grid decoration",
  },
  {
    name: "orientation",
    type: '"top-left" | "top-right" | "bottom-left" | "bottom-right"',
    defaultValue: "top-right",
    description: "Orientation of the staircase pattern",
  },
  {
    name: "width",
    type: "number | string",
    defaultValue: "450",
    description: "Width in pixels or CSS value",
  },
  {
    name: "height",
    type: "number | string",
    defaultValue: "450",
    description: "Height in pixels or CSS value",
  },
  {
    name: "opacity",
    type: "number",
    defaultValue: "0.5",
    description: "Opacity of the grid (0-1)",
  },
  {
    name: "density",
    type: "number",
    defaultValue: "0.6",
    description:
      "Density of squares - controls staircase depth (0-1, where higher values show more squares)",
  },
  {
    name: "offsetTop",
    type: "number",
    defaultValue: "0",
    description: "Offset from top in pixels (useful for positioning below navbar)",
  },
  {
    name: "offsetLeft",
    type: "number",
    defaultValue: "0",
    description: "Offset from left in pixels",
  },
  {
    name: "offsetRight",
    type: "number",
    defaultValue: "0",
    description: "Offset from right in pixels",
  },
]

export const Default: Story = () => {
  return (
    <StoryWithCode
      title="Grid Decoration"
      description="Decorative 90x90px grid pattern with a diagonal staircase effect - squares step from the corner creating a modern geometric pattern. Inspired by Render's brand style."
      props={gridProps}
    >
      <div className="relative h-[400px] bg-background border border-zinc-200 dark:border-zinc-800 rounded-sm overflow-hidden">
        <GridDecoration position="top-right" orientation="top-right" />
        <div className="relative z-10 p-8">
          <h2 className="text-2xl mb-4">Content with Grid Decoration</h2>
          <p className="text-muted-foreground mb-4">
            The grid appears in the top-right corner with a diagonal staircase pattern.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </StoryWithCode>
  )
}

export const Positions: Story = () => {
  return (
    <StoryWithCode
      title="Grid Positions"
      description="The grid can be positioned in any corner or centered."
    >
      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-[250px] bg-background border border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <GridDecoration position="top-left" orientation="top-left" width={300} height={300} />
            <div className="relative z-10 p-6">
              <h3 className="font-semibold">Top Left</h3>
            </div>
          </div>

          <div className="relative h-[250px] bg-background border border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <GridDecoration position="top-right" orientation="top-right" width={300} height={300} />
            <div className="relative z-10 p-6 text-right">
              <h3 className="font-semibold">Top Right</h3>
            </div>
          </div>

          <div className="relative h-[250px] bg-background border border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <GridDecoration
              position="bottom-left"
              orientation="bottom-left"
              width={300}
              height={300}
            />
            <div className="relative z-10 p-6 flex items-end">
              <h3 className="font-semibold">Bottom Left</h3>
            </div>
          </div>

          <div className="relative h-[250px] bg-background border border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <GridDecoration
              position="bottom-right"
              orientation="bottom-right"
              width={300}
              height={300}
            />
            <div className="relative z-10 p-6 flex items-end justify-end">
              <h3 className="font-semibold">Bottom Right</h3>
            </div>
          </div>
        </div>
      </div>
    </StoryWithCode>
  )
}

export const Orientations: Story = () => {
  return (
    <StoryWithCode
      title="Grid Orientations"
      description="Control which direction the staircase pattern steps from using the orientation prop."
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="relative h-[250px] bg-background border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <GridDecoration position="top-right" orientation="top-right" width={300} height={300} />
          <div className="relative z-10 p-6 text-right">
            <h3 className="font-semibold">Top Right</h3>
            <p className="text-sm text-muted-foreground mt-2">Staircase from top-right corner</p>
          </div>
        </div>

        <div className="relative h-[250px] bg-background border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <GridDecoration position="top-left" orientation="top-left" width={300} height={300} />
          <div className="relative z-10 p-6">
            <h3 className="font-semibold">Top Left</h3>
            <p className="text-sm text-muted-foreground mt-2">Staircase from top-left corner</p>
          </div>
        </div>

        <div className="relative h-[250px] bg-background border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <GridDecoration
            position="bottom-right"
            orientation="bottom-right"
            width={300}
            height={300}
          />
          <div className="relative z-10 p-6 flex flex-col items-end justify-end">
            <h3 className="font-semibold">Bottom Right</h3>
            <p className="text-sm text-muted-foreground mt-2 text-right">
              Staircase from bottom-right corner
            </p>
          </div>
        </div>

        <div className="relative h-[250px] bg-background border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <GridDecoration
            position="bottom-left"
            orientation="bottom-left"
            width={300}
            height={300}
          />
          <div className="relative z-10 p-6 flex flex-col justify-end">
            <h3 className="font-semibold">Bottom Left</h3>
            <p className="text-sm text-muted-foreground mt-2">Staircase from bottom-left corner</p>
          </div>
        </div>
      </div>
    </StoryWithCode>
  )
}

export const Sizes: Story = () => {
  return (
    <StoryWithCode
      title="Grid Sizes"
      description="Adjust the width and height of the grid decoration."
    >
      <div className="space-y-4">
        <div className="relative h-[200px] bg-background border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <GridDecoration position="top-left" orientation="top-left" width={200} height={200} />
          <div className="relative z-10 p-6">
            <h3 className="font-semibold mb-2">Small (200x200)</h3>
            <p className="text-sm text-muted-foreground">Subtle corner accent</p>
          </div>
        </div>

        <div className="relative h-[300px] bg-background border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <GridDecoration position="top-left" orientation="top-left" width={450} height={450} />
          <div className="relative z-10 p-6">
            <h3 className="font-semibold mb-2">Medium (450x450)</h3>
            <p className="text-sm text-muted-foreground">Default size, good for most use cases</p>
          </div>
        </div>

        <div className="relative h-[400px] bg-background border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <GridDecoration position="top-left" orientation="top-left" width={720} height={720} />
          <div className="relative z-10 p-6">
            <h3 className="font-semibold mb-2">Large (720x720)</h3>
            <p className="text-sm text-muted-foreground">Covers more area for bigger sections</p>
          </div>
        </div>
      </div>
    </StoryWithCode>
  )
}

export const Density: Story = () => {
  return (
    <StoryWithCode
      title="Staircase Density"
      description="Control how far the diagonal staircase extends from the corner - higher density shows more squares."
    >
      <div className="space-y-4">
        <div className="relative h-[300px] bg-background border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <GridDecoration
            position="top-left"
            orientation="top-left"
            density={0.3}
            width={540}
            height={540}
          />
          <div className="relative z-10 p-6">
            <h3 className="font-semibold mb-2">Light (density: 0.3)</h3>
            <p className="text-sm text-muted-foreground">Fewer squares visible, short staircase</p>
          </div>
        </div>

        <div className="relative h-[300px] bg-background border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <GridDecoration
            position="top-left"
            orientation="top-left"
            density={0.6}
            width={540}
            height={540}
          />
          <div className="relative z-10 p-6">
            <h3 className="font-semibold mb-2">Default (density: 0.6)</h3>
            <p className="text-sm text-muted-foreground">Balanced diagonal staircase</p>
          </div>
        </div>

        <div className="relative h-[300px] bg-background border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <GridDecoration
            position="top-left"
            orientation="top-left"
            density={0.9}
            width={540}
            height={540}
          />
          <div className="relative z-10 p-6">
            <h3 className="font-semibold mb-2">Dense (density: 0.9)</h3>
            <p className="text-sm text-muted-foreground">More squares visible, long staircase</p>
          </div>
        </div>
      </div>
    </StoryWithCode>
  )
}

export const Opacity: Story = () => {
  return (
    <StoryWithCode
      title="Grid Opacity"
      description="Control the visibility of the grid with opacity."
    >
      <div className="space-y-4">
        <div className="relative h-[200px] bg-background border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <GridDecoration position="top-left" orientation="top-left" opacity={0.2} />
          <div className="relative z-10 p-6">
            <h3 className="font-semibold mb-2">Subtle (opacity: 0.2)</h3>
            <p className="text-sm text-muted-foreground">Very subtle, barely visible</p>
          </div>
        </div>

        <div className="relative h-[200px] bg-background border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <GridDecoration position="top-left" orientation="top-left" opacity={0.5} />
          <div className="relative z-10 p-6">
            <h3 className="font-semibold mb-2">Default (opacity: 0.5)</h3>
            <p className="text-sm text-muted-foreground">Balanced visibility</p>
          </div>
        </div>

        <div className="relative h-[200px] bg-background border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <GridDecoration position="top-left" orientation="top-left" opacity={0.8} />
          <div className="relative z-10 p-6">
            <h3 className="font-semibold mb-2">Strong (opacity: 0.8)</h3>
            <p className="text-sm text-muted-foreground">More prominent grid pattern</p>
          </div>
        </div>
      </div>
    </StoryWithCode>
  )
}

export const BelowNavbar: Story = () => {
  return (
    <StoryWithCode
      title="Below Navigation Bar"
      description="Position grid decorations below a navigation bar using the below-nav positions. Automatically defaults to 64px offset (standard navbar height)."
      props={gridProps}
      code={`import { GridDecoration } from "render-dds"

// Below nav, aligned to left (automatically offset 64px from top)
<GridDecoration 
  position="below-nav-left" 
  orientation="top-right"
/>

// Below nav, aligned to right (automatically offset 64px from top)
<GridDecoration 
  position="below-nav-right" 
  orientation="top-left"
/>

// Or override the offset for custom navbar heights
<GridDecoration 
  position="below-nav-left" 
  offsetTop={80}  // Custom navbar height
  orientation="top-right"
/>`}
    >
      <div className="relative min-h-[500px] bg-background">
        {/* Simulated navbar */}
        <div className="h-16 bg-background border-b border-border px-6 flex items-center">
          <div className="text-xl font-semibold">My App</div>
          <nav className="ml-8 flex gap-6">
            <a href="#" className="text-sm">
              Home
            </a>
            <a href="#" className="text-sm">
              About
            </a>
            <a href="#" className="text-sm">
              Docs
            </a>
          </nav>
        </div>

        {/* Grid decorations positioned below nav - no offsetTop needed! */}
        <GridDecoration
          position="below-nav-left"
          orientation="top-right"
          width={450}
          height={450}
          opacity={0.4}
        />
        <GridDecoration
          position="below-nav-right"
          orientation="top-left"
          width={450}
          height={450}
          opacity={0.4}
        />

        {/* Content */}
        <div className="relative z-10 px-8 py-16">
          <h1 className="text-4xl mb-4">Content Below Navigation</h1>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            The grid decorations are positioned precisely below the navigation bar using
            position="below-nav-left" and position="below-nav-right". They automatically offset 64px
            from the top (standard navbar height).
          </p>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            No need to manually specify offsetTop! If your navbar has a different height, you can
            override it with a custom offsetTop prop.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </StoryWithCode>
  )
}

export const HeroExample: Story = () => {
  return (
    <StoryWithCode
      title="Hero Section Example"
      description="Real-world example of grid decoration in a hero section."
    >
      <div className="relative h-[500px] bg-gradient-to-br from-purple-50 to-white dark:from-zinc-950 dark:to-zinc-900 overflow-hidden">
        <GridDecoration
          position="top-right"
          orientation="top-right"
          width={600}
          height={600}
          opacity={0.4}
        />
        <div className="relative z-10 container mx-auto px-8 py-16 flex flex-col justify-center h-full">
          <h1 className="text-5xl mb-6">Deploy Your Apps with Confidence</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Build, deploy, and scale your applications with Render's powerful cloud platform. Get
            started in minutes.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Start Free Trial</Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </StoryWithCode>
  )
}
