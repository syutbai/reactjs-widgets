import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitjs.dev/config/
export default defineConfig({
  plugins: [react({
      include: '**/*.{jsx}',
      babel: {
        presets: ["babel-preset-vite"],
        plugins: ["@babel/plugin-transform-runtime"],
        //babelrc: true,
        //configFile: true,
      }
  })],
  server: {
    cors: true,
    proxy: {
      "/api": {
        target: "http://localhost",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    }
  }
})
