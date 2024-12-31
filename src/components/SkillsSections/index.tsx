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
      <h2 className="text-4xl font-medium capitalize text-center pt-12">
        Professional Skillset
      </h2>
      {/* & Development Tools */}
      <div className="pt-8">
        <h2 className="text-3xl font-medium capitalize text-center">
          Technology Stack 
        </h2>
        {/* <h3 className="text-3xl font-medium capitalize mb-8 text-center pt-8">
          Libraries
        </h3> */}
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 pt-8">
          {TechnologyStack?.map(
            (item: ILibrariesAndFramework, index: number) => (
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
                {/* {skill} */}
                {/* <div className="card">
                <div className="content">
                  <p className="heading">Card</p>
                  <p className="para">{skill}</p>
                  <p className="para para-sm">Jan 1, 2024</p>
                </div>
              </div> */}
                {/* <div className="body"> */}
                {/* <a className="card wallet" href="#">
                  <div className="overlay"></div>
                  <div className="circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="23 29 78 60"
                      height="60px"
                      width="78px"
                    >
                      <g
                        transform="translate(23.000000, 29.500000)"
                        fill-rule="evenodd"
                        fill="none"
                        stroke-width="1"
                        stroke="none"
                        id="icon"
                      >
                        <rect
                          rx="4.70247832"
                          height="21.8788565"
                          width="9.40495664"
                          y="26.0333433"
                          x="67.8357511"
                          fill="#AC8BE9"
                          id="Rectangle-3"
                        ></rect>
                        <rect
                          rx="4.70247832"
                          height="10.962961"
                          width="9.40495664"
                          y="38.776399"
                          x="67.8357511"
                          fill="#6A5297"
                          id="Rectangle-3"
                        ></rect>
                        <polygon
                          points="57.3086772 0 67.1649301 26.3776902 14.4413177 45.0699507 4.58506484 18.6922605"
                          fill="#6A5297"
                          id="Rectangle-2"
                        ></polygon>
                        <path
                          fill="#8B6FC0"
                          id="Rectangle"
                          d="M0,19.6104296 C0,16.2921718 2.68622235,13.6021923 5.99495032,13.6021923 L67.6438591,13.6021923 C70.9547788,13.6021923 73.6388095,16.2865506 73.6388095,19.6104296 L73.6388095,52.6639057 C73.6388095,55.9821635 70.9525871,58.672143 67.6438591,58.672143 L5.99495032,58.672143 C2.68403068,58.672143 0,55.9877847 0,52.6639057 L0,19.6104296 Z"
                        ></path>
                        <path
                          fill="#F6F1FF"
                          id="Fill-12"
                          d="M47.5173769,27.0835169 C45.0052827,24.5377699 40.9347162,24.5377699 38.422622,27.0835169 L36.9065677,28.6198808 L35.3905134,27.0835169 C32.8799903,24.5377699 28.8078527,24.5377699 26.2957585,27.0835169 C23.7852354,29.6292639 23.7852354,33.7559532 26.2957585,36.3001081 L36.9065677,47.0530632 L47.5173769,36.3001081 C50.029471,33.7559532 50.029471,29.6292639 47.5173769,27.0835169"
                        ></path>
                        <rect
                          height="12.863158"
                          width="15.6082259"
                          y="26.1162588"
                          x="58.0305835"
                          fill="#AC8BE9"
                          id="Rectangle-4"
                        ></rect>
                        <ellipse
                          ry="2.23319575"
                          rx="2.20116007"
                          cy="33.0919007"
                          cx="65.8346965"
                          fill="#FFFFFF"
                          id="Oval"
                        ></ellipse>
                      </g>
                    </svg>
                  </div>
                  <p>{skill}</p>
                </a> */}
                {/* </div> */}
                {/* <div className="flex relative items-center justify-center w-full">
                <div className="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 border">
                  <div className="text-gray-500 group-hover:scale-105 transition-all">
                   <DeviconReact />
                  </div>
                  <div className="group-hover:pb-10 transition-all duration-500 delay-200">
                  </div>
                  <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
                    <div className="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
                    <h1 className="font-semibold text-gray-700">{"skill"}</h1>
                    </div>
                  </div>
                </div>
              </div> */}
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
