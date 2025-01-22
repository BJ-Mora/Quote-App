import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Quote-App/',  // Make sure this matches your GitHub Pages path
  build: {
    outDir: 'dist',  // Ensure it's writing to 'dist'
    assetsDir: 'assets',  // Assets will go into 'dist/assets'
  },
});