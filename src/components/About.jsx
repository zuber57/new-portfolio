import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="about"
      className="py-20 bg-gray-100"
    >
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
          I'm a passionate Frontend Developer with 1.5+ years of experience
          building scalable web applications using React, Vue.js, and modern
          JavaScript. I specialize in creating pixel-perfect UIs and optimizing
          performance for seamless user experiences.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
