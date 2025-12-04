import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Hero />
                <Services />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
