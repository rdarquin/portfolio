/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111008",
        paper: "#f5f2ea",
        accent: "#e7ff3c",
        accent2: "#ff4d2e",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Archivo Black"', '"Space Grotesk"', "ui-sans-serif", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        brutal: "7px 7px 0 0 #111008",
        "brutal-sm": "4px 4px 0 0 #111008",
        "brutal-lg": "10px 10px 0 0 #111008",
        "brutal-accent": "7px 7px 0 0 #e7ff3c",
        "brutal-paper": "7px 7px 0 0 #f5f2ea",
      },
      animation: {
        marquee: "marquee 22s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}
