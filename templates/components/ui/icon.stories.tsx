import type { Story } from "@ladle/react"
import {
  IoCheckmarkCircle,
  IoCloseCircle,
  IoWarning,
  IoInformationCircle,
  IoHelpCircle,
  IoServerOutline,
  IoCodeSlashOutline,
  IoCogOutline,
  IoRocketOutline,
  IoShieldCheckmarkOutline,
  IoFlashOutline,
  IoGlobeOutline,
  IoLockClosedOutline,
  IoCloudUploadOutline,
  IoTerminalOutline,
} from "react-icons/io5"
import { createStoryWithCode } from "../../../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const iconProps = [
  {
    name: "className",
    type: "string",
    description: "Tailwind classes for size, color, etc.",
  },
]

export const StatusIcons: Story = () => (
  <StoryWithCode
    title="Icons - Status Icons"
    description="Common status icons: success, error, warning, info, and help. Import from react-icons/io5."
    props={iconProps}
  >
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Status Icons</h3>
      <div className="flex gap-6 items-center flex-wrap">
        <div className="flex flex-col items-center gap-2">
          <IoCheckmarkCircle className="h-8 w-8 text-teal-500" />
          <span className="text-sm text-muted-foreground">Success</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IoCloseCircle className="h-8 w-8 text-red-500" />
          <span className="text-sm text-muted-foreground">Error</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IoWarning className="h-8 w-8 text-yellow-500" />
          <span className="text-sm text-muted-foreground">Warning</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IoInformationCircle className="h-8 w-8 text-blue-500" />
          <span className="text-sm text-muted-foreground">Info</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IoHelpCircle className="h-8 w-8 text-purple-500" />
          <span className="text-sm text-muted-foreground">Help</span>
        </div>
      </div>
    </div>
  </StoryWithCode>
)

export const DevIcons: Story = () => (
  <StoryWithCode
    title="Icons - Development Icons"
    description="Icons commonly used in development UIs: server, code, settings, terminal, deploy."
    props={iconProps}
  >
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Development Icons</h3>
      <div className="flex gap-6 items-center flex-wrap">
        <div className="flex flex-col items-center gap-2">
          <IoServerOutline className="h-8 w-8 text-primary" />
          <span className="text-sm text-muted-foreground">Server</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IoCodeSlashOutline className="h-8 w-8 text-primary" />
          <span className="text-sm text-muted-foreground">Code</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IoCogOutline className="h-8 w-8 text-primary" />
          <span className="text-sm text-muted-foreground">Settings</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IoTerminalOutline className="h-8 w-8 text-primary" />
          <span className="text-sm text-muted-foreground">Terminal</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IoCloudUploadOutline className="h-8 w-8 text-primary" />
          <span className="text-sm text-muted-foreground">Deploy</span>
        </div>
      </div>
    </div>
  </StoryWithCode>
)

export const FeatureIcons: Story = () => (
  <StoryWithCode
    title="Icons - Feature Icons"
    description="Icons for highlighting features: launch, speed, security, global reach, privacy."
    props={iconProps}
  >
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Feature Icons</h3>
      <div className="flex gap-6 items-center flex-wrap">
        <div className="flex flex-col items-center gap-2">
          <IoRocketOutline className="h-8 w-8 text-teal-500" />
          <span className="text-sm text-muted-foreground">Launch</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IoFlashOutline className="h-8 w-8 text-yellow-500" />
          <span className="text-sm text-muted-foreground">Fast</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IoShieldCheckmarkOutline className="h-8 w-8 text-teal-500" />
          <span className="text-sm text-muted-foreground">Secure</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IoGlobeOutline className="h-8 w-8 text-blue-500" />
          <span className="text-sm text-muted-foreground">Global</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IoLockClosedOutline className="h-8 w-8 text-purple-500" />
          <span className="text-sm text-muted-foreground">Private</span>
        </div>
      </div>
    </div>
  </StoryWithCode>
)

export const Sizes: Story = () => (
  <StoryWithCode
    title="Icons - Sizes"
    description="Icon size examples using Tailwind's h-* and w-* utilities. From 16px to 48px."
    props={iconProps}
  >
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Icon Sizes</h3>
      <div className="flex gap-6 items-end">
        <div className="flex flex-col items-center gap-2">
          <IoCheckmarkCircle className="h-4 w-4 text-teal-500" />
          <span className="text-xs text-muted-foreground">16px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IoCheckmarkCircle className="h-5 w-5 text-teal-500" />
          <span className="text-xs text-muted-foreground">20px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IoCheckmarkCircle className="h-6 w-6 text-teal-500" />
          <span className="text-xs text-muted-foreground">24px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IoCheckmarkCircle className="h-8 w-8 text-teal-500" />
          <span className="text-xs text-muted-foreground">32px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IoCheckmarkCircle className="h-12 w-12 text-teal-500" />
          <span className="text-xs text-muted-foreground">48px</span>
        </div>
      </div>
    </div>
  </StoryWithCode>
)
