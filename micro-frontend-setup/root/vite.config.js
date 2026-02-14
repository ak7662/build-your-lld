
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    federation({
      name: "root",
      remotes: {
        dashboard: "http://localhost:4173/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
    react(),
  ],
  server: {
    port: 5000,
  },
  build: {
    target: "esnext",
  },
});
