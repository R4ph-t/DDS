import type { Story } from "@ladle/react"
import { Collapsible } from "./collapsible"
import { IoServerOutline, IoCodeSlashOutline, IoCogOutline } from "react-icons/io5"
import { createStoryWithCode } from "../../../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const collapsibleProps = [
  {
    name: "title",
    type: "string",
    required: true,
    description: "The title displayed in the collapsible header",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the collapsible is open by default",
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "Optional icon to display before the title",
  },
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "Content to show when expanded",
  },
]

export const Basic: Story = () => (
  <StoryWithCode
    title="Collapsible - Basic"
    description="Basic collapsible section that starts collapsed. Click to expand and reveal content."
    props={collapsibleProps}
  >
    <Collapsible title="What is Render?">
      <p className="text-foreground">
        Render is a unified cloud platform to build and run all your apps and websites with free TLS
        certificates, global CDN, private networks, and auto deploys from Git.
      </p>
    </Collapsible>
  </StoryWithCode>
)

export const DefaultOpen: Story = () => (
  <StoryWithCode
    title="Collapsible - Default Open"
    description="Collapsible that starts expanded. Use defaultOpen={true} to show content immediately."
    props={collapsibleProps}
  >
    <Collapsible title="Frequently Asked Question" defaultOpen>
      <p className="text-foreground mb-2">
        This collapsible section is open by default, making it easy to show important information
        upfront without requiring a click.
      </p>
      <p className="text-foreground">
        You can use this for announcements, featured content, or any section that you want to be
        immediately visible to the user.
      </p>
    </Collapsible>
  </StoryWithCode>
)

export const WithIcon: Story = () => (
  <StoryWithCode
    title="Collapsible - With Icon"
    description="Collapsible with a custom icon displayed before the title for better visual hierarchy."
    props={collapsibleProps}
  >
    <Collapsible
      title="Server Configuration"
      icon={<IoServerOutline className="h-5 w-5 text-primary" />}
    >
      <p className="text-foreground">
        Configure your server settings, including environment variables, build commands, and scaling
        options.
      </p>
    </Collapsible>
  </StoryWithCode>
)

export const MultipleCollapsibles: Story = () => (
  <StoryWithCode
    title="Collapsible - Multiple Sections"
    description="Stack multiple collapsibles for accordion-style content. Each operates independently."
    props={collapsibleProps}
  >
    <div className="space-y-4">
      <Collapsible
        title="Deployment Settings"
        icon={<IoCodeSlashOutline className="h-5 w-5 text-blue-500" />}
      >
        <p className="text-foreground">
          Manage your deployment hooks, branches, and auto-deploy settings.
        </p>
      </Collapsible>
      <Collapsible
        title="General Settings"
        icon={<IoCogOutline className="h-5 w-5 text-zinc-500" />}
      >
        <p className="text-foreground">
          Adjust general application settings like name, region, and more.
        </p>
      </Collapsible>
    </div>
  </StoryWithCode>
)
