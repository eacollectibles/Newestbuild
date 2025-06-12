import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ FIX: ensures Vite uses relative paths
  plugins: [react()]
})
