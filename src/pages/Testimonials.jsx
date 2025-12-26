import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-navy relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-mint/5 rounded-full filter blur-[80px] -translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-paper mb-4"
          >
            Client <span className="text-sun">Feedback</span>
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sun to-terra mx-auto rounded-full" />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {testimonials.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-navy/50 backdrop-blur-md border border-paper/10 rounded-2xl p-8 shadow-xl relative group hover:border-mint/30 transition-colors"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-6xl text-mint/10 font-serif leading-none group-hover:text-mint/20 transition-colors">
                &rdquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
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
              <p className="text-paper/80 italic mb-6 leading-relaxed relative z-10">
                "{review.text}"
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {review.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-paper/5 text-mint border border-paper/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="h-px w-full bg-paper/10 mb-4" />

              {/* Client Info */}
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="font-bold text-paper text-lg">
                    {review.clientName}
                  </h4>
                  <p className="text-terra text-sm font-medium">
                    {review.projectType}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-paper/40 block">
                    {review.date}
                  </span>
                  <span className="text-xs font-bold text-sun bg-sun/10 px-2 py-1 rounded mt-1 inline-block">
                    {review.platform}
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
