import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Code2, Smartphone, Terminal, Palette, Clapperboard, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const services = {
        'web-development': {
            title: "Web Development",
            icon: <Code2 size={80} className="text-gray-800" />,
            tagline: "Digital experiences that leave a mark.",
            description: "We don't just build websites; we craft digital ecosystems. Our web development services blend aesthetic brilliance with technical robustness, ensuring your brand stands out in a crowded digital landscape.",
            features: [
                { title: "Responsive Design", desc: "Fluid layouts that adapt to any device." },
                { title: "SEO Optimization", desc: "Built-in visibility for search engines." },
                { title: "Performance", desc: "Lightning-fast load times and smooth interactions." },
                { title: "CMS Integration", desc: "Easy content management for your team." }
            ],
            process: "From the initial spark of an idea to the final launch, our process is transparent, collaborative, and focused on results. We iterate, refine, and polish until every pixel is perfect."
        },
        'mobile-app-development': {
            title: "Mobile Apps",
            icon: <Smartphone size={80} className="text-gray-800" />,
            tagline: "Your brand, in their pocket.",
            description: "Native and cross-platform mobile applications that offer seamless performance and intuitive user experiences. We build apps that users love to open.",
            features: [
                { title: "iOS & Android", desc: "Native performance on all major platforms." },
                { title: "Cross-Platform", desc: "Efficient development using React Native." },
                { title: "UI/UX Design", desc: "Interfaces designed for touch and gesture." },
                { title: "Scalability", desc: "Backends built to handle millions of users." }
            ],
            process: "We start with user research and prototyping, ensuring we solve the right problems. Then we build, test, and deploy with precision."
        },
        'software-development': {
            title: "Software Dev",
            icon: <Terminal size={80} className="text-gray-800" />,
            tagline: "Powering your business logic.",
            description: "Custom software solutions that streamline operations, automate workflows, and solve complex business challenges. We build the tools that power your growth.",
            features: [
                { title: "Custom Solutions", desc: "Tailored specifically to your business needs." },
                { title: "API Integration", desc: "Seamlessly connect disparate systems." },
                { title: "Cloud Migration", desc: "Secure and scalable cloud infrastructure." },
                { title: "Legacy Modernization", desc: "Bring old systems into the modern era." }
            ],
            process: "We analyze your workflows to identify bottlenecks, then engineer custom solutions that integrate perfectly with your existing ecosystem."
        },
        'graphics-branding': {
            title: "Graphics & Brand",
            icon: <Palette size={80} className="text-gray-800" />,
            tagline: "Visual storytelling for the modern age.",
            description: "Your brand is more than a logo; it's a feeling. We create cohesive visual identities that resonate with your audience and communicate your values instantly.",
            features: [
                { title: "Logo Design", desc: "Memorable marks that define your identity." },
                { title: "Brand Guidelines", desc: "Consistent visual language across all channels." },
                { title: "Marketing Assets", desc: "High-impact visuals for campaigns." },
                { title: "Packaging", desc: "Physical touchpoints that delight customers." }
            ],
            process: "We dive deep into your brand's DNA to uncover what makes you unique, then translate that into a visual language that speaks volumes."
        },
        'motion-graphics-vfx': {
            title: "Motion & VFX",
            icon: <Clapperboard size={80} className="text-gray-800" />,
            tagline: "Moving pictures that move people.",
            description: "Capture attention and explain complex ideas with dynamic motion graphics and visual effects. We bring static assets to life.",
            features: [
                { title: "Explainer Videos", desc: "Simplify complex concepts visually." },
                { title: "Logo Animation", desc: "Add character to your brand mark." },
                { title: "VFX", desc: "Cinematic effects for high-end productions." },
                { title: "Social Content", desc: "Thumb-stopping visuals for feeds." }
            ],
            process: "From storyboarding to final render, we craft motion pieces that are not just beautiful, but also strategically aligned with your goals."
        }
    };

    const service = services[id];
    const relatedProjects = projects.filter(p => p.categories.includes(id));

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FFFBF5]">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="text-gray-800 font-bold hover:underline"
                    >
                        Go Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#EEEEEE] relative overflow-hidden font-sans selection:bg-gray-800 selection:text-white pb-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none fixed">
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-gray-300/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-slate-300/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 relative z-10">
                {/* Navigation */}
                <button
                    onClick={() => navigate('/')}
                    className="group flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors mb-20 font-medium text-lg"
                >
                    <div className="p-3 rounded-full bg-white/40 border border-white/60 group-hover:bg-white group-hover:shadow-md transition-all">
                        <ArrowLeft size={24} />
                    </div>
                    <span className="tracking-wide">Back to Home</span>
                </button>

                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-40">
                    <div className="order-2 lg:order-1">
                        <div className="inline-block mb-8 px-5 py-2 rounded-full bg-white/80 border border-gray-200 text-gray-700 font-bold text-sm tracking-widest uppercase shadow-sm backdrop-blur-sm">
                            Service
                        </div>
                        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
                            {service.title}
                        </h1>
                        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-light leading-relaxed mb-12 max-w-xl">
                            {service.tagline}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button
                                onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
                                className="bg-gray-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-xl shadow-gray-900/20 hover:-translate-y-1"
                            >
                                Start Project
                            </button>
                        </div>
                    </div>
                    <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-slate-200 rounded-[3rem] rotate-6 opacity-40 blur-3xl transform scale-90"></div>
                        <div className="relative warm-glass rounded-[3rem] p-16 md:p-24 border border-white/60 shadow-2xl shadow-black/5 flex items-center justify-center aspect-square w-full max-w-[500px] backdrop-blur-xl">
                            <div className="relative z-10 transform hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
                                {service.icon}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-40">
                    {/* Description & Process */}
                    <div className="lg:col-span-7 space-y-16">
                        <div className="warm-glass p-10 md:p-14 rounded-[3rem] border border-white/60 shadow-lg shadow-black/5 backdrop-blur-md">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-display">Overview</h3>
                            <p className="text-xl text-gray-700 leading-relaxed font-light">
                                {service.description}
                            </p>
                        </div>

                        <div className="bg-white/60 p-10 md:p-14 rounded-[3rem] border border-white/60 shadow-lg shadow-black/5 backdrop-blur-md">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-display">Our Process</h3>
                            <p className="text-xl text-gray-700 leading-relaxed font-light">
                                {service.process}
                            </p>
                        </div>
                    </div>

                    {/* Features Sidebar */}
                    <div className="lg:col-span-5">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-10 md:p-12 text-white shadow-2xl shadow-black/20 relative overflow-hidden sticky top-8">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl -ml-16 -mb-16"></div>

                            <h3 className="text-3xl md:text-4xl font-bold mb-10 font-display relative z-10">Key Features</h3>
                            <div className="space-y-10 relative z-10">
                                {service.features.map((feature, index) => (
                                    <div key={index} className="group">
                                        <h4 className="text-xl font-bold mb-3 flex items-center gap-3">
                                            <span className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
                                            {feature.title}
                                        </h4>
                                        <p className="text-gray-100 leading-relaxed text-base opacity-90 group-hover:opacity-100 transition-opacity pl-5 border-l border-white/20">
                                            {feature.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Projects Showcase */}
                {relatedProjects.length > 0 && (
                    <div className="mb-40">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                            <div>
                                <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                                    Related <span className="text-gray-500">Work</span>
                                </h2>
                                <p className="text-xl text-gray-600 font-light max-w-2xl">
                                    See what we've built in this space. Real results for real clients.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {relatedProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className="group warm-glass rounded-[2.5rem] p-5 hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 cursor-pointer border border-white/50"
                                >
                                    <div className={`h-80 ${project.color} rounded-[2rem] w-full mb-8 overflow-hidden relative shadow-inner`}>
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                                        <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 border border-white/30">
                                            <ArrowUpRight className="text-white" size={24} />
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="font-display font-bold text-3xl text-white/40 uppercase tracking-widest group-hover:text-white/60 transition-colors transform scale-95 group-hover:scale-100 duration-500">
                                                View Case
                                            </span>
                                        </div>
                                    </div>
                                    <div className="px-4 pb-4">
                                        <h3 className="text-3xl font-bold text-gray-900 font-display mb-3 group-hover:text-gray-800 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 line-clamp-2 text-base font-medium leading-relaxed">
                                            {project.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-4 py-1.5 rounded-full bg-white border border-gray-100 text-xs font-bold text-gray-600 uppercase tracking-wide shadow-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div id="contact-section" className="bg-gray-900 rounded-[3rem] p-12 md:p-32 text-center relative overflow-hidden shadow-2xl shadow-gray-900/30">
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                        <div className="absolute top-[-50%] left-[-20%] w-[1000px] h-[1000px] bg-black/20 rounded-full blur-[150px] animate-pulse"></div>
                        <div className="absolute bottom-[-50%] right-[-20%] w-[1000px] h-[1000px] bg-slate-500/20 rounded-full blur-[150px] animate-pulse animation-delay-2000"></div>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-10 leading-tight">
                            Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-500">extraordinary?</span>
                        </h2>
                        <p className="text-2xl text-gray-300 mb-16 font-light leading-relaxed">
                            Let's collaborate to bring your vision to life with the perfect blend of design and technology.
                        </p>
                        <button
                            onClick={() => navigate('/#contact')}
                            className="bg-white text-gray-900 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl shadow-white/10 hover:scale-105"
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetail;
