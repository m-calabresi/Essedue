import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

const { PUBLIC_BASE_PATH, PUBLIC_SITE } = loadEnv(import.meta.env.MODE, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: "it",
        locales: ["it"],
    },
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        react(),
    ],
    site: PUBLIC_SITE,
    base: PUBLIC_BASE_PATH,
});
