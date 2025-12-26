import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Portfolio = () => {
  return (
    // CHANGED: Reverted to 'bg-navy' to create contrast with the cream/grey sections
    <section id="projects" className="py-24 bg-navy relative overflow-hidden">
      {/* Background Decor (Adjusted for Dark Background) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mint/5 rounded-full filter blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-terra/5 rounded-full filter blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-terra font-bold tracking-widest text-sm uppercase block mb-3"
          >
            My Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // CHANGED: Text color to 'text-paper' to be visible on Navy
            className="text-4xl md:text-5xl font-extrabold text-paper mb-6"
          >
            Featured{" "}
            <span className="text-mint relative inline-block">
              Projects
              {/* Underline decoration */}
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-mint/40"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* KEPT: bg-white. 
                  Why? Because your ProjectCard component now has DARK text. 
                  White cards on a Navy background look clean and professional.
              */}
              <div className="h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-mint/10 transition-all duration-300 border border-white/5 transform hover:-translate-y-1">
                <ProjectCard project={project} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
