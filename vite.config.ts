import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => ({
  base: "/cryptoflow/",
  server: {
    host: "::",
    port: 8080,
    open: true,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "icons/*.{png,svg}"], // Définissez les actifs à mettre en cache
      manifest: {
        name: "IGF SARL",
        short_name: "IGF",
        description: "Application Web Progressive pour IGF SARL",
        theme_color: "#000000",
        icons: [
          {
            src: "/images/mini192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/images/mini512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "index.js",
        chunkFileNames: "chunk-[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "index.css";
          }
          return "asset-[name][extname]";
        },
      },
    },
  },
}));
