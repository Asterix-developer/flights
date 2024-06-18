import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/flights/",
  resolve: {
    //@ts-ignore
    alias: {
      //@ts-ignore
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
  },
})
