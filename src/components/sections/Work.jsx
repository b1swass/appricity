// import React from "react";
// import { useInView } from "../../hooks/useInView";
// import { projects } from "../../data/projects";

// const Work = () => {
//     return (
//         <section id="work" className="py-32 relative overflow-hidden">
//             <div className="container mx-auto px-4 relative z-10">
//                 <div className="text-center mb-24">
//                     <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 text-gray-900">
//                         Selected <span className="text-gray-500">Works</span>
//                     </h2>
//                     <p className="text-xl text-gray-600 font-light">
//                         Digital artifacts from our lab.
//                     </p>
//                 </div>

//                 <div className="grid gap-12 md:grid-cols-3">
//                     {projects.map((project, index) => {
//                         const [ref, isVisible] = useInView({ triggerOnce: true });
//                         return (
//                             <div
//                                 key={index}
//                                 ref={ref}
//                                 style={{ transitionDelay: `${index * 150}ms` }}
//                                 className={`modern-glass rounded-[2rem] p-5 hover:-translate-y-3 transition-all duration-500 group ${isVisible
//                                         ? "opacity-100 translate-y-0"
//                                         : "opacity-0 translate-y-10"
//                                     }`}
//                             >
//                                 <div
//                                     className={`h-72 ${project.color} rounded-[1.5rem] w-full mb-8 overflow-hidden relative group-hover:opacity-90 transition-opacity shadow-inner`}
//                                 >
//                                     <div
//                                         className="absolute inset-0 opacity-30"
//                                         style={{
//                                             backgroundImage:
//                                                 "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
//                                             backgroundSize: "20px 20px",
//                                         }}
//                                     ></div>
//                                     <div className="absolute inset-0 flex items-center justify-center">
//                                         <span className="font-display font-bold text-4xl text-white/40 uppercase tracking-widest group-hover:text-white/60 transition-colors">
//                                             Project {index + 1}
//                                         </span>
//                                     </div>
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//                                 </div>
//                                 <div className="px-2 pb-4">
//                                     <h3 className="text-2xl font-bold text-gray-800 font-display mb-3 group-hover:text-gray-900 transition-colors">
//                                         {project.title}
//                                     </h3>
//                                     <p className="text-gray-600 mb-6 font-light leading-relaxed">
//                                         {project.desc}
//                                     </p>
//                                     <div className="flex flex-wrap gap-2">
//                                         {project.tags.map((tag) => (
//                                             <span
//                                                 key={tag}
//                                                 className="inline-flex px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs font-bold text-gray-600 uppercase tracking-wide hover:bg-gray-200 transition-colors"
//                                             >
//                                                 {tag}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Work;
import React from "react";
import { useInView } from "../../hooks/useInView";
import { projects } from "../../data/projects";

const Work = () => {
    return (
        <section id="work" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 text-gray-900">
                        Selected <span className="text-gray-500">Works</span>
                    </h2>
                    <p className="text-xl text-gray-600 font-light">
                        Digital artifacts from our lab.
                    </p>
                </div>

                <div className="grid gap-12 md:grid-cols-3">
                    {projects.map((project, index) => {
                        const [ref, isVisible] = useInView({ triggerOnce: true });
                        return (
                            <div
                                key={index}
                                ref={ref}
                                style={{ transitionDelay: `${index * 150}ms` }}
                                className={`modern-glass rounded-[2rem] p-5 hover:-translate-y-3 transition-all duration-500 group ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                                    }`}
                            >
                                {/* Image container - clean version */}
                                <div className="h-72 rounded-[1.5rem] w-full mb-8 overflow-hidden relative shadow-lg">
                                    {project.url ? (
                                        <img
                                            src={project.url}
                                            alt={project.title || `Project ${index + 1}`}
                                            className="w-full h-full object-cover rounded-[1.5rem] group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.innerHTML = `
                                                    <div class="w-full h-full ${project.color || 'bg-gradient-to-br from-gray-100 to-gray-300'} rounded-[1.5rem] flex items-center justify-center">
                                                        <span class="font-display font-bold text-4xl text-gray-400 uppercase tracking-widest">
                                                            Project ${index + 1}
                                                        </span>
                                                    </div>
                                                `;
                                            }}
                                        />
                                    ) : (
                                        <div className={`w-full h-full ${project.color || 'bg-gradient-to-br from-gray-100 to-gray-300'} rounded-[1.5rem] flex items-center justify-center`}>
                                            <span className="font-display font-bold text-4xl text-gray-400 uppercase tracking-widest">
                                                Project {index + 1}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content below image */}
                                <div className="px-2 pb-4">
                                    <h3 className="text-2xl font-bold text-gray-800 font-display mb-3 group-hover:text-gray-900 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 font-light leading-relaxed">
                                        {project.desc}
                                    </p>

                                    {/* Live Link Button */}
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 mb-6 text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors group/link"
                                        >
                                            <span>Live View</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a>
                                    )}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs font-bold text-gray-600 uppercase tracking-wide hover:bg-gray-200 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Work;