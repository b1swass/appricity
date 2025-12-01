import React, { useState, useEffect, useRef } from 'react';

// --- Hooks ---

function useInView(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.triggerOnce) {
          observer.disconnect();
        }
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
}

// --- Components ---

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl animate-fade-in-down">
      <div className="warm-glass rounded-full px-6 py-4 flex items-center justify-between">
        <div className="flex-shrink-0 cursor-pointer flex items-center gap-2" onClick={() => scrollToSection('home')}>
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/20 transform rotate-3">A</div>
          <span className="font-display font-bold text-2xl tracking-tight text-gray-800">Apricity</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          {['Home', 'Services', 'Process', 'Work', 'About'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-600 hover:text-orange-500 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:bg-orange-50"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all ml-2"
          >
            Let's Talk
          </button>
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const [ref, isVisible] = useInView({ triggerOnce: true });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-orange-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-yellow-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out flex flex-col items-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-block mb-8 px-6 py-2 rounded-full bg-white/60 border border-orange-200 backdrop-blur-sm text-sm font-bold text-orange-600 tracking-widest uppercase shadow-sm">
            Digital Product Studio
          </div>

          <h1 className="font-display text-6xl md:text-9xl font-extrabold leading-[1.1] mb-8 text-gray-900 max-w-5xl mx-auto tracking-tight">
            Digital products with <br />
            <span className="relative inline-block text-gradient-sun">
              warmth
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-yellow-400 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>.
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
            Apricity Studio blends design, code, and visuals to build warm, human digital experiences that people love.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center w-full">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-12 py-5 rounded-full shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all font-bold text-xl flex items-center gap-3 group"
            >
              Start a Project
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="bg-white/80 text-gray-800 border-2 border-orange-100 px-12 py-5 rounded-full hover:border-orange-300 hover:bg-orange-50 transition-all font-bold text-xl shadow-lg shadow-orange-500/10 backdrop-blur-sm"
            >
              View Our Work
            </button>
          </div>

          {/* Floating Elements */}
          <div className="mt-24 relative w-full max-w-4xl mx-auto hidden md:block">
            <div className="absolute top-0 left-10 w-24 h-24 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full blur-xl opacity-60 animate-float"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full blur-xl opacity-60 animate-float animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Code2, Smartphone, Terminal, Palette, Clapperboard } from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: "web-development",
      title: "Web Development",
      desc: "Modern, responsive websites, landing pages, and e-commerce that actually convert.",
      icon: <Code2 size={40} className="text-orange-500" />
    },
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      desc: "Android & iOS apps with startup-style UI/UX, built to scale.",
      icon: <Smartphone size={40} className="text-orange-500" />
    },
    {
      id: "software-development",
      title: "Software Development",
      desc: "Custom tools, dashboards, and internal systems for growing teams.",
      icon: <Terminal size={40} className="text-orange-500" />
    },
    {
      id: "graphics-branding",
      title: "Graphics & Branding",
      desc: "Logos, brand identity, social media creatives, and campaign visuals.",
      icon: <Palette size={40} className="text-orange-500" />
    },
    {
      id: "motion-graphics-vfx",
      title: "Motion Graphics & VFX",
      desc: "Explainer videos, promos, and visual effects that make your brand stand out.",
      icon: <Clapperboard size={40} className="text-orange-500" />
    }
  ];

  // Duplicate services for seamless loop
  const marqueeServices = [...services, ...services];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 mb-16">
        <div className="text-center">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
            <span className="text-gradient-sun">Bright</span> Ideas
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            We bring warmth and clarity to every digital challenge.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks for smooth fade in/out */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#FFFBF5] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#FFFBF5] to-transparent z-20 pointer-events-none"></div>

        <div className="flex gap-8 w-max animate-marquee pause-on-hover py-4 px-4">
          {marqueeServices.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate(`/services/${service.id}`)}
              className="w-[350px] md:w-[400px] flex-shrink-0 hover-flare warm-glass rounded-[2rem] p-8 flex flex-col items-center text-center gap-6 hover:-translate-y-2 hover:shadow-sun transition-all duration-500 group cursor-pointer"
            >
              {/* Circular Icon Container */}
              <div className="relative w-20 h-20 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-orange-100 group-hover:border-orange-300 transition-colors duration-500"></div>
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center shadow-sm relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 font-display group-hover:text-orange-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium text-sm">{service.desc}</p>

              {/* Interactive Button-like Element */}
              <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-orange-500 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
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

const Process = () => {
  const steps = [
    { title: "Discover", desc: "We listen to your story." },
    { title: "Design", desc: "We sketch the sunlight." },
    { title: "Build", desc: "We code with warmth." },
    { title: "Launch", desc: "We rise together." },
    { title: "Support", desc: "We keep it shining." }
  ];

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            The <span className="text-orange-500">Path</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium">A clear journey from dawn to day.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-orange-100 -translate-y-1/2 rounded-full">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-300 to-yellow-300 w-full opacity-50"></div>
          </div>

          <div className="grid gap-10 md:grid-cols-5">
            {steps.map((step, index) => {
              const [ref, isVisible] = useInView({ triggerOnce: true });
              return (
                <div
                  key={index}
                  ref={ref}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  className={`flex flex-col items-center text-center relative group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}
                >
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-orange-100 text-orange-500 flex items-center justify-center font-display font-bold text-2xl mb-6 shadow-lg shadow-orange-500/10 group-hover:scale-110 group-hover:border-orange-400 group-hover:shadow-orange-500/30 transition-all duration-500 relative z-10">
                    <span className="group-hover:animate-pulse">{index + 1}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2 text-gray-800 group-hover:text-orange-600 transition-colors">{step.title}</h3>
                  <p className="text-gray-600 text-sm font-medium px-2">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

import { projects } from './data/projects';

const Work = () => {


  return (
    <section id="work" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            Selected <span className="text-orange-500">Works</span>
          </h2>
          <p className="text-xl text-gray-600 font-light">Digital artifacts from our lab.</p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {projects.map((project, index) => {
            const [ref, isVisible] = useInView({ triggerOnce: true });
            return (
              <div
                key={index}
                ref={ref}
                style={{ transitionDelay: `${index * 150}ms` }}
                className={`warm-glass rounded-[2rem] p-5 hover:-translate-y-3 transition-all duration-500 group hover:shadow-sun ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className={`h-72 ${project.color} rounded-[1.5rem] w-full mb-8 overflow-hidden relative group-hover:opacity-90 transition-opacity shadow-inner`}>
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display font-bold text-4xl text-white/40 uppercase tracking-widest group-hover:text-white/60 transition-colors">Project {index + 1}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
                </div>
                <div className="px-2 pb-4">
                  <h3 className="text-2xl font-bold text-gray-800 font-display mb-3 group-hover:text-orange-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 mb-6 font-light leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="inline-flex px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-xs font-bold text-orange-600 uppercase tracking-wide hover:bg-orange-100 transition-colors">
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

const About = () => {
  const [ref, isVisible] = useInView({ triggerOnce: true });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`warm-glass rounded-[3rem] p-8 md:p-20 transition-all duration-1000 ease-out relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Background Blobs */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob animation-delay-2000"></div>

          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight text-gray-900">
                The <span className="text-orange-500">Core</span>
              </h2>
              <p className="text-xl mb-8 leading-relaxed text-gray-600 font-light">
                Apricity Studio is a collective of digital architects. We don't just build websites; we construct immersive digital environments. Our mission is to push the boundaries of what's possible on the web.
              </p>
              <ul className="space-y-4">
                {['Based in Nepal', 'Global Reach', 'Future-Focused'].map((item, i) => (
                  <li key={i} className="flex items-center text-lg text-gray-700 font-medium">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-4 shadow-[0_0_10px_rgba(255,138,0,0.4)]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/40 rounded-3xl border border-white/60 p-10 text-center backdrop-blur-md shadow-xl">
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <div className="text-5xl font-bold text-orange-500 mb-2 font-display">50+</div>
                  <div className="text-gray-500 font-bold text-xs uppercase tracking-widest">Systems Online</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-yellow-500 mb-2 font-display">5+</div>
                  <div className="text-gray-500 font-bold text-xs uppercase tracking-widest">Cycles</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-orange-500 mb-2 font-display">100%</div>
                  <div className="text-gray-500 font-bold text-xs uppercase tracking-widest">Uptime</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-yellow-500 mb-2 font-display">24/7</div>
                  <div className="text-gray-500 font-bold text-xs uppercase tracking-widest">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [ref, isVisible] = useInView({ triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setStatus('submitting');
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">Establish <span className="text-orange-500">Uplink</span></h2>
            <p className="text-xl text-gray-600 font-light">Transmit your signal. We are listening.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto items-start">
            <div className="flex flex-col justify-center warm-glass p-10 rounded-[2.5rem]">
              <h3 className="text-3xl font-bold mb-6 text-gray-800 font-display">Transmission Channels</h3>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg font-light">
                Whether you have a fully formed blueprint or just a spark of an idea, our channels are open.
              </p>
              <a href="mailto:hello.apricitystudios@gmail.com" className="text-orange-500 font-bold text-2xl hover:text-orange-400 transition-colors break-words">
                hello.apricitystudios@gmail.com
              </a>
            </div>

            <form onSubmit={handleSubmit} className="warm-glass p-10 rounded-[2.5rem]">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Identity</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-xl border ${errors.name ? 'border-red-400' : 'border-orange-200'} px-4 py-3 bg-white/50 text-gray-800 focus:outline-none focus:bg-white focus:border-orange-500 focus:shadow-sm transition-all font-medium placeholder-gray-400`}
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-2 font-medium">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Frequency (Email)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-xl border ${errors.email ? 'border-red-400' : 'border-orange-200'} px-4 py-3 bg-white/50 text-gray-800 focus:outline-none focus:bg-white focus:border-orange-500 focus:shadow-sm transition-all font-medium placeholder-gray-400`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-2 font-medium">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Data Packet</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full rounded-xl border ${errors.message ? 'border-red-400' : 'border-orange-200'} px-4 py-3 bg-white/50 text-gray-800 focus:outline-none focus:bg-white focus:border-orange-500 focus:shadow-sm transition-all min-h-[140px] font-medium placeholder-gray-400`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-2 font-medium">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg px-6 py-4 rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed transition-all flex justify-center items-center"
                >
                  {status === 'submitting' ? 'Transmitting...' : status === 'success' ? 'Transmission Sent!' : 'Send Transmission'}

                </button>

                {status === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-800 p-4 rounded-xl text-center font-bold">
                    Signal received. We will respond shortly.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="relative pt-48 pb-12 overflow-hidden text-white">
      {/* Real Mountain Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/footer-news.jpg"
          alt="Snow thinning in Humla mountains"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand & Slogan */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/30 backdrop-blur-sm">A</div>
              <span className="font-display font-bold text-2xl text-white shadow-black drop-shadow-md">Apricity</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We build digital products with warmth, precision, and a touch of Himalayan spirit.
            </p>
            <div className="inline-block px-4 py-2 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md">
              <p className="text-orange-300 font-bold tracking-widest uppercase text-xs">Slogan</p>
              <p className="text-white font-display font-bold text-lg">Forged in the Himalayas</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-400 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Process', 'Work', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-orange-300 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 group-hover:scale-150 transition-transform"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-400 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <span>Kathmandu, Nepal<br />Thamel, 44600</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">📧</span>
                <a href="mailto:hello@apricity.com" className="hover:text-orange-300 transition-colors">hello@apricity.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <a href="tel:+9779800000000" className="hover:text-orange-300 transition-colors">+977 980 000 0000</a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-lg mb-6 text-orange-400 uppercase tracking-wider">Location</h4>
            <div className="w-full h-48 rounded-2xl overflow-hidden border border-white/20 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625951288!2d85.3240!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1652345678901!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Apricity Studio Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Apricity Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ServiceDetail from './pages/ServiceDetail';

function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Services />
        <Process />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-[#FF8A00] selection:text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
