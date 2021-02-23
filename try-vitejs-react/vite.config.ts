import { defineConfig, Plugin } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import linaria from './rollup-plugin-linaria-css';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    linaria({
      sourceMap: process.env.NODE_ENV !== "production",
    }) as Plugin,
  ],
});
