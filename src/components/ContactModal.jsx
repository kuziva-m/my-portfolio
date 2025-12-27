import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactModal = ({ isOpen, onClose }) => {
  const [triggerExplosion, setTriggerExplosion] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Trigger explosion slightly after mount
      setTimeout(() => setTriggerExplosion(true), 100);
    } else {
      document.body.style.overflow = "unset";
      setTriggerExplosion(false);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/60 backdrop-blur-sm p-4"
        >
          {/* --- THE GEOMETRIC EXPLOSION (Behind Card) --- */}
          {triggerExplosion && <GeometricExplosion />}

          {/* --- THE BRUTALIST CARD --- */}
          <motion.div
            initial={{ scale: 0.5, y: 100, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.2 } }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20, // Bouncy but heavy
              mass: 1.2,
            }}
            onClick={(e) => e.stopPropagation()}
            // STYLE: Neo-Brutalist (Cream bg, thick borders, hard shadow)
            className="relative w-full max-w-md bg-[#FFFBF0] border-[3px] border-navy shadow-[10px_10px_0px_0px_#1D3557] p-0 overflow-hidden"
          >
            {/* NOISE TEXTURE OVERLAY */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* --- HEADER --- */}
            <div className="bg-navy p-6 flex justify-between items-center relative z-10">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight font-mono">
                  // CONTACT_ME
                </h2>
                <p className="text-terra font-bold text-xs tracking-widest mt-1 uppercase">
                  Status: Online
                </p>
              </div>

              {/* Close 'X' - Technical Style */}
              <button
                onClick={onClose}
                className="w-10 h-10 bg-terra border-2 border-white flex items-center justify-center hover:bg-white hover:text-navy hover:border-terra transition-colors group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6 text-white group-hover:text-terra transition-colors"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* --- BODY --- */}
            <div className="p-8 relative z-10">
              {/* Avatar Box */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 border-[3px] border-navy shadow-[4px_4px_0px_0px_#ED553B] overflow-hidden bg-white shrink-0">
                  <img
                    src="/src/assets/profile.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/100?text=KM";
                    }}
                  />
                </div>
                <div>
                  <p className="text-navy/60 font-mono text-sm mb-1">
                    Lead Developer
                  </p>
                  <h3 className="text-xl font-bold text-navy leading-none">
                    Kuzivakwashe
                    <br />
                    Mawoyo
                  </h3>
                </div>
              </div>

              {/* Links - Blocky & Tactile */}
              <div className="space-y-4">
                {/* WHATSAPP */}
                <a
                  href="https://wa.me/263777115012"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 border-[2px] border-navy hover:bg-green-50 hover:shadow-[4px_4px_0px_0px_#25D366] hover:-translate-y-1 transition-all group bg-white"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-500 flex items-center justify-center border border-navy text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </div>
                    <span className="font-bold text-navy">WhatsApp</span>
                  </div>
                  <span className="font-mono text-sm text-navy/50 group-hover:text-navy transition-colors">
                    +263 77 711 5012
                  </span>
                </a>

                {/* TELEGRAM */}
                <a
                  href="https://t.me/+263777115012"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 border-[2px] border-navy hover:bg-blue-50 hover:shadow-[4px_4px_0px_0px_#0088CC] hover:-translate-y-1 transition-all group bg-white"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#0088CC] flex items-center justify-center border border-navy text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm2.448 15.657l-1.631-.762-.519 1.879 2.508-2.529 3.906 2.887.893-4.275-12.872 4.965 2.569 1.056 6.136-3.871-4.735 4.288-.255-2.638z" />
                      </svg>
                    </div>
                    <span className="font-bold text-navy">Telegram</span>
                  </div>
                  <span className="font-mono text-sm text-navy/50 group-hover:text-navy transition-colors">
                    @kuziva
                  </span>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:kuziva.mawoyo@gmail.com"
                  className="flex items-center justify-between p-4 border-[2px] border-navy hover:bg-orange-50 hover:shadow-[4px_4px_0px_0px_#ED553B] hover:-translate-y-1 transition-all group bg-white"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-terra flex items-center justify-center border border-navy text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="square"
                          strokeLinejoin="miter"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <span className="font-bold text-navy">Email</span>
                  </div>
                  <span className="font-mono text-sm text-navy/50 group-hover:text-navy transition-colors">
                    kuziva...
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- GEOMETRIC PARTICLE EXPLOSION ---
const GeometricExplosion = () => {
  // Create 20 unique particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    angle: (i / 20) * 360, // Radial distribution
    distance: Math.random() * 200 + 150, // Fly out 150-350px
    size: Math.random() * 15 + 10,
    color: i % 3 === 0 ? "#ED553B" : i % 3 === 1 ? "#F6D55C" : "#1D3557", // Terra, Sun, Navy
    shape: i % 3, // 0=Square, 1=Circle, 2=Triangle
    rotation: Math.random() * 360,
  }));

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
          animate={{
            x: Math.cos((p.angle * Math.PI) / 180) * p.distance,
            y: Math.sin((p.angle * Math.PI) / 180) * p.distance,
            scale: [0, 1, 0], // Pop up then vanish
            opacity: [1, 1, 0],
            rotate: p.rotation + 360, // Spin while flying
          }}
          transition={{
            duration: 1.5, // 1.5 Seconds (Longer!)
            ease: [0.22, 1, 0.36, 1], // Custom Ease Out
          }}
          className="absolute"
        >
          {/* RENDER SHAPES */}
          {p.shape === 0 && ( // Square
            <div
              className="border-2"
              style={{
                width: p.size,
                height: p.size,
                borderColor: p.color,
                backgroundColor: "transparent",
              }}
            />
          )}
          {p.shape === 1 && ( // Circle
            <div
              className="rounded-full"
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
              }}
            />
          )}
          {p.shape === 2 && ( // Cross
            <div className="relative" style={{ width: p.size, height: p.size }}>
              <div
                className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2"
                style={{ backgroundColor: p.color }}
              />
              <div
                className="absolute top-0 left-1/2 h-full w-[2px] -translate-x-1/2"
                style={{ backgroundColor: p.color }}
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ContactModal;
