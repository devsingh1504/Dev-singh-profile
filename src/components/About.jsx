// src/components/About.js
import React from "react";
import { motion } from "framer-motion";
import yourPhoto from "/dev.jpg"; // Replace with the actual path to your photo

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-20 bg-gray-900 flex flex-col md:flex-row items-center md:items-start justify-center"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex-shrink-0 mb-8 md:mb-0 md:mr-12 lg:mr-16"
      >
        <img
          src={yourPhoto}
          alt="Dev Singh"
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-8 border-blue-500 shadow-2xl transform hover:scale-110 transition-all duration-500 ease-in-out"
        />
      </motion.div>

      {/* About Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left max-w-2xl"
      >
        <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hi, I'm Dev a passionate and enthusiastic programmer. I have a strong
          self-learning attitude and a keen interest in exploring new
          technologies. Problem-solving excites me, and I enjoy working with
          various web technologies to make the web more accessible and open. My
          core expertise lies in JavaScript, which I leverage to build dynamic
          and interactive web applications. I'm always eager to learn, grow, and
          take on new challenges. I am open to job opportunities that align with
          my skills and interests.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
