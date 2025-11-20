import type { Config } from "tailwindcss"

const preset: Partial<Config> = {
  content: [
    // Automatically include render-dds components
    "./node_modules/render-dds/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Render brand colors
        primary: {
          DEFAULT: "rgb(var(--violet-600))",
          foreground: "rgb(var(--white))",
        },
        secondary: {
          DEFAULT: "rgb(var(--yellow-400))",
          foreground: "rgb(var(--zinc-900))",
        },
        destructive: {
          DEFAULT: "rgb(var(--red-600))",
          foreground: "rgb(var(--white))",
        },
        muted: {
          DEFAULT: "rgb(var(--zinc-100))",
          foreground: "rgb(var(--zinc-600))",
        },
        accent: {
          DEFAULT: "rgb(var(--zinc-100))",
          foreground: "rgb(var(--zinc-900))",
        },
        border: "rgb(var(--zinc-200))",
        input: "rgb(var(--zinc-200))",
        ring: "rgb(var(--violet-600))",
        background: "rgb(var(--white))",
        foreground: "rgb(var(--zinc-900))",
      },
    },
  },
  plugins: [],
}

export default preset











