import React from "react";
import { motion } from "framer-motion";
import {
  MicrosoftSharePointSPFXTechnologyStack,
  TechnologyStack,
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
       <h2 className="text-3xl font-bold capitalize text-center pt-12 text-gray-800 dark:text-gray-200">
       Professional{" "}
        <span className="text-blue-600 dark:text-blue-400">Skillset</span>
      </h2>
      <hr className="w-16 h-1 mx-auto my-4 bg-blue-600 border-0" />
      <div className="pt-8">
        <h2 className="text-3xl font-medium capitalize text-center">
          Technology Stack 
        </h2>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 pt-8">
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
                  <div className="card rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col w-32 max-w-sm shadow-xs border border-transparent hover:border-blue-300 transition-all duration-500">
                    <div className="icon text-gray-500 dark:text-gray-300 transition-all">
                      {item?.icon}
                    </div>
                    <div className="transition-all duration-500">
                      <h1 className="font-semibold text-gray-700">
                        {item?.name}
                      </h1>
                    </div>
                  </div>
                </div>
              </motion.li>
            )
          )}
        </ul>
      </div>
      <div className="pt-8">
        <h2 className="text-3xl font-medium capitalize text-center">
          SharePoint SPFx Development Expertise
        </h2>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 pt-8">
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
                  <div className="card rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col w-32 max-w-sm shadow-xs border border-transparent hover:border-blue-300 transition-all duration-500">
                    <div className="icon text-gray-500 dark:text-gray-300 transition-all">
                      {item?.icon}
                    </div>
                    <div className="transition-all duration-500">
                      <h1 className="font-semibold text-gray-700">
                        {item?.name}
                      </h1>
                    </div>
                  </div>
                </div>
              </motion.li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
