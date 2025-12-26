import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills"; // <--- 1. Import this
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <div className="bg-cream min-h-screen text-navy overflow-x-hidden font-sans selection:bg-mint selection:text-navy">
      <Navbar />
      <Hero />
      <Skills /> {/* <--- 2. Add this here */}
      <Portfolio />
      <Testimonials />
      {/* Footer Placeholder */}
      <div className="py-10 text-center text-navy/40 text-sm border-t border-navy/5">
        © 2025 Kuzivakwashe Mawoyo. All rights reserved.
      </div>
    </div>
  );
}

export default App;
