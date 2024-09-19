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
      colors: {
        "windows-back": "#1a212b",
        "windows-fore": "#2b2b2b",
        primary: {
          100: "#2563eb",
          200: "#1e7ef3",
          300: "#D3E6FE",
          light100: "#0077C2",
          light200: "#1e7ef3",
          light300: "#c8ffff",
        },
        accent: {
          100: "#d946ef",
          200: "#fae8ff",
          light100: "#00BFFF",
          light200: "#00619a",
        },
        text: {
          100: "#FFFFFF",
          200: "#e0e0e0",
          light100: "#333333",
          light200: "#5c5c5c",
        },
        bg: {
          100: "#1e293b",
          200: "#334155",
          300: "#475569",
          light100: "#FFFFFF",
          light200: "#f5f5f5",
          light300: "#cccccc",
        },
      },
    },
  },
  plugins: [],
};
export default config;
