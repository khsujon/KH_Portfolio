import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.facebook.com/kamrulhasan010/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={24} />
      </a>
      <a
        href="https://www.instagram.com/mr_kamrulhasan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/khsujon/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;