import * as React from "react"
import { Button, ButtonProps } from "./button"
import {
  IoSave,
  IoCheckmarkCircle,
  IoTrash,
  IoPencil,
  IoAdd,
  IoCopy,
  IoDownload,
  IoCloudUpload,
  IoRocket,
  IoRefresh,
  IoPause,
  IoClose,
  IoArrowForward,
  IoArrowBack,
} from "react-icons/io5"

// Save Actions
export const SaveButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ iconLeft = <IoSave className="h-4 w-4" />, children, ...props }, ref) => (
    <Button ref={ref} iconLeft={iconLeft} {...props}>
      {children || "Save"}
    </Button>
  )
)
SaveButton.displayName = "SaveButton"

export const SaveDraftButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "outline-primary", iconLeft = <IoSave className="h-4 w-4" />, children, ...props },
    ref
  ) => (
    <Button ref={ref} variant={variant} iconLeft={iconLeft} {...props}>
      {children || "Save Draft"}
    </Button>
  )
)
SaveDraftButton.displayName = "SaveDraftButton"

export const SaveAndDeployButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "validate",
      iconLeft = <IoCheckmarkCircle className="h-4 w-4" />,
      children,
      ...props
    },
    ref
  ) => (
    <Button ref={ref} variant={variant} iconLeft={iconLeft} {...props}>
      {children || "Save & Deploy"}
    </Button>
  )
)
SaveAndDeployButton.displayName = "SaveAndDeployButton"

// Edit Actions
export const EditButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ iconLeft = <IoPencil className="h-4 w-4" />, children, ...props }, ref) => (
    <Button ref={ref} iconLeft={iconLeft} {...props}>
      {children || "Edit"}
    </Button>
  )
)
EditButton.displayName = "EditButton"

export const DuplicateButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ iconLeft = <IoCopy className="h-4 w-4" />, children, ...props }, ref) => (
    <Button ref={ref} iconLeft={iconLeft} {...props}>
      {children || "Duplicate"}
    </Button>
  )
)
DuplicateButton.displayName = "DuplicateButton"

export const DeleteButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "destructive", iconLeft = <IoTrash className="h-4 w-4" />, children, ...props },
    ref
  ) => (
    <Button ref={ref} variant={variant} iconLeft={iconLeft} {...props}>
      {children || "Delete"}
    </Button>
  )
)
DeleteButton.displayName = "DeleteButton"

// Create Actions
export const CreateButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ iconLeft = <IoAdd className="h-4 w-4" />, children, ...props }, ref) => (
    <Button ref={ref} iconLeft={iconLeft} {...props}>
      {children || "Create"}
    </Button>
  )
)
CreateButton.displayName = "CreateButton"

export const AddButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ iconLeft = <IoAdd className="h-4 w-4" />, children, ...props }, ref) => (
    <Button ref={ref} iconLeft={iconLeft} {...props}>
      {children || "Add"}
    </Button>
  )
)
AddButton.displayName = "AddButton"

// Upload/Download Actions
export const UploadButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "secondary", iconLeft = <IoCloudUpload className="h-4 w-4" />, children, ...props },
    ref
  ) => (
    <Button ref={ref} variant={variant} iconLeft={iconLeft} {...props}>
      {children || "Upload"}
    </Button>
  )
)
UploadButton.displayName = "UploadButton"

export const DownloadButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "outline-primary",
      iconLeft = <IoDownload className="h-4 w-4" />,
      children,
      ...props
    },
    ref
  ) => (
    <Button ref={ref} variant={variant} iconLeft={iconLeft} {...props}>
      {children || "Download"}
    </Button>
  )
)
DownloadButton.displayName = "DownloadButton"

// Control Actions
export const DeployButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "validate", iconLeft = <IoRocket className="h-5 w-5" />, children, ...props },
    ref
  ) => (
    <Button ref={ref} variant={variant} iconLeft={iconLeft} {...props}>
      {children || "Deploy"}
    </Button>
  )
)
DeployButton.displayName = "DeployButton"

export const RestartButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ iconLeft = <IoRefresh className="h-4 w-4" />, children, ...props }, ref) => (
    <Button ref={ref} iconLeft={iconLeft} {...props}>
      {children || "Restart"}
    </Button>
  )
)
RestartButton.displayName = "RestartButton"

export const PauseButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "secondary", iconLeft = <IoPause className="h-4 w-4" />, children, ...props },
    ref
  ) => (
    <Button ref={ref} variant={variant} iconLeft={iconLeft} {...props}>
      {children || "Pause"}
    </Button>
  )
)
PauseButton.displayName = "PauseButton"

export const StopButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "destructive", iconLeft = <IoClose className="h-4 w-4" />, children, ...props },
    ref
  ) => (
    <Button ref={ref} variant={variant} iconLeft={iconLeft} {...props}>
      {children || "Stop"}
    </Button>
  )
)
StopButton.displayName = "StopButton"

// Navigation Actions
export const ContinueButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ iconRight = <IoArrowForward className="h-4 w-4" />, children, ...props }, ref) => (
    <Button ref={ref} iconRight={iconRight} {...props}>
      {children || "Continue"}
    </Button>
  )
)
ContinueButton.displayName = "ContinueButton"

export const BackButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "outline", iconLeft = <IoArrowBack className="h-4 w-4" />, children, ...props },
    ref
  ) => (
    <Button ref={ref} variant={variant} iconLeft={iconLeft} {...props}>
      {children || "Back"}
    </Button>
  )
)
BackButton.displayName = "BackButton"

export const NextButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ iconRight = <IoArrowForward className="h-4 w-4" />, children, ...props }, ref) => (
    <Button ref={ref} iconRight={iconRight} {...props}>
      {children || "Next"}
    </Button>
  )
)
NextButton.displayName = "NextButton"
