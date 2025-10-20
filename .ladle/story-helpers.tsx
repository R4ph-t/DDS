import * as React from "react"
import { CodeBlock } from "../templates/components/ui/code-block"

interface PropDefinition {
  name: string
  type: string
  description?: string
  defaultValue?: string
  required?: boolean
}

interface StoryWithCodeProps {
  code?: string
  imports?: string | boolean // Can be string for custom, or true for auto-detect
  importPath?: string // e.g., "@/components/ui/button" - used to auto-generate imports
  language?: string
  title?: string
  description?: string
  props?: PropDefinition[]
  children: React.ReactNode
}

/**
 * Extracts component names from React elements to generate imports
 */
function extractComponentNames(element: any, names = new Set<string>()): Set<string> {
  if (!React.isValidElement(element)) {
    return names
  }

  const { type, props } = element
  const typeName = typeof type === "string" ? type : type?.displayName || type?.name

  // Add component name if it's a custom component (starts with uppercase)
  if (typeName && /^[A-Z]/.test(typeName)) {
    names.add(typeName)
  }

  // Recursively check children and props
  if (props) {
    const { children, ...otherProps } = props
    
    // Check children
    if (children) {
      React.Children.forEach(children, (child) => {
        extractComponentNames(child, names)
      })
    }

    // Check props for React elements (like iconLeft, iconRight, etc)
    Object.values(otherProps).forEach((value) => {
      if (React.isValidElement(value)) {
        extractComponentNames(value, names)
      }
    })
  }

  return names
}

/**
 * Converts React element to JSX string for display
 */
function elementToJSX(element: any, indent = 0): string {
  const spaces = "  ".repeat(indent)

  if (typeof element === "string" || typeof element === "number") {
    return element.toString()
  }

  if (!React.isValidElement(element)) {
    return ""
  }

  const { type, props } = element
  const typeName = typeof type === "string" ? type : type?.displayName || type?.name || "Component"

  // Handle children
  const { children, ...otherProps } = props

  // Build props string
  const propsString = Object.entries(otherProps)
    .map(([key, value]) => {
      if (key === "className") {
        return ` className="${value}"`
      }
      if (typeof value === "string") {
        return ` ${key}="${value}"`
      }
      if (typeof value === "boolean") {
        return value ? ` ${key}` : ""
      }
      if (typeof value === "function") {
        return ` ${key}={...}`
      }
      if (React.isValidElement(value)) {
        return ` ${key}={<${typeof value.type === "string" ? value.type : value.type?.name || "Component"} />}`
      }
      return ` ${key}={${JSON.stringify(value)}}`
    })
    .join("")

  // Handle children
  if (!children) {
    return `${spaces}<${typeName}${propsString} />`
  }

  const childArray = React.Children.toArray(children)

  if (childArray.length === 0) {
    return `${spaces}<${typeName}${propsString} />`
  }

  // Single text child - inline
  if (childArray.length === 1 && typeof childArray[0] === "string") {
    return `${spaces}<${typeName}${propsString}>${childArray[0]}</${typeName}>`
  }

  // Multiple children - multiline
  const childrenString = childArray
    .map((child) => elementToJSX(child, indent + 1))
    .filter((s) => s)
    .join("\n")

  return `${spaces}<${typeName}${propsString}>\n${childrenString}\n${spaces}</${typeName}>`
}

/**
 * Automatically infers import path from the calling file location
 * Works by inspecting the Error stack trace to find the story file
 */
function inferImportPath(): string | null {
  try {
    const error = new Error()
    const stack = error.stack || ""
    
    // Debug: log the stack to see what it looks like
    console.log("Stack trace for import path inference:", stack)
    
    // Try multiple patterns for different browser/bundler formats
    let match = stack.match(/\/components\/(ui|blocks)\/([^/]+)\.stories\.[jt]sx/)
    
    // Try alternative pattern without leading slash
    if (!match) {
      match = stack.match(/components\/(ui|blocks)\/([^/\s]+)\.stories/)
    }
    
    // Try pattern with @ symbol (webpack style)
    if (!match) {
      match = stack.match(/@\/components\/(ui|blocks)\/([^/\s]+)\.stories/)
    }
    
    if (match) {
      const [, folder, component] = match
      console.log(`Inferred path: @/components/${folder}/${component}`)
      return `@/components/${folder}/${component}`
    }
    
    console.log("Could not infer import path from stack trace")
  } catch (err) {
    console.error("Error inferring import path:", err)
  }
  return null
}

/**
 * Wrapper component for Ladle stories that shows the rendered component
 * alongside its code implementation (code hidden by default)
 */
export const StoryWithCode: React.FC<StoryWithCodeProps> = ({
  code,
  imports,
  importPath,
  language = "tsx",
  title,
  description,
  props,
  children,
}) => {
  const [showCode, setShowCode] = React.useState(false)
  const [showProps, setShowProps] = React.useState(false)

  // Auto-generate code from children if not provided
  const displayCode = React.useMemo(() => {
    if (code) return code.trim()
    
    try {
      const jsxCode = elementToJSX(children)
      
      // Handle imports
      if (typeof imports === "string") {
        // Manual imports provided
        return `${imports.trim()}\n\n${jsxCode}`
      } else if (imports !== false) {
        // Auto-detect component names
        const componentNames = extractComponentNames(children)
        const importsArray = Array.from(componentNames).sort()
        
        if (importsArray.length > 0) {
          // Use provided importPath, or try to infer it, or fallback to comment
          const finalPath = importPath || inferImportPath()
          
          if (finalPath) {
            // Generate full import statement
            const importStatement = `import { ${importsArray.join(", ")} } from "${finalPath}"`
            return `${importStatement}\n\n${jsxCode}`
          } else {
            // Fallback: show components as comment
            const importComment = `// Components: ${importsArray.join(", ")}`
            return `${importComment}\n\n${jsxCode}`
          }
        }
      }
      
      return jsxCode
    } catch (err) {
      return "// Code preview not available"
    }
  }, [code, imports, importPath, children])

  return (
    <div className="space-y-6">
      {/* Title and Description */}
      {(title || description) && (
        <div className="space-y-2">
          {title && <h2 className="text-2xl font-bold text-foreground">{title}</h2>}
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}

      {/* Component Preview */}
      <div className="space-y-4">
        <div className="p-4 border border-border bg-background">{children}</div>
        
        {/* Toggle Buttons */}
        <div className="flex items-center gap-4">
          {props && props.length > 0 && (
            <button
              onClick={() => setShowProps(!showProps)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer underline"
            >
              {showProps ? "Hide" : "Show"} Props
            </button>
          )}
          <button
            onClick={() => setShowCode(!showCode)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer underline"
          >
            {showCode ? "Hide" : "Show"} Code
          </button>
        </div>

        {/* Props Table */}
        {props && props.length > 0 && showProps && (
          <div className="border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-foreground">Prop</th>
                  <th className="text-left px-4 py-2 font-semibold text-foreground">Type</th>
                  <th className="text-left px-4 py-2 font-semibold text-foreground">Default</th>
                  <th className="text-left px-4 py-2 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                {props.map((prop, idx) => (
                  <tr key={prop.name} className={idx % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-4 py-2 font-mono text-foreground">
                      {prop.name}
                      {prop.required && <span className="text-red-500 ml-1">*</span>}
                    </td>
                    <td className="px-4 py-2 font-mono text-sm text-muted-foreground">{prop.type}</td>
                    <td className="px-4 py-2 font-mono text-sm text-muted-foreground">
                      {prop.defaultValue || "-"}
                    </td>
                    <td className="px-4 py-2 text-muted-foreground">{prop.description || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Code Block */}
        {showCode && <CodeBlock code={displayCode} language={language} />}
      </div>
    </div>
  )
}

interface ComponentPreviewProps {
  children: React.ReactNode
  className?: string
}

/**
 * Simple preview container for components without code
 */
export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`p-6 border border-border bg-background ${className}`}>
      {children}
    </div>
  )
}

/**
 * Derives import path from the story file's URL
 * Example: /components/ui/button.stories.tsx -> @/components/ui/button
 */
function deriveImportPath(fileUrl: string): string | null {
  try {
    // Match pattern: .../components/(ui|blocks)/name.stories.(tsx|jsx)
    const match = fileUrl.match(/components\/(ui|blocks)\/([^/]+)\.stories\.[jt]sx/)
    if (match) {
      const [, folder, component] = match
      return `@/components/${folder}/${component}`
    }
  } catch (err) {
    console.error("Error deriving import path:", err)
  }
  return null
}

/**
 * Creates a StoryWithCode component with auto-detected import path
 * Use this at the top of your story file - it auto-detects the path!
 * 
 * Example:
 * const StoryWithCode = createStoryWithCode(import.meta.url)
 * 
 * export const Primary = () => <StoryWithCode><Button>Click</Button></StoryWithCode>
 */
export function createStoryWithCode(fileUrl: string) {
  const importPath = deriveImportPath(fileUrl)
  return (props: Omit<StoryWithCodeProps, "importPath"> & { importPath?: string }) => (
    <StoryWithCode importPath={props.importPath || importPath || undefined} {...props} />
  )
}

