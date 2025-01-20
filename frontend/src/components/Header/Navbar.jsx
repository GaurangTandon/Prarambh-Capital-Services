import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { title: "Home", path: "/" },
    // { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Calculator", path: "/calculator" },
    { title: "Contact", path: "/contacts" },
  ];

  const handleSidebarClose = () => setIsSidebarOpen(false);

  return (
    <div>
      {/* Navbar */}
      <nav
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="bg-primary shadow-[0_1px_2px_1px_rgba(0,0,0,0.6)] fixed w-full top-0 left-0 z-10"
      >
        <div className="max-w-page mx-auto px-4">
          <div className="flex justify-between items-center h-16 max-sm:h-14">
            {/* Website Name */}
            <div className="flex-shrink-0">
              <h1 className="text-lg max-sm:text-md font-semibold text-white">
                Prarambh Capital Services
              </h1>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "md:bg-white md:px-1 md:rounded-md text-primary"
                      : "text-gray-100 hover:text-gray-300 md:rounded-md transition-colors px-1"
                  }
                >
                  {link.title}
                </NavLink>
              ))}
            </div>

            {/* Hamburger Menu Button */}
            <div className="md:hidden">
              <button
                // onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-gray-100 flex items-center hover:text-gray-300 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleSidebarClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-primary shadow-lg z-50 md:hidden"
          >
            {/* Sidebar Header */}
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button
                  onClick={handleSidebarClose}
                  className="text-gray-100 hover:text-gray-300 focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Sidebar Navigation Links */}
            <div className="py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.path}
                  onClick={handleSidebarClose}
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-primary bg-gray-100 text-center"
                      : "block px-4 py-2 text-gray-100 hover:bg-gray-300 hover:text-primary transition-colors text-center"
                  }
                >
                  {link.title}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
