import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Explicitly using the Navy Hex code #1D3557 to match Testimonials exactly
    <footer className="bg-[#1D3557] border-t border-white/10 shadow-inner pt-16 pb-8 relative overflow-hidden">
      {/* Subtle Glow to match the theme */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-terra/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              Kuzivakwashe Mawoyo
            </h2>
            <p className="text-white/40 font-mono text-sm mt-2">
              Building digital experiences that matter.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {[
              { name: "GitHub", url: "https://github.com/kuziva-m" },
              { name: "LinkedIn", url: "#" },
              { name: "Twitter", url: "#" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-white/60 hover:text-terra font-mono text-sm transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-white/10 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-mono">
          <p>&copy; {currentYear} Kuzivakwashe Mawoyo. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Systems Operational
            </span>
            <span>Harare, ZW</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
