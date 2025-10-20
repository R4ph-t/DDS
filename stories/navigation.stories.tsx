import type { Story } from "@ladle/react"
import { Navigation } from "../src/components/blocks/navigation"
import { createStoryWithCode } from "../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const navigationProps = [
  {
    name: "logo",
    type: "string | ReactNode",
    required: true,
    description: "Logo text or custom logo element",
  },
  {
    name: "links",
    type: "array",
    description: "Navigation links with label and href",
  },
  {
    name: "actions",
    type: "ReactNode",
    description: "Action buttons or elements on the right side",
  },
]

export const Default: Story = () => (
  <StoryWithCode
    title="Navigation - Default"
    description="Basic navigation with logo and links. Clean and minimal navigation bar."
    props={navigationProps}
  >
    <Navigation
      logo="DemoApp"
      links={[
        { label: "Home", href: "/" },
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Docs", href: "/docs" },
      ]}
    />
  </StoryWithCode>
)

export const WithActions: Story = () => (
  <StoryWithCode
    title="Navigation - With Actions"
    description="Navigation with action buttons on the right. Common pattern for Sign In / Get Started CTAs."
    props={navigationProps}
  >
    <Navigation
      logo="DemoApp"
      links={[
        { label: "Home", href: "/" },
        { label: "Features", href: "/features" },
        { label: "Docs", href: "/docs" },
      ]}
      actions={
        <>
          <button className="text-sm font-medium cursor-pointer">Sign in</button>
          <button className="bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground cursor-pointer">
            Get Started
          </button>
        </>
      }
    />
  </StoryWithCode>
)

export const Minimal: Story = () => (
  <StoryWithCode
    title="Navigation - Minimal"
    description="Minimal navigation with just a logo. Simplest possible navigation bar."
    props={navigationProps}
  >
    <Navigation logo="DemoApp" />
  </StoryWithCode>
)

export const CustomLogo: Story = () => (
  <StoryWithCode
    title="Navigation - Custom Logo"
    description="Navigation with a custom logo element. Use ReactNode for brand logos with icons."
    props={navigationProps}
  >
    <Navigation
      logo={
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-primary" />
          <span className="font-bold">Brand</span>
        </div>
      }
      links={[
        { label: "Product", href: "/product" },
        { label: "About", href: "/about" },
      ]}
    />
  </StoryWithCode>
)
