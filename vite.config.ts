import { defineConfig } from "vite";
// import preloadImagesPlugin from "./vite-plugin-preload-images.ts";
// import { createHtmlPlugin } from "vite-plugin-html";
import react from "@vitejs/plugin-react";
import UnpluginInjectPreload from 'unplugin-inject-preload/vite';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnpluginInjectPreload({
      injectTo: 'head',
      files: [
        {
          entryMatch: /.*\.(png|svg)$/,
          outputMatch: /.*\.(png|svg)$/,
        },
      ],
    }),
  ],
});
