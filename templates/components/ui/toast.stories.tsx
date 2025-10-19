import type { Story } from "@ladle/react"
import { Toast, ToastContainer } from "./toast"
import { useState } from "react"

export const Success: Story = () => (
  <Toast message="Operation completed successfully!" type="success" onClose={() => {}} />
)

export const Error: Story = () => (
  <Toast message="An error occurred. Please try again." type="error" onClose={() => {}} />
)

export const Info: Story = () => (
  <Toast message="Your changes have been saved." type="info" onClose={() => {}} />
)

export const Multiple: Story = () => {
  const [toasts, setToasts] = useState([
    { id: "1", message: "First notification", type: "success" as const },
    { id: "2", message: "Second notification", type: "error" as const },
    { id: "3", message: "Third notification", type: "info" as const },
  ])

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return <ToastContainer toasts={toasts} removeToast={removeToast} />
}

export const Interactive: Story = () => {
  const [toasts, setToasts] = useState<Array<{ id: string; message: string; type: "success" | "error" | "info" }>>([])

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
    <div className="p-4 space-y-4">
      <div className="flex gap-4">
        <button
          onClick={() => addToast("success")}
          className="bg-green-600 px-4 py-2 text-white text-sm font-semibold"
        >
          Show Success
        </button>
        <button
          onClick={() => addToast("error")}
          className="bg-red-600 px-4 py-2 text-white text-sm font-semibold"
        >
          Show Error
        </button>
        <button
          onClick={() => addToast("info")}
          className="bg-blue-600 px-4 py-2 text-white text-sm font-semibold"
        >
          Show Info
        </button>
      </div>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  )
}

