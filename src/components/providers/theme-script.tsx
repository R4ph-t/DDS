/**
 * ThemeScript - Prevents flash of unstyled content (FOUC) when using dark mode
 * 
 * This component should be placed in the <head> or at the top of <body> in your root layout.
 * It runs a blocking script before React hydrates to apply the correct theme class immediately.
 * 
 * @example
 * ```tsx
 * // app/layout.tsx
 * import { ThemeScript } from "render-dds"
 * 
 * export default function RootLayout({ children }) {
 *   return (
 *     <html lang="en">
 *       <head>
 *         <ThemeScript />
 *       </head>
 *       <body>{children}</body>
 *     </html>
 *   )
 * }
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

