import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer"; // <--- Import the new Footer

function App() {
  return (
    <div className="bg-cream min-h-screen text-navy overflow-x-hidden font-sans selection:bg-mint selection:text-navy">
      <Navbar />
      <Hero />
      <Skills />

      <Experience />

      <Portfolio />
      <Testimonials />

      {/* Replaced the hardcoded div with your new Navy Footer component */}
      <Footer />
    </div>
  );
}

export default App;
