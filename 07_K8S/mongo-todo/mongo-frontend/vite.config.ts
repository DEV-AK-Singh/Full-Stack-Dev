import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const APP_PORT = env.VITE_APP_PORT || 5173;
  const API_HOST = env.VITE_API_HOST || 'localhost';
  const API_PORT = env.VITE_API_PORT || 3000;
  return {
    plugins: [react()],
    define: {
      'process.env': env,
    },
    server: {
      host: '0.0.0.0',
      port: Number(APP_PORT),
      watch: {
        usePolling: true,
        interval: 1000,
      },
      proxy: {
        '/api': { 
          target: `http://${API_HOST}:${API_PORT}`, 
          changeOrigin: true, 
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      }
    }
  }
}); 
