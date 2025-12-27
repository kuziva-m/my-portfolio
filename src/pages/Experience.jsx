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
      // CHANGED: Specific 'Warm Yellow' hue to contrast with White/Cream sections
      className="py-24 bg-[#FFFBF0] relative overflow-hidden"
    >
      {/* --- PATTERN: More Pronounced Orange Dots --- */}
      <div
        className="absolute inset-0 pointer-events-none opacity-35" // Increased opacity for "More Orange"
        style={{
          backgroundImage: "radial-gradient(#ED553B 2px, transparent 2px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* Subtle Warm Glow (Top Right) - Blends nicely with the yellow bg */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sun/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-navy mb-4 tracking-tight"
          >
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-terra to-sun">
              Journey
            </span>
          </motion.h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto font-medium">
            A timeline of continuous evolution, technical leadership, and
            product impact.
          </p>
        </div>

        {/* --- THE LIVING TIMELINE --- */}
        <div ref={containerRef} className="relative pb-20">
          {/* CENTRAL LINE */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-navy/10 -translate-x-1/2 z-0">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-terra via-sun to-terra origin-top"
            />
          </div>

          {/* GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-12 md:gap-y-0">
            {experience.map((job, index) => (
              <TimelineItem key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ job, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center ${!isEven ? "md:mt-32" : ""} ${
        isEven ? "md:justify-end md:pr-16" : "md:pl-16"
      }`}
    >
      {/* 1. THE DOT (Fixed Alignment) */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        className={`absolute top-0 md:top-8 w-5 h-5 bg-white border-[4px] border-terra rounded-full z-20 shadow-[0_0_0_4px_#FFFBF0]
          ${/* MOBILE: Fixed at left-8 */ ""}
          left-8 -translate-x-1/2 
          
          ${/* DESKTOP LEFT COL: Stick to Right Edge */ ""}
          ${isEven ? "md:left-auto md:right-0 md:translate-x-1/2" : ""}

          ${/* DESKTOP RIGHT COL: Stick to Left Edge */ ""}
          ${!isEven ? "md:left-0 md:-translate-x-1/2" : ""}
        `}
      />

      {/* 2. CONTENT CARD */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="ml-20 md:ml-0 w-full md:w-full relative group"
      >
        {/* Added 'bg-white/80' to make card stand out against the yellow background */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-navy/5 p-8 shadow-sm hover:shadow-xl hover:shadow-terra/5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row gap-5 mb-5 items-start">
              {/* Logo Box */}
              <div className="w-16 h-16 rounded-xl bg-white border border-navy/5 p-2 shadow-sm flex items-center justify-center flex-shrink-0">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/100?text=Logo";
                  }}
                />
              </div>

              <div className="flex-1 min-w-0">
                {/* DATE */}
                <div className="font-mono text-xs font-bold mb-1.5 tracking-wide text-navy/50 flex items-center gap-2">
                  <span className="text-terra font-extrabold">&gt;_</span>
                  {job.period}
                </div>

                <h3 className="text-xl font-bold text-navy leading-tight group-hover:text-terra transition-colors">
                  {job.role}
                </h3>
                <h4 className="text-sm font-bold text-navy/40 uppercase tracking-widest mt-1">
                  {job.company}
                </h4>
              </div>
            </div>

            <p className="text-navy/70 text-base leading-relaxed mb-6 font-medium">
              {job.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {job.tech.map((t, i) => (
                <span
                  key={i}
                  className="font-mono text-xs font-bold text-navy/70 bg-white px-3 py-1.5 rounded border border-navy/5 hover:border-terra/30 hover:text-navy transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Arrow */}
        <div
          className={`hidden md:block absolute top-12 w-4 h-4 bg-white border-b border-l border-navy/5 rotate-45 transform 
          ${
            isEven
              ? "-right-2 border-r-0 border-t-0"
              : "-left-2 border-b-0 border-l-0 border-t border-r"
          }`}
        ></div>
      </motion.div>
    </div>
  );
};

export default Experience;
