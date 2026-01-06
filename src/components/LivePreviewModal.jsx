import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LivePreviewModal = ({ project, isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Reset state when project changes
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      document.body.style.overflow = "hidden"; // Lock background scroll
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 backdrop-blur-md p-0 md:p-8"
        onClick={onClose}
      >
        {/* MODAL CONTAINER */}
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-full h-full md:max-w-7xl md:max-h-[90vh] md:rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-white/10"
        >
          {/* --- HEADER BAR --- */}
          <div className="bg-[#1D3557] h-16 flex items-center justify-between px-4 md:px-6 shrink-0 border-b border-white/10 relative z-50">
            {/* Left: Title & Badge */}
            <div className="flex items-center gap-3 overflow-hidden">
              <h3 className="text-white font-bold text-base md:text-lg truncate max-w-[120px] md:max-w-xs">
                {project.title}
              </h3>
              {/* Live Indicator */}
              <div className="hidden sm:flex items-center gap-2 px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-mono text-green-400 uppercase tracking-wider font-bold whitespace-nowrap">
                  Production
                </span>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* EXPLICIT EXTERNAL LINK (Visible on Mobile & Desktop) */}
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md text-xs md:text-sm font-medium transition-all border border-white/10"
              >
                <span>Visit Deployed Site</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 md:w-4 md:h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors text-white shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* --- IFRAME AREA --- */}
          <div className="flex-1 bg-gray-100 relative w-full h-full">
            {/* Loading Spinner */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-10 h-10 border-4 border-navy/20 border-t-terra rounded-full animate-spin"></div>
                  <p className="text-navy/50 font-mono text-sm">
                    Loading Application...
                  </p>
                </div>
              </div>
            )}

            {/* The Actual Project (Full Width/Height) */}
            <motion.iframe
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoading ? 0 : 1 }}
              src={project.demo}
              title={project.title}
              onLoad={() => setIsLoading(false)}
              className="w-full h-full border-0 bg-white"
              allowFullScreen
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LivePreviewModal;
