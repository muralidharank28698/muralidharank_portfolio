import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";
import { Link } from "react-router-dom";
import { RiComputerLine } from "react-icons/ri";

export default function Experience() {
  const fadeInBottomToTop = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="max-w-5xl mx-auto text-center leading-8 sm:mb-0 scroll-mt-28 pt-8 sm:px-4 md:px-32 lg:px-8 px-4 sm:px-6 md:px-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="pt-12 md:pt-12">
        {/* ===== HEADING SECTION ===== */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          {/* Pill badge */}
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
            bg-sky-400/10 dark:bg-sky-400/10
            border border-sky-400/25
            mb-4 sm:mb-6"
          >
            <span className="text-xs">💼</span>
            <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-sky-400">
              Professional Experience
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-neutral-900 dark:text-white transition-colors duration-300">
              Professional{" "}
            </span>
            <span
              style={{
                background: "linear-gradient(90deg, #38bdf8, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Services
            </span>
          </h1>

          {/* Underline accent */}
          <div className="w-10 sm:w-14 md:w-16 h-0.5 sm:h-1 mt-3 sm:mt-4 mb-3 sm:mb-5 rounded-full bg-gradient-to-r from-[#38bdf8] to-[#34d399]" />

          {/* Subtitle */}
          <p
            className="text-xs sm:text-sm md:text-base
            text-neutral-500 dark:text-neutral-400
            max-w-[260px] sm:max-w-sm md:max-w-md
            leading-relaxed transition-colors duration-300 animate-fadeInUp delay-600"
          >
            Worked across three organizations, delivering efficient solutions
            with modern technologies.
          </p>
        </div>

        {/* ===== TIMELINE SECTION ===== */}
        <section id="process" className="process-section pt-18 pb-12">
          <div className="container mx-auto px-4 relative">
            {/* Vertical Line */}
            <div className="-translate-x-1/2 absolute bg-gray-300 h-full hidden left-1/2 lg:block top-0 transform w-[1px]"></div>

            {/* Timeline */}
            <div className="timeline relative">
              {/* ===== First Timeline Item — Cognizant ===== */}
              <motion.div
                className="flex flex-wrap items-center mb-12 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-full lg:w-5/12"
                  variants={fadeInBottomToTop}
                >
                  <div className="flex justify-center rounded-lg">
                    <img
                      src={require("../../assets/ExperienceImages/Ex3.webp")}
                      className="rounded-lg object-contain"
                      style={{ width: "373px", height: "203px" }}
                      alt="Experience logo"
                    />
                  </div>
                </motion.div>

                {/* Center icon */}
                <div className="w-full lg:w-2/12 relative">
                  <div className="hidden lg:flex h-8 w-8 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border items-center justify-center leading-none group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="#57d5ff"
                      className="block h-4 w-4 flex-none transform transition-transform duration-300 ease-out group-hover:scale-150"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0ZM4.75 7.25a.75.75 0 0 0 0 1.5h4.69L8.22 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H4.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <motion.div
                  className="w-full lg:w-5/12"
                  variants={fadeInBottomToTop}
                >
                  <div className="lg:text-left lg:pl-8 text-left">
                    <div className="flex items-center justify-start lg:justify-start my-3">
                      <span className="bg-white p-2 text-gray-700 hover:text-gray-950 flex items-center justify-center rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60">
                        <RiComputerLine
                          size={18}
                          className="text-[#57d5ff] dark:text-[#57d5ff]"
                        />
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold">
                      Associate Developer
                    </h4>
                    <small className="text-sm text-[#57d5ff] dark:text-[#57d5ff]">
                      Cognizant Technology Solutions India Private Limited
                    </small>
                    <p className="leading-relaxed">
                      SharePoint Developer | SPFx Framework | SharePoint list
                      and libraries
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <button className="flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 px-4 py-1">
                        <span className="capitalize whitespace-nowrap text-gray-500 text-xs">
                          jul 2025 - present
                        </span>
                      </button>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block"
                      >
                        <Link
                          to={`/professionalExperience`}
                          className="text-[#57d5ff] dark:text-[#57d5ff] flex items-center gap-2 font-medium"
                          state={{ sectionId: "Cognizant" }}
                        >
                          View more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14m-7-7l7 7-7 7" />
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* ===== Second Timeline Item — ConvergePoint ===== */}
              <motion.div
                className="flex flex-wrap items-center mb-12 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-full lg:w-5/12 order-last lg:order-first"
                  variants={fadeInBottomToTop}
                >
                  <div className="lg:text-right lg:pr-8 text-left">
                    <div className="flex items-center justify-start lg:justify-end my-3">
                      <span className="bg-white p-2 text-gray-700 hover:text-gray-950 flex items-center justify-center rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60">
                        <RiComputerLine
                          size={18}
                          className="text-[#57d5ff] dark:text-[#57d5ff]"
                        />
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold">
                      Software Developer
                    </h4>
                    <small className="text-sm text-[#57d5ff] dark:text-[#57d5ff]">
                      ConvergePoint India Private Limited
                    </small>
                    <p className="leading-relaxed">
                      SharePoint Developer | SPFx Framework | SharePoint list
                      and libraries
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <button className="flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 px-4 py-1">
                        <span className="capitalize whitespace-nowrap text-gray-500 text-xs">
                          feb 2024 - jul 2025
                        </span>
                      </button>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block"
                      >
                        <Link
                          to={`/professionalExperience`}
                          className="text-[#57d5ff] dark:text-[#57d5ff] flex items-center gap-2 font-medium"
                          state={{ sectionId: "ConvergePoint" }}
                        >
                          View more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14m-7-7l7 7-7 7" />
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Center icon */}
                <div className="w-full lg:w-2/12 relative">
                  <div className="hidden lg:flex h-8 w-8 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border items-center justify-center transition-all duration-300 group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="#57d5ff"
                      className="h-4 w-4 transform transition-transform duration-300 ease-out group-hover:scale-150"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm10.25.75a.75.75 0 0 0 0-1.5H6.56l1.22-1.22a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L6.56 8.75h4.69Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <motion.div
                  className="w-full lg:w-5/12"
                  variants={fadeInBottomToTop}
                >
                  <div className="flex justify-center rounded-lg">
                    <img
                      src={require("../../assets/ExperienceImages/Ex5.webp")}
                      className="rounded-lg object-contain"
                      style={{ width: "373px", height: "140px" }}
                      alt="Experience logo"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* ===== Third Timeline Item — FocusCraft ===== */}
              <motion.div
                className="flex flex-wrap items-center mb-12 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-full lg:w-5/12"
                  variants={fadeInBottomToTop}
                >
                  <div className="flex justify-center rounded-lg">
                    <img
                      src={require("../../assets/ExperienceImages/Ex4.webp")}
                      alt="Timeline logo"
                      className="rounded-lg object-contain"
                      style={{ width: "373px", height: "203px" }}
                    />
                  </div>
                </motion.div>

                {/* Center icon */}
                <div className="w-full lg:w-2/12 relative">
                  <div className="hidden lg:flex h-8 w-8 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border items-center justify-center leading-none group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="#57d5ff"
                      className="block h-4 w-4 flex-none transform transition-transform duration-300 ease-out group-hover:scale-150"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0ZM4.75 7.25a.75.75 0 0 0 0 1.5h4.69L8.22 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H4.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <motion.div
                  className="w-full lg:w-5/12"
                  variants={fadeInBottomToTop}
                >
                  <div className="lg:text-left lg:pl-8 text-left">
                    <div className="flex items-center justify-start lg:justify-start my-3">
                      <span className="bg-white p-2 text-gray-700 hover:text-gray-950 flex items-center justify-center rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60">
                        <RiComputerLine
                          size={18}
                          className="text-[#57d5ff] dark:text-[#57d5ff]"
                        />
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold">
                      Software Developer
                    </h4>
                    <small className="text-sm text-[#57d5ff] dark:text-[#57d5ff]">
                      Focuscraft Tech Private Limited
                    </small>
                    <p className="leading-relaxed">
                      React | TypeScript | React Native | Redux | Story Book
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <button className="flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 px-4 py-1">
                        <span className="capitalize whitespace-nowrap text-gray-500 text-xs">
                          nov 2021 - dec 2023
                        </span>
                      </button>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block"
                      >
                        <Link
                          to={`/professionalExperience`}
                          className="text-[#57d5ff] dark:text-[#57d5ff] flex items-center gap-2 font-medium"
                          state={{ sectionId: "FocusCraftTech" }}
                        >
                          View more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14m-7-7l7 7-7 7" />
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </motion.section>
  );
}
