import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const messages = ['Hello there,', 'Welcome to my website!'];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex(prev => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 gap-10"
    >
      {/* Terminal Box */}
      <div
        className="relative bg-black/80 p-6 rounded-2xl shadow-[0_0_25px_rgba(128,0,255,0.2)] border border-purple-500 backdrop-blur-sm w-full md:w-1/2 max-w-md h-48 md:h-52"
      >
        <div className="flex items-center mb-3">
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          </div>
          <span className="ml-4 text-sm text-gray-400">terminal.exe</span>
        </div>

        <div className="text-green-400 font-mono h-12 md:h-14 overflow-hidden">
          <span className="text-purple-400">visitor@neural-portfolio:~$ </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentMessageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block"
            >
              {messages[currentMessageIndex].split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </AnimatePresence>
          <span className="animate-blink">█</span>
        </div>
      </div>

      {/* Text Block */}
      <div className="text-center md:text-left md:w-1/2">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
          Innovating through Code and Data
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
          Passionate about crafting intelligent solutions by integrating AI and full-stack development. 
          I specialize in building scalable, data-driven applications that solve real-world problems with precision and purpose.
        </p>
        <a href="#projects">
          <button className="mt-6 px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-500 transition-all duration-200 shadow-md">
            View Projects
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
