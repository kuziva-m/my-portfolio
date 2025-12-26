import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-navy/50 backdrop-blur-sm border border-mint/20 rounded-2xl overflow-hidden shadow-xl shadow-navy/50 flex flex-col h-full group"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            // Fallback if image is missing
            e.target.src =
              "https://placehold.co/600x400/1D3557/F1F1F1?text=Project+Image";
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-terra text-xs font-bold tracking-widest uppercase mb-2 block">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold text-paper group-hover:text-mint transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="text-paper/70 mb-6 text-sm leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-medium text-mint bg-mint/10 px-3 py-1 rounded-full border border-mint/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 rounded-lg border border-paper/20 text-paper/80 hover:bg-paper/10 hover:text-white transition-all text-sm font-semibold"
          >
            Code
          </a>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 rounded-lg bg-terra text-white hover:bg-orange-600 shadow-lg shadow-terra/20 transition-all text-sm font-semibold"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
