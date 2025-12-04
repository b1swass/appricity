import React from "react";
import { useInView } from "../../hooks/useInView";

const About = () => {
    const [ref, isVisible] = useInView({ triggerOnce: true });

    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div
                    ref={ref}
                    className={`modern-glass rounded-[3rem] p-8 md:p-20 transition-all duration-1000 ease-out relative overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    {/* Background Blobs */}
                    <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gray-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob"></div>
                    <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-slate-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob animation-delay-2000"></div>

                    <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight text-gray-900">
                                The <span className="text-gray-500">Core</span>
                            </h2>
                            <p className="text-xl mb-8 leading-relaxed text-gray-600 font-light">
                                Apricity Studio is a collective of digital architects. We don't
                                just build websites; we construct immersive digital
                                environments. Our mission is to push the boundaries of what's
                                possible on the web.
                            </p>
                            <ul className="space-y-4">
                                {["Based in Nepal", "Global Reach", "Future-Focused"].map(
                                    (item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center text-lg text-gray-700 font-medium"
                                        >
                                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]"></span>
                                            {item}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                        <div className="bg-white/40 rounded-3xl border border-white/60 p-10 text-center backdrop-blur-md shadow-xl">
                            <div className="grid grid-cols-2 gap-10">
                                <div>
                                    <div className="text-5xl font-bold text-gray-800 mb-2 font-display">
                                        50+
                                    </div>
                                    <div className="text-gray-500 font-bold text-xs uppercase tracking-widest">
                                        Systems Online
                                    </div>
                                </div>
                                <div>
                                    <div className="text-5xl font-bold text-gray-600 mb-2 font-display">
                                        5+
                                    </div>
                                    <div className="text-gray-500 font-bold text-xs uppercase tracking-widest">
                                        Cycles
                                    </div>
                                </div>
                                <div>
                                    <div className="text-5xl font-bold text-gray-800 mb-2 font-display">
                                        100%
                                    </div>
                                    <div className="text-gray-500 font-bold text-xs uppercase tracking-widest">
                                        Uptime
                                    </div>
                                </div>
                                <div>
                                    <div className="text-5xl font-bold text-gray-600 mb-2 font-display">
                                        24/7
                                    </div>
                                    <div className="text-gray-500 font-bold text-xs uppercase tracking-widest">
                                        Monitoring
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
