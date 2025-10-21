import type { Story } from "@ladle/react"
import { Navigation } from "../../src/components/blocks/navigation"
import { ThemeToggle } from "../../src/components/ui/theme-toggle"
import { Button } from "../../src/components/ui/button"
import { FiHome, FiInfo, FiBook, FiSettings } from "react-icons/fi"

export const Default: Story = () => (
  <Navigation
    logo="My App"
    links={[
      { label: "Home", href: "/", icon: <FiHome /> },
      { label: "About", href: "/about" },
      { label: "Docs", href: "/docs", icon: <FiBook /> },
    ]}
    actions={<ThemeToggle variant="ghost" />}
  />
)

export const LinksLeft: Story = () => (
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
)

LinksLeft.storyName = "Links Left (Default)"

export const LinksCenter: Story = () => (
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
)

LinksCenter.storyName = "Links Center"

export const LinksRight: Story = () => (
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
)

LinksRight.storyName = "Links Right"

export const WithMultipleActions: Story = () => (
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
)

WithMultipleActions.storyName = "With Multiple Actions"

export const LogoOnly: Story = () => (
  <Navigation logo="My App" actions={<ThemeToggle variant="ghost" />} />
)

LogoOnly.storyName = "Logo Only"

export const LinksOnly: Story = () => (
  <Navigation
    links={[
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Docs", href: "/docs" },
    ]}
    linksPosition="center"
  />
)

LinksOnly.storyName = "Links Only"

export const WithIcons: Story = () => (
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
)

WithIcons.storyName = "With Icons"
