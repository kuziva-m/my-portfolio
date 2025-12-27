import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Portfolio = () => {
  return (
    <section id="projects" className="py-32 bg-cream relative overflow-hidden">
      {/* --- TECHNICAL GRID BACKGROUND --- */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#1D3557 1px, transparent 1px), linear-gradient(90deg, #1D3557 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- HEADER (Fixed Alignment) --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            {/* Super Clean Typography */}
            <h2 className="text-4xl md:text-6xl font-extrabold text-navy tracking-tight mb-4">
              Selected{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terra to-sun">
                Works
              </span>
            </h2>
            <p className="text-navy/60 text-lg md:text-xl font-medium max-w-lg">
              A curated selection of projects that demonstrate my ability to
              solve complex problems with code.
            </p>
          </motion.div>

          {/* Optional: "View All" Link */}
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://github.com/yourusername"
            target="_blank"
            className="hidden md:flex items-center gap-2 text-navy font-bold hover:text-terra transition-colors group"
          >
            <span className="font-mono text-sm">View GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </motion.a>
        </div>

        {/* --- PROJECT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <a
            href="https://github.com/yourusername"
            className="inline-flex items-center gap-2 text-navy font-bold border-b-2 border-terra pb-1"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
