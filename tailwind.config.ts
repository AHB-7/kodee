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
                sans: ["Rubik", "system-ui", "Arial", "sans-serif"],
            },
            colors: {
                brand: {
                    primary: "#62DF58",
                    secondary: "#F8AF06",
                    error: "#E61A1A",
                    light: "#EAECF4",
                    dark: "#1A2421",
                },
            },
        },
    },
    plugins: [],
};
export default config;
