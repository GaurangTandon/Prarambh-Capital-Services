import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { address, contact, importantLinks } from "./constants";
import IconBarFooter from "../IconBar/IconBarFooter";
export default function Footer() {
  return (
    <footer className="w-full flex-col justify-center items-center bg-gray-800 text-white p-10">
      <div className="max-w-[1200px] w-full flex max-[900px]:flex-col flex-wrap justify-evenly items-center gap-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: false }}
        >
          <img className="w-[150px] max-md:w-[125px]" src="/logo.png" alt="logo" />
          {/* <div className="flex flex-wrap gap-2 text-sm xl:text-md">
            <NavLink className="border-r-2 border-white pr-2" to="/">
              मुख्य पृष्ठ
            </NavLink>
            <NavLink className="border-r-2 border-white pr-2" to="/guests">
              अतिथि
            </NavLink>
            <NavLink className="border-r-2 border-white pr-2" to="/team">
              सदस्य
            </NavLink>
            <NavLink to="/gallery">वीथिका</NavLink>
          </div> */}
          {/* <p className="footer-company-name text-sm text-center text-yellow-500">
            Tooryanaad © 2024
          </p> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: false }}
        >
          <div className="mb-2 flex items-center">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-sm bg-gray-900 rounded-full p-2"
            />
            <p className="inline text-sm ml-4">
              <span>{address.street}</span>
              <br />
              {address.city}, {address.state}, {address.zip}
            </p>
          </div>

          <div className="mb-2 flex items-center">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="text-sm bg-gray-900 rounded-full p-2"
            />
            <p className="inline text-sm ml-4">{contact.phone}</p>
          </div>

          <div className="mb-4 flex items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-sm bg-gray-900 rounded-full p-2"
            />
            <p className="inline text-sm ml-4">
              <a href={`mailto:${contact.email}`} className="text-yellow-500">
                {contact.email}
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: false }}
        >
          <IconBarFooter/>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false }}
        className="w-[90%] max-sm:w-full mx-auto my-2 border border-white"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="max-w-[1200px] text-sm w-full flex gap-2 max-md:flex-col justify-between items-center mx-auto"
      >
        <div className="text-center">
          Copyright © 2025 All Rights Reserved.
        </div>
        <div className="flex flex-wrap justify-center">
          {importantLinks.map((ele, index) => (
            <a
              key={index}
              href={`${ele.url}`}
              className="text-sm text-gray-300 hover:text-white px-1 border-r-2 border-white"
            >
              {ele.name}
            </a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
