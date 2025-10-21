import type { Story } from "@ladle/react"
import { ThemeToggle } from "../../src/components/ui/theme-toggle"
import { ThemeProvider } from "../../src/components/providers/theme-provider"
import { useTheme } from "../../src/components/hooks/use-theme"
import { createStoryWithCode } from "../../.ladle/story-helpers"
import { Alert } from "../../src/components/ui/alert"

const StoryWithCode = createStoryWithCode(import.meta.url)

const themeToggleProps = [
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    defaultValue: "default",
    description: "Size of the toggle button",
  },
  {
    name: "variant",
    type: '"outline" | "ghost" | "solid"',
    defaultValue: "outline",
    description: "Visual style variant",
  },
  {
    name: "showLabel",
    type: "boolean",
    defaultValue: "false",
    description: "Show text label next to icon",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
]

// Demo component to show current theme
function ThemeDemo() {
  const { theme } = useTheme()
  return (
    <div className="p-4 border-2 border-border bg-card text-card-foreground">
      <p className="text-sm font-medium">Current theme: {theme}</p>
      <p className="text-xs text-muted-foreground mt-1">
        Toggle the button to switch between light and dark modes
      </p>
    </div>
  )
}

export const Default: Story = () => (
  <ThemeProvider>
    <StoryWithCode
      title="Theme Toggle - Default"
      description="Default theme toggle button with outline variant."
      props={themeToggleProps}
    >
      <div className="space-y-4">
        <Alert variant="info">
          <p className="text-sm font-medium mb-2">Tailwind v4 Setup Required:</p>
          <p className="text-xs">
            Add this to your globals.css for dark mode to work:
            <br />
            <code className="text-xs bg-muted px-1 py-0.5 mt-1 inline-block">
              @variant dark (.dark &);
            </code>
          </p>
        </Alert>
        <ThemeToggle />
        <ThemeDemo />
      </div>
    </StoryWithCode>
  </ThemeProvider>
)

export const AllVariants: Story = () => (
  <ThemeProvider>
    <StoryWithCode
      title="Theme Toggle - All Variants"
      description="Overview of all theme toggle variants and sizes."
      props={themeToggleProps}
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-3">Variants</h3>
          <div className="space-x-4">
            <ThemeToggle variant="outline" />
            <ThemeToggle variant="ghost" />
            <ThemeToggle variant="solid" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">Sizes</h3>
          <div className="space-x-4 flex items-center">
            <ThemeToggle size="sm" />
            <ThemeToggle size="default" />
            <ThemeToggle size="lg" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">With Labels</h3>
          <div className="space-x-4">
            <ThemeToggle showLabel />
            <ThemeToggle showLabel variant="ghost" />
            <ThemeToggle showLabel variant="solid" />
          </div>
        </div>

        <ThemeDemo />
      </div>
    </StoryWithCode>
  </ThemeProvider>
)

export const WithLabel: Story = () => (
  <ThemeProvider>
    <StoryWithCode
      title="Theme Toggle - With Label"
      description="Theme toggle with text label showing the mode that will be activated."
      props={themeToggleProps}
    >
      <div className="space-y-4">
        <ThemeToggle showLabel />
        <ThemeDemo />
      </div>
    </StoryWithCode>
  </ThemeProvider>
)

export const Small: Story = () => (
  <ThemeProvider>
    <StoryWithCode
      title="Theme Toggle - Small"
      description="Compact size theme toggle, perfect for tight spaces or navigation bars."
      props={themeToggleProps}
    >
      <div className="space-y-4">
        <ThemeToggle size="sm" />
        <ThemeDemo />
      </div>
    </StoryWithCode>
  </ThemeProvider>
)

export const Large: Story = () => (
  <ThemeProvider>
    <StoryWithCode
      title="Theme Toggle - Large"
      description="Larger theme toggle button for prominent placement."
      props={themeToggleProps}
    >
      <div className="space-y-4">
        <ThemeToggle size="lg" />
        <ThemeDemo />
      </div>
    </StoryWithCode>
  </ThemeProvider>
)

export const Ghost: Story = () => (
  <ThemeProvider>
    <StoryWithCode
      title="Theme Toggle - Ghost"
      description="Ghost variant with no border or background."
      props={themeToggleProps}
    >
      <div className="space-y-4">
        <ThemeToggle variant="ghost" />
        <ThemeDemo />
      </div>
    </StoryWithCode>
  </ThemeProvider>
)

export const Solid: Story = () => (
  <ThemeProvider>
    <StoryWithCode
      title="Theme Toggle - Solid"
      description="Solid variant with primary background color."
      props={themeToggleProps}
    >
      <div className="space-y-4">
        <ThemeToggle variant="solid" />
        <ThemeDemo />
      </div>
    </StoryWithCode>
  </ThemeProvider>
)
