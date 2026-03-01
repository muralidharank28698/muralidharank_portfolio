import React, { useState } from "react";

type FAQItem = {
  category: string;
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    category: "GENERAL",
    question: "What does “lifetime access” mean exactly?",
    answer:
      "Tailwind Plus products are a one-time purchase, with no recurring subscription. When you purchase any Tailwind Plus product, you have access to all of the content in that product forever.",
  },
  {
    category: "GENERAL",
    question: "What does “free updates” include?",
    answer:
      "Free updates include all improvements, bug fixes, and new features added to the product after your purchase.",
  },
  {
    category: "COMPATIBILITY",
    question: "Are Figma, Sketch, or Adobe XD files included?",
    answer:
      "Design files are not included. The product focuses on Tailwind CSS components and code.",
  },
  {
    category: "COMPATIBILITY",
    question: "What JS framework is used?",
    answer:
      "The components are framework-agnostic, but examples are provided for React.",
  },
  {
    category: "COMPATIBILITY",
    question: "What version of Tailwind CSS is used?",
    answer: "The latest stable version of Tailwind CSS is used.",
  },
];

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Group items by category
  const grouped = faqData.reduce(
    (acc, item) => {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<string, FAQItem[]>,
  );

  return (
    <div className="w-full max-w-4xl mx-auto">
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h2 className="text-lg font-semibold mb-4">{category}</h2>
          <div className="space-y-3">
            {items.map((item, index) => {
              const globalIndex = faqData.indexOf(item);
              return (
                <div
                  key={globalIndex}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden bg-transparent"
                >
                  <button
                    onClick={() => toggle(globalIndex)}
                    // className="w-full flex justify-between items-center px-4 py-3 text-left
                    //     bg-transparent
                    //     focus:outline-none transition-colors duration-300
                    //     shadow-[0_1px_2px_rgba(0,0,0,0.08)]
                    //     dark:shadow-[0_1px_2px_rgba(255,255,255,0.08)]"
                    className="w-full flex justify-between items-center px-4 py-3 text-left
             bg-transparent
             focus:outline-none transition-colors duration-300
             shadow-[0_1px_2px_rgba(0,0,0,0.04)]
             dark:shadow-[0_1px_2px_rgba(255,255,255,0.04)]"
                  >
                    {/* hover:bg-[rgb(186_230_253_/_20%)]
                      dark:hover:bg-[rgb(31_63_73_/_20%)] */}
                    <span
                      // className="font-medium text-sm"
                      className={`font-medium text-sm transition-colors duration-300 dark:hover:text-[rgb(87_213_255)] hover:text-[rgb(87_213_255)] ${
                        openIndex === globalIndex
                          ? "text-[rgb(87_213_255)]"
                          : "text-gray-800 dark:text-gray-200"
                      }`}
                    >
                      {item.question}
                    </span>
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        openIndex === globalIndex ? "rotate-180" : "rotate-0"
                      } text-gray-600 dark:text-gray-300`}
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
                  </button>

                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      openIndex === globalIndex
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 py-3 text-sm">{item.answer}</div>
                  </div>
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
