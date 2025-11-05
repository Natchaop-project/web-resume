import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()],
    base: '/Natchanop-project/web-resume',
    build: {
    chunkSizeWarningLimit: 1000, // ปรับ limit ให้สูงขึ้น
  },
})
