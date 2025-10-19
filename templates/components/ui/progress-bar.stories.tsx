import type { Story } from "@ladle/react"
import { ProgressBar } from "./progress-bar"

export const Default: Story = () => (
  <div className="p-4 space-y-4">
    <ProgressBar value={45} />
  </div>
)

export const WithLabel: Story = () => (
  <div className="p-4 space-y-4">
    <ProgressBar value={65} label="Loading..." showPercentage />
  </div>
)

export const Colors: Story = () => (
  <div className="p-4 space-y-4">
    <ProgressBar value={30} label="Primary" color="primary" showPercentage />
    <ProgressBar value={75} label="Success" color="success" showPercentage />
    <ProgressBar value={50} label="Warning" color="warning" showPercentage />
    <ProgressBar value={20} label="Error" color="error" showPercentage />
  </div>
)

export const Sizes: Story = () => (
  <div className="p-4 space-y-4">
    <ProgressBar value={60} label="Small" size="sm" showPercentage />
    <ProgressBar value={60} label="Medium" size="md" showPercentage />
    <ProgressBar value={60} label="Large" size="lg" showPercentage />
  </div>
)

export const Processing: Story = () => (
  <div className="p-4 space-y-4">
    <ProgressBar value={15} label="Embedding..." showPercentage />
    <ProgressBar value={45} label="Generating..." showPercentage />
    <ProgressBar value={85} label="Validating..." showPercentage color="success" />
  </div>
)

