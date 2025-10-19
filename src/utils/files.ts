import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const getTemplateDir = () => {
  return path.join(__dirname, '..', 'templates')
}

export const getComponentsDir = () => {
  return path.join(__dirname, '..', '..', 'templates', 'components')
}

export async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

export async function copyTemplate(
  templateName: string,
  targetPath: string
): Promise<void> {
  const templateDir = getTemplateDir()
  const templatePath = path.join(templateDir, templateName)
  
  if (!(await fileExists(templatePath))) {
    throw new Error(`Template ${templateName} not found`)
  }
  
  await fs.copy(templatePath, targetPath)
}

export async function readTemplate(templateName: string): Promise<string> {
  const templateDir = getTemplateDir()
  const templatePath = path.join(templateDir, templateName)
  
  if (!(await fileExists(templatePath))) {
    throw new Error(`Template ${templateName} not found`)
  }
  
  return fs.readFile(templatePath, 'utf-8')
}

