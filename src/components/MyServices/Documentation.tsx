import React, { useState } from "react";
import { motion } from "framer-motion";

type FAQItem = {
  category: string;
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  // {
  //   category: "ABOUT ME",
  //   question: "Who is Muralidharan K?",
  //   answer:
  //     "I am a Software Developer with around 3.8+ years of experience specializing in Frontend development. I work extensively with React.js, TypeScript, and the SharePoint SPFx framework to build scalable and user-friendly web applications. Currently, I work at Cognizant where I develop enterprise-level SharePoint solutions and modern UI applications.",
  // },
  {
    category: "Quick FAQs",
    question: "What technologies do you specialize in?",
    answer:
      "My primary expertise includes React.js, TypeScript, JavaScript (ES6+), SharePoint SPFx, and Microsoft 365 technologies. I also work with tools and libraries such as Redux Toolkit, Tailwind CSS, Material UI, Fluent UI, PnP JS, REST APIs, GraphQL, Power Automate, and Git for building scalable and maintainable applications.",
  },
  {
    category: "Quick FAQs",
    question: "What kind of projects do you build?",
    answer:
      "I build modern web applications, custom SharePoint web parts, enterprise dashboards, and responsive UI components. My work focuses on creating reusable components, scalable architecture, and clean user interfaces that improve user experience and business productivity.",
  },
  {
    category: "Quick FAQs",
    question: "What professional experience do you have?",
    answer:
      "I have worked with companies like Cognizant, ConvergePoint, and FocusCraft Tech as a Software Developer. My experience includes building SharePoint solutions using SPFx, developing React applications, integrating backend APIs, and implementing automation using Power Automate and Power Apps.",
  },
  {
    category: "Quick FAQs",
    question: "Do you have experience with SharePoint development?",
    answer:
      "Yes. I have strong experience developing SharePoint solutions using the SPFx framework with React and TypeScript. I have built custom web parts, integrated SharePoint lists and libraries using PnP JS and CAML queries, and developed automated workflows using Power Automate.",
  },
  {
    category: "Quick FAQs",
    question: "What UI technologies and frameworks do you use?",
    answer:
      "For building modern user interfaces, I use React.js along with UI libraries like Material UI, Fluent UI, and Tailwind CSS. I focus on responsive design using Flexbox, CSS Grid, and media queries to ensure applications work smoothly across different devices.",
  },
  {
    category: "Quick FAQs",
    question: "How do you approach building scalable applications?",
    answer:
      "I follow a component-based architecture and focus on writing clean, reusable, and maintainable code. I use modern development practices such as React Hooks, Redux Toolkit for state management, modular architecture, and API-driven development to ensure applications are scalable and efficient.",
  },
  {
    category: "Quick FAQs",
    question: "What are your current learning goals?",
    answer:
      "I am continuously improving my knowledge in advanced frontend architecture and exploring mobile application development using React Native. I am also interested in integrating AI capabilities into applications using Azure AI services to build smarter digital experiences.",
  },
];
// Group items by category outside the component to avoid recalculation on every render
const grouped = faqData.reduce(
  (acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  },
  {} as Record<string, FAQItem[]>,
);

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-0">
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="mb-10">
          {/* <h2 className="text-lg font-bold mb-5 text-gray-800 dark:text-gray-100 tracking-wide">
            {category}
          </h2> */}
          <div className="space-y-4">
            {items.map((item, index) => {
              const globalIndex = faqData.indexOf(item);
              const isOpen = openIndex === globalIndex;
              return (
                <div
                  key={globalIndex}
                  className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[rgb(87,213,255)] bg-white/5 dark:bg-neutral-800/30 shadow-md"
                      : "border-gray-200 dark:border-gray-700 bg-transparent hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  <button
                    onClick={() => toggle(globalIndex)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-medium text-base transition-colors duration-300 ${
                        isOpen
                          ? "text-[rgb(87_213_255)]"
                          : "text-gray-700 dark:text-gray-200 hover:text-[rgb(87,213,255)] dark:hover:text-[rgb(87,213,255)]"
                      }`}
                    >
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`text-gray-500 dark:text-gray-400 ${
                        isOpen ? "text-[rgb(87,213,255)]" : ""
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </button>

                  {/* <AnimatePresence initial={false}> */}
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                  {/* </AnimatePresence> */}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
