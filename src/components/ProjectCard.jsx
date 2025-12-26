import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    // REMOVED: bg-navy/50, backdrop-blur, etc.
    // ADDED: h-full flex flex-col to ensure equal height
    <div className="h-full flex flex-col group overflow-hidden rounded-2xl relative">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            e.target.src =
              "https://placehold.co/600x400/1D3557/F1F1F1?text=Project+Image";
          }}
        />

        {/* Overlay Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-navy text-xs font-bold rounded-full border border-navy/5 shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-terra transition-colors">
          {project.title}
        </h3>

        <p className="text-navy/60 mb-6 text-sm leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-medium text-navy/70 bg-navy/5 px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2.5 rounded-lg border border-navy/10 text-navy font-semibold text-sm hover:bg-navy/5 transition-colors"
          >
            Code
          </a>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2.5 rounded-lg bg-navy text-white text-sm font-semibold shadow-md hover:bg-navy/90 hover:shadow-lg transition-all"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
