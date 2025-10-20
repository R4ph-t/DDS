import type { Story } from "@ladle/react"
import { Button } from "./button"
import { createStoryWithCode } from "../../../.ladle/story-helpers"
import {
  IoCheckmarkCircle,
  IoTrash,
  IoAdd,
  IoDownload,
  IoPlay,
  IoRefresh,
  IoSettings,
  IoArrowForward,
  IoArrowBack,
  IoClose,
  IoShare,
  IoPencil,
} from "react-icons/io5"

const StoryWithCode = createStoryWithCode(import.meta.url)

const buttonProps = [
  {
    name: "variant",
    type: "string",
    defaultValue: "primary",
    description: "Visual style variant",
  },
  {
    name: "size",
    type: "string",
    defaultValue: "default",
    description: "Button size: sm, default, lg, icon",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disables the button",
  },
  { name: "iconLeft", type: "ReactNode", description: "Icon to display on the left" },
  { name: "iconRight", type: "ReactNode", description: "Icon to display on the right" },
  { name: "children", type: "ReactNode", required: true, description: "Button content" },
]

export const AllVariants: Story = () => (
  <StoryWithCode
    title="Button - All Variants"
    description="Overview of all button variants, outlines, sizes, and states in one view."
    props={buttonProps}
  >
    <div className="space-y-4">
      <div className="space-x-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="validate">Validate</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <div className="space-x-4">
        <Button variant="outline">Outline</Button>
        <Button variant="outline-primary">Outline Primary</Button>
        <Button variant="outline-secondary">Outline Secondary</Button>
        <Button variant="outline-validate">Outline Validate</Button>
        <Button variant="outline-destructive">Outline Destructive</Button>
      </div>

      <div className="space-x-4">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>

      <div className="space-x-4">
        <Button disabled>Disabled</Button>
      </div>
    </div>
  </StoryWithCode>
)

export const Primary: Story = () => (
  <StoryWithCode
    title="Button - Primary"
    description="Default primary button style. Use for main call-to-action elements."
    props={buttonProps}
  >
    <Button>Click me</Button>
  </StoryWithCode>
)

export const Secondary: Story = () => (
  <StoryWithCode
    title="Button - Secondary"
    description="Secondary button style. Use for less prominent actions."
    props={buttonProps}
  >
    <Button variant="secondary">Secondary</Button>
  </StoryWithCode>
)

export const Validate: Story = () => (
  <StoryWithCode
    title="Button - Validate"
    description="Validation button style. Use for confirm, approve, or success actions."
    props={buttonProps}
  >
    <Button variant="validate">Validate</Button>
  </StoryWithCode>
)

export const Destructive: Story = () => (
  <StoryWithCode
    title="Button - Destructive"
    description="Destructive button style. Use for delete, remove, or dangerous actions."
    props={buttonProps}
  >
    <Button variant="destructive">Delete</Button>
  </StoryWithCode>
)

export const WithIconLeft: Story = () => (
  <StoryWithCode
    title="Button - With Left Icon"
    description="Button with an icon on the left side. Great for adding visual context to actions."
    props={buttonProps}
  >
    <Button iconLeft={<IoAdd className="h-4 w-4" />}>Create New</Button>
  </StoryWithCode>
)

export const WithIconRight: Story = () => (
  <StoryWithCode
    title="Button - With Right Icon"
    description="Button with an icon on the right side. Often used for navigation or forward actions."
    props={buttonProps}
  >
    <Button iconRight={<IoArrowForward className="h-4 w-4" />}>Continue</Button>
  </StoryWithCode>
)

export const IconOnly: Story = () => (
  <StoryWithCode
    title="Button - Icon Only"
    description="Compact icon-only buttons. Use size='icon' for square icon buttons across all variants."
    props={buttonProps}
  >
    <div className="space-x-4">
      <Button size="icon">
        <IoAdd className="h-5 w-5" />
      </Button>
      <Button size="icon" variant="secondary">
        <IoPencil className="h-5 w-5" />
      </Button>
      <Button size="icon" variant="validate">
        <IoCheckmarkCircle className="h-5 w-5" />
      </Button>
      <Button size="icon" variant="destructive">
        <IoTrash className="h-5 w-5" />
      </Button>
      <Button size="icon" variant="ghost">
        <IoSettings className="h-5 w-5" />
      </Button>
    </div>
  </StoryWithCode>
)

export const OutlineVariants: Story = () => (
  <StoryWithCode
    title="Button - Outline Variants"
    description="Outline button styles with transparent backgrounds. Less visually prominent than solid variants."
    props={buttonProps}
  >
    <div className="space-x-4">
      <Button size="icon" variant="outline">
        <IoRefresh className="h-5 w-5" />
      </Button>
      <Button size="icon" variant="outline-primary">
        <IoPlay className="h-5 w-5" />
      </Button>
      <Button size="icon" variant="outline-destructive">
        <IoClose className="h-5 w-5" />
      </Button>
    </div>
  </StoryWithCode>
)

export const WithIconsExamples: Story = () => (
  <StoryWithCode
    title="Button - Icon Examples"
    description="Various examples showing left icons, right icons, and icons on both sides for different use cases."
    props={buttonProps}
  >
    <div className="space-y-4">
      <div className="space-x-4">
        <Button iconLeft={<IoAdd className="h-4 w-4" />}>Create New</Button>
        <Button variant="secondary" iconLeft={<IoDownload className="h-4 w-4" />}>
          Download
        </Button>
        <Button variant="validate" iconLeft={<IoCheckmarkCircle className="h-4 w-4" />}>
          Approve
        </Button>
        <Button variant="destructive" iconLeft={<IoTrash className="h-4 w-4" />}>
          Delete
        </Button>
      </div>

      <div className="space-x-4">
        <Button iconRight={<IoArrowForward className="h-4 w-4" />}>Continue</Button>
        <Button variant="outline-primary" iconRight={<IoShare className="h-4 w-4" />}>
          Share
        </Button>
        <Button variant="ghost" iconRight={<IoSettings className="h-4 w-4" />}>
          Settings
        </Button>
      </div>

      <div className="space-x-4">
        <Button
          iconLeft={<IoArrowBack className="h-4 w-4" />}
          iconRight={<IoArrowForward className="h-4 w-4" />}
        >
          Both Sides
        </Button>
      </div>
    </div>
  </StoryWithCode>
)
