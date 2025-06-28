import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants for project cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const Projects = () => {
  const [filter, setFilter] = useState('all');

  // Memoized project data to avoid re-creation every render
  const projects = useMemo(() => [
    { id: 1, title: 'Supervised Learning Models', category: 'ml', tags: ['Classification', 'Regression', 'Data Science'] },
    { id: 2, title: '2D Time Series Analysis', category: 'ml', tags: ['Time Series', 'Forecasting', 'Pattern Recognition'] },
    { id: 3, title: 'Resume Parser using NLP', category: 'ml', tags: ['NLP', 'Information Extraction', 'Text Processing'] },
    { id: 4, title: 'Portfolio Website', category: 'web', tags: ['React', 'Tailwind', 'JavaScript'] },
    { id: 5, title: 'E-commerce Platform', category: 'web', tags: ['Node.js', 'MongoDB', 'Express'] },
  ], []);

  const filteredProjects = useMemo(() => {
    return filter === 'all' ? projects : projects.filter(p => p.category === filter);
  }, [filter, projects]);

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  return (
    <section id="projects" className="py-20 min-h-screen">

      <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        Projects Portfolio
      </h2>
      <p className="text-center mb-10 text-gray-400 max-w-2xl mx-auto">
        A diverse collection of projects showcasing my expertise across artificial intelligence and web development.
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-10 flex-wrap gap-4">
        <motion.button
          onClick={() => handleFilterChange('all')}
          className={`px-4 py-2 rounded-full font-medium text-white ${
            filter === 'all' ? 'bg-purple-600 ring-2 ring-purple-400' : 'bg-gray-700'
          } hover:bg-purple-500 transition-all duration-300`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All Projects ({projects.length})
        </motion.button>
        <motion.button
          onClick={() => handleFilterChange('ml')}
          className={`px-4 py-2 rounded-full font-medium text-white ${
            filter === 'ml' ? 'bg-purple-600 ring-2 ring-purple-400' : 'bg-gray-700'
          } hover:bg-purple-500 transition-all duration-300`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Machine Learning / AI ({projects.filter(p => p.category === 'ml').length})
        </motion.button>
        <motion.button
          onClick={() => handleFilterChange('web')}
          className={`px-4 py-2 rounded-full font-medium text-white ${
            filter === 'web' ? 'bg-purple-600 ring-2 ring-purple-400' : 'bg-gray-700'
          } hover:bg-purple-500 transition-all duration-300`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Web Development ({projects.filter(p => p.category === 'web').length})
        </motion.button>
      </div>

      {/* Project Cards */}
      <AnimatePresence>
        {filteredProjects.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-sm bg-purple-600 px-2 py-1 rounded-full text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.p
            className="text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            No projects found for this category.
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
