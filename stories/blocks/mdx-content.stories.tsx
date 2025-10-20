import type { Story } from "@ladle/react"
import { MDXContent } from "../../src/components/blocks/mdx-content"
import { createStoryWithCode } from "../../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

export const Default: Story = () => {
  return (
    <StoryWithCode
      title="MDX Content"
      description="A styled container for MDX and rich text content with Render design system typography."
      props={[
        {
          name: "children",
          type: "React.ReactNode",
          description: "MDX or HTML content to render",
        },
        {
          name: "className",
          type: "string",
          description: "Additional CSS classes",
        },
      ]}
    >
      <MDXContent>
        <h1>Welcome to Render DDS</h1>
        <p>
          This is a <strong>MDX Content</strong> component that styles rich text content with the
          Render design system.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Styled headings with proper hierarchy</li>
          <li>Beautiful links with hover effects</li>
          <li>
            Code formatting with inline <code>code blocks</code>
          </li>
          <li>Ordered and unordered lists</li>
        </ul>
        <h3>Code Example</h3>
        <pre>
          <code>{`function hello() {
  console.log("Hello, Render!")
}`}</code>
        </pre>
        <blockquote>
          <p>This is a blockquote with a nice purple accent border.</p>
        </blockquote>
      </MDXContent>
    </StoryWithCode>
  )
}

export const SimpleContent: Story = () => {
  return (
    <StoryWithCode
      title="Simple Content"
      description="Basic usage with plain HTML content."
      props={[
        {
          name: "children",
          type: "React.ReactNode",
          description: "MDX or HTML content to render",
        },
        {
          name: "className",
          type: "string",
          description: "Additional CSS classes",
        },
      ]}
    >
      <MDXContent>
        <h2>Getting Started</h2>
        <p>
          The MDX Content component works great with plain HTML or with MDX. Just wrap your content
          and it will be styled automatically.
        </p>
        <p>
          Check out the{" "}
          <a href="https://render.com/docs" target="_blank" rel="noopener noreferrer">
            Render documentation
          </a>{" "}
          for more information.
        </p>
      </MDXContent>
    </StoryWithCode>
  )
}

export const WithCustomStyling: Story = () => {
  return (
    <StoryWithCode
      title="Custom Styling"
      description="Add custom Tailwind prose classes to adjust sizing and layout."
      props={[
        {
          name: "children",
          type: "React.ReactNode",
          description: "MDX or HTML content to render",
        },
        {
          name: "className",
          type: "string",
          description: "Additional CSS classes (e.g., prose-lg, max-w-2xl)",
        },
      ]}
    >
      <MDXContent className="prose-lg max-w-2xl">
        <h2>Custom Styling</h2>
        <p>
          You can customize the MDX Content component by adding additional Tailwind prose classes.
        </p>
        <p>This example uses larger text with a max-width constraint.</p>
      </MDXContent>
    </StoryWithCode>
  )
}
