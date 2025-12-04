import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Code2,
    Smartphone,
    Terminal,
    Palette,
} from "lucide-react";

const Services = () => {
    const navigate = useNavigate();

    const services = [
        {
            id: "web-development",
            title: "Web Development",
            desc: "Modern, responsive websites, landing pages, and e-commerce that actually convert.",
            icon: <Code2 size={40} className="text-gray-800" />,
        },
        {
            id: "mobile-app-development",
            title: "Mobile App Development",
            desc: "Android & iOS apps with startup-style UI/UX, built to scale.",
            icon: <Smartphone size={40} className="text-gray-800" />,
        },
        {
            id: "software-development",
            title: "Software Development",
            desc: "Custom tools, dashboards, and internal systems for growing teams.",
            icon: <Terminal size={40} className="text-gray-800" />,
        },
        {
            id: "graphics-branding",
            title: "Graphics & Branding",
            desc: "Logos, brand identity, social media creatives, and campaign visuals.",
            icon: <Palette size={40} className="text-gray-800" />,
        },
    ];

    // Duplicate services for seamless loop
    const marqueeServices = [...services, ...services];

    return (
        <section id="services" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 mb-16">
                <div className="text-center">
                    <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
                        <span className="text-gray-900">Bright</span> Ideas
                    </h2>
                    <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                        We bring clarity to every digital challenge.
                    </p>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks for smooth fade in/out */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#EEEEEE] to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#EEEEEE] to-transparent z-20 pointer-events-none"></div>

                <div className="flex gap-8 w-max animate-marquee pause-on-hover py-4 px-4">
                    {marqueeServices.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(`/services/${service.id}`)}
                            className="w-[300px] md:w-[400px] flex-shrink-0 hover-flare modern-glass rounded-[2rem] p-8 flex flex-col items-center text-center gap-6 hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
                        >
                            {/* Circular Icon Container */}
                            <div className="relative w-20 h-20 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full border-2 border-gray-100 group-hover:border-gray-300 transition-colors duration-500"></div>
                                <div
                                    className={`w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center shadow-sm relative z-10 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    {service.icon}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 font-display group-hover:text-gray-900 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed font-medium text-sm">
                                {service.desc}
                            </p>

                            {/* Interactive Button-like Element */}
                            <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <span className="text-gray-800 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                                    Explore <span className="text-xl">→</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
