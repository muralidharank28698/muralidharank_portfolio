import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";
import { Link } from "react-router-dom";

interface CardContent {
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
}

const cardData: CardContent[] = [
  {
    title: "FocusCraft Tech Private Limited",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis magna quis lectus fermentum, quis scelerisque orci pellentesque. Duis id porta justo. Sed ac enim id justo tincidunt hendrerit id ac lectus. Pellentesque maximus posuere tortor vitae consequat.",
    buttonText: "Explore",
    backgroundImage:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", // Replace with your image
  },
  {
    title: "ConvergePoint India Private Limited",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis magna quis lectus fermentum, quis scelerisque orci pellentesque. Duis id porta justo. Sed ac enim id justo tincidunt hendrerit id ac lectus. Pellentesque maximus posuere tortor vitae consequat.",
    buttonText: "Explore",
    backgroundImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", // Replace with your image
  },
];

export default function Experience() {
  // const fadeInLeft = {
  //   hidden: { opacity: 0, x: -50 },
  //   visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  // };

  // const fadeInRight = {
  //   hidden: { opacity: 0, x: 50 },
  //   visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  // };

  const fadeInBottomToTop = {
    hidden: { opacity: 0, y: 50 }, // Start from below with reduced opacity
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Animate to original position
  };
  

  return (
    <motion.section
      className="max-w-4xl mx-auto text-center leading-8 sm:mb-0 scroll-mt-28 pt-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="pt-12">
        <div className="flex justify-center pb-12">
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
            <div className="section-title text-center">
              <h6 className="sub-title text-sm font-semibold uppercase text-gray-600 pb-2">
                Services
              </h6>
              <h4 className="title text-xl md:text-2xl lg:text-3xl font-bold">
                Professional <span>services</span>
              </h4>
              <p className="mt-4 text-gray-600 animate-fadeInUp delay-600">
                Worked across two organizations, gaining expertise in frontend
                development and delivering efficient solutions using modern
                technologies.
              </p>
            </div>
          </div>
        </div>
        <section id="process" className="process-section pt-18 pb-24">
          <div className="container mx-auto px-4 relative">
            {/* Vertical Line */}
            <div className="-translate-x-1/2 absolute bg-gray-300 h-full hidden left-1/2 lg:block top-0 transform w-[1px]"></div>
            {/* Timeline */}
            <div className="timeline relative">
              {/* First Timeline Item */}
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
                    <div className="flex items-center justify-start lg:justify-end mb-4">
                      <span className="mt-2 inline-flex items-center justify-center text-4xl text-blue-600 bg-blue-100 rounded-full border border-blue-200 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 4.25A2.25 2.25 0 0 1 4.25 2h7.5A2.25 2.25 0 0 1 14 4.25v5.5A2.25 2.25 0 0 1 11.75 12h-1.312c.1.128.21.248.328.36a.75.75 0 0 1 .234.545v.345a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-.345a.75.75 0 0 1 .234-.545c.118-.111.228-.232.328-.36H4.25A2.25 2.25 0 0 1 2 9.75v-5.5Zm2.25-.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-7.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 lg:text-gray-700">
                      Software Developer
                    </h4>
                    <small className="text-sm text-gray-500">
                      ConvergePoint India Private Limited
                    </small>
                    <p className="text-gray-600 leading-relaxed">
                      SharePoint Developer | SPFx Framework | SharePoint list
                      and libraries
                    </p>

                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-400 text-sm">
                        feb 2024 - current
                      </span>
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                        }}
                        className="inline-block"
                      >
                         <Link
                          to={`/professionalExperience`}
                          className="text-blue-600 flex items-center gap-2 font-medium"
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
                <div className="w-full lg:w-2/12 relative">
                  <div className="hidden lg:block h-12 w-12 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border flex items-center justify-center transition-all duration-300 hover:bg-blue-100 hover:shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-6 w-6 text-blue-600"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm10.25.75a.75.75 0 0 0 0-1.5H6.56l1.22-1.22a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L6.56 8.75h4.69Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <motion.div className="w-full lg:w-5/12" variants={fadeInBottomToTop}>
                  <div className="flex justify-center rounded-lg">
                    <img
                      src={require("../../assets/ExperienceImages/experience.jpg")}
                      alt="Timeline Image"
                      className="rounded-lg object-cover"
                      style={{ width: "373px", height: "203px" }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Second Timeline Item */}
              <motion.div
                className="flex flex-wrap items-center mb-12 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div className="w-full lg:w-5/12" variants={fadeInBottomToTop}>
                  <div className="flex justify-center rounded-lg">
                    <img
                      src={require("../../assets/ExperienceImages/experience.jpg")}
                      alt="Timeline Image"
                      className="rounded-lg object-cover"
                      style={{ width: "373px", height: "203px" }}
                    />
                  </div>
                </motion.div>
                <div className="w-full lg:w-2/12 relative">
                  <div className="hidden lg:block h-12 w-12 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border flex items-center justify-center transition-all duration-300 hover:bg-blue-100 hover:shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-6 w-6 text-blue-600"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0ZM4.75 7.25a.75.75 0 0 0 0 1.5h4.69L8.22 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H4.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <motion.div className="w-full lg:w-5/12" variants={fadeInBottomToTop}>
                  <div className="lg:text-left lg:pl-8 text-left">
                    <div className="flex items-center justify-start lg:justify-start mb-4">
                      <span className="mt-2 inline-flex items-center justify-center text-4xl text-blue-600 bg-blue-100 rounded-full border border-blue-200 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 4.25A2.25 2.25 0 0 1 4.25 2h7.5A2.25 2.25 0 0 1 14 4.25v5.5A2.25 2.25 0 0 1 11.75 12h-1.312c.1.128.21.248.328.36a.75.75 0 0 1 .234.545v.345a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-.345a.75.75 0 0 1 .234-.545c.118-.111.228-.232.328-.36H4.25A2.25 2.25 0 0 1 2 9.75v-5.5Zm2.25-.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-7.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-700 lg:text-gray-600">
                      Software Developer
                    </h4>
                    <small className="text-sm text-gray-500">
                      Focuscraft Tech Private Limited
                    </small>
                    <p className="text-gray-600 leading-relaxed">
                      React | TypeScript | React Native | Redux | Story Book
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-400 text-sm">
                        nov 2021 - dec 2023
                      </span>
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                        }}
                        className="inline-block"
                      >
                        <Link
                          to={`/professionalExperience`}
                          className="text-blue-600 flex items-center gap-2 font-medium"
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
