import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          5: "#F7F7F7",
          10: "#09090B0D",
          25: "#A3A3A3",
          50: "#D6D6D6B2",
          75: "#737373",
          100: "#292929",
        },
        violet: {
          5: "#ECE9FE",
          10: "#7839EE",
        },
      },
      safelist: ["border-[#7839EE]"],
    },
  },
  plugins: [],
};

export default config;
