import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: true,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [{
            name: "react-runtime",
            test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/,
          }],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
