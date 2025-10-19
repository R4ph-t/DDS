import * as p from '@clack/prompts'
import { execa } from 'execa'
import fs from 'fs-extra'
import path from 'path'
import { logger } from '../utils/logger.js'
import { detectPackageManager, installDependencies } from '../utils/package-manager.js'
import { fileExists, getTemplateDir } from '../utils/files.js'
import ora from 'ora'

interface InitOptions {
  yes?: boolean
}

export async function init(options: InitOptions) {
  console.log('')
  p.intro('🎨 Welcome to DDS (Demo Design System)')

  // Check if we're in a valid project
  if (!(await fileExists('package.json'))) {
    p.cancel('No package.json found. Please run this in a Node.js project.')
    process.exit(1)
  }

  const packageManager = await detectPackageManager()
  logger.info(`Detected package manager: ${packageManager}`)

  let withLadle = true
  
  if (!options.yes) {
    const config = await p.group({
      withLadle: () =>
        p.confirm({
          message: 'Set up Ladle for component preview?',
          initialValue: true,
        }),
    })

    if (p.isCancel(config)) {
      p.cancel('Operation cancelled.')
      process.exit(0)
    }

    withLadle = config.withLadle as boolean
  }

  const spinner = ora('Setting up DDS...').start()

  try {
    // 1. Install core dependencies
    spinner.text = 'Installing core dependencies...'
    await installDependencies(
      packageManager,
      [
        'tailwindcss',
        'tailwindcss-animate',
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
        'lucide-react',
        'shiki',
      ],
      true
    )

    // 2. Install shadcn dependencies
    spinner.text = 'Installing shadcn dependencies...'
    await installDependencies(
      packageManager,
      [
        '@radix-ui/react-slot',
        '@radix-ui/react-icons',
      ],
      false
    )

    // 2b. Install CodeMirror dependencies
    spinner.text = 'Installing CodeMirror...'
    await installDependencies(
      packageManager,
      [
        '@uiw/react-codemirror',
        '@codemirror/lang-yaml',
        '@codemirror/lang-javascript',
        '@codemirror/lang-json',
        '@codemirror/lang-python',
      ],
      false
    )

    // 3. Copy Tailwind config
    spinner.text = 'Creating Tailwind configuration...'
    const templateDir = getTemplateDir()
    await fs.copy(
      path.join(templateDir, 'tailwind.config.ts'),
      path.join(process.cwd(), 'tailwind.config.ts')
    )

    // 4. Create/update components.json
    spinner.text = 'Creating components.json...'
    await fs.copy(
      path.join(templateDir, 'components.json'),
      path.join(process.cwd(), 'components.json')
    )

    // 5. Ensure directories exist
    await fs.ensureDir(path.join(process.cwd(), 'lib'))
    await fs.ensureDir(path.join(process.cwd(), 'components', 'ui'))
    await fs.ensureDir(path.join(process.cwd(), 'components', 'blocks'))

    // 6. Copy utils
    spinner.text = 'Setting up utilities...'
    await fs.copy(
      path.join(templateDir, 'lib-utils.ts'),
      path.join(process.cwd(), 'lib', 'utils.ts')
    )

    // 7. Handle globals.css
    spinner.text = 'Setting up styles...'
    const possibleCssPaths = [
      'app/globals.css',
      'src/app/globals.css',
      'styles/globals.css',
      'src/styles/globals.css',
    ]

    let cssPath = 'app/globals.css'
    for (const p of possibleCssPaths) {
      if (await fileExists(p)) {
        cssPath = p
        break
      }
    }

    // Copy our globals.css
    await fs.ensureDir(path.dirname(cssPath))
    await fs.copy(
      path.join(templateDir, 'globals.css'),
      path.join(process.cwd(), cssPath)
    )

    // 8. Set up Ladle if requested
    if (withLadle) {
      spinner.text = 'Setting up Ladle...'
      
      await installDependencies(
        packageManager,
        ['@ladle/react', '@vitejs/plugin-react', 'vite'],
        true
      )

      // Copy Ladle config
      await fs.ensureDir(path.join(process.cwd(), '.ladle'))
      await fs.copy(
        path.join(templateDir, '.ladle'),
        path.join(process.cwd(), '.ladle')
      )

      // Update package.json with Ladle script
      const pkgPath = path.join(process.cwd(), 'package.json')
      const pkg = await fs.readJson(pkgPath)
      pkg.scripts = pkg.scripts || {}
      pkg.scripts.ladle = 'ladle serve'
      pkg.scripts['ladle:build'] = 'ladle build'
      await fs.writeJson(pkgPath, pkg, { spaces: 2 })

      logger.info('Ladle configured! Run `npm run ladle` to start the component preview')
    }

    spinner.succeed('DDS initialized successfully!')

    p.outro('✨ Setup complete!')
    logger.break()
    logger.info('Next steps:')
    logger.info('  1. Add shadcn components: npx shadcn@latest add button')
    logger.info('  2. Add DDS components: npx dds add hero-gradient')
    if (withLadle) {
      logger.info(`  3. Preview components: ${packageManager} run ladle`)
    }
    logger.break()
  } catch (error) {
    spinner.fail('Failed to initialize DDS')
    if (error instanceof Error) {
      logger.error(error.message)
    }
    process.exit(1)
  }
}

