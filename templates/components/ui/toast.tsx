"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { CheckCircle, XCircle, Info, X } from "lucide-react"

export type ToastType = "success" | "error" | "info"

export interface ToastProps {
  message: string
  type: ToastType
  duration?: number
  onClose: () => void
}

const typeStyles = {
  success: "border-green-600 bg-green-950 text-green-100",
  error: "border-red-600 bg-red-950 text-red-100",
  info: "border-blue-600 bg-blue-950 text-blue-100",
}

const icons = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
}

export function Toast({ message, type, duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = React.useState(true)
  const Icon = icons[type]

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div
      className={cn(
        "fixed top-4 right-4 z-50 flex items-center gap-3 border-2 px-4 py-3 shadow-2xl transition-all duration-300",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full",
        typeStyles[type]
      )}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={() => {
          setIsVisible(false)
          setTimeout(onClose, 300)
        }}
        className="ml-2 hover:opacity-70 transition-opacity"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}

export interface ToastContainerProps {
  toasts: Array<{
    id: string
    message: string
    type: ToastType
  }>
  removeToast: (id: string) => void
}

export function ToastContainer({ toasts, removeToast }: ToastContainerProps) {
  return (
    <>
      {toasts.map((toast, index) => (
        <div key={toast.id} style={{ top: `${1 + index * 5}rem` }}>
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        </div>
      ))}
    </>
  )
}

