import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Configuração modular de compilação
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
})