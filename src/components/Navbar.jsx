import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect Scroll to add subtle shadow/border
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/80 backdrop-blur-md border-b border-navy/5 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* LOGO: Technical & Bold */}
          <a href="#" className="group">
            <h1 className="text-2xl font-bold text-navy tracking-tight flex items-center gap-1">
              Kuziva
              <span className="w-2 h-2 rounded-full bg-terra group-hover:scale-125 transition-transform duration-300"></span>
            </h1>
          </a>

          {/* DESKTOP LINKS: Monospace & Clean */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-8 text-sm font-mono font-medium text-navy/70">
              {["Skills", "Work", "Testimonials"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-terra transition-colors relative group"
                  >
                    <span className="text-terra/40 opacity-0 group-hover:opacity-100 transition-opacity mr-1">
                      //
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA BUTTON */}
            <a
              href="#contact"
              className="bg-navy text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-navy/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-navy/20"
            >
              Let's Talk
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="md:hidden text-navy p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cream/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-navy"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {["Skills", "Work", "Testimonials", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-navy hover:text-terra transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
