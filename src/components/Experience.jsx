import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Beta Soft Technology, Delhi",
    role: "Frontend Developer / Shopify Developer",
    duration: "Aug 2024 – Present",
    achievements: [
      "Spearheaded the development and optimization of high-traffic eCommerce stores on Shopify, including major projects like KCA and Sunskara, delivering seamless user experiences and robust functionality.",
      "Enhanced website performance by implementing advanced performance optimization techniques, significantly reducing load times and boosting user engagement.",
      "Integrated multiple third-party apps and custom solutions to extend functionality, improving store performance, scalability, and ease of use.",
      "Utilized Next.js to build high-performance, dynamic pages for the Expertalia site, improving both SEO and load efficiency.",
      "Collaborated with cross-functional teams, including designers, backend developers, and project managers, to deliver end-to-end solutions aligned with client goals."
    ]
  },
  {
    company: "DhampurGreen, Delhi",
    role: "Web Developer",
    duration: "April 2024 – Aug 2025",
    achievements: [
      "Started as a freelance web developer, working on both DhampurGreen.com and DelightFoods.com, where I implemented a custom search functionality on Shopify, enhancing user experience and product discoverability.",
      "Transitioned to a full-time role, taking ownership of ongoing website optimization and performance improvements across both websites, significantly reducing load times and improving site responsiveness.",
      "Integrated multiple third-party apps and custom solutions into both DhampurGreen.com and DelightFoods.com to boost store performance, streamline operations, and enhance customer engagement.",
      "Collaborated with design, marketing, and backend teams to ensure seamless integration of branding, promotions, and ecommerce functionality on both websites."
    ]
  },  
  {
    company: 'Makkpress Enterprise, Delhi',
    role: 'Frontend Developer',
    duration: 'January 2024 - July 2025',
    achievements: [
      'Spearheaded development of 12+ client websites using React , Shopify ,wordpress improving page load speed by 35% via lazy loading and code splitting.',
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
