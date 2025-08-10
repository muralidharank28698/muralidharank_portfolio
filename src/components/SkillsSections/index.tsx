import React from "react";
import { motion } from "framer-motion";
import {
  MicrosoftSharePointSPFXTechnologyStack,
  TechnologyStack,
  versionControlTools,
} from "../../lib/data";
import "./index.css";
import { ILibrariesAndFramework } from "../../lib/types";
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  return (
    <section className="max-w-4xl text-center leading-8 sm:mb-0 scroll-mt-28 pt-12">
      <h2 className="text-2xl font-bold capitalize pt-12 text-gray-800 dark:text-gray-200">
        Professional{" "}
        <span className="text-[#57d5ff] dark:text-[#57d5ff]">Skillset</span>
      </h2>
      <hr className="w-16 h-1 mx-auto my-4 bg-[#57d5ff] border-0" />
      <div className="pt-2">
        <div className="flex items-center justify-center gap-4 py-2">
          <span className="w-6 h-px bg-gray-300"></span>
          <h2 className="text-base font-normal capitalize text-center whitespace-nowrap">
            Technology Stack
          </h2>
          <span className="w-6 h-px bg-gray-300"></span>
        </div>
        <ul className="flex flex-wrap justify-center gap-2 text-base text-gray-800 pt-6">
          {TechnologyStack?.map(
            (item: ILibrariesAndFramework, index: number) => (
              <motion.li
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <div className="flex relative items-center justify-center w-full">
                  <div className="card rounded-xl overflow-hidden relative text-center p-2 group items-center flex flex-col w-20 sm:w-24 md:w-28 max-w-xs shadow-xs border border-transparent hover:border-blue-300 transition-all duration-500">
                    <div className="icon text-gray-500 dark:text-gray-300 transition-all text-base sm:text-lg">
                      {item?.icon}
                    </div>
                    <div className="transition-all duration-500">
                      <span className="text-gray-700 dark:text-gray-100 text-xs sm:text-sm">
                        {item?.name}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.li>
            )
          )}
        </ul>
      </div>
      <div className="pt-8">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8 pt-6">
          {/* Left Box: SharePoint SPFx Development Expertise */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-5 md:p-6 flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            <div className="flex flex-col items-center justify-center py-2 w-full">
              <div className="flex items-center justify-center gap-4 w-full">
                <span className="w-6 h-px bg-gray-300"></span>
                <h2 className="text-base font-normal capitalize text-center whitespace-normal break-words text-gray-800 dark:text-gray-200">
                  Version Control Tools
                </h2>
                <span className="w-6 h-px bg-gray-300"></span>
              </div>
            </div>
            <ul className="flex flex-wrap justify-center gap-2 text-sm sm:text-base text-gray-800 pt-2 sm:pt-4">
              {versionControlTools?.map(
                (item: ILibrariesAndFramework, index: number) => (
                  <motion.li
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <div className="flex relative items-center justify-center w-full">
                      <div className="card rounded-xl overflow-hidden relative text-center p-2 group items-center flex flex-col w-20 sm:w-24 md:w-28 max-w-xs shadow-xs border border-transparent hover:border-blue-300 transition-all duration-500">
                        <div className="icon text-gray-500 dark:text-gray-300 transition-all text-base sm:text-lg">
                          {item?.icon}
                        </div>
                        <div className="transition-all duration-500">
                          <div className="transition-all duration-500">
                            <span className="text-gray-700 dark:text-gray-100 text-xs sm:text-sm">
                              {item?.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.li>
                )
              )}
            </ul>
          </div>
          {/* Right Box: You can add another box here for grid layout */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            {/* Add your second box content here */}
            <div className="flex flex-col items-center justify-center py-2 w-full">
              <div className="flex items-center justify-center gap-4 w-full">
                <span className="w-6 h-px bg-gray-300"></span>
                <h2 className="text-base font-normal capitalize text-center whitespace-normal break-words text-gray-800 dark:text-gray-200">
                  SharePoint SPFx
                </h2>
                <span className="w-6 h-px bg-gray-300"></span>
              </div>
            </div>
            <ul className="flex flex-wrap justify-center gap-2 text-sm sm:text-base text-gray-800 pt-2 sm:pt-4">
              {MicrosoftSharePointSPFXTechnologyStack?.map(
                (item: ILibrariesAndFramework, index: number) => (
                  <motion.li
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <div className="flex relative items-center justify-center w-full">
                      <div className="card rounded-xl overflow-hidden relative text-center p-2 group items-center flex flex-col w-20 sm:w-24 md:w-28 max-w-xs shadow-xs border border-transparent hover:border-blue-300 transition-all duration-500">
                        <div className="icon text-gray-500 dark:text-gray-300 transition-all text-base sm:text-lg">
                          {item?.icon}
                        </div>
                        <div className="transition-all duration-500">
                          <span className="text-gray-700 dark:text-gray-100 text-xs sm:text-sm">
                            {item?.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
