import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        flamingo: { plum: "#4A235A", royal: "#6D28D9", deep: "#2D1155", blush: "#FDE6E8", blushDeep: "#F9C6D2", gold: "#D4AF7A", goldDeep: "#B78D51", ivory: "#FFFBF7", cream: "#FFF7ED" }
      },
      fontFamily: { serif: ["var(--font-playfair)", "serif"], sans: ["var(--font-inter)", "sans-serif"] },
      animation: { "fade-in": "fadeIn 0.8s ease-out", "slide-up": "slideUp 0.8s ease-out" },
      keyframes: { fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } }, slideUp: { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } } }
    },
  },
  plugins: [],
};
export default config;
