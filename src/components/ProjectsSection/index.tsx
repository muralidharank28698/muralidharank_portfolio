import React from "react";
// import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
// import { BsArrowBarRight } from "react-icons/bs";
// import { RiArrowRightSLine } from "react-icons/ri";

// Swiper
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import StickyTabs from "../MyServices/StickyTabs";

// interface BlogPost {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
// }

// const blogPosts: BlogPost[] = [
//   {
//     id: "policy-management",
//     title: "SP Policy Center",
//     description: `Microsoft 365 SharePoint for streamlined, scalable, secure Policy Center.`,
//     image:
//       "https://compass365.com/wp-content/uploads/2024/04/Top-3-Insights-from-the-2024-Gartner-Digital-Workplace-Summit.jpg",
//   },
//   {
//     id: "contract-management",
//     title: "SP Contract Portal",
//     description: `SharePoint contract portal streamlining and automating the lifecycle from request to signature.`,
//     image:
//       "https://images.squarespace-cdn.com/content/v1/5ab688b21aef1d55f061696c/1607122679047-TBVGSN5XW5IN2UHLLQJA/shutterstock_1818362339.jpg",
//   },
//   {
//     id: "incident-management",
//     title: "SP Incident Tracker",
//     description: `Microsoft 365 SharePoint tracker for simplified reporting, compliance, and collaboration.`,
//     image:
//       "https://www.hospitalmanagementasia.com/wp-content/uploads/2023/11/Apollo-2.jpg",
//   },
//   {
//     id: "contract-management",
//     title: "SP Incident Tracker",
//     description: `Microsoft 365 SharePoint tracker for simplified reporting, compliance, and collaboration.`,
//     image:
//       "https://media.istockphoto.com/id/1350606689/photo/business-woman-using-a-laptop-with-digital-graph-to-document-management-software-online.jpg?s=612x612&w=0&k=20&c=vV2qXwIybbg-eJBCmIlGkTA-V5nB1xjDWveXEKXVK-g=",
//   },
// ];

const Projects: React.FC = () => {
  // const prevRef = useRef<HTMLButtonElement>(null);
  // const nextRef = useRef<HTMLButtonElement>(null);

  return (
    // <section className="py-8 w-full">
    <motion.section
      className="w-full max-w-5xl mx-auto leading-8 sm:mb-0 scroll-mt-28 sm:px-6 md:px-8 pt-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-4 sm:mb-10">
        {/* Pill badge */}
        <div
          className="inline-flex items-center gap-1.5 px-3 rounded-full 
  bg-sky-400/10 dark:bg-sky-400/10 
  border border-sky-400/25 
  mb-4 sm:mb-6"
        >
          <span className="text-xs">🛠️</span>
          <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-sky-400">
            Projects
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="text-neutral-900 dark:text-white transition-colors duration-300">
            Project{" "}
          </span>
          <span
            style={{
              background: "linear-gradient(90deg, #38bdf8, #34d399)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Works
          </span>
        </h1>

        {/* Underline accent */}
        <div className="w-10 sm:w-14 md:w-16 h-0.5 sm:h-1 mt-3 sm:mt-4 mb-3 sm:mb-5 rounded-full bg-gradient-to-r from-[#38bdf8] to-[#34d399]" />

        {/* Subtitle */}
        <p
          className="text-xs sm:text-sm md:text-base 
          text-neutral-500 dark:text-neutral-400 
          max-w-[260px] sm:max-w-sm md:max-w-md 
          leading-relaxed transition-colors duration-300"
        >
          A snapshot of my key projects — from concept and design to development
          and deployment.
        </p>
      </div>

      <StickyTabs />
    </motion.section>
  );
};

export default Projects;
