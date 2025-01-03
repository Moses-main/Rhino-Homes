"use client";

import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "../styles/globals.css";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat hero-bg"
        style={{
          backgroundImage: "url('/images/contactBg.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000D1] to-[#C4C4C400]" />

        <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center">
          <div className="absolute top-0 left-0 w-full z-10 mt-4">
            {/* Add Navigation here */}
            <Navigation />

            <motion.div
              className="relative h-full flex flex-col justify-center items-start pl-4 sm:pl-8 md:pl-16 text-white mt-10 sm:mt-20 md:mt-40 space-y-2 sm:space-y-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold">
                Contact Us
              </h1>
              <p className="text-xs sm:text-sm md:text-lg max-w-[80%] sm:max-w-[60%] md:max-w-xl border-l-4 border-red-500 text-left pl-2 sm:pl-4">
                Etiam scelerisque tortor at lectus dapibus, nec fermentum diam
                feugiat. Morbi rutrum magna et dui.
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      <motion.div
        className="text-lg sm:text-xl md:text-2xl font-bold text-red-800 border-b-4 border-red-800 max-w-[80%] sm:max-w-[50%] md:max-w-[30%] lg:w-[20%] m-auto text-center mt-5 py-3 sm:py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Get In Touch
      </motion.div>

      {/* Contact Section */}
      <div className="container my-7 mx-auto px-4 py-10 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 shadow-lg">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
            Leave us a message
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 sm:py-3 rounded-md hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="space-y-4 sm:space-y-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
              Contact Information
            </h2>
            <p className="text-gray-700">
              Feel free to reach out to us through the following channels:
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Address</h3>
            <p className="text-gray-700">No. 14 Nwadinobi Crescent, BCA Road</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Phone</h3>
            <p className="text-gray-700 flex items-center">
              <FaPhoneAlt className="mr-2" /> +123 456 7890
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Email</h3>
            <p className="text-gray-700 flex items-center">
              <FaEnvelope className="mr-2" /> info@example.com
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaInstagram size={24} />
            </a>
          </div>
          {/* Google Map Placeholder */}
          <div className="w-full h-32 sm:h-40 bg-gray-200 rounded-md">
            <p className="text-center text-gray-600">Google Maps Placeholder</p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
