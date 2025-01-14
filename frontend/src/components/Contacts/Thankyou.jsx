// Install necessary packages before using:
// npm install react framer-motion tailwindcss

import React from "react";
import { motion } from "framer-motion";

const ThankYou = () => {
  return (
    <div className="flex flex-col justify-start h-screen bg-gradient-to-b from-blue-500 to-green-500 text-white">
      {/* Animated Header */}
      <div className="mx-auto w-[95%] md:max-w-[50%] p-5 rounded mt-36">
        <motion.h1
          className="text-4xl text-center font-bold mb-6 flex justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Thank you
        </motion.h1>

        {/* Animated Icon */}
        <motion.div
          className="text-center flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <img src="/email.png" alt="" />
          </div>
        </motion.div>

        {/* Message Section */}
        <motion.p
          className="text-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Thank you for your message.
          <br /> <span className="text-gray-200">We will get in touch with you shortly.</span>
        </motion.p>
      </div>
    </div>
  );
};

export default ThankYou;
