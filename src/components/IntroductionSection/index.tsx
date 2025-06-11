import React from "react";
import { motion } from "framer-motion";
import { TiSocialLinkedin } from "react-icons/ti";
import { DiGithubBadge } from "react-icons/di";
import { BiLogoWhatsapp } from "react-icons/bi";
// import { FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function Introduction() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] w-full"
    >
      {/* Profile Image */}
      <div className="flex items-center justify-center mb-8">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <img
              src={require("../../assets/Profile/myProfile.jpg")}
              alt="Muralidharan K"
              width="172"
              height="172"
              className="h-40 w-40 rounded-full object-cover border-b-2 border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-5 right-5 text-2xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between w-full gap-6 px-4">
        {/* Left Column - Vertical Name */}
        <div className="w-full md:w-[10%] flex justify-center md:justify-start md:items-start">
          <Fade duration={3000} delay={300} damping={0.1} direction="up">
            <div className="md:-rotate-90 md:origin-left md:translate-y-[40%] text-md font-semibold whitespace-nowrap flex items-center justify-center h-full">
              <span
                className="bg-gradient-to-r from-blue-500 via-blue-300 to-black dark:from-blue-400 dark:via-blue-200 dark:to-gray-400 bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                &lt; muralidharan / &gt;
              </span>
            </div>
          </Fade>
        </div>

        {/* Middle Column - Main Content */}
        <div className="w-full md:w-[80%] flex flex-col items-center md:items-start">
          <Fade duration={2000} delay={200} damping={0.1}>
            <p className="mb-6 text-base font-normal leading-relaxed sm:text-lg text-center md:text-left">
              I'm a <span className="font-bold">passionate developer</span> who
              thrives on <span className="font-bold">innovation</span>,{" "}
              <span className="font-bold">excellence</span>, and crafting{" "}
              <span className="font-bold">
                high-quality digital experiences
              </span>{" "}
              through continuous growth and dedication.
            </p>
          </Fade>

          <Fade duration={3000} delay={500} damping={0.1}>
            <div className="flex flex-row sm:flex-row flex-wrap justify-center sm:justify-start gap-4 w-full">
              <a
                href={require("../../assets/Resume/Resume.pdf")}
                className="bg-gray-900 text-white flex justify-center gap-2 items-center mx-auto text-base sm:text-lg md:text-xl dark:bg-gray-900 backdrop-blur-md lg:font-semibold isolation-auto border-gray-300 dark:border-gray-400 relative z-10 px-3 py-3 overflow-hidden rounded-full group"
                download
              >
                <span className="text-xs sm:text-sm font-normal">
                  Download CV
                </span>
                <svg
                  className="w-5 h-5 justify-end border border-gray-300 dark:border-gray-400 rounded-full p-1 rotate-45 transition-transform duration-300 group-hover:rotate-90"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-white group-hover:fill-white"
                  ></path>
                </svg>
              </a>
              <Link
                to="#contact"
                className="group relative inline-flex items-center text-black dark:text-white text-base font-semibold leading-6 px-3 py-2 bg-transparent border-0 outline-none"
                onClick={() => window.scrollTo(0, document.body.scrollHeight)}
              >
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-gray-800 dark:bg-gray-200 w-0 transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:w-8"></span>
                <span className="ml-0 transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:ml-6">
                  <span className="text-black dark:text-white font-semibold border border-transparent hover:border-gray-200 dark:hover:border-gray-700 rounded-full px-3 py-1 transition-colors duration-300">
                    Contact me
                  </span>
                </span>
              </Link>
            </div>
          </Fade>
        </div>

        {/* Right Column - Social Icons */}
        <div className="w-full md:w-[10%] flex md:flex-col justify-center md:justify-start md:items-start gap-2 md:gap-3">
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
