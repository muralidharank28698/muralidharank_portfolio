import React, { useRef } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
// import { BsArrowBarRight } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "policy-management",
    title: "SP Policy Center",
    description: `Microsoft 365 SharePoint for streamlined, scalable, secure Policy Center.`,
    image:
      "https://compass365.com/wp-content/uploads/2024/04/Top-3-Insights-from-the-2024-Gartner-Digital-Workplace-Summit.jpg",
  },
  {
    id: "contract-management",
    title: "SP Contract Portal",
    description: `SharePoint contract portal streamlining and automating the lifecycle from request to signature.`,
    image:
      "https://images.squarespace-cdn.com/content/v1/5ab688b21aef1d55f061696c/1607122679047-TBVGSN5XW5IN2UHLLQJA/shutterstock_1818362339.jpg",
  },
  {
    id: "incident-management",
    title: "SP Incident Tracker",
    description: `Microsoft 365 SharePoint tracker for simplified reporting, compliance, and collaboration.`,
    image:
      "https://www.hospitalmanagementasia.com/wp-content/uploads/2023/11/Apollo-2.jpg",
  },
  {
    id: "contract-management",
    title: "SP Incident Tracker",
    description: `Microsoft 365 SharePoint tracker for simplified reporting, compliance, and collaboration.`,
    image:
      "https://media.istockphoto.com/id/1350606689/photo/business-woman-using-a-laptop-with-digital-graph-to-document-management-software-online.jpg?s=612x612&w=0&k=20&c=vV2qXwIybbg-eJBCmIlGkTA-V5nB1xjDWveXEKXVK-g=",
  },
];

const Projects: React.FC = () => {

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    // <section className="py-8 w-full">
    <motion.section
      // className="py-8 w-full"
      className="max-w-5xl leading-8 sm:mb-0 scroll-mt-28 pt-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <h1 className="text-3xl text-center  font-bold capitalize pt-12">
        Projects{" "}
        <span className="text-[#57d5ff] dark:text-[#57d5ff]">Works</span>
      </h1>
      <hr className="w-16 h-1 mx-auto my-4 bg-[#57d5ff] border-0" />
      <div className="relative px-4 w-full sm:mx-auto sm:max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-4 items-start justify-between sm:flex-row sm:items-center">
          <p className="mb-2 text-base sm:mb-3 sm:text-lg font-semibold">
            Key Projects
          </p>

          {/* Custom arrows */}
          <div className="flex items-center gap-1">
            <button
              ref={prevRef}
              aria-label="Previous"
              className="rounded-full border border-neutral-400 bg-white dark:bg-neutral-800 dark:border-neutral-600 p-1"
            >
              <IoIosArrowRoundBack size={16} />
            </button>
            <button
              ref={nextRef}
              aria-label="Next"
              className="rounded-full border border-neutral-400 bg-white dark:bg-neutral-800 dark:border-neutral-600 p-1"
            >
              <IoIosArrowRoundForward size={16}/>
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          onInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          slidesPerView={1} // Mobile: 1 card
          spaceBetween={16}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 16 }, // Tablet: 2 cards
            1024: { slidesPerView: 3, spaceBetween: 20 }, // Desktop: 3 cards
          }}
          className="mt-4 w-full"
        >
          {blogPosts.map((post, idx) => (
            <SwiperSlide key={idx} className="w-full">
              <article className="rounded-lg shadow-sm shadow-neutral-200/40 dark:shadow-neutral-800/40 border border-neutral-200/40 dark:border-neutral-700/40 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full sm:h-60 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
                <div className="p-4">
                  <div className="flex flex-col items-start gap-2">
                    <Link
                      to={`/allProjects`}
                      state={{ sectionId: post.id }}
                      className="inline-flex items-center gap-1 rounded-md border border-neutral-200/40 dark:border-neutral-700/40 shadow-sm shadow-neutral-200/40 dark:shadow-neutral-800/40 px-3 py-1 text-xs sm:text-sm text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
                    >
                      more info
                      <RiArrowRightSLine className="text-lg sm:text-xl" />
                    </Link>

                    <h3 className="text-base sm:text-lg font-medium leading-snug">
                      {post.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#8b949e] pt-2">
                    {post.description}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Projects;
