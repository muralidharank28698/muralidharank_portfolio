import React from "react";
import "./Tools.css";
import { IEditorTools, ILibrariesAndFramework } from "../../lib/types";
import { EditorTools } from "../../lib/data";
import { motion } from "framer-motion";
import {
  DeviconReact,
  VscodeIconsFileTypeVscode,
  DeviconPostman,
  ReduxDevToolsIcon,
  LogosSwagger,
} from "../../assets/icons";

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

export default function Tools() {
  return (
    <section className="max-w-4xl text-center leading-8 sm:mb-0 scroll-mt-28 pt-12 pb-12">
      {/* <h2 className="text-4xl font-medium capitalize text-center pt-12">
        Development Environment & Tooling
      </h2> */}
      {/* <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 pt-8">
        {EditorTools?.map((item: IEditorTools, index: number) => (
          <motion.li
            // className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10"
            // className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="tools_Container">
              <div className="tools_card card">
                <div className="tools_content-box">
                  <span className="tools_card-title">3D Card</span>
                  <p className="tools_card-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <span className="tools_see-more">See More</span>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul> */}
      <div className="relative h-full w-full flex items-center justify-center pt-8">
        <div className="profileCard_container relative p-16 border rounded-full border-spacing-4">
          <button className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border active:scale-95 hover:scale-105 transition-all duration-500 flex items-center justify-center">
            <span className="block w-[60px] h-[60px] transition-all duration-500 rounded-full z-[2] bg-white p-1 flex items-center justify-center hover:bg-gray-200 hover:shadow-lg transform hover:rotate-12">
              <VscodeIconsFileTypeVscode />
            </span>
          </button>

          <button className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border active:scale-95 hover:scale-105 transition-all duration-500 flex items-center justify-center">
            <span className="block w-[60px] h-[60px] transition-all duration-500 rounded-full z-[2] bg-white p-1 flex items-center justify-center hover:bg-gray-200 hover:shadow-lg transform hover:rotate-12">
              <DeviconPostman />
            </span>
          </button>

          <button className="profile_item right-[40%] bottom-[-8%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border active:scale-95  transition-all duration-500 flex items-center justify-center">
            <span className="block w-[60px] h-[60px] transition-all duration-500 rounded-full z-[2] bg-white p-1 flex items-center justify-center hover:bg-gray-200 hover:shadow-lg transform hover:rotate-12">
              <img
                src={require("../../assets/icons/redux-devtools.png")}
                alt="devtools"
                width={44}
                height={44}
              />
            </span>
          </button>

          <button className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[60px] h-[60px] transition-all duration-500 rounded-full z-[2] bg-white p-1 flex items-center justify-center hover:bg-gray-200 hover:shadow-lg transform hover:rotate-12">
              <LogosSwagger />
            </span>
          </button>

          <button
            data-tooltip-target="tooltip-hover"
            data-tooltip-trigger="hover"
            className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 active:scale-95 hover:scale-95 transition-all duration-500"
          >
            <span className="block w-[60px] h-[60px] transition-all duration-500 rounded-full z-[2] bg-white p-1 flex items-center justify-center hover:bg-gray-200 hover:shadow-lg transform hover:rotate-12">
              {/* <img
                src={require("../../assets/icons/developer-tools.png")}
                alt="devtools"
                width={44}
                height={44}
              /> */}
              <DeviconReact />
            </span>
          </button>
          <div
            id="tooltip-hover"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Tooltip content
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>

          <button className="profile_item w-[200px] h-[200px] p-1 border rounded-full cursor-pointer transition-all duration-500 z-0">
            <div className="w-full h-full flex items-center justify-center flex-col rounded-full active:scale-95 hover:scale-95 transition-all duration-500">
              {/* <span className="text-lg font-semibold text-gray-800 transition-transform duration-500 hover:scale-110">
                Development Environment
              </span>
              <span className="text-lg font-medium text-gray-500 transition-transform duration-500 hover:scale-110">
                Tooling
              </span> */}
              <div className="mx-auto w-full max-w-xs relative flex flex-col items-center justify-center text-center overflow-visible">
                <p className="font-bold">Development Environment & Tooling</p>
                <div className="w-full relative flex flex-col items-center justify-center">
                  <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm"></div>
                  <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full"></div>
                  <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-[5px] w-1/2 blur-sm"></div>
                  <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-px w-1/2"></div>
                  <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(50%_200px_at_top,transparent_20%,white)]"></div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

{
  /* <button className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[60px] h-[60px] transition-all duration-500 rounded-full z-[2] bg-white p-1 flex items-center justify-center hover:bg-gray-200 hover:shadow-lg transform hover:rotate-12">
              <img
                src={require("../../assets/icons/redux-devtools.png")}
                alt="devtools"
                width={44}
                height={44}
              />
            </span>
          </button> */
}
