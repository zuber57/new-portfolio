import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Makkpress Enterprise, Delhi',
    role: 'Frontend Developer',
    duration: 'January 2024 – Present',
    achievements: [
      'Spearheaded development of 12+ client websites using React and TypeScript, improving page load speed by 35% via lazy loading and code splitting.',
      'Reduced client redesign requests by 50% by creating interactive prototypes in Figma, aligning with UX best practices.',
      'Integrated REST APIs with Axios, enhancing data fetching efficiency and reducing API latency by 20%.',
    ],
  },
  {
    company: 'Ok Software Solutions',
    role: 'Frontend Developer',
    duration: 'July 2023 – October 2023',
    achievements: [
      'Built a Vue.js-based SaaS dashboard used by 1k+ monthly active users, achieving 99% cross-browser compatibility and 95% Lighthouse accessibility score.',
      'Collaborated with backend teams to implement JWT authentication, reducing unauthorized access incidents by 90%.',
      'Automated UI testing using Jest, cutting bug reports by 60% and accelerating release cycles by 2 weeks.',
    ],
  },
];

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="experience"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold text-blue-600">{exp.role}</h3>
              <p className="text-gray-700 font-semibold">{exp.company}</p>
              <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-700">
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
