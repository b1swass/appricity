import React from "react";
import { useInView } from "../../hooks/useInView";

const Hero = () => {
    const [ref, isVisible] = useInView({ triggerOnce: true });

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="pt-24 pb-20 md:pt-48 md:pb-32 overflow-hidden relative min-h-screen flex items-center"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-gray-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gray-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-slate-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div
                    ref={ref}
                    className={`transition-all duration-1000 ease-out flex flex-col items-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <div className="inline-block mb-8 px-6 py-2 rounded-full bg-white/60 border border-gray-200 backdrop-blur-sm text-sm font-bold text-gray-600 tracking-widest uppercase shadow-sm">
                        Apricity Studio
                    </div>

                    <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-extrabold leading-[1.1] mb-8 text-gray-900 max-w-5xl mx-auto tracking-tight">
                        Digital products with <br />
                        <span className="relative inline-block text-gray-900">
                            clarity
                            <svg
                                className="absolute w-full h-4 -bottom-2 left-0 text-gray-300 -z-10 opacity-60"
                                viewBox="0 0 100 10"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0 5 Q 50 15 100 5"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                    fill="none"
                                />
                            </svg>
                        </span>
                        .
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                        Apricity Studio blends design, code, and visuals to build clean,
                        human digital experiences that people love.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-8 justify-center w-full">
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="bg-gray-900 text-white px-12 py-5 rounded-full shadow-xl shadow-black/20 hover:shadow-black/40 hover:-translate-y-1 transition-all font-bold text-xl flex items-center justify-center gap-3 group"
                        >
                            Start a Project
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={() => scrollToSection("work")}
                            className="bg-white/80 text-gray-800 border-2 border-gray-100 px-12 py-5 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all font-bold text-xl shadow-lg shadow-black/5 backdrop-blur-sm text-center"
                        >
                            View Our Work
                        </button>
                    </div>

                    {/* Floating Elements */}
                    <div className="mt-24 relative w-full max-w-4xl mx-auto hidden md:block">
                        <div className="absolute top-0 left-10 w-24 h-24 bg-gray-200 rounded-full blur-xl opacity-60 animate-float"></div>
                        <div className="absolute bottom-10 right-10 w-32 h-32 bg-slate-200 rounded-full blur-xl opacity-60 animate-float animation-delay-2000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
