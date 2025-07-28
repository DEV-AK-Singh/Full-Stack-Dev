import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow all IPs
    port: 5173,      // Explicitly set port
    watch: {
      usePolling: true, // Required for Docker/WSL filesystem
      interval: 1000   // Polling interval (ms)
    }
  }
})
