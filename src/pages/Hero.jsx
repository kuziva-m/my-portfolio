import React from "react";
import { motion } from "framer-motion";

// Generate random "Sun" yellow stars
const stars = [...Array(30)].map(() => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 3 + 1 + "px",
  delay: Math.random() * 5,
  duration: Math.random() * 5 + 5,
}));

const Hero = () => {
  return (
    // Updated Background to be smoother and less noisy
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-navy bg-mesh-gradient bg-[size:200%_200%] animate-gradient-slow">
      {/* --- BACKGROUND STARS --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-sun shadow-[0_0_8px_rgba(246,213,92,0.6)]"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0.1, 0.8, 0.1], scale: [1, 1.5, 1] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* --- MAIN CONTENT (Split Layout) --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-0 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* LEFT COLUMN: Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-72 h-80 md:w-80 md:h-96 flex-shrink-0"
        >
          {/* Decorative Glowing Border (Soft Rectangle) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-terra via-mint to-sun rounded-[2rem_4rem_2rem_3rem] blur-lg opacity-60 animate-pulse"></div>

          {/* Image Container */}
          <div className="relative w-full h-full rounded-[2rem_4rem_2rem_3rem] overflow-hidden border-[3px] border-paper/20 p-1.5 bg-navy/50 backdrop-blur-sm z-10">
            {/* IMPORTANT: Make sure this src points to your actual image file 
                 Example: src="/src/assets/kuziva-photo.jpg"
             */}
            <img
              src="/src/assets/profile.png"
              alt="Kuzivakwashe Mawoyo"
              className="w-full h-full object-cover rounded-[1.5rem_3.5rem_1.5rem_2.5rem]"
            />
          </div>

          {/* Optional extra geometric decor */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-mint/20 rounded-full blur-md -z-10"></div>
        </motion.div>

        {/* RIGHT COLUMN: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-navy/80 border border-mint/30 text-mint text-sm font-medium tracking-wider mb-6 backdrop-blur-md uppercase shadow-lg shadow-mint/10">
              🚀 Lead Developer & UX/UI Designer
            </span>
          </motion.div>

          {/* --- THE FLIPPING ANIMATION CONTAINER --- */}
          <div className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-8 text-paper flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 lg:gap-4">
            {/* Static Text */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="py-2"
            >
              Building
            </motion.span>

            {/* Animated Box Container */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-[60px] md:h-[90px] overflow-hidden relative min-w-[340px] md:min-w-[600px] text-center lg:text-left"
            >
              <div className="animate-text-slide w-full">
                {/* Item 1 */}
                <div className="h-[60px] md:h-[90px] flex items-center justify-center lg:justify-start">
                  <span className="bg-mint text-navy px-4 py-1 md:py-2 transform -skew-x-6 inline-block shadow-lg shadow-mint/20">
                    Enterprise Dashboards
                  </span>
                </div>
                {/* Item 2 */}
                <div className="h-[60px] md:h-[90px] flex items-center justify-center lg:justify-start">
                  <span className="bg-sun text-navy px-4 py-1 md:py-2 transform -skew-x-6 inline-block shadow-lg shadow-sun/20">
                    Scalable SaaS Systems
                  </span>
                </div>
                {/* Item 3 */}
                <div className="h-[60px] md:h-[90px] flex items-center justify-center lg:justify-start">
                  <span className="bg-terra text-white px-4 py-1 md:py-2 transform -skew-x-6 inline-block shadow-lg shadow-terra/20">
                    Stylish Interfaces
                  </span>
                </div>
                {/* Clone Item 1 */}
                <div className="h-[60px] md:h-[90px] flex items-center justify-center lg:justify-start">
                  <span className="bg-mint text-navy px-4 py-1 md:py-2 transform -skew-x-6 inline-block shadow-lg shadow-mint/20">
                    Enterprise Dashboards
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Updated Description emphasizing UX/UI */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-paper/80 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light"
          >
            I bridge the gap between robust backend architecture and stunning{" "}
            <span className="text-mint font-medium">UX/UI design</span>. I build
            stylish, scalable platforms—from real-time CRM systems to immersive
            web experiences—that drive business growth.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
          >
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(237, 85, 59, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-terra text-white px-8 py-3.5 rounded-full font-bold text-lg shadow-lg shadow-terra/20 transition-all hover:bg-orange-600"
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                borderColor: "#A8D8B9",
                color: "#A8D8B9",
              }}
              whileTap={{ scale: 0.98 }}
              className="border border-paper/30 bg-navy/30 backdrop-blur-sm text-paper px-8 py-3.5 rounded-full font-bold text-lg transition-all"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
