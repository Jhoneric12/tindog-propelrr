import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react(), tailwindcss()],
    server: {
      host: true,
      proxy: {
        "/apiAdmin": {
          target: env.VITE_ADMIN_BASE_URL,
          changeOrigin: false,
          secure: false,
          rewrite: (path) => path.replace(/^\/apiAdmin/, ""),
        },
      },
    },
  };
});
