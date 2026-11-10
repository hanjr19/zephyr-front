import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      '/api':{
        target: 'http://localhost:8083', //스프링부트 서버포트임
        changeOrigin : true,
      }
    }
  }
})
