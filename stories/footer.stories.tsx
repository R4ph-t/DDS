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
