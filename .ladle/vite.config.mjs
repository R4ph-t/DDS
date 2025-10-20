import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/components': path.resolve(process.cwd(), './templates/components'),
      '@/lib': path.resolve(process.cwd(), './lib'),
      '@': path.resolve(process.cwd(), './'),
    },
  },
  css: {
    postcss: './postcss.config.mjs',
  },
})

