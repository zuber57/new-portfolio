import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'React',
  'Vue.js',
  'next.js',
  'JavaScript',
  'Jquery',
  'Api',
  'Liquid',
  'Shopify App Development',
  'Shopify Cli',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Shopify',
  'Wordpress',
  'Git',
  'Material Ui',
  'Shadcn'
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="skills"
      className="py-20 bg-white w-full"
    >
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-4xl font-bold text-center text-[#000] mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
