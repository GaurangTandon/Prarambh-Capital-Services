import React from "react";
import { motion } from "framer-motion";
const WAicon = () => {
  return (
    <div>
      <motion.a
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        href="https://wa.me/918604885599"
        target="_blank"
        className="fixed bottom-16 right-5 w-12 h-12 flex justify-center items-center rounded-2xl text-xl bg-transparent cursor-pointer"
      >
        <img src="/wa.png" alt="wa" />
      </motion.a>
    </div>
  );
};

export default WAicon
