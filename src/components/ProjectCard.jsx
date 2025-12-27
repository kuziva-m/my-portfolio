import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group bg-white rounded-2xl border border-navy/5 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 flex flex-col h-full"
    >
      {/* --- IMAGE SECTION --- */}
      <div className="relative aspect-video overflow-hidden bg-navy/5">
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay (Only visible on hover) */}
        <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-terra text-white px-5 py-2.5 rounded-lg font-bold text-sm tracking-wide hover:bg-white hover:text-navy transition-colors"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 text-white px-5 py-2.5 rounded-lg font-bold text-sm tracking-wide hover:bg-white hover:text-navy transition-colors"
          >
            Code
          </a>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="p-8 flex flex-col flex-grow">
        {/* Header: Category & Title */}
        <div className="mb-4">
          <span className="text-terra font-mono text-xs font-bold uppercase tracking-widest mb-2 block">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-navy leading-tight group-hover:text-terra transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-navy/60 text-base leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack (The "Technical" Look) */}
        <div className="flex flex-wrap gap-2 pt-6 border-t border-navy/5">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs font-mono font-medium text-navy/70 bg-navy/5 rounded-md border border-transparent group-hover:border-navy/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
