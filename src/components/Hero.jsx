// src/components/Hero.js
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Main Text */}
        <h1 className="text-5xl md:text-7xl font-bold">
          Hi, I'm <span className="text-blue-500">Dev Singh</span>
        </h1>
        <p className="text-xl md:text-2xl mt-4">FullStack Developer</p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          <motion.a
            href="https://www.linkedin.com/in/dev-singh-11aa812a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-3xl text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/devsingh1504" // replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-3xl text-gray-200 hover:text-gray-600 transition-colors duration-200"
          >
            <FaGithub />
          </motion.a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mt-8">
          <motion.button
            className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore My Work
          </motion.button>
          <motion.a
            href="https://drive.google.com/file/d/1KI_e6C6blodHCi_3AtdwqGmpYlHQ9r8S/view?usp=drivesdk" // replace with the path to your resume
            download="Dev Resume.pdf"
            className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
