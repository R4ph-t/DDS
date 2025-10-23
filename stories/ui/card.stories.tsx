import type { Story } from "@ladle/react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../src/components/ui/card"
import { Button } from "../../src/components/ui/button"
import { createStoryWithCode } from "../../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const cardProps = [
  {
    name: "variant",
    type: '"default" | "outlined" | "elevated" | "frosted"',
    defaultValue: "default",
    description: "Visual style variant",
  },
]

export const Default: Story = () => (
  <StoryWithCode
    title="Card - Default"
    description="Basic card component with header, content, and footer. Square corners following DDS principles."
    props={cardProps}
  >
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          This is the main content area of the card. You can put any content here.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  </StoryWithCode>
)

export const AllVariants: Story = () => (
  <StoryWithCode
    title="Card - All Variants"
    description="Overview of all card variants showing different border and shadow styles."
    props={cardProps}
  >
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card variant="default">
          <CardHeader>
            <CardTitle>Default</CardTitle>
            <CardDescription>No border or shadow</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Basic card with background only</p>
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardHeader>
            <CardTitle>Outlined</CardTitle>
            <CardDescription>1px solid border</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Card with 1px border, no shadow</p>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Elevated</CardTitle>
            <CardDescription>Border + shadow</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Card with border and subtle shadow</p>
          </CardContent>
        </Card>
      </div>

      <div 
        className="p-6 relative"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(147, 51, 234, 0.1) 0px, rgba(147, 51, 234, 0.1) 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(90deg, rgba(147, 51, 234, 0.1) 0px, rgba(147, 51, 234, 0.1) 1px, transparent 1px, transparent 20px),
            linear-gradient(135deg, #667eea 0%, #764ba2 100%)
          `
        }}
      >
        <Card variant="frosted" className="max-w-md">
          <CardHeader>
            <CardTitle>Frosted</CardTitle>
            <CardDescription>Glass morphism effect</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Backdrop blur with semi-transparent background</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </StoryWithCode>
)

export const Outlined: Story = () => (
  <StoryWithCode
    title="Card - Outlined"
    description="Card with 1px solid border, perfect for defined sections."
    props={cardProps}
  >
    <Card variant="outlined" className="w-[400px]">
      <CardHeader>
        <CardTitle>Outlined Card</CardTitle>
        <CardDescription>Clean card with visible border</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          This card has a 1px solid border following the DDS design system. Square corners, no
          border-radius for a clean, modern look.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Confirm</Button>
      </CardFooter>
    </Card>
  </StoryWithCode>
)

export const Elevated: Story = () => (
  <StoryWithCode
    title="Card - Elevated"
    description="Card with border and shadow for visual hierarchy."
    props={cardProps}
  >
    <Card variant="elevated" className="w-[400px]">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>Slightly elevated appearance</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          This card appears slightly elevated with a border and subtle shadow. Great for important
          content or interactive elements.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Get Started</Button>
      </CardFooter>
    </Card>
  </StoryWithCode>
)

export const WithoutHeader: Story = () => (
  <StoryWithCode
    title="Card - Without Header"
    description="Simple card with just content."
    props={cardProps}
  >
    <Card variant="outlined" className="w-[350px]">
      <CardContent className="pt-6">
        <p className="text-sm">
          Cards are flexible - you don't need to use all sections. This card has only content, no
          header or footer.
        </p>
      </CardContent>
    </Card>
  </StoryWithCode>
)

export const StatCard: Story = () => (
  <StoryWithCode
    title="Card - Stat Card Example"
    description="Example of a card used for displaying statistics."
    props={cardProps}
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card variant="outlined">
        <CardHeader>
          <CardDescription>Total Users</CardDescription>
          <CardTitle className="text-3xl">12,543</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">+8.2% from last month</p>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardHeader>
          <CardDescription>Revenue</CardDescription>
          <CardTitle className="text-3xl">$45,231</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">+12.5% from last month</p>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardHeader>
          <CardDescription>Conversion Rate</CardDescription>
          <CardTitle className="text-3xl">3.2%</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">-0.5% from last month</p>
        </CardContent>
      </Card>
    </div>
  </StoryWithCode>
)

export const FormCard: Story = () => (
  <StoryWithCode
    title="Card - Form Example"
    description="Example of a card containing a form."
    props={cardProps}
  >
    <Card variant="outlined" className="w-[450px]">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>Enter your details to create an account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-3 py-2 border-2 border-input bg-background"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-3 py-2 border-2 border-input bg-background"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" className="flex-1">
          Cancel
        </Button>
        <Button className="flex-1">Create Account</Button>
      </CardFooter>
    </Card>
  </StoryWithCode>
)
