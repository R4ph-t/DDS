import type { Story } from "@ladle/react"
import {
  SaveButton,
  SaveDraftButton,
  SaveAndDeployButton,
  EditButton,
  DuplicateButton,
  DeleteButton,
  CreateButton,
  AddButton,
  UploadButton,
  DownloadButton,
  DeployButton,
  RestartButton,
  PauseButton,
  StopButton,
  ContinueButton,
  BackButton,
  NextButton,
} from "../src/components/ui/button-actions"
import { createStoryWithCode } from "../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const actionButtonProps = [
  {
    name: "variant",
    type: "string",
    description: "Button variant (inherited from Button)",
  },
  {
    name: "size",
    type: "string",
    description: "Button size (inherited from Button)",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disable the button",
  },
  {
    name: "onClick",
    type: "function",
    description: "Click handler",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Override default button text",
  },
]

export const SaveActions: Story = () => (
  <StoryWithCode
    title="Action Buttons - Save Actions"
    description="Save-related action buttons: SaveButton, SaveDraftButton, and SaveAndDeployButton with appropriate icons and styling."
    props={actionButtonProps}
  >
    <div className="space-x-4">
      <SaveButton />
      <SaveDraftButton />
      <SaveAndDeployButton />
    </div>
  </StoryWithCode>
)

export const EditActions: Story = () => (
  <StoryWithCode
    title="Action Buttons - Edit Actions"
    description="Edit-related action buttons: EditButton, DuplicateButton, and DeleteButton."
    props={actionButtonProps}
  >
    <div className="space-x-4">
      <EditButton />
      <DuplicateButton />
      <DeleteButton />
    </div>
  </StoryWithCode>
)

export const CreateActions: Story = () => (
  <StoryWithCode
    title="Action Buttons - Create Actions"
    description="Create-related action buttons: CreateButton and AddButton. Can override default text via children."
    props={actionButtonProps}
  >
    <div className="space-x-4">
      <CreateButton />
      <AddButton />
      <CreateButton>Create New</CreateButton>
    </div>
  </StoryWithCode>
)

export const UploadDownload: Story = () => (
  <StoryWithCode
    title="Action Buttons - Upload/Download"
    description="File transfer action buttons: UploadButton and DownloadButton."
    props={actionButtonProps}
  >
    <div className="space-x-4">
      <UploadButton />
      <DownloadButton />
    </div>
  </StoryWithCode>
)

export const ControlActions: Story = () => (
  <StoryWithCode
    title="Action Buttons - Control Actions"
    description="Service control action buttons: DeployButton, RestartButton, PauseButton, and StopButton."
    props={actionButtonProps}
  >
    <div className="space-x-4">
      <DeployButton />
      <RestartButton />
      <PauseButton />
      <StopButton />
    </div>
  </StoryWithCode>
)

export const NavigationActions: Story = () => (
  <StoryWithCode
    title="Action Buttons - Navigation"
    description="Navigation action buttons: BackButton, ContinueButton, and NextButton for multi-step flows."
    props={actionButtonProps}
  >
    <div className="space-x-4">
      <BackButton />
      <ContinueButton />
      <NextButton />
    </div>
  </StoryWithCode>
)

export const AllActions: Story = () => (
  <StoryWithCode
    title="Action Buttons - All Actions"
    description="Complete overview of all available action buttons organized by category."
    props={actionButtonProps}
  >
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold mb-3 text-foreground">Save</h3>
        <div className="space-x-4">
          <SaveButton />
          <SaveDraftButton />
          <SaveAndDeployButton />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 text-foreground">Edit</h3>
        <div className="space-x-4">
          <EditButton />
          <DuplicateButton />
          <DeleteButton />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 text-foreground">Create</h3>
        <div className="space-x-4">
          <CreateButton />
          <AddButton />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 text-foreground">Upload/Download</h3>
        <div className="space-x-4">
          <UploadButton />
          <DownloadButton />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 text-foreground">Control</h3>
        <div className="space-x-4">
          <DeployButton />
          <RestartButton />
          <PauseButton />
          <StopButton />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 text-foreground">Navigation</h3>
        <div className="space-x-4">
          <BackButton />
          <ContinueButton />
          <NextButton />
        </div>
      </div>
    </div>
  </StoryWithCode>
)

export const CustomText: Story = () => (
  <StoryWithCode
    title="Action Buttons - Custom Text"
    description="Action buttons with custom text via children prop, while retaining the icon and default styling."
    props={actionButtonProps}
  >
    <div className="space-x-4">
      <SaveButton>Save Changes</SaveButton>
      <DeployButton>Deploy to Production</DeployButton>
      <DeleteButton>Remove Item</DeleteButton>
    </div>
  </StoryWithCode>
)

export const WithProps: Story = () => (
  <StoryWithCode
    title="Action Buttons - With Props"
    description="Action buttons with various props: disabled state, onClick handlers, and size variants."
    props={actionButtonProps}
  >
    <div className="space-x-4">
      <SaveButton disabled />
      <DeployButton onClick={() => alert("Deploying...")} />
      <DeleteButton size="sm" />
    </div>
  </StoryWithCode>
)

export const OverrideDefaults: Story = () => (
  <StoryWithCode
    title="Action Buttons - Override Defaults"
    description="Action buttons with overridden variant styling. Useful when you need different visual emphasis."
    props={actionButtonProps}
  >
    <div className="space-x-4">
      <DeleteButton variant="outline-destructive">Delete (Outline)</DeleteButton>
      <SaveButton variant="secondary">Save (Secondary)</SaveButton>
      <DeployButton variant="default">Deploy (Default)</DeployButton>
    </div>
  </StoryWithCode>
)
