import * as p from "@clack/prompts"
import fs from "fs-extra"
import path from "path"
import { logger } from "../utils/logger.js"
import { fileExists, getComponentsDir } from "../utils/files.js"
import ora from "ora"

interface ComponentRegistry {
  components: Component[]
}

interface Component {
  name: string
  type: "ui" | "blocks"
  description: string
  dependencies: string[]
  files: string[]
  stories: string[]
}

async function loadRegistry(): Promise<ComponentRegistry> {
  const registryPath = path.join(getComponentsDir(), "registry.json")
  return fs.readJson(registryPath)
}

export async function add(components: string[]) {
  console.log("")
  p.intro("📦 Add DDS Components")

  // Check if DDS is initialized
  if (!(await fileExists("components.json"))) {
    p.cancel("DDS not initialized. Run `dds init` first.")
    process.exit(1)
  }

  const registry = await loadRegistry()

  // If no components specified, show selection
  let selectedComponents = components
  if (!components || components.length === 0) {
    const choices = registry.components.map((c) => ({
      value: c.name,
      label: c.name,
      hint: c.description,
    }))

    const selection = await p.multiselect({
      message: "Select components to add",
      options: choices,
      required: true,
    })

    if (p.isCancel(selection)) {
      p.cancel("Operation cancelled.")
      process.exit(0)
    }

    selectedComponents = selection as string[]
  }

  const spinner = ora("Adding components...").start()

  try {
    for (const componentName of selectedComponents) {
      const component = registry.components.find((c) => c.name === componentName)

      if (!component) {
        spinner.warn(`Component "${componentName}" not found`)
        continue
      }

      spinner.text = `Adding ${componentName}...`

      // Copy component files
      const componentsDir = getComponentsDir()
      for (const file of component.files) {
        const sourcePath = path.join(componentsDir, file)
        const targetPath = path.join(process.cwd(), "components", file)

        await fs.ensureDir(path.dirname(targetPath))
        await fs.copy(sourcePath, targetPath)
      }

      // Copy story files if they exist
      for (const storyFile of component.stories) {
        const sourcePath = path.join(componentsDir, storyFile)
        if (await fileExists(sourcePath)) {
          const targetPath = path.join(process.cwd(), "components", storyFile)
          await fs.ensureDir(path.dirname(targetPath))
          await fs.copy(sourcePath, targetPath)
        }
      }

      spinner.succeed(`Added ${componentName}`)

      // Show dependency warnings
      if (component.dependencies.length > 0) {
        logger.info(
          `  Dependencies: ${component.dependencies.join(", ")} (install with shadcn if needed)`
        )
      }
    }

    p.outro("✨ Components added successfully!")
  } catch (error) {
    spinner.fail("Failed to add components")
    if (error instanceof Error) {
      logger.error(error.message)
    }
    process.exit(1)
  }
}
