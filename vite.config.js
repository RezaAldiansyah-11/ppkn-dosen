import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isVercel = process.env.VERCEL === "true";
export default defineConfig({
  plugins: [react()],
  base: isVercel ? "/" : "/ppkn-dosen/",
});
