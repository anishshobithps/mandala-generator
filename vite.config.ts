import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        proxy: {
            "/stats/script.js": {
                target: "https://cloud.umami.is",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/stats/, ""),
            },
            "/api/send": {
                target: "https://cloud.umami.is",
                changeOrigin: true,
            },
        },
    },
})
