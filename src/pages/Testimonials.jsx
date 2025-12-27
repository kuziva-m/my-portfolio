import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials"; // RESTORED REAL DATA

// --- BACKGROUND ICON PATTERN ---
const BackgroundPattern = () => {
  const icons = [
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z", // Globe
    "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z", // Code
    "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H9v-2h6v2zm0-5H9v-2h6v2zm0-5H9V6h6v2z", // Server
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z", // Cloud
    "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-2.66 0-5.18.77-7.23 2.11 3.2 2.05 6.2 5.35 6.2 9.89h2.06c0-4.54 3-7.84 6.2-9.89-2.05-1.34-4.57-2.11-7.23-2.11z", // React
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none">
      <div className="flex flex-wrap gap-12 p-8 justify-center rotate-12 scale-125">
        {Array.from({ length: 50 }).map((_, i) => (
          <svg key={i} viewBox="0 0 24 24" className="w-16 h-16 fill-white">
            <path d={icons[i % icons.length]} />
          </svg>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-navy relative overflow-hidden"
    >
      {/* 1. BACKGROUND PATTERN */}
      <BackgroundPattern />

      {/* 2. GRADIENT OVERLAY (Soften edges) */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-terra font-bold tracking-widest text-sm uppercase block mb-3 font-mono"
          >
            // Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
          >
            Client{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-terra to-sun">
              Feedback
            </span>
          </motion.h2>
        </div>

        {/* REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {testimonials.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // STYLE: Glassmorphism on Navy
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-terra/10 hover:border-terra/30 hover:-translate-y-1 transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-5xl text-white/5 font-serif leading-none group-hover:text-terra/20 transition-colors">
                &rdquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-sun fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text - White for dark mode */}
              <p className="text-white/80 italic mb-6 leading-relaxed relative z-10 font-medium text-sm">
                "{review.text}"
              </p>

              <div className="h-px w-full bg-white/10 mb-4" />

              {/* Client Info */}
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-white text-base">
                    {review.clientName}
                  </h4>
                  <p className="text-terra text-xs font-bold uppercase tracking-wider font-mono mt-1">
                    {review.platform}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-white/40 font-mono">
                    {review.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
