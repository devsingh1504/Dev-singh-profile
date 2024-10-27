// src/components/Contact.js
import React from "react";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    e.target.reset(); // Reset the form after submission
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-20 bg-gray-800 text-white"
    >
      {/* Positioning the toast at the top-center */}
      <Toaster position="top-center" reverseOrder={false} />

      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>

      <div className="max-w-md mx-auto space-y-8">
        <motion.div
          className="bg-gray-700 p-4 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl">Email me at:</p>
          <a
            href="mailto:youremail@example.com"
            className="text-blue-400 underline"
          >
            k.devsingh14@gmail.com
          </a>
          <p className="mt-4 text-xl">Or call me at:</p>
          <a href="tel:+1234567890" className="text-blue-400 underline">
            +918130881702
          </a>
        </motion.div>

        <motion.form
          className="grid gap-4 bg-gray-700 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
        >
          <input
            className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Message"
            rows="4"
            required
          ></textarea>
          <button
            className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition duration-300 transform hover:scale-105 text-white font-semibold"
            type="submit"
          >
            Send
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
