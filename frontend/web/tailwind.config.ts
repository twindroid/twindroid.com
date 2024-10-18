import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{tsx,mdx}",
    "./src/components/**/*.{tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "rgba(var(--primary-100))",
          200: "rgba(var(--primary-200))",
          300: "rgba(var(--primary-300))",
        },
        accent: {
          100: "rgba(var(--accent-100))",
          200: "rgba(var(--accent-200))",
        },
        text: {
          100: "rgba(var(--text-100))",
          200: "rgba(var(--text-200))",
        },
        background: {
          100: "rgba(var(--background-100))",
          200: "rgba(var(--background-200))",
          300: "rgba(var(--background-300))",
        },
      },
    },
  },
  plugins: [],
};
export default config;
