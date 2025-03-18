// src/components/Contact.js
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white px-6 md:px-20"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>

      <motion.div
        className="bg-gray-700 p-6 md:p-10 rounded-lg shadow-lg text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-xl">Feel free to reach out to me via email:</p>

        <a
          href="mailto:k.devsingh14@gmail.com"
          className="flex items-center justify-center space-x-2 text-blue-400 text-2xl font-semibold hover:underline"
        >
          <FaEnvelope />
          <span>k.devsingh14@gmail.com</span>
        </a>

        {/* <a
          href="tel:+918130881702"
          className="flex items-center justify-center space-x-2 text-blue-400 text-2xl font-semibold hover:underline"
        >
          <FaPhone />
          <span>+91 8130881702</span>
        </a> */}
      </motion.div>
    </section>
  );
};

export default Contact;
