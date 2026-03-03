import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import LivePreviewModal from "../components/LivePreviewModal";
import { projects } from "../data/projects";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
        {/* --- HEADER --- */}
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

          {/* REMOVED: View GitHub Link */}
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
              <ProjectCard
                project={project}
                onOpenPreview={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>

        {/* REMOVED: Mobile View All Button */}
      </div>

      <LivePreviewModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Portfolio;
