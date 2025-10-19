import type { Story } from "@ladle/react"
import { Navigation } from "./navigation"

export const Default: Story = () => (
  <Navigation
    logo="DemoApp"
    links={[
      { label: "Home", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Docs", href: "/docs" },
    ]}
  />
)

export const WithActions: Story = () => (
  <Navigation
    logo="DemoApp"
    links={[
      { label: "Home", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Docs", href: "/docs" },
    ]}
    actions={
      <>
        <button className="text-sm font-medium">Sign in</button>
        <button className="bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
          Get Started
        </button>
      </>
    }
  />
)

export const Minimal: Story = () => (
  <Navigation logo="DemoApp" />
)

export const CustomLogo: Story = () => (
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
)

