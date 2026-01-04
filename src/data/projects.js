// Ensure you have these images in src/assets/
import melbourne from "../assets/melbourne.png";
import seednsell from "../assets/seednsell.png";

export const projects = [
  {
    id: 1,
    title: "My Portfolio", // Replaced Agency
    category: "Personal Brand",
    description:
      "The immersive digital experience you are exploring right now. Built to demonstrate advanced React patterns, Framer Motion animations, and clean architectural design.",
    image: "CODE_VISUAL", // <--- Special Flag
    tech: ["React", "Framer Motion", "Tailwind", "Vite"],
    github: "", // Removed as requested
    demo: "", // Removed as requested
    featured: true,
  },
  {
    id: 2,
    title: "Melbourne Peptides",
    category: "E-Commerce Store",
    description:
      "A secure, high-performance online store built for scale. Features include a custom admin dashboard for inventory management, secure Stripe checkout, and real-time order tracking.",
    image: melbourne,
    tech: ["React", "Supabase", "Stripe", "Firebase"],
    demo: "https://melbourne-peptides.web.app",
    featured: true,
  },
  {
    id: 3,
    title: "SeednSell",
    category: "AgriTech Marketplace",
    description:
      "A digital marketplace connecting farmers directly with buyers. Features real-time chat, dashboard management, and secure product listings.",
    image: seednsell,
    tech: ["JavaScript", "Firebase", "Supabase", "Vite"],
    // No github link -> Code button hidden
    demo: "https://seed-and-sell.web.app",
    featured: true,
  },
];
