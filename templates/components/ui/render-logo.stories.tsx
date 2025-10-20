import type { Story } from "@ladle/react"
import { RenderLogo } from "./render-logo"
import { createStoryWithCode } from "../../../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const renderLogoProps = [
  {
    name: "variant",
    type: "string",
    defaultValue: "full",
    description: "Logo variant: 'mark' (icon only) or 'full' (icon + text)",
  },
  {
    name: "height",
    type: "number",
    defaultValue: "32",
    description: "Logo height in pixels (width auto-scales)",
  },
]

export const Full: Story = () => (
  <StoryWithCode
    title="RenderLogo - Full Logo"
    description="Full Render logo with text. Automatically switches between black (light mode) and white (dark mode). Toggle theme to see it change."
    props={renderLogoProps}
  >
    <div className="p-8">
      <RenderLogo variant="full" height={64} />
    </div>
  </StoryWithCode>
)

export const Mark: Story = () => (
  <StoryWithCode
    title="RenderLogo - Mark Only"
    description="Render logomark (icon only) without text. Perfect for compact spaces like mobile navigation or favicons."
    props={renderLogoProps}
  >
    <div className="p-8">
      <RenderLogo variant="mark" height={64} />
    </div>
  </StoryWithCode>
)

export const Sizes: Story = () => (
  <StoryWithCode
    title="RenderLogo - Different Sizes"
    description="Logo at various sizes. Height can be customized while width scales proportionally."
    props={renderLogoProps}
  >
    <div className="p-8 space-y-6">
      <div className="flex items-center gap-4">
        <RenderLogo variant="full" height={24} />
        <span className="text-sm text-muted-foreground">24px</span>
      </div>
      <div className="flex items-center gap-4">
        <RenderLogo variant="full" height={32} />
        <span className="text-sm text-muted-foreground">32px (default)</span>
      </div>
      <div className="flex items-center gap-4">
        <RenderLogo variant="full" height={48} />
        <span className="text-sm text-muted-foreground">48px</span>
      </div>
      <div className="flex items-center gap-4">
        <RenderLogo variant="full" height={64} />
        <span className="text-sm text-muted-foreground">64px</span>
      </div>
    </div>
  </StoryWithCode>
)

export const MarkSizes: Story = () => (
  <StoryWithCode
    title="RenderLogo - Mark Sizes"
    description="Logomark at various sizes. Useful for avatars, buttons, and compact UI elements."
    props={renderLogoProps}
  >
    <div className="p-8 space-y-6">
      <div className="flex items-center gap-4">
        <RenderLogo variant="mark" height={20} />
        <span className="text-sm text-muted-foreground">20px</span>
      </div>
      <div className="flex items-center gap-4">
        <RenderLogo variant="mark" height={32} />
        <span className="text-sm text-muted-foreground">32px</span>
      </div>
      <div className="flex items-center gap-4">
        <RenderLogo variant="mark" height={48} />
        <span className="text-sm text-muted-foreground">48px</span>
      </div>
      <div className="flex items-center gap-4">
        <RenderLogo variant="mark" height={64} />
        <span className="text-sm text-muted-foreground">64px</span>
      </div>
    </div>
  </StoryWithCode>
)

export const InNavigation: Story = () => (
  <StoryWithCode
    title="RenderLogo - In Navigation"
    description="Example of using the logo in a navigation bar. Full logo for desktop, mark for mobile."
    props={renderLogoProps}
  >
    <div className="border border-border">
      <div className="flex items-center justify-between px-6 py-4 bg-background">
        <RenderLogo variant="full" height={28} />
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-foreground hover:text-primary">
            Docs
          </a>
          <a href="#" className="text-foreground hover:text-primary">
            Pricing
          </a>
          <button className="bg-primary px-4 py-2 text-primary-foreground text-sm font-semibold cursor-pointer">
            Sign In
          </button>
        </div>
      </div>
    </div>
  </StoryWithCode>
)

export const InFooter: Story = () => {
  const currentYear = new Date().getFullYear()
  return (
    <StoryWithCode
      title="RenderLogo - In Footer"
      description="Example of using the logo in a footer. Typically paired with copyright text and links."
      props={renderLogoProps}
    >
      <div className="border-t border-border bg-background px-6 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <RenderLogo variant="mark" height={24} />
            <p className="text-sm text-muted-foreground !mb-0">
              © {currentYear} Render. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
            <a href="#" className="hover:text-foreground">
              Docs
            </a>
          </div>
        </div>
      </div>
    </StoryWithCode>
  )
}
