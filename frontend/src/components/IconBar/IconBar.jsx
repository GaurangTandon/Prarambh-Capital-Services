import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { socialLinks } from "./constants";
const IconBar = () => {
  return (
    <div className="max-sm:hidden fixed top-1/2 -translate-y-1/2 z-10 ">
      <motion.div
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-primary shadow-[0_1px_5px_3px_rgba(0,0,0,0.6)] py-5 rounded-r-3xl"
      >
        <div className="grid grid-cols-1 gap-1 w-10">
          <a
            href={`${socialLinks.facebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-full  py-1 text-blue-400 hover:text-blue-600 bg-primary "
            />
          </a>
          <a
            href={`${socialLinks.facebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-full  py-1 text-pink-400 hover:text-pink-600 bg-primary "
            />
          </a>
          <a
            href={`${socialLinks.facebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="w-full  py-1 text-blue-400 hover:text-blue-600 bg-primary "
            />
          </a>
          <a
            href={`${socialLinks.facebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="w-full  py-1 text-red-400 hover:text-red-600 bg-primary "
            />
          </a>
          <a
            href={`${socialLinks.facebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-full  py-1 text-blue-400 hover:text-blue-600 bg-primary "
            />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default IconBar;
