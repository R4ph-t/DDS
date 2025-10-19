import type { Story } from "@ladle/react"
import { HeroMinimal } from "./hero-minimal"

export const Default: Story = () => (
  <HeroMinimal
    title="Build and Deploy with Confidence"
    subtitle="Deploy from GitHub to production in seconds. Focus on writing code, not managing infrastructure."
  />
)

export const WithCTA: Story = () => (
  <HeroMinimal
    title="Modern Web Hosting"
    subtitle="Deploy your apps and sites with lightning-fast performance and automatic scaling."
  >
    <button className="bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
      Get Started
    </button>
    <button className="border-2 border-border px-6 py-3 text-sm font-semibold">
      View Documentation
    </button>
  </HeroMinimal>
)

export const Minimal: Story = () => (
  <HeroMinimal title="Welcome to DemoApp" />
)

export const LongTitle: Story = () => (
  <HeroMinimal
    title="The Fastest Way to Deploy Your Applications to the Cloud"
    subtitle="Connect your GitHub repository and deploy in minutes. Automatic builds, zero-downtime deployments, and instant rollbacks included."
  >
    <button className="bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
      Start Free Trial
    </button>
  </HeroMinimal>
)

