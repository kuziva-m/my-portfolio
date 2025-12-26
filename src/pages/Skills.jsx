import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-navy mb-4"
          >
            My <span className="text-terra">Tech Stack</span>
          </motion.h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            I don't just write code; I use the right tools to build efficient,
            scalable, and user-friendly solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-cream border border-navy/5 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-navy mb-2">
                {category.category}
              </h3>
              <p className="text-navy/50 text-sm mb-6">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white text-navy font-semibold text-sm rounded-lg border border-navy/10 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
