import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/jomaroru-front/',
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      cache: false,
    },
  },
})
