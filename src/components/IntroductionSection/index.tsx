import React from "react";
import { motion } from "framer-motion";
import { TiSocialLinkedin } from "react-icons/ti";
import { DiGithubBadge } from "react-icons/di";
import { BiLogoWhatsapp } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function Introduction() {
  return (
    <section
      id="home"
      className="max-w-4xl sm:text-left leading-8 sm:mb-0 scroll-mt-28 pt-12"
    >
      {/* Profile Image */}
      {/* Added the comment */}
      <div className="flex items-center justify-center mb-8">
        <div className="relative">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 16,
              delay: 0.3,
              duration: 1.2,
            }}
          >
            <motion.img
              src={require("../../assets/Profile/myProfile.jpg")}
              alt="Muralidharan K"
              width="172"
              height="172"
              className="h-56 w-56 rounded-full object-cover border-b-2 border-white shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: "easeInOut",
              }}
            />
          </motion.span>

          <motion.span
            className="absolute bottom-5 right-5 text-2xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              stiffness: 125,
              delay: 0.4,
              ease: "easeInOut",
              duration: 1.2,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between w-full gap-6">
        {/* Left Column - Vertical Name */}
        <div className="w-full md:w-[10%] flex md:justify-start md:items-start">
          <Fade duration={3000} delay={300} damping={0.1} direction="up">
            {/* Desktop: Vertical Name */}
            <div className="hidden md:flex md:-rotate-90 md:origin-left md:translate-y-[40%] text-md font-semibold whitespace-nowrap items-center justify-center h-full">
              <span className="text-base font-normal leading-relaxed sm:text-lg">
                &lt; muralidharan / &gt;
              </span>
            </div>
            {/* Mobile: Big Name + Subtitle */}
            <div className="flex flex-col md:hidden items-start justify-center w-full text-left">
              <span className="text-4xl font-bold">Muralidharan</span>
              <hr className="w-16 h-1 my-3 bg-[#57d5ff] border-0" />
              <span className="text-base font-normal mt-1 tracking-wide border-gray-200 dark:border-gray-700 pt-2">
                &lt; Software Developer / &gt;
              </span>
            </div>
          </Fade>
        </div>

        {/* Middle Column - Main Content */}
        <div className="w-full md:w-[80%] items-center md:items-start">
          <Fade duration={2000} delay={200} damping={0.1}>
            <p className="mb-6 text-base font-normal leading-relaxed text-left">
              I'm a passionate developer who thrives oninnovation, excellence,
              and crafting high-quality digital experiences through continuous
              growth and dedication. I believe in writing clean, scalable code
              that drives real impact.
            </p>
          </Fade>
          <a
            href={require("../../assets/Resume/Resume.pdf")}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[rgb(87,213,255)] text-white font-semibold shadow-xl transition-all duration-300 group relative overflow-hidden"
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              className="w-6 h-6 bg-gray-50 text-gray-800 rounded-full border border-gray-400 p-1 ml-1 group-hover:rotate-90 transition-transform duration-300"
            >
              <path
                className="fill-gray-800"
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              ></path>
            </svg>
          </a>
        </div>

        {/* Right Column - Social Icons */}
        <div className="w-full md:w-[10%] flex md:flex-col justify-start md:justify-start md:items-start gap-2 md:gap-3">
          <Fade duration={3000} delay={500} damping={0.1} direction="up">
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
          </Fade>
        </div>
      </div>
    </section>
  );
}
