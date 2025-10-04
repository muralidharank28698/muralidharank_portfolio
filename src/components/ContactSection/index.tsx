import React from "react";
import { motion } from "framer-motion";
import { FaSearchLocation, FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import { DiGithubBadge } from "react-icons/di";
import { BiLogoWhatsapp } from "react-icons/bi";

export default function Contact() {
  return (
    <motion.section
      className="max-w-5xl mx-auto text-center leading-8 scroll-mt-28 pt-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <section
        id="contact"
        className="bg-gray-900 text-[hsl(215,15%,75%)] py-20 px-6 relative overflow-hidden rounded-3xl"
      >
        {/* Background Image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 md:left-0 md:translate-x-0">
          <img
            src={require("../../assets/Profile/Footer.png")}
            alt="Laptop Illustration"
            className="max-w-md md:max-w-xl"
          />
        </div>

        <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div className="space-y-6 text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Let’s build something amazing{" "}
              <span className="text-[#57d5ff] dark:text-[#57d5ff]">
                together
              </span>
            </h2>
            <p className="max-w-md">
              I’m{" "}
              <span className="text-[#57d5ff] dark:text-[#57d5ff]">
                Muralidharan
              </span>
              , a passionate{" "}
              <span className="text-[#57d5ff] dark:text-[#57d5ff]">
                Software Developer
              </span>{" "}
              specializing in creating modern, responsive, and user-friendly web
              applications. Whether you have a project, an idea, or just want to
              connect—drop me a message!
            </p>

            {/* Profile Section */}
            <div className="flex items-center space-x-4 pt-4">
              <img
                src={require("../../assets/Profile/myProfile.jpg")}
                alt="Muralidharan photo"
                className="w-20 h-20 rounded-full shadow-lg object-cover"
              />
              <p>
                <span className="font-semibold">Muralidharan</span>
                <br />
                <span className="text-[#57d5ff] dark:text-[#57d5ff]">
                  Software Developer
                </span>
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <p className="flex items-center gap-2">
                <FaSearchLocation className="text-[#57d5ff] dark:text-[#57d5ff]" />
                Based in: Chennai, India
              </p>
              <p className="flex items-start gap-2">
                <FaLaptopCode className="text-[#57d5ff] text-lg flex-shrink-0 mt-1" />
                <span className="leading-snug">
                  Open to: Freelance, Remote & Full-time opportunities
                </span>
              </p>
              <p className="flex items-center gap-2">
                <MdEmail className="text-[#57d5ff]" />
                muralidharank28698@gmail.com
              </p>
              {/* <p className="flex items-start gap-2">
                <FaLaptopCode className="text-[#57d5ff] text-lg flex-shrink-0 mt-1" />
                <span className="leading-snug">
                  Open to: Freelance, Remote & Full-time opportunities
                </span>
              </p>

              <p className="flex items-start gap-2">
                <FaLaptopCode className="text-[#57d5ff] text-lg flex-shrink-0 mt-1" />
                <span className="leading-snug">Based in: Chennai, India</span>
              </p>

              <p className="flex items-start gap-2">
                <MdEmail className="text-[#57d5ff] text-lg flex-shrink-0 mt-1" />
                <span className="leading-snug">muralidharan@example.com</span>
              </p> */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-gray-900 rounded-3xl shadow-lg p-4 sm:p-6 md:p-8">
            <form action="#" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First name*"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 
                   focus:border-[#57d5ff] focus:ring-1 focus:ring-[#57d5ff]"
                />

                <input
                  type="text"
                  name="lastname"
                  placeholder="Last name*"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 
                   focus:border-[#57d5ff] focus:ring-1 focus:ring-[#57d5ff]"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Your email*"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 
                 focus:border-[#57d5ff] focus:ring-1 focus:ring-[#57d5ff]"
              />

              <input
                type="text"
                name="company"
                placeholder="Company / Project name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 
                 focus:border-[#57d5ff] focus:ring-1 focus:ring-[#57d5ff]"
              />

              <textarea
                name="message"
                placeholder="Tell me about your project*"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 
                 focus:border-[#57d5ff] focus:ring-1 focus:ring-[#57d5ff]"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 px-6 text-white font-semibold rounded-xl shadow-md transition 
                 focus:outline-none focus:ring-0 active:outline-none active:ring-0"
                style={{ backgroundColor: "#57d5ff" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Footer */}

      {/* Social Footer */}
      <section>
        <div className="max-w-screen-xl px-4 pt-6 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          {/* Border above icons */}
          <div className="border-t border-neutral-200/40 dark:border-neutral-700/40 pt-6">
            <div className="flex justify-center mt-8 space-x-4 text-2xl">
              <a
                className="bg-white p-2 text-gray-700 hover:text-gray-950 flex items-center justify-center rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://www.linkedin.com/in/muralidharank280698/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialLinkedin size={18} />
              </a>
              <a
                className="bg-white p-2 text-gray-700 hover:text-gray-950 flex items-center justify-center rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://github.com/muralidharank28698"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiGithubBadge size={18} />
              </a>
              <a
                className="bg-white p-2 text-gray-700 hover:text-gray-950 flex items-center justify-center rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://github.com/muralidharank28698"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoWhatsapp size={18} />
              </a>
            </div>
          </div>

          <p className="mt-4 text-base leading-6 text-center">
            © 2025 Designed & Built by{" "}
            <span className="text-[#57d5ff] dark:text-[#57d5ff]">
              Muralidharan
            </span>
            . All rights reserved.
          </p>
        </div>
      </section>
    </motion.section>
  );
}
