import type { Story } from "@ladle/react"
import { Navigation } from "../../src/components/blocks/navigation"
import { ThemeToggle } from "../../src/components/ui/theme-toggle"
import { Button } from "../../src/components/ui/button"
import { FiHome, FiInfo, FiBook, FiSettings } from "react-icons/fi"
import { createStoryWithCode } from "../../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const navigationProps = [
  {
    name: "logo",
    type: "React.ReactNode",
    description: "Logo or brand element displayed on the left",
  },
  {
    name: "links",
    type: "NavigationLink[]",
    description: "Array of navigation links with label, href, and optional icon",
  },
  {
    name: "linksPosition",
    type: '"left" | "center" | "right"',
    defaultValue: "left",
    description: "Position of the links in the navigation bar",
  },
  {
    name: "actions",
    type: "React.ReactNode",
    description: "Action buttons or elements displayed on the right (e.g., theme toggle, login)",
  },
]

export const Default: Story = () => (
  <StoryWithCode
    title="Navigation - Default"
    description="Basic navigation with logo, links (with optional icons), and theme toggle action."
    props={navigationProps}
  >
    <Navigation
      logo="My App"
      links={[
        { label: "Home", href: "/", icon: <FiHome /> },
        { label: "About", href: "/about" },
        { label: "Docs", href: "/docs", icon: <FiBook /> },
      ]}
      actions={<ThemeToggle variant="ghost" />}
    />
  </StoryWithCode>
)

export const LinksLeft: Story = () => (
  <StoryWithCode
    title="Navigation - Links Left"
    description="Links positioned on the left next to the logo (default behavior)."
    props={navigationProps}
  >
    <Navigation
      logo="My App"
      links={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Docs", href: "/docs" },
      ]}
      linksPosition="left"
      actions={<ThemeToggle variant="ghost" />}
    />
  </StoryWithCode>
)

export const LinksCenter: Story = () => (
  <StoryWithCode
    title="Navigation - Links Center"
    description="Links perfectly centered in the navigation bar using absolute positioning."
    props={navigationProps}
  >
    <Navigation
      logo="My App"
      links={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Docs", href: "/docs" },
      ]}
      linksPosition="center"
      actions={<ThemeToggle variant="ghost" />}
    />
  </StoryWithCode>
)

export const LinksRight: Story = () => (
  <StoryWithCode
    title="Navigation - Links Right"
    description="Links positioned on the right side, next to the actions."
    props={navigationProps}
  >
    <Navigation
      logo="My App"
      links={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Docs", href: "/docs" },
      ]}
      linksPosition="right"
      actions={<ThemeToggle variant="ghost" />}
    />
  </StoryWithCode>
)

export const WithMultipleActions: Story = () => (
  <StoryWithCode
    title="Navigation - Multiple Actions"
    description="Navigation with multiple action buttons (Sign In, Sign Up, Theme Toggle)."
    props={navigationProps}
  >
    <Navigation
      logo="My App"
      links={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Docs", href: "/docs" },
      ]}
      linksPosition="right"
      actions={
        <>
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button variant="default" size="sm">
            Sign Up
          </Button>
          <ThemeToggle variant="ghost" size="sm" />
        </>
      }
    />
  </StoryWithCode>
)

export const LogoOnly: Story = () => (
  <StoryWithCode
    title="Navigation - Logo Only"
    description="Simple navigation with just a logo and theme toggle."
    props={navigationProps}
  >
    <Navigation logo="My App" actions={<ThemeToggle variant="ghost" />} />
  </StoryWithCode>
)

export const LinksOnly: Story = () => (
  <StoryWithCode
    title="Navigation - Links Only"
    description="Minimal navigation with only centered links, no logo or actions."
    props={navigationProps}
  >
    <Navigation
      links={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Docs", href: "/docs" },
      ]}
      linksPosition="center"
    />
  </StoryWithCode>
)

export const WithIcons: Story = () => (
  <StoryWithCode
    title="Navigation - With Icons"
    description="All navigation links with icons for better visual clarity."
    props={navigationProps}
  >
    <Navigation
      logo="My App"
      links={[
        { label: "Home", href: "/", icon: <FiHome /> },
        { label: "About", href: "/about", icon: <FiInfo /> },
        { label: "Docs", href: "/docs", icon: <FiBook /> },
        { label: "Settings", href: "/settings", icon: <FiSettings /> },
      ]}
      linksPosition="left"
      actions={<ThemeToggle variant="ghost" />}
    />
  </StoryWithCode>
)
