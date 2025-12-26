import React from "react";
import { motion } from "framer-motion";

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
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-cream bg-mesh-gradient bg-[size:200%_200%] animate-gradient-slow">
      {/* --- BACKGROUND STARS --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-navy/20"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0.1, 0.5, 0.1], scale: [1, 1.5, 1] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-0 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* LEFT COLUMN: Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-64 h-72 md:w-80 md:h-96 flex-shrink-0"
        >
          {/* Glowing Border */}
          <div className="absolute inset-0 bg-gradient-to-tr from-terra via-mint to-sun rounded-[2rem_4rem_2rem_3rem] blur-lg opacity-60 animate-pulse"></div>

          {/* Image Container - SOFTER BORDER & PADDING */}
          <div className="relative w-full h-full rounded-[2rem_4rem_2rem_3rem] overflow-hidden border-2 border-cream/40 p-1 bg-cream/30 backdrop-blur-sm z-10 shadow-sm">
            <img
              src="/src/assets/profile.png"
              alt="Kuzivakwashe Mawoyo"
              // --- THE FIX: ADDED FADE MASK HERE ---
              // This creates a radial gradient mask: center is visible (black), edges are transparent.
              className="w-full h-full object-cover rounded-[1.8rem_3.8rem_1.8rem_2.8rem] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/400x500/1D3557/F1F1F1?text=Image+Missing";
              }}
            />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Text Content */}
        <div className="flex-1 text-center lg:text-left w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* PERSONAL BADGE */}
            <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-navy/10 text-navy text-xs md:text-sm font-medium tracking-wider mb-6 backdrop-blur-md uppercase shadow-sm">
              👋 Hi, I'm Kuziva
            </span>
          </motion.div>

          {/* --- ANIMATION CONTAINER --- */}
          <div className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-8 text-navy flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-2 lg:gap-4">
            {/* Static Text */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="py-1"
            >
              I Build
            </motion.span>

            {/* Animated Box Container */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-[50px] md:h-[70px] lg:h-[80px] overflow-hidden relative w-full lg:w-auto"
            >
              <div className="animate-text-slide flex flex-col items-center lg:items-start">
                {/* Item 1 */}
                <div className="h-[50px] md:h-[70px] lg:h-[80px] flex items-center justify-center lg:justify-start w-full">
                  <span className="bg-mint text-navy px-3 md:px-4 py-1 transform -skew-x-6 inline-block shadow-lg shadow-mint/20 whitespace-nowrap text-2xl md:text-4xl lg:text-5xl">
                    Stunning Websites
                  </span>
                </div>

                {/* Item 2 */}
                <div className="h-[50px] md:h-[70px] lg:h-[80px] flex items-center justify-center lg:justify-start w-full">
                  <span className="bg-sun text-navy px-3 md:px-4 py-1 transform -skew-x-6 inline-block shadow-lg shadow-sun/20 whitespace-nowrap text-2xl md:text-4xl lg:text-5xl">
                    Web Applications
                  </span>
                </div>

                {/* Item 3 */}
                <div className="h-[50px] md:h-[70px] lg:h-[80px] flex items-center justify-center lg:justify-start w-full">
                  <span className="bg-terra text-white px-3 md:px-4 py-1 transform -skew-x-6 inline-block shadow-lg shadow-terra/20 whitespace-nowrap text-2xl md:text-4xl lg:text-5xl">
                    Digital Experiences
                  </span>
                </div>

                {/* Clone Item 1 */}
                <div className="h-[50px] md:h-[70px] lg:h-[80px] flex items-center justify-center lg:justify-start w-full">
                  <span className="bg-mint text-navy px-3 md:px-4 py-1 transform -skew-x-6 inline-block shadow-lg shadow-mint/20 whitespace-nowrap text-2xl md:text-4xl lg:text-5xl">
                    Stunning Websites
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* PERSONAL BIO */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-navy/70 text-base md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium"
          >
            I turn ideas into reality with code. I specialize in building{" "}
            <span className="text-terra font-bold">responsive websites</span>{" "}
            and <span className="text-terra font-bold">web apps</span> that look
            great and work smoothly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#skills"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(237, 85, 59, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-terra text-white px-8 py-3.5 rounded-full font-bold text-lg shadow-lg shadow-terra/30 transition-all hover:bg-orange-600 text-center"
            >
              See My Skills
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                borderColor: "#1D3557",
                color: "#1D3557",
              }}
              whileTap={{ scale: 0.98 }}
              className="border border-navy/20 bg-white/50 backdrop-blur-sm text-navy px-8 py-3.5 rounded-full font-bold text-lg transition-all text-center"
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
