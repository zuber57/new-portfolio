import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_aa51zhv', // replace with your actual Service ID
        'template_9eg7rmk', // replace with your actual Template ID
        form.current,
        '3-kgH5wvggcIZoos-' // replace with your actual Public Key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error(error);
        }
      );
  };

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
        <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
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
