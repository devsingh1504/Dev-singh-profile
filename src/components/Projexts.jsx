// src/components/Projects.js
import React from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    name: "StudySem",
    description: "A platform for students to access notes and study materials.",
    image: "/study.png", // Replace with the actual image path
    link: "https://studysem.vercel.app",
  },
  {
    name: "Textinsideimage",
    description:
      "Design thumbnails and templates instantly with the magic of AI.",
    image: "/textinsideimage.png", // Replace with the actual image path
    link: "https://www.textinsideimage.xyz",
  },
  {
    name: "Newsbyte",
    description:
      "A news app similar to Inshorts, where users can upload blogs.",
    image: "/news.png", // Replace with the actual image path
    link: "https://newsbyte-nvwc.onrender.com",
  },
  {
    name: "ChatApp",
    description: "A real-time chat application built with the MERN stack.",
    image: "/chat.png", // Replace with the actual image path
    link: "https://message-talk.onrender.com",
  },
  {
    name: "Rankbridge",
    description:
      "A platform for students to check their rank and explore the top engineering colleges under IPU University.",
    image: "/rankbridge.png", // Replace with the actual image path
    link: "https://rankbridge.onrender.com",
  },
  {
    name: "Learnignite",
    description:
      "A platform for students to access educational resources and enhance their learning experience.",
    image: "/learn.png", // Replace with the actual image path
    link: "https://learnignite.onrender.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-20 bg-gray-900">
      <h2 className="text-4xl font-bold mb-8 text-center text-white">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src={project.image}
              alt={`${project.name} screenshot`}
              className="w-full h-48 md:h-64 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-white">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300 transform hover:scale-105"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
