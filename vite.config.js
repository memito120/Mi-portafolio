import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://memito120.github.io/Mi-portafolio/',
  plugins: [react()],
})
