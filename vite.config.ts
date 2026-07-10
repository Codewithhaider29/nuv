import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: {
        entry: "server",
        preset: "vercel",
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
    tsconfigPaths({
      projects: ["./tsconfig.json"],
    }),
    viteReact(),
  ],
});
