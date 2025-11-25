import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const distPath = join(__dirname, '..', 'dist', 'index.js')

try {
  const content = readFileSync(distPath, 'utf-8')
  
  // Only add "use client" if it's not already there
  if (!content.startsWith('"use client"')) {
    const newContent = '"use client";\n' + content
    writeFileSync(distPath, newContent, 'utf-8')
    console.log('✅ Added "use client" directive to dist/index.js')
  } else {
    console.log('✓ "use client" directive already present in dist/index.js')
  }
} catch (error) {
  console.error('❌ Failed to add "use client" directive:', error)
  process.exit(1)
}













