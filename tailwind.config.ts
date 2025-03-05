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
        boxShadow: {
          "purple-glow":
            "0 4px 15px rgba(120, 57, 238, 0.4), 0 2px 8px rgba(120, 57, 238, 0.2)",
        },
      },
      fontSize: {
        "medium-12": ["12px", { fontWeight: 500, lineHeight: "16px" }],
        "normal-13": ["13px", { fontWeight: 400, lineHeight: "19.5px" }],
        "normal-14": ["14px", { fontWeight: 400, lineHeight: "20px" }],
        "medium-14": ["14px", { fontWeight: 500, lineHeight: "20px" }],
        "medium-16": [
          "clamp(14px,1vw,16px)",
          {
            fontWeight: 500,
            lineHeight: "24px",
          },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
