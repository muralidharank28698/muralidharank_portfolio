import React, { useState } from "react";
import Card from "./Card";
import { fadeInUp, staggerContainer2 } from "../../Common/Variants";
import { motion } from "framer-motion";

const tabs = ["Documentation", "Projects", "Resources"];

const cardData: any = {
  Documentation: [
    {
      title: "Getting Started",
      subtitle: "Guidelines & Docs",
      image:
        "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=800",
    },
  ],
  Projects: [
    {
      title: "Portfolio UI",
      subtitle: "Web Design Showcase",
      description: "A clean and modern portfolio design to showcase your work.",
      image: require("../../assets/portfolio-images/PF1.png"),
    },
    {
      title: "Admin Dashboard",
      subtitle: "React Admin Panel",
      description:
        "An interactive admin dashboard built with React and Tailwind.",
      image:
        "https://bizify.ae/wp-content/uploads/2024/12/Digital-Marketing-Trends-2025-1024x585.jpg",
    },
    {
      title: "E-commerce UI",
      subtitle: "Shop Web App",
      description:
        "A responsive e-commerce UI for a seamless shopping experience.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1ijBsrro9PsDcVmiYAIfQRSqASrb_8U_UgKTY1j2V4RWi_KSLk5zubdH6uWQ_LgBEY0&usqp=CAU",
    },
  ],

  Resources: [
    {
      title: "Icons Library",
      subtitle: "SVG & Components",
      image:
        "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800",
    },
  ],
};

export default function SegmentedTabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-full flex flex-col items-center mt-16 pt-20">
      {/* Tab List */}
      <div className="inline-flex rounded-full p-1 border border-neutral-200/40 dark:border-neutral-700/40">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(index)}
            onMouseDown={(e) => e.preventDefault()}
            className={`px-3 py-2 rounded-3xl text-sm font-medium transition-colors duration-150
            ${
              activeTab === index
                ? "text-[rgb(87,213,255)]"
                : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab} // re-renders container on tab change
        variants={staggerContainer2}
        initial="hidden"
        whileInView="show" // triggers when scroll into view
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 w-full rounded-lg p-4 md:p-6 max-w-4xl mx-auto flex flex-wrap gap-4 justify-center"
      >
        {cardData[tabs[activeTab]].map((card: any, idx: number) =>
          activeTab === 0 ? (
            <motion.div
              key={activeTab}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="w-full p-6 sm:p-8 bg-transparent rounded-lg  dark:border-neutral-800"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Getting Started with Our Documentation
              </h2>
              <p className="text-sm sm:text-base mb-3">
                Welcome to the Documentation tab. Here, you will find
                comprehensive guides, examples, and best practices to help you
                quickly get started with our project.
              </p>
              <p className="text-sm sm:text-base mb-3">
                Our documentation covers setup instructions, API references, and
                design guidelines. Each section is carefully structured to
                provide clear and actionable insights.
              </p>
              <p className="text-sm sm:text-base">
                Whether you are a beginner or an experienced developer, this
                section will serve as a roadmap to understand the core
                components and workflows of the project. Explore, learn, and
                implement with confidence.
              </p>
            </motion.div>
          ) : activeTab === 1 ? (
            <motion.div
              key={`${tabs[activeTab]}-${idx}`}
              variants={fadeInUp}
              className="w-full sm:w-[260px]"
            >
              <Card
                title={card.title}
                subtitle={card.subtitle}
                image={card.image}
                des={card.description}
              />
            </motion.div>
          ) : activeTab === 2 ? (
            <motion.div
              key={activeTab}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="w-full p-6 sm:p-8 bg-transparent rounded-lg  dark:border-neutral-800"
            >
              <p className="text-sm sm:text-base mb-3">
                Welcome to the resourses tab. Here, you will find Resourse
                guides, examples, and best practices to help you quickly get
                started with our project.
              </p>
            </motion.div>
          ) : null
        )}
      </motion.div>
    </div>
  );
}
