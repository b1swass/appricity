import React, { useState, useEffect, useRef } from "react";

// --- Hooks ---

function useInView(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.triggerOnce) {
            observer.disconnect();
          }
        }
      },
      { threshold: 0.1, ...options }
    );

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
  const [isScrolled, setIsScrolled] = useState(false);

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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <div className="hidden md:flex items-center gap-2">
          {["Home", "Services", "Process", "Work", "About"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:bg-gray-100"
            >
              {item}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-gray-900 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold shadow-lg shadow-black/20 hover:shadow-black/40 hover:-translate-y-0.5 transition-all ml-2"
        >
          Let's Talk
        </button>
      </div>
    </nav>
  );
};

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
              className="bg-gray-900 text-white px-12 py-5 rounded-full shadow-xl shadow-black/20 hover:shadow-black/40 hover:-translate-y-1 transition-all font-bold text-xl flex items-center gap-3 group"
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
              className="bg-white/80 text-gray-800 border-2 border-gray-100 px-12 py-5 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all font-bold text-xl shadow-lg shadow-black/5 backdrop-blur-sm"
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

import {
  Code2,
  Smartphone,
  Terminal,
  Palette,
  Clapperboard,
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
    // {
    //   id: "motion-graphics-vfx",
    //   title: "Motion Graphics & VFX",
    //   desc: "Explainer videos, promos, and visual effects that make your brand stand out.",
    //   icon: <Clapperboard size={40} className="text-gray-800" />,
    // },
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
              const [ref, isVisible] = useInView({ triggerOnce: true });
              return (
                <div
                  key={index}
                  ref={ref}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  className={`flex flex-col items-center text-center relative group ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                    } transition-all duration-700`}
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

import { projects } from "./data/projects";

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
                <div
                  className={`h-72 ${project.color} rounded-[1.5rem] w-full mb-8 overflow-hidden relative group-hover:opacity-90 transition-opacity shadow-inner`}
                >
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display font-bold text-4xl text-white/40 uppercase tracking-widest group-hover:text-white/60 transition-colors">
                      Project {index + 1}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="px-2 pb-4">
                  <h3 className="text-2xl font-bold text-gray-800 font-display mb-3 group-hover:text-gray-900 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 font-light leading-relaxed">
                    {project.desc}
                  </p>
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

const Contact = () => {
  const [ref, isVisible] = useInView({ triggerOnce: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setStatus("submitting");
      setTimeout(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Establish <span className="text-gray-500">Uplink</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Transmit your signal. We are listening.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto items-start">
            <div className="flex flex-col justify-center modern-glass p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem]">
              <h3 className="text-3xl font-bold mb-6 text-gray-800 font-display">
                Transmission Channels
              </h3>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg font-light">
                Whether you have a fully formed blueprint or just a spark of an
                idea, our channels are open.
              </p>
              <a
                href="mailto:hello.apricitystudios@gmail.com"
                className="text-gray-800 font-bold text-2xl hover:text-gray-600 transition-colors break-words"
              >
                hello.apricitystudios@gmail.com
              </a>
            </div>

            <form
              onSubmit={handleSubmit}
              className="modern-glass p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem]"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide"
                  >
                    Identity
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-xl border ${errors.name ? "border-red-400" : "border-gray-200"
                      } px-4 py-3 bg-white/50 text-gray-800 focus:outline-none focus:bg-white focus:border-gray-500 focus:shadow-sm transition-all font-medium placeholder-gray-400`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2 font-medium">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide"
                  >
                    Frequency (Email)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-xl border ${errors.email ? "border-red-400" : "border-gray-200"
                      } px-4 py-3 bg-white/50 text-gray-800 focus:outline-none focus:bg-white focus:border-gray-500 focus:shadow-sm transition-all font-medium placeholder-gray-400`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2 font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide"
                  >
                    Data Packet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full rounded-xl border ${errors.message ? "border-red-400" : "border-gray-200"
                      } px-4 py-3 bg-white/50 text-gray-800 focus:outline-none focus:bg-white focus:border-gray-500 focus:shadow-sm transition-all min-h-[140px] font-medium placeholder-gray-400`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2 font-medium">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="w-full bg-gray-900 text-white font-bold text-lg px-6 py-4 rounded-full shadow-lg shadow-black/20 hover:shadow-black/40 hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed transition-all flex justify-center items-center"
                >
                  {status === "submitting"
                    ? "Transmitting..."
                    : status === "success"
                      ? "Transmission Sent!"
                      : "Send Transmission"}
                </button>

                {status === "success" && (
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
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Mountain background"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/85 to-white/75"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                A
              </div>
              <span className="font-bold text-3xl text-gray-900 tracking-tight">
                Apricity
              </span>
            </div>
            <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-xs">
              Digital products with clarity and precision.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-gray-900 hover:bg-gray-800 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-lg bg-gray-900 hover:bg-gray-800 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-gray-900 hover:bg-gray-800 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-gray-900 hover:bg-gray-800 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-bold text-sm mb-6 text-gray-900 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Services", "Process", "Work", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm block text-left hover:translate-x-1 transform transition-transform"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold text-sm mb-6 text-gray-900 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Web Design",
                "App Development",
                "Brand Strategy",
                "UI/UX Design",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm block hover:translate-x-1 transform transition-transform"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-sm mb-6 text-gray-900 uppercase tracking-wider">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 group">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-500 group-hover:text-gray-900 transition-colors">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm leading-relaxed">
                  Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-start gap-2 group">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-500 group-hover:text-gray-900 transition-colors">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:hello.apricitystudios@gmail.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm break-all leading-relaxed"
                >
                  hello.apricitystudios@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 group">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-500 group-hover:text-gray-900 transition-colors">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <a
                  href="tel:+9779800000000"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm leading-relaxed"
                >
                  +977 980 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-400/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Apricity Studio. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                Terms of Service
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import ServiceDetail from "./pages/ServiceDetail";

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
      <div className="min-h-screen font-sans selection:bg-gray-800 selection:text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
