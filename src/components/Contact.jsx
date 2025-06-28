import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <motion.h2
        className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>
      <motion.p
        className="text-gray-400 max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Have a project in mind or interested in collaborating? Feel free to reach out and let’s create something amazing together.
      </motion.p>
      <motion.div
        className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 mb-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
        />
        <textarea
          placeholder="Your message here..."
          className="w-full p-3 mb-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
          rows="4"
        ></textarea>
        <motion.button
          className="w-full px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-500 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Contact;