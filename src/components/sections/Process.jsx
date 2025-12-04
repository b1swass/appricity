import React from "react";
import { useInView } from "../../hooks/useInView";

const Process = () => {
    const steps = [
        { title: "Discover", desc: "We listen to your story." },
        { title: "Design", desc: "We sketch the structure." },
        { title: "Build", desc: "We code with precision." },
        { title: "Launch", desc: "We rise together." },
        { title: "Support", desc: "We keep it running." },
    ];

    return (
        <section id="process" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 text-gray-900">
                        The <span className="text-gray-500">Path</span>
                    </h2>
                    <p className="text-xl text-gray-600 font-medium">
                        A clear journey from start to finish.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 rounded-full">
                        <div className="absolute top-0 left-0 h-full bg-gray-300 w-full opacity-50"></div>
                    </div>

                    <div className="grid gap-10 md:grid-cols-5">
                        {steps.map((step, index) => {
                            const [ref, isVisible] = useInView();
                            return (
                                <div
                                    key={index}
                                    ref={ref}
                                    style={{ transitionDelay: `${index * 300}ms` }}
                                    className={`flex flex-col items-center text-center relative group ${isVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-10"
                                        } transition-all duration-[1200ms]`}
                                >
                                    <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-100 text-gray-800 flex items-center justify-center font-display font-bold text-2xl mb-6 shadow-lg shadow-black/5 group-hover:scale-110 group-hover:border-gray-300 group-hover:shadow-black/10 transition-all duration-500 relative z-10">
                                        <span className="group-hover:animate-pulse">
                                            {index + 1}
                                        </span>
                                    </div>
                                    <h3 className="font-display font-bold text-xl mb-2 text-gray-800 group-hover:text-gray-900 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm font-medium px-2">
                                        {step.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
