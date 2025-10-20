import type { Story } from "@ladle/react"
import { HeroMinimal } from "../src/components/blocks/hero-minimal"
import { createStoryWithCode } from "../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const heroMinimalProps = [
  {
    name: "title",
    type: "string",
    required: true,
    description: "Main heading text",
  },
  {
    name: "subtitle",
    type: "string",
    description: "Subheading or description text",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "CTA buttons or other action elements",
  },
]

export const Default: Story = () => (
  <StoryWithCode
    title="HeroMinimal - Default"
    description="Basic hero section with title and subtitle. Clean, centered layout without CTA buttons."
    props={heroMinimalProps}
  >
    <HeroMinimal
      title="Build and Deploy with Confidence"
      subtitle="Deploy from GitHub to production in seconds. Focus on writing code, not managing infrastructure."
    />
  </StoryWithCode>
)

export const WithCTA: Story = () => (
  <StoryWithCode
    title="HeroMinimal - With CTA"
    description="Hero section with call-to-action buttons. Typical landing page hero with primary and secondary CTAs."
    props={heroMinimalProps}
  >
    <HeroMinimal
      title="Modern Web Hosting"
      subtitle="Deploy your apps and sites with lightning-fast performance and automatic scaling."
    >
      <button className="bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground cursor-pointer">
        Get Started
      </button>
      <button className="border-2 border-border px-6 py-3 text-sm font-semibold cursor-pointer">
        View Documentation
      </button>
    </HeroMinimal>
  </StoryWithCode>
)

export const Minimal: Story = () => (
  <StoryWithCode
    title="HeroMinimal - Minimal"
    description="Absolute minimal hero with just a title. Simplest possible hero section."
    props={heroMinimalProps}
  >
    <HeroMinimal title="Welcome to DemoApp" />
  </StoryWithCode>
)

export const LongTitle: Story = () => (
  <StoryWithCode
    title="HeroMinimal - Long Title"
    description="Hero with longer title and subtitle text. Shows how the component handles more verbose marketing copy."
    props={heroMinimalProps}
  >
    <HeroMinimal
      title="The Fastest Way to Deploy Your Applications to the Cloud"
      subtitle="Connect your GitHub repository and deploy in minutes. Automatic builds, zero-downtime deployments, and instant rollbacks included."
    >
      <button className="bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground cursor-pointer">
        Start Free Trial
      </button>
    </HeroMinimal>
  </StoryWithCode>
)
