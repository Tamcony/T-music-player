import { defineConfig } from "vite"
import UnoCSS from "unocss/vite"
import { presetUno } from "unocss"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS({
      presets: [presetUno()],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://124.221.28.175:3000",
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    port: 5178,
  },
})
