import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import nodePolyfills from "vite-plugin-node-stdlib-browser";

export default defineConfig({
  plugins: [react(), nodePolyfills()],
  optimizeDeps: {
    exclude: ["@ethersproject/hash", "wrtc"],
    include: ["js-sha3", "@ethersproject/bignumber"],
  },
  server: {
    port: 3000,
  },
});
