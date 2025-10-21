/**
 * ThemeScript - Prevents flash of unstyled content (FOUC) when using dark mode
 * 
 * This component MUST be placed in the <head> to run before React hydrates.
 * It applies the correct theme class immediately on page load.
 * 
 * @example
 * ```tsx
 * // app/layout.tsx
 * import { ThemeScript, ThemeProvider } from "render-dds"
 * 
 * export default function RootLayout({ children }) {
 *   return (
 *     <html lang="en" suppressHydrationWarning className="bg-background text-foreground">
 *       <head>
 *         <ThemeScript />
 *       </head>
 *       <body>
 *         <ThemeProvider defaultTheme="light" enableSystem>
 *           {children}
 *         </ThemeProvider>
 *       </body>
 *     </html>
 *   )
 * }
 * ```
 */
export function ThemeScript({ storageKey = "theme" }: { storageKey?: string }) {
  // Minified script that runs before React hydration
  const themeScript = `!function(){try{const e=localStorage.getItem("${storageKey}"),t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",a=e||t;"dark"===a?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}catch(e){}}();`

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: themeScript,
      }}
    />
  )
}

