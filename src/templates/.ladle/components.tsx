import type { GlobalProvider } from '@ladle/react'
import '../app/globals.css'

export const Provider: GlobalProvider = ({ children, globalState }) => {
  return (
    <div className={globalState.theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground p-8">
        {children}
      </div>
    </div>
  )
}

