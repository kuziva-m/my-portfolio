export const projects = [
  {
    id: 1,
    title: "MVP Agency Dashboard",
    category: "Enterprise SaaS Platform",
    description:
      "A centralized agency management system built with Next.js 14 and Supabase. Features include a real-time CRM, automated financial tracking (Stripe Connect), interactive analytics charts (Recharts), and role-based access control for teams.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "Stripe Connect",
      "Recharts",
    ],
    // ACTION: Take a screenshot of the dashboard and name it 'mvp-dashboard.png'
    image: "/src/assets/project-screenshots/mvp-dashboard.png",
    repoLink: "#", // Private repo
    demoLink: "https://mvpwebagency.com/",
  },
  {
    id: 2,
    title: "Melbourne Peptides",
    category: "Full-Stack E-Commerce",
    description:
      "A high-performance research store featuring a custom Stripe checkout built with Supabase Edge Functions (TypeScript). Includes secure inventory management, automated discount logic, and a real-time admin dashboard.",
    tech: [
      "React",
      "Stripe API",
      "Supabase Edge Functions",
      "TypeScript",
      "Vite",
    ],
    image: "/src/assets/project-screenshots/peptides.png",
    repoLink: "#",
    demoLink: "https://melbournepeptides.com.au",
  },
  {
    id: 3,
    title: "Seed & Sell",
    category: "Agricultural Marketplace PWA",
    description:
      "A progressive web app (PWA) connecting verified farmers with buyers in Zimbabwe. Features include real-time messaging, geolocation filtering, role-based dashboards, and a contract farming program.",
    tech: ["JavaScript", "Supabase", "Vite", "PWA/Service Workers"],
    image: "/src/assets/project-screenshots/seednsell.png",
    repoLink: "https://github.com/kuziva-m/seednsell",
    demoLink: "https://seed-and-sell.web.app/",
  },
];
