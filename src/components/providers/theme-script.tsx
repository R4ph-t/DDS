/**
 * ThemeScript - Prevents flash of unstyled content (FOUC) when using dark mode
 * 
 * @deprecated This component is no longer necessary. ThemeProvider now automatically includes
 * the FOUC prevention script. Just use ThemeProvider directly.
 * 
 * This component is kept for backward compatibility but will be removed in a future version.
 * 
 * @example
 * ```tsx
 * // OLD WAY (deprecated):
 * import { ThemeScript, ThemeProvider } from "render-dds"
 * <html><head><ThemeScript /></head><body><ThemeProvider>...</ThemeProvider></body></html>
 * 
 * // NEW WAY (recommended):
 * import { ThemeProvider } from "render-dds"
 * <html><body><ThemeProvider>...</ThemeProvider></body></html>
 * ```
 */
export function ThemeScript({ storageKey = "theme" }: { storageKey?: string }) {
  const themeScript = `(function(){try{const theme=localStorage.getItem('${storageKey}');const systemTheme=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';const appliedTheme=theme||systemTheme;if(appliedTheme==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: themeScript,
      }}
    />
  )
}
