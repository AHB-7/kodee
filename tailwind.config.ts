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
                    primary: "#2AE61A",
                    secondary: "#E6881A",
                    error: "#E61A1A",
                    light: "#EDE0D2",
                    dark: "#2C2D2B",
                },
            },
        },
    },
    plugins: [],
};
export default config;
