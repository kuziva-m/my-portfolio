import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "../data/experience";

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      className="py-24 bg-cream relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mint/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-terra/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-navy mb-4 tracking-tight"
          >
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-terra to-mint">
              Journey
            </span>
          </motion.h2>
          <p className="text-navy/50 text-lg max-w-2xl mx-auto">
            A timeline of continuous evolution, technical leadership, and
            product impact.
          </p>
        </div>

        {/* --- THE LIVING TIMELINE --- */}
        <div ref={containerRef} className="relative">
          {/* CENTRAL LINE */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-navy/5 rounded-full -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-terra via-sun to-mint rounded-full origin-top"
            />
          </div>

          <div className="space-y-12 md:space-y-20">
            {experience.map((job, index) => (
              <TimelineItem key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- TIMELINE CARD COMPONENT ---
const TimelineItem = ({ job, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-start md:justify-between ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* 1. THE DOT (Connector) */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute left-8 md:left-1/2 top-8 w-6 h-6 bg-white border-4 border-terra rounded-full -translate-x-1/2 z-20 shadow-lg shadow-terra/20"
      />

      {/* 2. CONTENT CARD */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`ml-20 md:ml-0 md:w-[45%] w-full relative group`}
      >
        {/* Card Body */}
        <div className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-navy/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
          {/* Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-terra/5 to-mint/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            {/* --- HEADER WITH LOGO --- */}
            <div className="flex items-center gap-4 mb-6">
              {/* Logo Box */}
              <div className="w-14 h-14 rounded-2xl bg-white border border-navy/10 p-2 shadow-sm flex items-center justify-center flex-shrink-0">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-full h-full object-contain rounded-lg"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/100?text=Logo";
                  }}
                />
              </div>

              {/* Text Info */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-navy group-hover:text-terra transition-colors leading-tight">
                  {job.role}
                </h3>
                <h4 className="text-sm font-bold text-mint uppercase tracking-widest mt-1">
                  {job.company}
                </h4>
              </div>
            </div>

            {/* Period Badge (Moved below header for better mobile layout) */}
            <div className="mb-4">
              <span className="px-3 py-1 bg-navy/5 text-navy/70 text-xs font-bold rounded-full uppercase tracking-wider">
                {job.period}
              </span>
            </div>

            <p className="text-navy/70 text-sm md:text-base leading-relaxed mb-6">
              {job.description}
            </p>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2">
              {job.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs font-semibold text-navy/60 bg-cream px-3 py-1.5 rounded-lg border border-navy/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Arrow (Triangle pointing to center) */}
        <div
          className={`hidden md:block absolute top-10 w-4 h-4 bg-white border-b border-l border-navy/5 rotate-45 transform 
          ${
            isEven
              ? "-right-2 border-r-0 border-t-0"
              : "-left-2 border-b-0 border-l-0 border-t border-r"
          }`}
        ></div>
      </motion.div>

      {/* 3. EMPTY SPACE (To balance the flex layout on desktop) */}
      <div className="hidden md:block md:w-[45%]" />
    </div>
  );
};

export default Experience;
