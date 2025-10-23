import type { Story } from "@ladle/react"
import { Footer } from "../src/components/blocks/footer"
import { createStoryWithCode } from "../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const footerProps = [
  {
    name: "copyright",
    type: "string",
    description: "Custom copyright text (defaults to Render copyright with current year)",
  },
  {
    name: "links",
    type: "array",
    description: "Footer links with label and href",
  },
  {
    name: "sticky",
    type: "boolean",
    defaultValue: "false",
    description: "Make footer sticky at bottom of viewport",
  },
  {
    name: "centered",
    type: "boolean",
    defaultValue: "false",
    description: "Center copyright text and stack links below",
  },
]

export const Default: Story = () => (
  <StoryWithCode
    title="Footer - Default"
    description="Default footer with Render copyright and current year. Clean and minimal."
    props={footerProps}
  >
    <Footer />
  </StoryWithCode>
)

export const WithLinks: Story = () => (
  <StoryWithCode
    title="Footer - With Links"
    description="Footer with navigation links. Common pattern for Privacy, Terms, Docs, etc."
    props={footerProps}
  >
    <Footer
      links={[
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Documentation", href: "/docs" },
        { label: "Support", href: "/support" },
      ]}
    />
  </StoryWithCode>
)

export const CustomCopyright: Story = () => {
  const currentYear = new Date().getFullYear()
  return (
    <StoryWithCode
      title="Footer - Custom Copyright"
      description="Footer with custom copyright text instead of the default Render copyright."
      props={footerProps}
    >
      <Footer copyright={`© ${currentYear} Your Company. All rights reserved.`} />
    </StoryWithCode>
  )
}

export const Complete: Story = () => {
  const currentYear = new Date().getFullYear()
  return (
    <StoryWithCode
      title="Footer - Complete"
      description="Full footer with custom copyright and navigation links."
      props={footerProps}
    >
      <Footer
        copyright={`© ${currentYear} DemoApp by Render`}
        links={[
          { label: "About", href: "/about" },
          { label: "Blog", href: "/blog" },
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
        ]}
      />
    </StoryWithCode>
  )
}

export const Centered: Story = () => {
  const currentYear = new Date().getFullYear()
  return (
    <StoryWithCode
      title="Footer - Centered"
      description="Footer with centered copyright and links stacked below. Great for simple, symmetric layouts."
      props={footerProps}
      code={`import { Footer } from "render-dds"

<Footer
  centered
  copyright="© ${currentYear} Your Company"
  links={[
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ]}
/>`}
    >
      <Footer
        centered
        copyright={`© ${currentYear} DemoApp by Render`}
        links={[
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
          { label: "Contact", href: "/contact" },
        ]}
      />
    </StoryWithCode>
  )
}

export const Sticky: Story = () => {
  const currentYear = new Date().getFullYear()
  return (
    <StoryWithCode
      title="Footer - Sticky"
      description="Sticky footer that stays at the bottom of the viewport. Useful for app layouts."
      props={footerProps}
      code={`import { Footer } from "render-dds"

<Footer sticky copyright="© ${currentYear} Your Company" />`}
    >
      <div className="min-h-[400px] relative">
        <p className="p-6 text-muted-foreground">
          Scroll down to see the sticky footer. It stays at the bottom of the viewport.
        </p>
        {Array.from({ length: 10 }, (_, i) => (
          <p key={i} className="p-6 text-sm">
            Content line {i + 1}
          </p>
        ))}
        <Footer sticky copyright={`© ${currentYear} Sticky Footer Demo`} />
      </div>
    </StoryWithCode>
  )
}
