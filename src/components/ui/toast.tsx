"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
import { IoCheckmarkCircle, IoCloseCircle, IoInformationCircle, IoClose } from "react-icons/io5"

export type ToastType = "success" | "error" | "info"

export interface ToastProps {
  message: string
  type: ToastType
  duration?: number
  onClose: () => void
  index?: number
}

const typeStyles = {
  success: "!border-teal-500 bg-teal-950/90 text-teal-100",
  error: "!border-red-500 bg-red-950/90 text-red-100",
  info: "!border-blue-500 bg-blue-950/90 text-blue-100",
}

const icons = {
  success: IoCheckmarkCircle,
  error: IoCloseCircle,
  info: IoInformationCircle,
}

export function Toast({ message, type, duration = 3000, onClose, index = 0 }: ToastProps) {
  const [isVisible, setIsVisible] = React.useState(true)
  const Icon = icons[type]
  const topPosition = 1 + index * 4 // 1rem + 4rem spacing per toast

  React.useEffect(() => {
    if (duration === Infinity) return // Don't auto-dismiss if duration is Infinity

    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div
      style={{ top: `${topPosition}rem` }}
      className={cn(
        "fixed right-4 flex justify-between items-center gap-3 z-50 border px-4 py-3 shadow-2xl transition-all duration-300",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full",
        typeStyles[type]
      )}
    >
      <Icon className="w-5 h-5" />

      <p className="text-sm font-medium !mb-0 align-middle flex-1">{message}</p>
      <button
        onClick={() => {
          setIsVisible(false)
          setTimeout(onClose, 300)
        }}
        className="hover:opacity-70 transition-opacity cursor-pointer flex items-center justify-center flex-shrink-0"
      >
        <IoClose className="w-4 h-4" />
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
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          index={index}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </>
  )
}
