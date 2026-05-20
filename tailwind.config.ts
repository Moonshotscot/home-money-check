import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hmc: {
          purple: "#4A1682",
          violet: "#6420A5",
          lilac: "#E8D7FF",
          cream: "#FFF5DF",
          gold: "#F5C955",
          green: "#BEEA9F",
          blue: "#BFE6FF",
          blush: "#FFD9D0",
          ink: "#21152D",
          plum: "#32104F",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(34, 15, 54, 0.18)",
        lift: "0 24px 60px rgba(30, 9, 55, 0.28)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
