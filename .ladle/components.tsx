import type { GlobalProvider } from '@ladle/react'
import { useEffect } from 'react'
import { ThemeProvider } from '../src/components/providers/theme-provider'
import './styles.css'

export const Provider: GlobalProvider = ({ children, globalState }) => {
  useEffect(() => {
    // Apply dark class to document.documentElement for proper dark mode support
    if (globalState.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [globalState.theme])

  return (
    <ThemeProvider defaultTheme={globalState.theme === 'dark' ? 'dark' : 'light'}>
      <div className="min-h-screen bg-background text-foreground p-8">
        {children}
      </div>
    </ThemeProvider>
  )
}

