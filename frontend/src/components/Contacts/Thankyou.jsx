import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { scrollUp } from "../ScrollToTop/ScrollToTop";
const ThankYou = (props) => {
  useEffect(()=>{scrollUp()});
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-start h-full w-full bg-gradient-to-b from-blue-500 to-green-500 text-white rounded-bl-md rounded-br-md">
      {/* Animated Header */}
      <div className="mx-auto p-5 rounded mt-36 flex flex-col items-center">
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
            <img src="/email.png" alt="email" />
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
          <br />{" "}
          <span className="text-gray-200">
            We will get in touch with you shortly.
          </span>
        </motion.p>

        <motion.button
          onClick={() =>{ if(props.close) props.close(); navigate("/");}}
          className="text-lg text-center p-2 bg-white text-primary my-8 rounded-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Back to Home
        </motion.button>
      </div>
    </div>
  );
};

export default ThankYou;
