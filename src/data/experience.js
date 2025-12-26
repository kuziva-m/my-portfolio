// Import the logos from your assets folder
import fncLogo from "../assets/logos/fnc.png";
import mvpLogo from "../assets/logos/mvp.png";
import airswiftLogo from "../assets/logos/airswift.png";
import peptidesLogo from "../assets/logos/peptides.png";
import seedLogo from "../assets/logos/seed.png";
import itxLogo from "../assets/logos/itx.png";

export const experience = [
  {
    id: 1,
    role: "IT Data & Systems Specialist",
    company: "Food & Nutrition Council",
    period: "Apr 2025 - Present",
    logo: fncLogo,
    theme: "navy", // Corporate, authoritative color
    description:
      "Driving organizational efficiency by developing automated data analysis pipelines using Python and CSPro. Managing enterprise IT infrastructure and creating Power BI dashboards for critical metrics.",
    tech: ["Python", "Power BI", "CSPro", "Data Analytics"],
  },
  {
    id: 2,
    role: "Lead Full-Stack Engineer",
    company: "MVP Web Agency",
    period: "2023 - 2025",
    logo: mvpLogo,
    theme: "terra", // Bold, startup energy
    description:
      "Spearheaded the architecture of a multi-tenant agency management SaaS. Built a real-time CRM and automated financial tracking system using Next.js 14, Supabase, and Stripe Connect.",
    tech: ["Next.js 14", "TypeScript", "SaaS Architecture", "Stripe"],
  },
  {
    id: 3,
    role: "Drone Systems Technician",
    company: "AirSwift Enterprise",
    period: "Jan 2025 - Mar 2025",
    logo: airswiftLogo,
    theme: "mint", // Hardware, fresh, technical
    description:
      "Provided critical technical support for specialized drone hardware and Linux-based control systems. Diagnosed complex hardware-software interface issues and optimized system reliability for field operations.",
    tech: ["Linux Admin", "Hardware Debugging", "Technical Support"],
  },
  {
    id: 4,
    role: "Full-Stack Developer",
    company: "Melbourne Peptides",
    period: "2023 - 2025",
    logo: peptidesLogo,
    theme: "sun", // E-commerce, bright, energetic
    description:
      "Engineered a high-performance e-commerce platform. Implemented custom checkout flows, inventory management, and secure payment processing using Stripe and Edge Functions.",
    tech: ["React", "Stripe API", "Edge Functions", "E-commerce"],
  },
  {
    id: 5,
    role: "Lead Engineer",
    company: "Seed & Sell",
    period: "2022 - 2023",
    logo: seedLogo,
    theme: "mint", // Agriculture = Green/Mint
    description:
      "Engineered a market-linkage PWA for the agricultural sector. Solved real-world logistical challenges using Geolocation APIs and offline-first database strategies.",
    tech: ["PWA", "Geolocation", "Product Management", "JavaScript"],
  },
  {
    id: 6,
    role: "Frontend Developer & UX/UI Auditor",
    company: "Iteration X",
    period: "2022 - 2023",
    logo: itxLogo,
    theme: "terra", // Design-focused, creative color
    description:
      "Conducted comprehensive UX/UI audits and frontend implementations using the Iteration X Chrome extension. Delivered pixel-perfect results on time, maintaining fluent communication and achieving perfect client satisfaction.",
    tech: ["React", "UX/UI Audit", "Chrome Extensions", "Frontend"],
  },
];
