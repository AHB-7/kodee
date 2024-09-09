import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ["Antonio"],
            },
            screens: {
                sm: "600px",
                xs: "350px",
            },
            colors: {
                brand: {
                    primary: "#49FF46",
                    secondary: "#FF6746",
                    error: "#E61A1A",
                    light: "#F2F4F3",
                    dark: "#0A0908",
                },
            },
        },
    },
    plugins: [],
};
export default config;
