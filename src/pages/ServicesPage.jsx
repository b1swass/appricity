import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";

const ServicesPage = () => {
    return (
        <>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                <div className="text-center mb-16">
                    <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
                        Our <span className="text-gray-500">Services</span>
                    </h1>
                    <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                        We provide comprehensive digital solutions to bring your ideas to life.
                        From web and mobile development to branding and design, we've got you covered.
                    </p>
                </div>
                <Services />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default ServicesPage;
