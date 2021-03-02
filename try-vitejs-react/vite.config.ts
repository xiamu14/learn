import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import linaria from 'vite-plugin-linaria-css';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    linaria({
      sourceMap: process.env.NODE_ENV !== "production",
    }),
  ],
});
