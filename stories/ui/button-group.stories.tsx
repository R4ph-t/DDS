import type { Story } from "@ladle/react"
import { ButtonGroup } from "../../src/components/ui/button-group"
import { Button } from "../../src/components/ui/button"
import { createStoryWithCode } from "../../.ladle/story-helpers"
import { IoPlaySharp, IoPauseSharp, IoStopSharp, IoPlaySkipForwardSharp } from "react-icons/io5"

const StoryWithCode = createStoryWithCode(import.meta.url)

export const Default: Story = () => {
  return (
    <StoryWithCode
      title="Button Group"
      description="Group related buttons together with connected borders."
      props={[
        {
          name: "orientation",
          type: '"horizontal" | "vertical"',
          description: "Layout direction of the button group",
        },
        {
          name: "children",
          type: "React.ReactNode",
          description: "Button components to group together",
        },
        {
          name: "className",
          type: "string",
          description: "Additional CSS classes",
        },
      ]}
    >
      <ButtonGroup>
        <Button variant="outline">Left</Button>
        <Button variant="outline">Middle</Button>
        <Button variant="outline">Right</Button>
      </ButtonGroup>
    </StoryWithCode>
  )
}

export const WithIcons: Story = () => {
  return (
    <StoryWithCode title="With Icons" description="Button groups work great with icon buttons.">
      <ButtonGroup>
        <Button variant="outline" size="sm">
          <IoPlaySharp />
        </Button>
        <Button variant="outline" size="sm">
          <IoPauseSharp />
        </Button>
        <Button variant="outline" size="sm">
          <IoStopSharp />
        </Button>
        <Button variant="outline" size="sm">
          <IoPlaySkipForwardSharp />
        </Button>
      </ButtonGroup>
    </StoryWithCode>
  )
}

export const Vertical: Story = () => {
  return (
    <StoryWithCode title="Vertical" description="Stack buttons vertically instead of horizontally.">
      <ButtonGroup orientation="vertical">
        <Button variant="outline">Top</Button>
        <Button variant="outline">Middle</Button>
        <Button variant="outline">Bottom</Button>
      </ButtonGroup>
    </StoryWithCode>
  )
}

export const MixedVariants: Story = () => {
  return (
    <StoryWithCode
      title="Mixed Variants"
      description="Combine different button variants in a group."
    >
      <ButtonGroup>
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Save & Continue</Button>
      </ButtonGroup>
    </StoryWithCode>
  )
}

export const Sizes: Story = () => {
  return (
    <StoryWithCode title="Sizes" description="Button groups work with all button sizes.">
      <div className="space-y-4">
        <ButtonGroup>
          <Button variant="outline" size="sm">
            Small
          </Button>
          <Button variant="outline" size="sm">
            Group
          </Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button variant="outline">Default</Button>
          <Button variant="outline">Group</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button variant="outline" size="lg">
            Large
          </Button>
          <Button variant="outline" size="lg">
            Group
          </Button>
        </ButtonGroup>
      </div>
    </StoryWithCode>
  )
}

export const Toolbar: Story = () => {
  return (
    <StoryWithCode
      title="Toolbar"
      description="Create toolbars by combining multiple button groups."
    >
      <div className="flex gap-2">
        <ButtonGroup>
          <Button variant="outline" size="sm">
            Bold
          </Button>
          <Button variant="outline" size="sm">
            Italic
          </Button>
          <Button variant="outline" size="sm">
            Underline
          </Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button variant="outline" size="sm">
            Left
          </Button>
          <Button variant="outline" size="sm">
            Center
          </Button>
          <Button variant="outline" size="sm">
            Right
          </Button>
        </ButtonGroup>
      </div>
    </StoryWithCode>
  )
}
