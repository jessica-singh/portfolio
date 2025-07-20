import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://srv-d1tncr3ipnbc73ch89l0.onrender.com/api/contact", formData);

      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      alert('Something went wrong.');
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-20 text-center">
      {/* ...heading and paragraph same as before... */}

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 mb-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-3 mb-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message here..."
          className="w-full p-3 mb-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
          rows="4"
        ></textarea>
        <motion.button
          type="submit"
          className="w-full px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-500 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
