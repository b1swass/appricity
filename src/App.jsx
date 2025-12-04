import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import Work from "./components/sections/Work";
import About from "./components/sections/About";
import Career from "./components/sections/Career";
import Contact from "./components/sections/Contact";

// Pages
import ServiceDetail from "./pages/ServiceDetail";

function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Services />
        <Process />
        <Work />
        <About />
        <Career />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-gray-800 selection:text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
