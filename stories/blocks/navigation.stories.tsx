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
    description="Basic navigation with logo, links (some with optional icons), and theme toggle action. Links positioned left by default."
    props={navigationProps}
    code={`import { Navigation } from "@/components/blocks/navigation"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { FiHome, FiBook } from "react-icons/fi"

<Navigation
  logo="My App"
  links={[
    { label: "Home", href: "/", icon: <FiHome /> },
    { label: "About", href: "/about" },
    { label: "Docs", href: "/docs", icon: <FiBook /> },
  ]}
  actions={<ThemeToggle variant="ghost" />}
/>`}
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
    code={`import { Navigation } from "@/components/blocks/navigation"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"

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
      <Button variant="ghost" size="sm">Sign In</Button>
      <Button variant="default" size="sm">Sign Up</Button>
      <ThemeToggle variant="ghost" size="sm" />
    </>
  }
/>`}
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
    code={`import { Navigation } from "@/components/blocks/navigation"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { FiHome, FiInfo, FiBook, FiSettings } from "react-icons/fi"

<Navigation
  logo="My App"
  links={[
    { label: "Home", href: "/", icon: <FiHome /> },
    { label: "About", href: "/about", icon: <FiInfo /> },
    { label: "Docs", href: "/docs", icon: <FiBook /> },
    { label: "Settings", href: "/settings", icon: <FiSettings /> },
  ]}
  actions={<ThemeToggle variant="ghost" />}
/>`}
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

export const WithActiveState: Story = () => (
  <StoryWithCode
    title="Navigation - With Active State"
    description="Automatically highlights the current page by passing currentPath. Links are marked active when their href matches."
    props={[
      ...navigationProps,
      {
        name: "currentPath",
        type: "string",
        description: "Current pathname to automatically determine active links",
      },
      {
        name: "active",
        type: "boolean",
        defaultValue: "false",
        description: "Manually override active state for a specific link",
      },
    ]}
    code={`import { Navigation } from "@/components/blocks/navigation"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { usePathname } from "next/navigation"

export function MyNav() {
  const pathname = usePathname()

  return (
    <Navigation
      logo="My App"
      currentPath={pathname}  // Automatically determines active link
      links={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Docs", href: "/docs" },
      ]}
      actions={<ThemeToggle variant="ghost" />}
    />
  )
}`}
  >
    <Navigation
      logo="My App"
      currentPath="/about"
      links={[
        { label: "Home", href: "/", icon: <FiHome /> },
        { label: "About", href: "/about" },
        { label: "Docs", href: "/docs", icon: <FiBook /> },
        { label: "Settings", href: "/settings", icon: <FiSettings /> },
      ]}
      actions={<ThemeToggle variant="ghost" />}
    />
    <p className="mt-4 text-sm text-muted-foreground">
      "About" is automatically marked as active because currentPath="/about"
    </p>
  </StoryWithCode>
)

export const Sticky: Story = () => (
  <StoryWithCode
    title="Navigation - Sticky"
    description="Sticky navigation that stays at the top when scrolling. Scroll down to see it in action!"
    props={[
      ...navigationProps,
      {
        name: "sticky",
        type: "boolean",
        defaultValue: "false",
        description: "Make the navigation sticky at the top",
      },
    ]}
    code={`import { Navigation } from "@/components/blocks/navigation"
import { ThemeToggle } from "@/components/ui/theme-toggle"

<Navigation
  logo="My App"
  links={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Docs", href: "/docs" },
  ]}
  actions={<ThemeToggle variant="ghost" />}
  sticky
/>`}
  >
    <div>
      <Navigation
        logo="My App"
        links={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Docs", href: "/docs" },
        ]}
        actions={<ThemeToggle variant="ghost" />}
        sticky
      />
      <div className="p-6 space-y-4">
        <p className="text-muted-foreground">Scroll down to see the sticky navigation in action!</p>
        {Array.from({ length: 30 }, (_, i) => (
          <p key={i} className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        ))}
      </div>
    </div>
  </StoryWithCode>
)

export const Frosted: Story = () => (
  <StoryWithCode
    title="Navigation - Frosted Glass"
    description="Navigation with frosted glass effect (backdrop blur). Perfect for overlays on images or hero sections."
    props={[
      ...navigationProps,
      {
        name: "frosted",
        type: "boolean",
        defaultValue: "false",
        description: "Apply frosted glass effect",
      },
    ]}
    code={`import { Navigation } from "@/components/blocks/navigation"
import { ThemeToggle } from "@/components/ui/theme-toggle"

<Navigation
  logo="My App"
  links={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Docs", href: "/docs" },
  ]}
  actions={<ThemeToggle variant="ghost" />}
  frosted
  sticky
/>`}
  >
    <div
      className="relative"
      style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px),
          repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,.03) 10px, rgba(255,255,255,.03) 20px),
          linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)
        `,
      }}
    >
      <Navigation
        logo="My App"
        links={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Docs", href: "/docs" },
        ]}
        actions={<ThemeToggle variant="ghost" />}
        frosted
        sticky
      />
      <div className="p-6 space-y-4">
        <p className="text-foreground/80 font-medium">
          Frosted glass navigation over gradient background
        </p>
        <p className="text-foreground/60 text-sm">
          The navigation bar has a semi-transparent background with backdrop blur, creating a
          frosted glass effect. Perfect for hero sections or when you want the nav to blend with
          content below.
        </p>
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} className="text-sm text-foreground/50">
            Content line {i + 1}. Scroll to see the frosted navigation in action.
          </p>
        ))}
      </div>
    </div>
  </StoryWithCode>
)
