#!/usr/bin/env node

import { writeFileSync, mkdirSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Get component name from command line
const args = process.argv.slice(2)
const componentName = args[0]
const componentType = args[1] || "ui" // 'ui' or 'blocks'

if (!componentName) {
  console.error("❌ Error: Component name is required")
  console.log("\nUsage:")
  console.log("  npm run create:component <ComponentName> [ui|blocks]")
  console.log("\nExamples:")
  console.log("  npm run create:component Card")
  console.log("  npm run create:component Hero blocks")
  process.exit(1)
}

if (!["ui", "blocks"].includes(componentType)) {
  console.error('❌ Error: Component type must be "ui" or "blocks"')
  process.exit(1)
}

// Convert to kebab-case for file names
const kebabName = componentName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()

const componentDir = join(__dirname, "..", "src", "components", componentType)
const storiesDir = join(__dirname, "..", "stories", componentType)

// Ensure directories exist
mkdirSync(storiesDir, { recursive: true })

// Component template
const componentTemplate = `"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface ${componentName}Props extends React.HTMLAttributes<HTMLDivElement> {
  // Add your props here
}

export const ${componentName} = React.forwardRef<HTMLDivElement, ${componentName}Props>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Add your base styles here
          className
        )}
        {...props}
      />
    )
  }
)

${componentName}.displayName = "${componentName}"
`

// Story template
const storyTemplate = `import type { Story } from "@ladle/react"
import { ${componentName} } from "../../src/components/${componentType}/${kebabName}"
import { createStoryWithCode } from "../../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

export const Default: Story = () => {
  return (
    <StoryWithCode
      title="${componentName}"
      description="Add a description for the ${componentName} component."
      props={[
        {
          name: "className",
          type: "string",
          description: "Additional CSS classes",
        },
      ]}
    >
      <${componentName}>
        ${componentName} content
      </${componentName}>
    </StoryWithCode>
  )
}
`

// Write files
const componentPath = join(componentDir, `${kebabName}.tsx`)
const storyPath = join(storiesDir, `${kebabName}.stories.tsx`)

try {
  writeFileSync(componentPath, componentTemplate)
  console.log(`✅ Created component: src/components/${componentType}/${kebabName}.tsx`)

  writeFileSync(storyPath, storyTemplate)
  console.log(`✅ Created story: stories/${componentType}/${kebabName}.stories.tsx`)

  console.log("\n📝 Next steps:")
  console.log(`   1. Add your component logic to ${kebabName}.tsx`)
  console.log(`   2. Update the story with examples in ${kebabName}.stories.tsx`)
  console.log(`   3. Export the component from src/index.ts`)
  console.log(`   4. Run 'npm run ladle' to preview`)
} catch (error) {
  console.error("❌ Error creating component:", error.message)
  process.exit(1)
}
