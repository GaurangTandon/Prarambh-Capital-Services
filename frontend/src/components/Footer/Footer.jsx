import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="flex flex-col items-center"
          >
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <form className="w-full max-w-md space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded bg-gray-600 border-2 border-white text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded bg-gray-600 border-2 border-white text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-2 rounded bg-gray-600 border-2 border-white text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>
              <button className="w-full bg-yellow-500 text-gray-900 py-2 rounded hover:bg-yellow-600 transition-colors">
                Submit
              </button>
            </form>
          </motion.div>

          {/* Important Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="flex flex-col items-center"
          >
            <h2 className="text-xl font-bold mb-4">Important Links</h2>
            <nav className="flex flex-col items-center space-y-2">
              <Link to="/" className="hover:text-yellow-500 transition-colors">
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-yellow-500 transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="hover:text-yellow-500 transition-colors"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="hover:text-yellow-500 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </motion.div>

          {/* Address & Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="flex flex-col items-center"
          >
            <h2 className="text-xl font-bold mb-4">Address & Contact</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-sm bg-gray-600 border-2 border-white rounded-full p-2"
                />
                <p className="ml-4 text-sm">
                  123 Main Street
                  <br />
                  City, State 12345
                </p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="text-sm bg-gray-600 border-2 border-white rounded-full p-2"
                />
                <p className="ml-4 text-sm">(555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-sm bg-gray-600 border-2 border-white rounded-full p-2"
                />
                <a
                  href="mailto:example@email.com"
                  className="ml-4 text-sm text-yellow-500 hover:text-yellow-600"
                >
                  example@email.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
          className="text-center mt-8 pt-4 border-t border-gray-600"
        >
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
