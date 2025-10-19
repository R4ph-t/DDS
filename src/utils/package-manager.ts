import { execa } from 'execa'
import { fileExists } from './files.js'

export type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun'

export async function detectPackageManager(): Promise<PackageManager> {
  if (await fileExists('bun.lockb')) return 'bun'
  if (await fileExists('pnpm-lock.yaml')) return 'pnpm'
  if (await fileExists('yarn.lock')) return 'yarn'
  return 'npm'
}

export async function installDependencies(
  packageManager: PackageManager,
  dependencies: string[],
  dev = false
): Promise<void> {
  const devFlag = dev ? '-D' : ''
  
  switch (packageManager) {
    case 'npm':
      await execa('npm', ['install', devFlag, ...dependencies].filter(Boolean))
      break
    case 'pnpm':
      await execa('pnpm', ['add', devFlag, ...dependencies].filter(Boolean))
      break
    case 'yarn':
      await execa('yarn', ['add', devFlag, ...dependencies].filter(Boolean))
      break
    case 'bun':
      await execa('bun', ['add', devFlag, ...dependencies].filter(Boolean))
      break
  }
}

export function getPackageManagerCommand(
  packageManager: PackageManager
): string {
  return packageManager
}

