import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

interface IExpertiseSectionProps {
  companyData?: any;
  expertiseItems?: string[];
}

export default function ExpertiseSection(props: IExpertiseSectionProps) {
  const [activeItem, setActiveItem] = useState("Work History");
  const techList = props.companyData?.[activeItem] || [];

  return (
    <section className="w-full dark:bg-gray-950 border-gray-200 dark:border-gray-800 rounded-3xl">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Menu */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/3 space-y-4 p-3"
        >
          {props?.expertiseItems?.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveItem(item)}
              className={`w-full flex justify-between items-center text-left text-base font-medium px-4 py-4 rounded-full transition-all duration-300 focus:outline-none ${
                activeItem === item
                  ? "bg-[#57d5ff] text-white border-[#57d5ff]"
                  : "text-gray-700 hover:bg-[#57d5ff]/10 dark:text-gray-300 dark:hover:text-white"
              }`}
            >
              <span>{item}</span>
              {activeItem === item && <FaRegArrowAltCircleRight size={24} />}
            </button>
          ))}
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full bg-white dark:bg-white p-6 rounded-2xl border border-gray-200 dark:border-gray-800"
        >
          {activeItem === "Tech" ? (
            <>
              <p className="text-2xl font-medium text-[#57d5ff] dark:text-[#57d5ff] mb-6">
                Technologies Used
              </p>
              <motion.div
                key={activeItem}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-items-center"
              >
                {techList
                  .slice()
                  .sort((a: any, b: any) =>
                    (a?.name ?? "")
                      .toString()
                      .localeCompare((b?.name ?? "").toString(), undefined, {
                        sensitivity: "base",
                      })
                  )
                  .map((tech: any, i: number) => (
                    <motion.div
                      key={tech?.name ?? i}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="p-2 w-full max-w-[200px] h-[50px] flex flex-row items-center justify-center rounded-xl shadow-[0_0_3px_rgba(87,213,255,0.3)] hover:shadow-[0_0_2px_rgba(87,213,255,0.5)] transition duration-200 hover:bg-[#57d5ff]/10"
                      // className="p-2 border border-[#57d5ff] w-full max-w-[200px] h-[50px] flex flex-row items-center justify-center rounded-xl transition duration-200 hover:bg-[#57d5ff]/10"
                      // className="p-2 border border-[#57d5ff] w-full max-w-[200px] h-[50px] flex flex-row items-center justify-center rounded-xl transition"
                    >
                      <p className="text-sm truncate text-center w-auto text-gray-900 dark:text-gray-900">
                        {tech.name}
                      </p>
                    </motion.div>
                  ))}
              </motion.div>
            </>
          ) : activeItem === "Work History" ? (
            <motion.div
              key="work-history"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-2xl font-medium text-[#57d5ff] dark:text-[#57d5ff] mb-6">
                Professional Experience
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-bold mb-2 dark:text-black">
                  {props?.companyData?.companyDetails?.name}{" "}
                  <span className="text-[#57d5ff]">Private Limited</span>
                </h3>
                <h2 className="text-sm font-medium text-3xl font-bold mb-2 flex justify-between dark:text-black">
                  <div> {props?.companyData?.companyDetails?.role}</div>
                  <div> {props?.companyData?.companyDetails?.duration}</div>
                </h2>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="roles"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-2xl font-medium text-[#57d5ff] dark:text-[#57d5ff] mb-6">
                Roles and Responsibilities
              </p>
              {props?.companyData?.content?.map((point: any, idx: number) => (
                <p
                  key={idx}
                  className="text-md mb-2 text-justify flex items-start dark:text-gray-700"
                >
                  <span className="mr-2">•</span>
                  {point}
                </p>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
