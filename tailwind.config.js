/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1D3557",
        mint: "#A8D8B9",
        terra: "#ED553B",
        sun: "#F6D55C",
        paper: "#F1F1F1",
      },
      animation: {
        "text-slide": "text-slide 8s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "gradient-slow": "gradient 15s ease infinite",
      },
      keyframes: {
        "text-slide": {
          "0%, 26%": { transform: "translateY(0%)" },
          "33%, 59%": { transform: "translateY(-25%)" },
          "66%, 92%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(-75%)" },
        },
        gradient: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(at 40% 20%, rgba(168, 216, 185, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(237, 85, 59, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(246, 213, 92, 0.05) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(29, 53, 87, 1) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(168, 216, 185, 0.1) 0px, transparent 50%), radial-gradient(at 80% 100%, rgba(237, 85, 59, 0.15) 0px, transparent 50%), radial-gradient(at 0% 0%, rgba(29, 53, 87, 1) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};
