import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

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
        // FIXED POSITION (As requested)
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md border-b border-navy/5 py-3 shadow-sm"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* --- LOGO --- */}
          <a
            href="#"
            className="group flex flex-col md:flex-row md:items-baseline gap-1"
          >
            <h1 className="text-lg md:text-2xl font-extrabold text-navy tracking-tight leading-none">
              Kuzivakwashe Mawoyo
            </h1>
            <span className="text-terra font-mono text-xs md:text-sm font-bold tracking-widest uppercase group-hover:text-sun transition-colors">
              Portfolio
            </span>
          </a>

          {/* --- ACTIONS --- */}
          <div className="flex items-center gap-4">
            {/* DESKTOP NAV LINKS */}
            <ul className="hidden md:flex gap-8 text-sm font-mono font-medium text-navy/70">
              {["Skills", "Experience", "Projects"].map((item) => (
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

            {/* --- CTA BUTTON (VISIBLE ON MOBILE NOW) --- */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactOpen(true)}
              className="bg-navy text-white px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-bold text-xs md:text-sm hover:bg-navy/90 hover:-translate-y-0.5 transition-all shadow-[2px_2px_0px_0px_#ED553B] md:shadow-[4px_4px_0px_0px_#ED553B] whitespace-nowrap"
            >
              Let's Talk
            </motion.button>

            {/* MOBILE MENU TOGGLE */}
            <button
              className="md:hidden text-navy p-1"
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
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MODAL */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            // Added padding-top (pt-24) so it doesn't hide behind the navbar
            className="fixed inset-0 top-0 z-40 bg-cream/95 backdrop-blur-xl flex flex-col items-center justify-start pt-32 space-y-8 md:hidden"
          >
            {/* Close Button specific for menu overlay */}
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

            {["Skills", "Experience", "Projects"].map((item) => (
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
