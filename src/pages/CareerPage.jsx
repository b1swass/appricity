import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Career from "../components/sections/Career";
import Contact from "../components/sections/Contact";

const CareerPage = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
            Join Our <span className="text-gray-500">Team</span>
          </h1>

          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
            We're always looking for talented individuals who are passionate
            about creating amazing digital experiences. Check out our openings
            below.
          </p>
        </div>
        <Career />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default CareerPage;
