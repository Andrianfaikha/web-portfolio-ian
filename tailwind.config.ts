import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        syne: ["var(--font-syne)", "sans-serif"],
      },
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        secondaryForeground: "#9ca3af",
      },
    },
  },
  plugins: [],
};
export default config;
