import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const serviceID = 'service_u2yajx2';
    const templateID_main = 'template_kjnsxub';    // Send to YOU
    const templateID_auto = 'template_zlznxkm';    // Auto-reply
    const publicKey = 'HOZIXKh0ApxkLUQo5';

    emailjs.send(serviceID, templateID_main, formData, publicKey)
      .then(() => {
        return emailjs.send(serviceID, templateID_auto, formData, publicKey);
      })
      .then(() => {
        alert('Message sent and auto-reply sent!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Email sending error:', err);
        alert('An error occurred. Please try again.');
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section id="contact" className="py-20 text-center">
      <motion.h2
        className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

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
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-3 mb-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message here..."
          className="w-full p-3 mb-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
          rows="4"
          required
        />
        <motion.button
          type="submit"
          disabled={sending}
          className={`w-full px-6 py-3 rounded-full transition-all duration-200 shadow-md ${
            sending ? 'bg-purple-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-500'
          }`}
          whileHover={!sending ? { scale: 1.05 } : {}}
          whileTap={!sending ? { scale: 0.95 } : {}}
        >
          {sending ? 'Sending...' : 'Send Message'}
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
