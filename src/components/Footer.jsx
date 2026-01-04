import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      // BG COLOR: Exact match to the button (#1D3557)
      // Removed the red glow/shadows to keep it pure dark blue
      style={{ backgroundColor: "#0d1624ff" }}
      className="border-t border-white/10 pt-12 pb-6 relative overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* TOP SECTION: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* COL 1: Brand & Contact */}
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white">
                Kuzivakwashe Mawoyo
              </h2>
              <p className="text-white/50 text-sm font-mono mt-1">
                Full-Stack Developer
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <a
                href="mailto:kuziva.mawoyo@gmail.com"
                className="flex items-center gap-3 hover:text-[#ED553B] transition-colors group w-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-[#ED553B] group-hover:scale-110 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span>kuziva.mawoyo@gmail.com</span>
              </a>
              <a
                href="tel:+263777115012"
                className="flex items-center gap-3 hover:text-[#ED553B] transition-colors group w-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-[#ED553B] group-hover:scale-110 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <span>+263 77 711 5012</span>
              </a>
            </div>
          </div>

          {/* COL 2: Quick Navigation */}
          <div className="flex flex-col justify-start md:items-center">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm font-medium text-white/60">
              {["Skills", "Experience", "Projects"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* COL 3: Social Icons */}
          <div className="flex flex-col justify-start md:items-end gap-4">
            <div className="flex gap-4">
              {[
                {
                  name: "GitHub",
                  url: "https://github.com/kuziva-m",
                  path: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z",
                },
                {
                  name: "LinkedIn",
                  url: "#",
                  path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 11-2 2 2 2 0 012-2z",
                },
                {
                  name: "Twitter",
                  url: "#",
                  path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#ED553B] hover:border-[#ED553B] transition-all"
                  aria-label={link.name}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={link.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: Minimalist line */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-mono">
          <p>&copy; {currentYear} Kuzivakwashe Mawoyo.</p>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 px-3 py-1 bg-black/20 rounded-full border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="tracking-wide">Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
