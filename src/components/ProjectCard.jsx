import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group bg-white rounded-2xl border border-navy/5 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 flex flex-col h-full"
    >
      {/* --- IMAGE / VISUAL SECTION --- */}
      <div className="relative aspect-video overflow-hidden bg-navy/5 p-6">
        {/* CHECK: Is this the Portfolio Code Visual? */}
        {project.image === "CODE_VISUAL" ? (
          // --- CODE EDITOR VISUAL ---
          <div className="w-full h-full bg-[#1e1e1e] rounded-lg shadow-sm flex flex-col overflow-hidden border border-white/10 group-hover:scale-[1.02] transition-transform duration-700">
            {/* Window Controls */}
            <div className="bg-[#2d2d2d] px-3 py-2 flex gap-1.5 border-b border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
            </div>

            {/* Code Content */}
            <div className="p-3 font-mono text-[10px] md:text-xs leading-relaxed text-blue-100 overflow-hidden opacity-90">
              <span className="text-purple-400">import</span> React{" "}
              <span className="text-purple-400">from</span>{" "}
              <span className="text-green-300">'react'</span>;<br />
              <span className="text-purple-400">const</span>{" "}
              <span className="text-yellow-300">Portfolio</span> = () ={">"}{" "}
              {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-purple-400">const</span>{" "}
              <span className="text-blue-300">passion</span> ={" "}
              <span className="text-green-300">"Building"</span>;<br />
              &nbsp;&nbsp;<span className="text-purple-400">return</span> (
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;
              <span className="text-red-400">div</span>{" "}
              <span className="text-orange-300">className</span>=
              <span className="text-green-300">"future"</span>&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
              <span className="text-red-400">Hero</span> /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
              <span className="text-red-400">Projects</span> /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/
              <span className="text-red-400">div</span>&gt;
              <br />
              &nbsp;&nbsp;);
              <br />
              {"}"};
            </div>
          </div>
        ) : (
          // --- STANDARD IMAGE ---
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg shadow-sm transition-transform duration-700 group-hover:scale-[1.02] group-hover:shadow-md"
          />
        )}

        {/* Overlay (Visible on Hover) - Only shows if there are buttons */}
        {(project.demo || project.github) && (
          <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-terra text-white px-5 py-2.5 rounded-lg font-bold text-sm tracking-wide hover:bg-white hover:text-navy transition-colors shadow-lg"
              >
                Live Website
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white px-5 py-2.5 rounded-lg font-bold text-sm tracking-wide hover:bg-white hover:text-navy transition-colors shadow-lg"
              >
                Code
              </a>
            )}
          </div>
        )}
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-terra font-mono text-xs font-bold uppercase tracking-widest mb-2 block">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-navy leading-tight group-hover:text-terra transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-navy/60 text-base leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

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
