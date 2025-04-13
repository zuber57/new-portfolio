import React from 'react';
import { motion } from 'framer-motion';
const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Built a full-stack e-commerce platform with React, Redux, and Firebase.',
    link: 'https://stylum.vercel.app/',
  },
  {
    title: 'Real-Time Chat App',
    description: 'Developed a real-time chat app using Vue.js and WebSocket.',
    link: 'https://github.com/zuber57/chat-app',
  },
  {
    title: 'Music Streaming App',
    description: 'Created a Spotify-like app with JavaScript and Howler.js.',
    link: 'https://github.com/zuber57/music-app',
  },
  {
    title: 'AmerDental',
    description: 'Developed an e-commerce website on Shopify for AmerDental.',
    link: 'https://amerdental.com/',
  },
  {
    title: 'Karri.io',
    description: 'Built a Shopify store for Karri.io.',
    link: 'https://karri.io/',
  },
  {
    title: 'Itsskinny',
    description: 'Created a Shopify website for Itsskinny.',
    link: 'https://itsskinny.com/',
  },
  {
    title: 'JarBarLar',
    description:
      'Built a WordPress site for JarBarLar, showcasing custom themes and plugins.',
    link: 'https://jarbarlar.com.sg/',
  },
  {
    title: 'MemeZone',
    description:
      'Developed a core project with HTML, CSS, and JS for MemeZone.',
    link: 'https://www.memezone.world/',
  },
];

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="projects"
      className="py-20 w-full bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
