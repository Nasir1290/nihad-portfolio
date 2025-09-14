/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success(
          "Thank you for your message! I will get back to you soon.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          }
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Error sending message. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("Error sending message. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            For <span className="text-[#00d4ff]">Contact</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's discuss your next project and bring your ideas to life
          </motion.p>
        </div>
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff]/20 transition-all"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff]/20 transition-all"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff]/20 transition-all"
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-500 resize-vertical min-h-[120px] focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff]/20 transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-white py-4 rounded-full font-semibold hover:-translate-y-1 transition-all shadow-lg hover:shadow-cyan-500/30 disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
