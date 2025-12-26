import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience"; // <--- 1. Import the file we just created
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <div className="bg-cream min-h-screen text-navy overflow-x-hidden font-sans selection:bg-mint selection:text-navy">
      <Navbar />
      <Hero />
      <Skills />

      {/* 2. Add the component to the layout */}
      <Experience />

      <Portfolio />
      <Testimonials />

      {/* Footer */}
      <div className="py-10 text-center text-navy/40 text-sm border-t border-navy/5 bg-slate-50">
        © 2025 Kuzivakwashe Mawoyo. All rights reserved.
      </div>
    </div>
  );
}

export default App;
