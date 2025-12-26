import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    // CHANGED: Using 'bg-slate-50' (Soft Cool Grey) for subtle separation
    <section
      id="testimonials"
      className="py-24 bg-slate-50 relative overflow-hidden border-t border-navy/5"
    >
      {/* Background Decor (Structured Trust) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-navy/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-mint/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-navy/50 font-bold tracking-widest text-sm uppercase block mb-3"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-navy"
          >
            Client <span className="text-terra">Feedback</span>
          </motion.h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {testimonials.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // CHANGED: White card background to pop against the grey section
              className="bg-white border border-navy/5 rounded-2xl p-8 shadow-sm relative group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-5xl text-navy/5 font-serif leading-none group-hover:text-mint/30 transition-colors">
                &rdquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-sun fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-navy/70 italic mb-6 leading-relaxed relative z-10 font-medium">
                "{review.text}"
              </p>

              <div className="h-px w-full bg-navy/5 mb-4" />

              {/* Client Info */}
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-navy text-base">
                    {review.clientName}
                  </h4>
                  <p className="text-terra text-xs font-bold uppercase tracking-wider">
                    {review.platform}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-navy/40">{review.date}</span>
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
