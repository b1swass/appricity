import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                <div className="text-center mb-16">
                    <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
                        About <span className="text-gray-500">Us</span>
                    </h1>
                    <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                        We are a team of passionate digital architects dedicated to
                        crafting exceptional web experiences that make a difference.
                    </p>
                </div>
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default AboutPage;
