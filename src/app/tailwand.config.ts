// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ultracom: {
          dark: "#0A1F44",
          primary: "#0055A5",
          light: "#E6F0FA",
        },
        nexgen: {
          blue: "#003366",
          green: "#00A651",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // NexGen uses Inter
      },
    },
  },
  plugins: [],
};

export default config;