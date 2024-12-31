import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      // ref={myRef}
      className="max-w-4xl text-center leading-8 sm:mb-0 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <section>
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <div className="flex justify-center mt-8 space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <FaGithub />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <FaTwitter />
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2024 designed by muralidharan. All rights reserved.
          </p>
        </div>
      </section>
    </motion.section>
  );
}
