"use client";
import {
  FaGraduationCap,
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Heading */}
        <h2 className="text-2xl font-bold capitalize pt-12">
          Career
          <span className="text-[#57d5ff] dark:text-[#57d5ff]">Journey</span>
        </h2>
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
              //  hover:shadow-md hover:border-[#57d5ff]/10 cursor-pointer"
              className="group p-2 rounded-xl text-center transition-all duration-500"
              // className="group rounded-xl text-center transition-all duration-500
              //            transform hover:scale-105 hover:bg-[#57d5ff]/10 dark:hover:bg-[rgb(17,24,39)] cursor-pointer"
              variants={cardFadeUp}
            >
              {/* Card inner with corner borders */}
              <div className="relative p-6 rounded-xl border border-transparent hover:border-[#595859]/10 cursor-pointer">
                {/* corner borders */}
                <span className="absolute left-0 top-0 w-0.5 h-6 bg-[rgb(87,213,255)] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></span>
                <span className="absolute left-0 top-0 w-6 h-0.5 bg-[rgb(87,213,255)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                <span className="absolute right-0 top-0 w-0.5 h-6 bg-[rgb(87,213,255)] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></span>
                <span className="absolute right-0 top-0 w-6 h-0.5 bg-[rgb(87,213,255)] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300"></span>
                <span className="absolute left-0 bottom-0 w-0.5 h-6 bg-[rgb(87,213,255)] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300"></span>
                <span className="absolute left-0 bottom-0 w-6 h-0.5 bg-[rgb(87,213,255)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                <span className="absolute right-0 bottom-0 w-0.5 h-6 bg-[rgb(87,213,255)] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300"></span>
                <span className="absolute right-0 bottom-0 w-6 h-0.5 bg-[rgb(87,213,255)] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300"></span>

                {/* Content */}
                <div className="flex flex-col items-center transform transition-transform duration-500 group-hover:scale-105">
                  <div className="mb-4">{edu.icon}</div>
                  <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-[rgb(209,213,219)]">
                    {edu.title}
                  </h3>
                  <p className="text-sm text-[#57d5ff] dark:text-[#57d5ff] mb-1">
                    {edu.place} • {edu.year}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    {edu.grade}
                  </p>
                  <p className="text-sm leading-relaxed">{edu.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
