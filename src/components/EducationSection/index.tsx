import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../Common/Variants";
import "./Education.css";
export default function Education() {
  return (
    <motion.section
      className="max-w-4xl text-center leading-8 sm:mb-0 scroll-mt-28 pt-12 px-4"
      animate={{ opacity: 1, y: 0 }}
      initial="hidden"
      variants={fadeIn("bottom", 0.3)}
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
    >
      <div className="pt-2">
        <section
          id="features"
          className="section bg-fixed bg-cover"
          style={{ backgroundPosition: "0% -79.0334px" }}
        >
          <motion.div
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            initial="hidden"
            variants={fadeIn("up", 0.2)}
            whileInView={"show"}
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold capitalize pt-12 text-gray-800 dark:text-gray-200">
                  Career{" "}
                  <span className="text-[#57d5ff] dark:text-[#57d5ff]">
                    Journey
                  </span>
                </h2>

                <hr className="w-16 h-1 mx-auto my-4 bg-[#57d5ff] border-0" />
                <p className="text-gray-600 text-sm md:text-base dark:text-gray-300">
                  My educational background includes a Master of Computer
                  Applications (MCA) and a Bachelor of Computer Applications
                  (BCA), along with secondary and higher secondary education.
                  This foundation has provided the key skills necessary for a
                  successful career in software development.
                </p>
              </div>

              <div className="flex flex-wrap justify-center">
                {/* Left Column */}
                <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex flex-col items-end space-y-8 items-center">
                  <div className="flex flex-col items-center gap-2 p-4 rounded-lg hover:border hover:border-blue-200 transition duration-300 relative w-full sm:w-96">
                    <div className="flex items-center justify-between w-full">
                      <span className="inline-flex items-center justify-center text-4xl text-blue-600 bg-blue-100 rounded-full border border-blue-200 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                          <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                          <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                        </svg>
                      </span>
                      <div className="text-sm font-medium text-gray-500">
                        2022 | 8.2 CGPA
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        MCA
                      </h4>
                      <p className="text-gray-600 text-[0.9rem] dark:text-gray-400 text-center">
                        Puducherry Technological University
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-2 p-4 rounded-lg hover:border hover:border-blue-200 transition duration-300 relative w-full sm:w-96">
                    <div className="flex items-center justify-between w-full">
                      <span className="inline-flex items-center justify-center text-4xl text-blue-600 bg-blue-100 rounded-full border border-blue-200 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                          <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                          <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                        </svg>
                      </span>
                      <div className="text-sm font-medium text-gray-500">
                        2016 | 78%
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        HSC
                      </h4>
                      <p className="text-gray-600 text-[0.9rem] dark:text-gray-400 text-center">
                        Jothi Vallalalar Higher Secondary School
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Image */}
                <div className="w-full lg:w-1/3 flex items-center justify-center mb-8 lg:mb-0">
                  <img
                    src={require("../../assets/readImage.png")}
                    alt=""
                    className="w-2/3 lg:w-1/2 max-w-sm max-h-48 rounded-lg object-contain border-b-2"
                  />
                </div>

                {/* Right Column */}
                <div className="w-full lg:w-1/3 flex flex-col items-start space-y-8 items-center pb-12">
                  <div className="flex flex-col items-center gap-2 p-4 rounded-lg hover:border hover:border-blue-200 transition duration-300 relative w-full sm:w-96">
                    <div className="flex items-center justify-between w-full">
                      <span className="inline-flex items-center justify-center text-4xl text-blue-600 bg-blue-100 rounded-full border border-blue-200 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                          <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                          <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                        </svg>
                      </span>
                      <div className="text-sm font-medium text-gray-500">
                        2019 | 6.12 CGPA
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        BCA
                      </h4>
                      <p className="text-gray-600 text-[0.9rem] dark:text-gray-400 text-center">
                        Saradha Gangadharan Arts & Science College
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-2 p-4 rounded-lg hover:border hover:border-blue-200 transition duration-300 relative w-full sm:w-96">
                    <div className="flex items-center justify-between w-full">
                      <span className="inline-flex items-center justify-center text-4xl text-blue-600 bg-blue-100 rounded-full border border-blue-200 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                          <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                          <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                        </svg>
                      </span>
                      <div className="text-sm font-medium text-gray-500">
                        2014 | 86%
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        SSLC
                      </h4>
                      <p className="text-gray-600 text-[0.9rem] dark:text-gray-400 text-center">
                        Amala Higher Secondary School
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </motion.section>
  );
}
