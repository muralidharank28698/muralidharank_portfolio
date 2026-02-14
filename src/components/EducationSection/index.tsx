"use client";
import {
  FaSchool,
  FaUniversity,
  FaBook,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { cardFadeUp, staggerContainer } from "../../Common/Variants";

export default function Education() {
  const education = [
    {
      icon: <FaUniversity className="text-3xl text-sky-300 transition" />,
      year: "2022",
      place: "Puducherry Technological University",
      title: "MCA",
      desc: "Master’s in Computer Applications with focus on programming and system design.",
      grade: "8.2 CGPA",
    },
    {
      icon: <FaUniversity className="text-3xl text-sky-300 transition" />,
      year: "2019",
      place: "Saradha Gangadharan Arts & Science College",
      title: "BCA",
      desc: "Bachelor’s in Computer Applications with core knowledge in databases and web tech.",
      grade: "6.12 CGPA",
    },
    {
      icon: <FaSchool className="text-3xl text-sky-300 transition" />,
      year: "2016",
      place: "Jothi Vallalalar Higher Secondary School",
      title: "HSC",
      desc: "Higher Secondary Certificate with Computer Science focus",
      grade: "78%",
    },
    {
      icon: <FaBook className="text-3xl text-sky-300 transition" />,
      year: "2014",
      place: "Amala Higher Secondary School",
      title: "SSLC",
      desc: "Secondary School Leaving Certificate with distinction.",
      grade: "86%",
    },
  ];

  return (
    <section id="education" className="py-12 text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Heading */}
        <h1 className="text-3xl font-bold capitalize pt-12">
          Career {""}
          <span className="text-[#57d5ff] dark:text-[#57d5ff]">Journey</span>
        </h1>
        <hr className="w-16 h-1 mx-auto my-4 bg-[#57d5ff] border-0" />

        <p className="mb-10 max-w-2xl mx-auto">
          A quick look at my educational journey, from school to post
          graduation.
        </p>

        {/* Education grid with stagger animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              //  className="group flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md
              //  mx-auto p-4 sm:p-5 md:p-6 rounded-xl
              //  border border-neutral-200/40 dark:border-neutral-700/10
              //  shadow-sm shadow-neutral-200/40 dark:shadow-neutral-800/10
              //  transition-all duration-100 transform hover:scale-105
              //  hover:shadow-md hover:border-[#rgb(243 110 0)]/10 cursor-pointer"
              className="group p-2 text-center transition-all duration-500"
              // className="group rounded-xl text-center transition-all duration-500
              //            transform hover:scale-105 hover:bg-[#rgb(243 110 0)]/10 dark:hover:bg-[rgb(17,24,39)] cursor-pointer"
              variants={cardFadeUp}
            >
              {/* Card inner with corner borders */}
                <div className="relative p-6 border border-neutral-200/40 dark:border-neutral-700/40 cursor-pointer rounded-[20px] group overflow-hidden shadow-sm shadow-neutral-200/30 dark:shadow-neutral-800/30">
                {/* Animated border wrapper */}
                <div className="pointer-events-none absolute inset-0 rounded-[20px]">
                  {/* corner borders */}
                </div>

                {/* Content */}
                <div className="flex flex-col items-center transform transition-transform duration-500 group-hover:scale-105">
                  <div className="mb-4">{edu.icon}</div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-[rgb(209,213,219)]">
                  {edu.title}
                  </h3>
                  <p className="text-base text-[#rgb(243 110 0)] dark:text-[#rgb(243 110 0)] mb-1">
                  {edu.place} • {edu.year}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {edu.grade}
                  </p>
                  {/* <p className="text-sm leading-relaxed">{edu.desc}</p> */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
