import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full top-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-navy/90 backdrop-blur-xl border border-paper/10 rounded-full px-8 py-3 shadow-xl shadow-navy/50">
        {/* Logo / Name - Fixed Surname showing */}
        <motion.h1
          whileHover={{ scale: 1.02 }}
          className="text-xl md:text-2xl font-bold text-paper cursor-pointer tracking-wide whitespace-nowrap"
        >
          Kuzivakwashe{" "}
          <span className="bg-gradient-to-r from-mint to-terra bg-clip-text text-transparent">
            Mawoyo
          </span>
        </motion.h1>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 text-paper/80 font-medium text-sm tracking-wider">
          {["About", "Projects", "Contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ color: "#ED553B", y: -2 }} // Terra Orange hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-terra transition-colors uppercase"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-paper text-xl">☰</div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
