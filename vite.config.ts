import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "@mui/material/Box",
        "@mui/material/Grid",
        "@mui/icons-material", // Add if you're using icons
      ],
    },
  },
});
