import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 text-white">

      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        Projects
      </h2>
      <p className="text-center mb-12 text-gray-400 max-w-xl mx-auto">
        Here’s a glimpse of my full-stack Instagram-style social media app — Jessify.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-sm mx-auto bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg p-4"
      >
        <h3 className="text-xl font-semibold text-purple-300 mb-3 text-center">
          Jessify – Instagram Clone
        </h3>

        {/* Preview image */}
        <div className="rounded-md overflow-hidden mb-4">
          <img
            src="/images/jesssify.png"
            alt="Jessify"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap justify-center gap-1 text-xs text-purple-400 mb-4">
          {['React', 'Node.js', 'MongoDB', 'JWT', 'Tailwind', 'Render + Vercel'].map((tech) => (
            <span key={tech} className="bg-purple-900/30 px-2 py-0.5 rounded-full border border-purple-600">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-3 text-sm">
          <a
            href="https://jesssify.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-1.5 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-medium"
          >
            <FaExternalLinkAlt /> Live
          </a>
          <a
            href="https://github.com/jessica-singh/jessify"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-md text-white font-medium"
          >
            <FaGithub /> Code
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
