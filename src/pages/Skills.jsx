import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

// --- ICONS ---
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
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-white relative overflow-hidden">
      {/* --- BACKGROUND ICONS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left - Big React (Bold Green) */}
        <motion.div
          animate={{ y: [0, -40, 0], rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 -left-10 text-emerald-500 opacity-80 w-72 h-72"
        >
          <Icons.React className="w-full h-full" />
        </motion.div>

        {/* Top Right - Big Code Tags (Bold Orange) */}
        {/* MOVED BACK TO TOP */}
        <motion.div
          animate={{ y: [0, 40, 0], rotate: -15 }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -right-10 text-orange-500 opacity-80 w-64 h-64"
        >
          <Icons.Code className="w-full h-full" />
        </motion.div>

        {/* BOTTOM IS NOW COMPLETELY EMPTY */}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
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
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 60 }}
              className="bg-white/80 backdrop-blur-md border border-navy/10 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              <h3 className="text-2xl font-bold text-navy mb-4 flex items-center gap-3 relative z-10">
                <span className="p-2 bg-white rounded-lg shadow-sm text-terra group-hover:text-mint transition-colors">
                  {/* Category Specific Icons */}
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
                    className="px-3 py-1.5 bg-white text-navy/80 font-bold text-xs rounded-md border border-navy/10 shadow-sm group-hover:border-terra/40 group-hover:text-navy transition-all"
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
