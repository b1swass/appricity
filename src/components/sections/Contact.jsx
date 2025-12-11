import React, { useState } from "react";
import { useInView } from "../../hooks/useInView";

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

      const subject = `New Project Inquiry from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:hello.apricitystudios@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;

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

              <div className="flex gap-4 mt-8">
                <a
                  href="https://www.instagram.com/apricitystudio.co/?next=%2F"
                  aria-label="Instagram"
                  className="w-12 h-12 rounded-xl bg-gray-900 hover:bg-gray-800 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/apricity-studios-916301396/"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-xl bg-gray-900 hover:bg-gray-800 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
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
                    Email
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
                    Message{" "}
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
                      ? "message Sent!"
                      : "Send message"}
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

export default Contact;
