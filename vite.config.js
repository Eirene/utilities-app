import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/utilities-app/",
  plugins: [vue()],
  server: {
    // host: true,
    // hmr: {
    //   port: 80
    // }
  },
  resolve: {
    alias: {
      "@bg": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
