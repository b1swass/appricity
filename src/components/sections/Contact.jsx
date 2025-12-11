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
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                    className={`w-full rounded-xl border ${
                      errors.name ? "border-red-400" : "border-gray-200"
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
                    className={`w-full rounded-xl border ${
                      errors.email ? "border-red-400" : "border-gray-200"
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
                    className={`w-full rounded-xl border ${
                      errors.message ? "border-red-400" : "border-gray-200"
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
