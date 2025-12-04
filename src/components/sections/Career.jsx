import React from "react";
import { useInView } from "../../hooks/useInView";

const Career = () => {
    const [ref, isVisible] = useInView({ triggerOnce: true });

    const openings = [
        {
            title: "Frontend Developer",
            type: "Remote",
            desc: "We are looking for a React wizard to join our team.",
            color: "from-blue-500/10 to-purple-500/10",
            icon: "💻",
        },
        {
            title: "UI/UX Designer",
            type: "Remote",
            desc: "Craft beautiful and intuitive digital experiences.",
            color: "from-pink-500/10 to-orange-500/10",
            icon: "🎨",
        },
    ];

    return (
        <section id="career" className="py-32 relative overflow-hidden">
            {/* Background Gradient Blobs */}
            <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div
                    ref={ref}
                    className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <div className="text-center mb-20">
                        <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
                            Join the <span className="text-gray-500">Collective</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                            We are always looking for talented individuals to help us build the future.
                        </p>
                    </div>

                    <div className="grid gap-6 max-w-5xl mx-auto">
                        {openings.map((job, index) => (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-[2rem] p-8 md:p-10 bg-gradient-to-br ${job.color} backdrop-blur-xl border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                            >
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

                                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                    <div className="flex items-start gap-6 flex-1">
                                        {/* Icon */}
                                        <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                            {job.icon}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">
                                                    {job.title}
                                                </h3>
                                                <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-xs font-bold text-gray-700 uppercase tracking-wide shadow-sm">
                                                    {job.type}
                                                </span>
                                            </div>
                                            <p className="text-gray-700 font-medium text-lg leading-relaxed">
                                                {job.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Apply Button */}
                                    <a
                                        href={`mailto:hello.apricitystudios@gmail.com?subject=Application for ${job.title}`}
                                        className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-black/20 hover:shadow-black/40 hover:scale-105 transition-all whitespace-nowrap group-hover:bg-gray-800"
                                    >
                                        Apply Now →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-12 modern-glass p-8 rounded-[2rem] max-w-3xl mx-auto">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Don't see your role?{" "}
                            <a
                                href="mailto:hello.apricitystudios@gmail.com?subject=General Application"
                                className="font-bold text-gray-900 hover:text-gray-600 underline decoration-2 underline-offset-4 transition-colors"
                            >
                                Send us your portfolio
                            </a>{" "}
                            and let's talk about how you can contribute.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Career;
