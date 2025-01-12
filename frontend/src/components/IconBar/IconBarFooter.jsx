import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { socialLinks } from "./constants";
const IconBarFooter = () => {
  return (
    <div>
      <p className="footer-company-about flex w-full justify-center mb-4">
        <span className="text-center">Follow us on</span>
      </p>
      <div className="flex gap-2 justify-center">
        <a
          href={`${socialLinks.facebook}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="px-3 py-3 text-lg bg-white text-blue-500 hover:text-blue-600 rounded-lg"
          />
        </a>
        <a
          href={`${socialLinks.facebook}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="px-3 py-3 text-lg bg-white text-pink-500 hover:text-pink-600 rounded-lg"
          />
        </a>
        <a
          href={`${socialLinks.facebook}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="px-3 py-3 text-lg bg-white text-blue-500 hover:text-blue-600 rounded-lg"
          />
        </a>
        <a
          href={`${socialLinks.facebook}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            className="px-3 py-3 text-lg bg-white text-red-500 hover:text-red-600 rounded-lg"
          />
        </a>
        <a
          href={`${socialLinks.facebook}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="px-3 py-3 text-lg bg-white text-blue-500 hover:text-blue-600 rounded-lg"
          />
        </a>
      </div>
    </div>
  );
};

export default IconBarFooter;
