import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import tailwindcss from "@tailwindcss/vite";

const { PUBLIC_BASE_PATH, PUBLIC_SITE } = loadEnv(import.meta.env.MODE, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: "it",
        locales: ["it"],
    },

    integrations: [
        react(),
        sitemap({
            i18n: {
                defaultLocale: "it",
                locales: {
                    it: "it",
                },
            },
        }),
        robotsTxt(),
    ],

    site: PUBLIC_SITE,
    base: PUBLIC_BASE_PATH,

    vite: {
        plugins: [tailwindcss()],
    },
});
