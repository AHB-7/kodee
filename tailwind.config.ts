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
                xs: "380px",
            },
            colors: {
                brand: {
                    primary: "#49FF46",
                    secondary: "#FFCC29",
                    error: "#E61A1A",
                    light: "#f1f7ee",
                    dark: "#1d1e18",
                },
            },
        },
    },
    plugins: [],
};
export default config;
