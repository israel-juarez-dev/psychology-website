import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  optimizeDeps: {
    include: ["framer-motion"],},esbuild: {
      loader: 'tsx', // Force TSX processing
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add all extensions
    }
})
