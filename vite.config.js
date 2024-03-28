import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/portfolio.nontachai/',
  plugins: [vue()],
  server:{
    port: 4200
  }
})
