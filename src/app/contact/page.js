"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] pt-24">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Get In Touch
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-xl leading-relaxed">
            Have a question or want to work together? Feel free to reach out to
            me using the form below or through my social media channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800/80 p-10 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Contact Information
            </h2>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="bg-purple-500/20 p-4 rounded-full mr-5 group-hover:bg-purple-500/30 transition-colors duration-300">
                  <EnvelopeIcon className="h-7 w-7 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Email
                  </h3>
                  <p className="text-gray-300 text-lg">
                    zeynepnyuksell@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-purple-500/20 p-4 rounded-full mr-5 group-hover:bg-purple-500/30 transition-colors duration-300">
                  <PhoneIcon className="h-7 w-7 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Phone
                  </h3>
                  <p className="text-gray-300 text-lg">+90 (539) 338-4989</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-purple-500/20 p-4 rounded-full mr-5 group-hover:bg-purple-500/30 transition-colors duration-300">
                  <MapPinIcon className="h-7 w-7 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Location
                  </h3>
                  <p className="text-gray-300 text-lg">Ankara, Turkey</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex space-x-5">
                <a
                  href="https://github.com/zeynepyuksell"
                  className="bg-gray-700/50 hover:bg-purple-500 p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/zeynep-y%C3%BCksel-685bba285/"
                  className="bg-gray-700/50 hover:bg-purple-500 p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800/80 p-10 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Send Me a Message
            </h2>

            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/20 border border-green-500 text-green-300 p-5 rounded-xl mb-8"
              >
                <p className="font-medium text-lg">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white text-lg transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white text-lg transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-base font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white text-lg transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-5 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white text-lg transition-all duration-300"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30 text-lg ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-800/80 p-10 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-sm mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div className="border-b border-gray-700/50 pb-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                What types of projects do you work on?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I specialize in web development projects, including responsive
                websites, web applications, and e-commerce solutions. I&apos;m
                also interested in mobile app development using React Native.
              </p>
            </div>

            <div className="border-b border-gray-700/50 pb-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                What is your typical response time?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I aim to respond to all inquiries within 24 hours during
                business days. For urgent matters, please indicate this in your
                message.
              </p>
            </div>

            <div className="border-b border-gray-700/50 pb-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Do you offer freelance services?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Yes, I offer freelance web development services. I&apos;m
                available for both short-term projects and long-term
                collaborations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                What is your pricing structure?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                My pricing varies depending on the scope and complexity of the
                project. I offer both fixed-price and hourly rate options.
                Please contact me with your project details for a personalized
                quote.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ContactPage;
