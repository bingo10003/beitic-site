// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // <-- 這一行是關鍵！
  plugins: [react()],
})
