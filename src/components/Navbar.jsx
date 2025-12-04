import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsMobileMenuOpen(false);

        // If we're on a different page, navigate to home first
        if (location.pathname !== "/") {
            window.location.href = `/#${id}`;
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        { name: "Home", id: "home" },
        { name: "Services", id: "services" },
        { name: "Process", id: "process" },
        { name: "Work", id: "work" },
        { name: "About", id: "about" },
        { name: "Career", id: "career" },
    ];

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl animate-fade-in-down">
            <div
                className={`rounded-full px-6 py-4 flex items-center justify-between transition-all duration-300 ${isScrolled
                        ? "bg-white/70 backdrop-blur-3xl border border-white/50 shadow-xl shadow-black/10"
                        : "bg-white/40 backdrop-blur-3xl border border-white/40 shadow-lg shadow-black/5"
                    }`}
            >
                <div
                    className="flex-shrink-0 cursor-pointer flex items-center gap-2"
                    onClick={() => scrollToSection("home")}
                >
                    <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-black/10 transform rotate-3">
                        A
                    </div>
                    <span className="font-display font-bold text-2xl tracking-tight text-gray-800">
                        Apricity
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.id)}
                            className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:bg-gray-100"
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => {
                            if (window.innerWidth < 768) {
                                setIsMobileMenuOpen(!isMobileMenuOpen);
                            } else {
                                scrollToSection("contact");
                            }
                        }}
                        className="bg-gray-900 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold shadow-lg shadow-black/20 hover:shadow-black/40 hover:-translate-y-0.5 transition-all ml-2 z-50 relative"
                    >
                        {isMobileMenuOpen ? "Close" : "Let's Talk"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full mt-4 p-4 bg-white/90 backdrop-blur-3xl rounded-[2rem] border border-white/50 shadow-xl shadow-black/10 flex flex-col gap-2 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.id)}
                            className="w-full text-left px-6 py-4 text-gray-800 hover:bg-gray-100 rounded-xl text-lg font-semibold transition-all"
                        >
                            {item.name}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="w-full mt-2 bg-gray-900 text-white px-6 py-4 rounded-xl text-lg font-bold shadow-lg shadow-black/20 active:scale-95 transition-all"
                    >
                        Let's Talk
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
