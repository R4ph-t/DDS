import type { Story } from "@ladle/react"
import { Toast, ToastContainer } from "./toast"
import { useState } from "react"
import { createStoryWithCode } from "../../../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const toastProps = [
  {
    name: "message",
    type: "string",
    required: true,
    description: "The message to display",
  },
  {
    name: "type",
    type: "string",
    required: true,
    description: "Toast type: success, error, or info",
  },
  {
    name: "duration",
    type: "number",
    defaultValue: "5000",
    description: "Auto-dismiss duration in ms (use Infinity for persistent)",
  },
  {
    name: "onClose",
    type: "function",
    required: true,
    description: "Callback when toast is closed",
  },
  {
    name: "index",
    type: "number",
    description: "Position index for stacking (handled by ToastContainer)",
  },
]

export const Success: Story = () => (
  <StoryWithCode
    title="Toast - Success"
    description="Success toast for positive confirmations and completions."
    props={toastProps}
  >
    <Toast message="Operation completed successfully!" type="success" onClose={() => {}} />
  </StoryWithCode>
)

export const Error: Story = () => (
  <StoryWithCode
    title="Toast - Error"
    description="Error toast for failures and problems that need user attention."
    props={toastProps}
  >
    <Toast message="An error occurred. Please try again." type="error" onClose={() => {}} />
  </StoryWithCode>
)

export const Info: Story = () => (
  <StoryWithCode
    title="Toast - Info"
    description="Info toast for neutral information and updates."
    props={toastProps}
  >
    <Toast message="Your changes have been saved." type="info" onClose={() => {}} />
  </StoryWithCode>
)

// Debug versions - won't auto-dismiss
export const DebugSuccess: Story = () => (
  <StoryWithCode
    title="Toast - Debug Success"
    description="Persistent success toast with duration={Infinity}. Useful for debugging toast layouts."
    props={toastProps}
  >
    <Toast
      message="Persistent success toast for debugging"
      type="success"
      duration={Infinity}
      onClose={() => {}}
    />
  </StoryWithCode>
)

export const DebugError: Story = () => (
  <StoryWithCode
    title="Toast - Debug Error"
    description="Persistent error toast with duration={Infinity}. Useful for debugging toast layouts."
    props={toastProps}
  >
    <Toast
      message="Persistent error toast for debugging"
      type="error"
      duration={Infinity}
      onClose={() => {}}
    />
  </StoryWithCode>
)

export const DebugInfo: Story = () => (
  <StoryWithCode
    title="Toast - Debug Info"
    description="Persistent info toast with duration={Infinity}. Useful for debugging toast layouts."
    props={toastProps}
  >
    <Toast
      message="Persistent info toast for debugging"
      type="info"
      duration={Infinity}
      onClose={() => {}}
    />
  </StoryWithCode>
)

export const DebugMultiple: Story = () => {
  const [toasts] = useState([
    { id: "1", message: "First notification - persistent", type: "success" as const },
    { id: "2", message: "Second notification - persistent", type: "error" as const },
    { id: "3", message: "Third notification - persistent", type: "info" as const },
  ])

  return (
    <StoryWithCode
      title="Toast - Debug Multiple"
      description="Multiple persistent toasts stacked vertically. Shows how toasts stack using the index prop."
      props={toastProps}
    >
      <>
        {toasts.map((toast, index) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            index={index}
            duration={Infinity}
            onClose={() => {}}
          />
        ))}
      </>
    </StoryWithCode>
  )
}

export const Multiple: Story = () => {
  const [toasts, setToasts] = useState([
    { id: "1", message: "First notification", type: "success" as const },
    { id: "2", message: "Second notification", type: "error" as const },
    { id: "3", message: "Third notification", type: "info" as const },
  ])

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <StoryWithCode
      title="Toast - Multiple (Auto-dismiss)"
      description="Multiple toasts managed by ToastContainer with auto-dismiss. Toasts will disappear after 5 seconds."
      props={toastProps}
    >
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </StoryWithCode>
  )
}

export const Interactive: Story = () => {
  const [toasts, setToasts] = useState<
    Array<{ id: string; message: string; type: "success" | "error" | "info" }>
  >([])

  const addToast = (type: "success" | "error" | "info") => {
    const id = Date.now().toString()
    const messages = {
      success: "Blueprint validated successfully!",
      error: "Validation failed. Check your configuration.",
      info: "Processing your request...",
    }
    setToasts((prev) => [...prev, { id, message: messages[type], type }])
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <StoryWithCode
      title="Toast - Interactive Demo"
      description="Click buttons to trigger toasts dynamically. Demonstrates ToastContainer with add/remove functionality."
      props={toastProps}
    >
      <div className="p-4 space-y-4">
        <div className="flex gap-4">
          <button
            onClick={() => addToast("success")}
            className="bg-green-600 px-4 py-2 text-white text-sm font-semibold cursor-pointer"
          >
            Show Success
          </button>
          <button
            onClick={() => addToast("error")}
            className="bg-red-600 px-4 py-2 text-white text-sm font-semibold cursor-pointer"
          >
            Show Error
          </button>
          <button
            onClick={() => addToast("info")}
            className="bg-blue-600 px-4 py-2 text-white text-sm font-semibold cursor-pointer"
          >
            Show Info
          </button>
        </div>
        <ToastContainer toasts={toasts} removeToast={removeToast} />
      </div>
    </StoryWithCode>
  )
}
