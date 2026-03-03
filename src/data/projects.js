import melbourne from "../assets/melbourne.png";
import spinyard from "../assets/spinyard.png";
// TODO: Take a screenshot of Obsidian Labs, name it 'obsidian.png', and put it in src/assets/
import obsidian from "../assets/obsidian.png";

export const projects = [
  {
    id: 1,
    title: "Melbourne Peptides",
    category: "E-Commerce Store",
    description:
      "A secure, high-performance online store built for scale. Features include a custom admin dashboard for inventory management, secure Stripe checkout, and real-time order tracking.",
    image: melbourne,
    tech: ["React", "Supabase", "Stripe", "Firebase"],
    demo: "https://melbournepeptides.com.au/",
    featured: true,
  },
  {
    id: 2,
    title: "Spinyard Investments",
    category: "Corporate Identity",
    description:
      "A modern digital presence for an agri-investment firm. Designed to establish brand authority with smooth interactions, highly responsive layouts, and a polished user experience.",
    image: spinyard,
    tech: ["React", "Framer Motion", "Tailwind", "Vite"],
    demo: "https://spinyard.co.zw",
    featured: true,
  },
  {
    id: 3,
    title: "Obsidian Labs",
    category: "B2B Research Supply",
    description:
      "A specialized platform for an Australian research supplier. Features custom secure access, age verification gateways, tailored inventory tracking, and a seamless bulk-ordering checkout flow.",
    image: obsidian,
    tech: ["React", "Context API", "Supabase", "Tailwind CSS"],
    demo: "https://your-obsidian-labs-link.com", // <-- Update this to the actual live link
    featured: true,
  },
];
