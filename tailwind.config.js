/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx}",
    "./stories/**/*.{ts,tsx}",
    "./templates/components/**/*.{ts,tsx}",
    "./.ladle/**/*.{ts,tsx}",
  ],
  theme: {},
  plugins: [require("@tailwindcss/typography")],
}
