import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="contact"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <form className="max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
