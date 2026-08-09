import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works both on GitHub Pages (project subpath)
// and on generic static hosts (Vercel, Netlify, ...).
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
})
