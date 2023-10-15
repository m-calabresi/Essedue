const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const stickingPlugin = plugin(({ addVariant }) => {
    addVariant("sticking", "&.sticking");
    addVariant("group-sticking", ":merge(.group).sticking &");
    addVariant("peer-sticking", ":merge(.peer).sticking ~ &");
});

const backfacePlugin = plugin(({ addUtilities }) =>
    addUtilities({
        ".backface-visible": {
            "backface-visibility": "visible",
            "-moz-backface-visibility": "visible",
            "-webkit-backface-visibility": "visible",
            "-ms-backface-visibility": "visible",
        },
        ".backface-hidden": {
            "backface-visibility": "hidden",
            "-moz-backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden",
            "-ms-backface-visibility": "hidden",
        },
    })
);

const decorationPlugin = plugin(({ addUtilities }) =>
    addUtilities({
        ".decoration-none": {
            "text-decoration": "none",
        },
    })
);

const gridPlugin = plugin(({ addUtilities }) =>
    addUtilities({
        ".grid-template-areas-stack": {
            "grid-template-areas": "'stack'",
        },
        ".grid-area-stack": {
            "grid-area": "stack",
        },
        ".self-grid-end": {
            "-ms-flex-item-align": "end",
            "-ms-grid-row-align": "end",
            "align-self": "end",
        },
    })
);

const zIndexPlugin = plugin(({ addUtilities }) =>
    addUtilities({
        ".-z-1": {
            "z-index": "-1",
        },
    })
);

const backgroundGradientPlugin = plugin(({ addUtilities }) =>
    addUtilities({
        ".bg-gradient-black-semitransparent-left": {
            background: "rgb(0, 0, 0)",
            background:
                "-moz-linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 80%, rgba(0, 0, 0, 0) 100%)",
            background:
                "-webkit-linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 80%, rgba(0, 0, 0, 0) 100%)",
            background:
                "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 80%, rgba(0, 0, 0, 0) 100%)",
        },
        ".bg-gradient-black-semitransparent-top": {
            background: "rgb(0, 0, 0)",
            background: "-moz-linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%)",
            background: "-webkit-linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%)",
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%)",
        },
        ".bg-gradient-black-semitransparent-x": {
            background: "rgb(0, 0, 0)",
            background:
                "-moz-linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.6) 100%)",
            background:
                "-webkit-linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.6) 100%)",
            background:
                "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.6) 100%)",
        },
    })
);

const sectionPlugin = plugin(({ addUtilities }) =>
    addUtilities({
        ".selection ::selection": {
            color: "white",
            "background-color": "black",
        },
        ".selection-inverted ::selection": {
            color: "black",
            "background-color": "white",
        },
    })
);

const sizePlugin = plugin(({ addUtilities }) =>
    addUtilities({
        ".w-full-8": {
            width: "calc(100% + 2rem) /* 100% + 16px */",
        },
        ".w-full-10": {
            width: "calc(100% + 2.5rem) /* 100% + 40px */",
        },
        ".w-full-40": {
            width: "calc(100% + 10rem) /* 100% + 160px */",
        },
        ".h-full-40": {
            height: "calc(100% + 10rem) /* 100% + 160px */",
        },
        ".dw-screen": {
            width: "100vw",
            width: "100dvw",
        },
        ".dh-screen": {
            height: "100vh",
            height: "100dvh",
            height: "100svh",
        },
        ".-box-border-ts-3": {
            "--box-thickness": "-0.75rem /* -12px */",
            "--box-blur": "0",
            "--box-color": "white",
            "box-shadow": "var(--box-thickness) var(--box-thickness) var(--box-blur) var(--box-color)",
        },
    })
);

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
            fontSize: {
                "2xs": ["0.6rem", "0.75rem"],
            },
        },
        screens: {
            xs: "475px",
            ...defaultTheme.screens,
        },
    },
    plugins: [
        stickingPlugin,
        backfacePlugin,
        decorationPlugin,
        gridPlugin,
        zIndexPlugin,
        backgroundGradientPlugin,
        sectionPlugin,
        sizePlugin,
    ],
};
