import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    nitro({ preset: "vercel" }),
    tanstackStart({
      server: {
        entry: "server",
      },
      assetsDir: "static",
      build: {
        staticNodeEnv: false,
        inlineCss: {
          enabled: true,
          transformAssets: true,
        },
      },
    }),
    tailwindcss(),
    viteReact(),
  ],
});
