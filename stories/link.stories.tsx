import type { Story } from "@ladle/react"
import { Link } from "../src/components/ui/link"
import { createStoryWithCode } from "../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const linkProps = [
  {
    name: "variant",
    type: '"default" | "muted" | "subtle"',
    defaultValue: '"default"',
    description: "Visual style of the link (default: primary color, muted: subdued, subtle: same color but always underlined)",
  },
  {
    name: "external",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the link is external (auto-detected from href if starts with http/https)",
  },
  {
    name: "showExternalIcon",
    type: "boolean",
    defaultValue: "true",
    description: "Whether to show the external link icon for external links",
  },
  {
    name: "underline",
    type: '"always" | "hover" | "never"',
    defaultValue: '"hover"',
    description: "When to show the underline",
  },
]

export const Default: Story = () => (
  <StoryWithCode
    title="Link - Default"
    description="Default link style uses primary color for clear visibility. Click to see visited state."
    props={linkProps}
  >
    <div className="space-y-4">
      <div>
        <Link href="#">Regular link (primary color)</Link>
      </div>
      <div>
        <Link href="#visited">Click me to see visited state</Link>
      </div>
      <div>
        <Link href="#" underline="always">
          Always underlined
        </Link>
      </div>
      <div>
        <Link href="#" underline="never">
          Never underlined (still colored)
        </Link>
      </div>
    </div>
  </StoryWithCode>
)

export const Variants: Story = () => (
  <StoryWithCode
    title="Link - Variants"
    description="Different visual styles for links. Default uses primary color, muted for subdued contexts, subtle for same-color but underlined."
    props={linkProps}
  >
    <div className="space-y-4">
      <div>
        <Link href="#" variant="default">
          Default link (primary color, clearly visible)
        </Link>
      </div>
      <div>
        <Link href="#" variant="muted">
          Muted link (subdued, for footers/sidebars)
        </Link>
      </div>
      <div>
        <Link href="#" variant="subtle">
          Subtle link (same color as text, always underlined)
        </Link>
      </div>
    </div>
  </StoryWithCode>
)

export const External: Story = () => (
  <StoryWithCode
    title="Link - External Links"
    description="External links automatically open in a new tab and show an icon. URLs starting with http/https are auto-detected as external."
    props={linkProps}
  >
    <div className="space-y-4">
      <div>
        <Link href="https://render.com">Auto-detected external link</Link>
      </div>
      <div>
        <Link href="https://render.com" showExternalIcon={false}>
          External link without icon
        </Link>
      </div>
      <div>
        <Link href="#" external>
          Forced external (relative URL)
        </Link>
      </div>
    </div>
  </StoryWithCode>
)

export const InText: Story = () => (
  <StoryWithCode
    title="Link - In Text"
    description="Links used inline within paragraphs."
    props={linkProps}
  >
    <div className="space-y-4 max-w-2xl">
      <p className="text-foreground">
        Deploy your web services, static sites, and databases with{" "}
        <Link href="https://render.com">Render</Link>. Get started for free and scale as you grow.
      </p>
      <p className="text-muted-foreground">
        Need help? Check out our{" "}
        <Link href="https://docs.render.com" variant="muted">
          documentation
        </Link>{" "}
        or reach out to{" "}
        <Link href="#" variant="muted" underline="always">
          support
        </Link>
        .
      </p>
    </div>
  </StoryWithCode>
)

export const InNavigation: Story = () => (
  <StoryWithCode
    title="Link - In Navigation"
    description="Links in a navigation bar. Use subtle variant for same-color links with underline on hover."
    props={linkProps}
  >
    <div className="border border-border">
      <nav className="flex items-center justify-between px-6 py-4 bg-background">
        <div className="flex items-center gap-6">
          <Link href="#" variant="subtle" underline="never" className="font-semibold">
            Home
          </Link>
          <Link href="#" variant="subtle" underline="hover">
            Products
          </Link>
          <Link href="#" variant="subtle" underline="hover">
            Pricing
          </Link>
          <Link href="https://docs.render.com" variant="subtle" underline="hover">
            Docs
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" variant="subtle" underline="hover">
            Sign In
          </Link>
          <button className="bg-primary px-4 py-2 text-primary-foreground text-sm font-semibold cursor-pointer">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  </StoryWithCode>
)

export const InFooter: Story = () => (
  <StoryWithCode
    title="Link - In Footer"
    description="Links in a footer, typically with muted styling."
    props={linkProps}
  >
    <div className="border-t border-border bg-background px-6 py-8">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        <div>
          <h3 className="font-semibold text-foreground mb-3">Product</h3>
          <div className="flex flex-col gap-2">
            <Link href="#" variant="muted" underline="hover">
              Features
            </Link>
            <Link href="#" variant="muted" underline="hover">
              Pricing
            </Link>
            <Link href="#" variant="muted" underline="hover">
              Security
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-3">Resources</h3>
          <div className="flex flex-col gap-2">
            <Link href="https://docs.render.com" variant="muted" underline="hover">
              Documentation
            </Link>
            <Link href="https://community.render.com" variant="muted" underline="hover">
              Community
            </Link>
            <Link href="https://render.com/blog" variant="muted" underline="hover">
              Blog
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-3">Company</h3>
          <div className="flex flex-col gap-2">
            <Link href="#" variant="muted" underline="hover">
              About
            </Link>
            <Link href="#" variant="muted" underline="hover">
              Careers
            </Link>
            <Link href="#" variant="muted" underline="hover">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  </StoryWithCode>
)

export const VisitedStates: Story = () => (
  <StoryWithCode
    title="Link - Visited States"
    description="Links show different colors when visited. Click the links to see the visited state."
    props={linkProps}
  >
    <div className="space-y-4">
      <div>
        <Link href="#visited-default">Default variant (purple when visited)</Link>
      </div>
      <div>
        <Link href="#visited-muted" variant="muted">
          Muted variant (slightly faded when visited)
        </Link>
      </div>
      <div>
        <Link href="#visited-subtle" variant="subtle">
          Subtle variant (purple when visited)
        </Link>
      </div>
    </div>
  </StoryWithCode>
)
