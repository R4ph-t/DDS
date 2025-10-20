/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./templates/components/**/*.{ts,tsx}", "./.ladle/**/*.{ts,tsx}"],
  theme: {},
  plugins: [require("@tailwindcss/typography")],
}
