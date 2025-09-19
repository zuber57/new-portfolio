import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 md:px-8"
    >
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center mx-auto">
        Zuber Ahmad
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl md:text-2xl mb-6 text-center max-w-3xl">
        Frontend Developer | React Js Developer | Next js | Tailwind Css| Shopify | Bigcommerce | Wordpress
      </p>

      {/* Button */}
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
      >
        View My Work
      </a>
    </motion.section>
  );
};

export default Hero;
