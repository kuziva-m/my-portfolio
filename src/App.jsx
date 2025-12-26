import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials"; // <--- Import this

function App() {
  return (
    <div className="bg-navy min-h-screen text-paper overflow-x-hidden font-sans selection:bg-mint selection:text-navy">
      <Navbar />
      <Hero />
      <Portfolio />
      <Testimonials /> {/* <--- Add this line */}
      {/* Footer Placeholder */}
      <div className="py-10 text-center text-paper/30 text-sm border-t border-paper/5">
        © 2025 Kuzivakwashe Mawoyo. All rights reserved.
      </div>
    </div>
  );
}

export default App;
