import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts", "src/styles/globals.css"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  treeshake: true,
  splitting: false,
  loader: {
    ".css": "copy",
  },
  outDir: "dist",
})
