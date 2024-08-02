import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#26554fff",
        "primary-blur": "#26554f33",
      },
      backgroundImage: {
        "nav-bg": "url('/navbar-background.jpg')",
        wallpaper1: "url('/proper.jpg')",
        snow: 'url("/snow.jpg")',
        restaurant: "url('/prism.jpg')",
        reservation: "url('/reservation_wallpaper.jpg')",
        wallpaper2: "url('/proper.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        blinkingBg: {
          "50%, 100%": { borderColor: "#26554fff" },
          "84%": { borderColor: "#70369d" },
          "72%": { borderColor: "#4b369d" },
          "60%": { borderColor: "#487de7" },
          "48%": { borderColor: "#79c314" },
          "36%": { borderColor: "#faeb36" },
          "24%": { borderColor: "#ffa500" },
          "12%": { borderColor: "#e81416" },
        },
      },
      animation: {
        blinkingBg: "blinkingBg 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

export default config
