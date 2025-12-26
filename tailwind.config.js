/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1D3557", // Now your primary TEXT color
        mint: "#A8D8B9", // Decor color
        terra: "#ED553B", // Button color
        sun: "#F6D55C", // Star/Highlight color
        cream: "#FDFBF7", // NEW: Your main background color
        paper: "#F1F1F1",
      },
      animation: {
        blob: "blob 7s infinite",
        "text-slide": "text-slide 8s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "gradient-slow": "gradient 15s ease infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
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
        // Updated to a LIGHT CREAM based gradient
        "mesh-gradient":
          "radial-gradient(at 40% 20%, rgba(168, 216, 185, 0.2) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(237, 85, 59, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(246, 213, 92, 0.1) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(253, 251, 247, 1) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(168, 216, 185, 0.2) 0px, transparent 50%), radial-gradient(at 80% 100%, rgba(237, 85, 59, 0.1) 0px, transparent 50%), radial-gradient(at 0% 0%, rgba(253, 251, 247, 1) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};
