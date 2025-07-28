import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";

const Footer = () => {
  return (
    <motion.footer
      className="bg-nav border-t-2 border-card text-white text-center p-4 border-t-white/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="mb-4">
        <p className="text-sm sm:text-base">Follow me on social platforms</p>
      </div>
      <div className="flex justify-center gap-4 mb-4">
        <a
          href="https://github.com/Akrittt"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/akrit-gupta-ba6717263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:akritttgupta@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors text-2xl"
        >
          <IoMdMailUnread />
        </a>
        <a
          href="https://wa.me/9873900053"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors text-2xl"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/akrittt_gupta/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors text-2xl"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="text-sm sm:text-base">
        © {new Date().getFullYear()} Akrit Gupta. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;