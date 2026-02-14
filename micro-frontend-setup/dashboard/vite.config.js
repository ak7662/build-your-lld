import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    federation({
      name: "dashboard",
      filename: "remoteEntry.js",

      exposes: {
        "./DashboardApp": "./src/DashboardApp.jsx",
      },

      shared: ["react", "react-dom"],
    }),
    react(),
  ],
  server: {
    port: 5001,
    cors: true,
  },
});

