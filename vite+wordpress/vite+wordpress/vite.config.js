import { defineConfig } from "vite";
import { resolve } from "path";
import devManifest from "vite-plugin-dev-manifest";
import sassGlobImports from "vite-plugin-sass-glob-import";

const root = "src";
import liveReload from "vite-plugin-live-reload";
const themePath = "http://localhost:8080/wp-content/themes/BALANCe";
const outDir = "../wp/wp-content/themes/BALANCe/";
const assets = "/assets/";

export default defineConfig(() => {
  return {
    base: "./",
    root,
    plugins: [
      devManifest.default(),
      liveReload(__dirname + "/**/*.php"),
      sassGlobImports(),
    ],
    build: {
      emptyOutDir: false,
      outDir,
      manifest: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, root, "js/main.js"),
          css: resolve(__dirname, root, "css/style.scss"),
        },
        output: {
          entryFileNames: `assets/js/[name].js`,
          chunkFileNames: `assets/js/[name].js`,
          assetFileNames: `assets/[ext]/[name].[ext]`,
        },
      },
    },
    server: {
      hmr: {
        protocol: "ws",
        host: "localhost",
      },
    },
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          additionalData: `$base-dir: '` + themePath + assets + `';`,
        },
      },
    },
  };
});
