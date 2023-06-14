const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            keyframes: {
                fade: {
                    "0%": {
                        opacity: 1,
                    },
                    "100%": {
                        opacity: 0,
                    },
                },
            },
            animation: {
                fade: "fade 0.4s ease 0.4s 1 normal forwards running",
            },
            fontFamily: {
                sans: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant("sticking", "&.sticking");
            addVariant("group-sticking", ":merge(.group).sticking &");
            addVariant("peer-sticking", ":merge(.peer).sticking ~ &");
        }),
    ],
};
