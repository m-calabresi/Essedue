import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
const { PUBLIC_BASE_PATH, PUBLIC_SITE } = loadEnv(import.meta.env.MODE, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), image({ serviceEntryPoint: "@astrojs/image/sharp" })],
    site: PUBLIC_SITE,
    base: PUBLIC_BASE_PATH,
    experimental: {
        assets: true,
    },
});
