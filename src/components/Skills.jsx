// src/components/Skills.js
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiBootstrap,
  SiMysql,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiGraphql,
  SiDocker,
} from "react-icons/si";

const skillsData = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-20 bg-gray-800">
      <h2 className="text-4xl font-bold mb-8 text-center text-white">Skills</h2>

      {/* Desktop & Tablet Layout */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-8">
        {skillsData.map(({ name, icon }) => (
          <motion.div
            key={name}
            className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            whileHover={{ rotate: 5, scale: 1.1 }}
          >
            <div className="text-4xl mb-2">{icon}</div>
            <p className="text-center text-white">{name}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile Layout with Hidden Scrollbar and Smooth Animation */}
      <div className="md:hidden overflow-x-auto scrollbar-hide">
        <motion.div
          className="flex space-x-6 px-4"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 10, // Increase duration for smoother scroll
            ease: "linear",
          }}
          style={{ display: "flex", minWidth: "100vw" }}
        >
          {skillsData.map(({ name, icon }) => (
            <motion.div
              key={name}
              className="flex flex-col items-center w-24 p-4 bg-gray-700 rounded-lg shadow-lg"
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-4xl mb-2">{icon}</div>
              <p className="text-center text-white">{name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

// // src/components/Skills.js
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJsSquare,
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaFigma,
// } from "react-icons/fa";
// import {
//   SiTailwindcss,
//   SiMongodb,
//   SiRedux,
//   SiBootstrap,
//   SiMysql,
//   //SiMaterialui,
//   SiExpress,
// } from "react-icons/si";

// const skillsData = [
//   { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
//   { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
//   { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
//   { name: "React", icon: <FaReact className="text-blue-400" /> },
//   { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
//   { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
//   { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
//   { name: "Express", icon: <SiExpress className="text-gray-400" /> },
//   { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
//   { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
//   //{ name: "Material UI", icon: <SiMaterialui className="text-blue-500" /> },
//   { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
//   { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
//   { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="py-20 px-4 md:px-20 bg-gray-800">
//       <h2 className="text-4xl font-bold mb-8 text-center text-white">Skills</h2>

//       {/* Desktop & Tablet Layout */}
//       <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-8">
//         {skillsData.map(({ name, icon }) => (
//           <motion.div
//             key={name}
//             className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
//             whileHover={{ rotate: 5, scale: 1.1 }}
//           >
//             <div className="text-4xl mb-2">{icon}</div>
//             <p className="text-center text-white">{name}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Mobile Layout with Hidden Scrollbar and Smooth Animation */}
//       <div className="md:hidden overflow-x-auto scrollbar-hide">
//         <motion.div
//           className="flex space-x-6 px-4"
//           animate={{ x: ["0%", "-100%"] }}
//           transition={{
//             repeat: Infinity,
//             duration: 10, // Increase duration for smoother scroll
//             ease: "linear",
//           }}
//           style={{ display: "flex", minWidth: "100vw" }}
//         >
//           {skillsData.map(({ name, icon }) => (
//             <motion.div
//               key={name}
//               className="flex flex-col items-center w-24 p-4 bg-gray-700 rounded-lg shadow-lg"
//               whileTap={{ scale: 0.95 }}
//             >
//               <div className="text-4xl mb-2">{icon}</div>
//               <p className="text-center text-white">{name}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
