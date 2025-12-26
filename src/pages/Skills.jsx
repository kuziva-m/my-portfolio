import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

// --- EXPANDED ICON SET (12 Custom SVGs) ---
const Icons = {
  React: (props) => (
    <svg
      viewBox="-10.5 -9.45 21 18.9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      {...props}
    >
      <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
      <ellipse rx="10" ry="4.5"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
    </svg>
  ),
  Code: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  Database: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  ),
  Git: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="18" r="3"></circle>
      <circle cx="6" cy="6" r="3"></circle>
      <circle cx="18" cy="6" r="3"></circle>
      <path d="M6 9v3a6 6 0 0 0 6 6"></path>
      <path d="M18 9V8"></path>
      <path d="M12 15V3"></path>
    </svg>
  ),
  Terminal: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  ),
  Layers: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
  ),
  Python: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2c-3 0-5 2-5 5v2h10V7c0-3-2-5-5-5zM7 9v3h10V9H7z"></path>
      <path d="M12 22c3 0 5-2 5-5v-2H7v2c0 3 2 5 5 5z"></path>
    </svg>
  ),
  Cloud: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    </svg>
  ),
  Server: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  ),
  Lock: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  ),
  Cpu: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"></path>
    </svg>
  ),
  Lightning: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  ),
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-white relative overflow-hidden">
      {/* --- PROLIFIC FLOATING ICONS BACKGROUND --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 1. Top Left - Big React */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 -left-10 text-mint/10 w-48 h-48 md:w-64 md:h-64 opacity-50"
        >
          <Icons.React className="w-full h-full" />
        </motion.div>

        {/* 2. Top Right - Code Tags */}
        <motion.div
          animate={{ y: [0, 30, 0], rotate: -15 }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 -right-10 text-terra/10 w-40 h-40 md:w-56 md:h-56 opacity-60"
        >
          <Icons.Code className="w-full h-full" />
        </motion.div>

        {/* 3. Middle Left - Database */}
        <motion.div
          animate={{ x: [0, 40, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -left-16 text-navy/5 w-32 h-32 md:w-48 md:h-48"
        >
          <Icons.Database className="w-full h-full" />
        </motion.div>

        {/* 4. Bottom Right - Git */}
        <motion.div
          animate={{ y: [0, -40, 0], rotate: 10 }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 -right-12 text-mint/10 w-48 h-48 opacity-50"
        >
          <Icons.Git className="w-full h-full" />
        </motion.div>

        {/* 5. Center Top - Cloud (New) */}
        <motion.div
          animate={{ x: [0, -50, 0], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-1/3 text-navy/5 w-40 h-40"
        >
          <Icons.Cloud className="w-full h-full" />
        </motion.div>

        {/* 6. Center Bottom - Python (New) */}
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/3 text-sun/10 w-32 h-32"
        >
          <Icons.Python className="w-full h-full" />
        </motion.div>

        {/* 7. Bottom Left - Terminal */}
        <motion.div
          animate={{ rotate: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-10 left-10 text-navy/10 w-32 h-32"
        >
          <Icons.Terminal className="w-full h-full" />
        </motion.div>

        {/* 8. Top Center Right - CPU (New) */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-1/4 text-terra/5 w-24 h-24"
        >
          <Icons.Cpu className="w-full h-full" />
        </motion.div>

        {/* 9. Floating Middle Right - Lightning (New) */}
        <motion.div
          animate={{ y: [0, 50, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-10 text-sun/20 w-20 h-20"
        >
          <Icons.Lightning className="w-full h-full" />
        </motion.div>

        {/* 10. Floating Middle Left - Lock (New) */}
        <motion.div
          animate={{ rotate: [0, 360, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 left-20 text-mint/10 w-16 h-16"
        >
          <Icons.Lock className="w-full h-full" />
        </motion.div>

        {/* 11. Center Deep Background - Layers */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.08, 0.02] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-navy/5 w-96 h-96 -z-10"
        >
          <Icons.Layers className="w-full h-full" />
        </motion.div>

        {/* 12. Top Floating - Server */}
        <motion.div
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-5 right-1/2 text-navy/5 w-24 h-24"
        >
          <Icons.Server className="w-full h-full" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-navy mb-4"
          >
            My <span className="text-terra">Tech Stack</span>
          </motion.h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            I leverage a powerful ecosystem of modern tools to build efficient,
            scalable, and user-friendly solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-cream/80 backdrop-blur-md border border-navy/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              <h3 className="text-2xl font-bold text-navy mb-4 flex items-center gap-3 relative z-10">
                {/* Specific Icons for Categories */}
                <span className="p-2 bg-white rounded-lg shadow-sm text-terra group-hover:text-mint transition-colors">
                  {index === 0 && <Icons.Code className="w-6 h-6" />}
                  {index === 1 && <Icons.Server className="w-6 h-6" />}
                  {index === 2 && <Icons.Cpu className="w-6 h-6" />}
                </span>
                {category.category}
              </h3>

              <p className="text-navy/60 text-sm mb-6 relative z-10 font-medium">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2 relative z-10">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white text-navy/80 font-bold text-xs rounded-md border border-navy/5 shadow-sm group-hover:border-terra/20 group-hover:text-navy transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
