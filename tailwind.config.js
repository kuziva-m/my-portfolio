/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1D3557",
        cream: "#F1FAEE",
        mint: "#A8D8B9",
        terra: "#ED553B",
        sun: "#F6D55C",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        // CHANGED: 9s duration for a relaxed pace (3s per slide)
        "text-slide": "text-slide 9s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "gradient-slow": "gradient 15s ease infinite",
      },
      keyframes: {
        // --- THE FIX ---
        // We have 4 items (3 unique + 1 clone).
        // The container is 400% height of one item.
        // We slide 0% -> -25% -> -50% -> -75%.
        // At -75%, we are at the Clone (which looks like Item 1).
        // The loop then snaps back to 0% instantly.
        "text-slide": {
          "0%, 26%": {
            transform: "translateY(0%)", // Show Item 1
          },
          "33%, 59%": {
            transform: "translateY(-25%)", // Slide to & Hold Item 2
          },
          "66%, 92%": {
            transform: "translateY(-50%)", // Slide to & Hold Item 3
          },
          "100%": {
            transform: "translateY(-75%)", // Slide to Clone (Visual Reset)
          },
        },
        gradient: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
