import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/my_portfolio_website/',
  plugins: [react()],
  server: {
    host: true, // Allow connections from all IPs
    port: 5173,
    open: true // Automatically open browser
  }
})
