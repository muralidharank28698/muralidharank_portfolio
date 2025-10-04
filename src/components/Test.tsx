import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
// import "./index.css";

interface Itabcontent {
  id: string;
  title: string;
  description: string;
  progress: string;
  image: string;
}

const tabs = [
  { id: "policy", label: "SP Policy Center" },
  { id: "contract", label: "SP Contract Portal" },
  { id: "incident", label: "SP Incident Tracker" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = React.useState<any>("policy");
  const navigate = useNavigate();
  const currentTabIndex = tabs.findIndex((tab) => tab.id === activeTab);
  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left" && currentTabIndex > 0) {
      setActiveTab(tabs[currentTabIndex - 1].id); // Move to the previous tab
    } else if (direction === "right" && currentTabIndex < tabs.length - 1) {
      setActiveTab(tabs[currentTabIndex + 1].id); // Move to the next tab
    }
  };

  const tabContent: Record<string, Itabcontent> = {
    policy: {
      id: "policy-management",
      title: "SP Policy Center",
      description: `Simplify your policy management lifecycle with our AI-powered Microsoft 365 SharePoint solution. Featuring modules for Policy Creation, Policy Library, and Policy Attestation, it’s user-friendly, scalable, and designed for seamless compliance. Incorporate industry best practices and streamline processes within your trusted SharePoint environment.`,
      progress: "95%",
      image: require("../../assets/Profile/sharePointImageBg.png"),
    },
    contract: {
      id: "contract-management",
      title: "SP Contract Portal",
      description: `The Contract Management Software on SharePoint streamlines the entire contract lifecycle, from requests to approvals and signatures. With a centralized repository, users can manage obligations, renewals, and expirations effortlessly. Built on Microsoft 365, it automates contract tracking while incorporating industry best practices.`,
      progress: "85%",
      image: require("../../assets/Profile/sharePointImageBg.png"),
    },
    incident: {
      id: "incident-management",
      title: "SP Incident Tracker",
      description: `The Microsoft 365 SharePoint Incident Management Software streamlines the entire incident lifecycle, from reporting and investigations to root cause analysis, corrective actions, and validation. With a centralized platform, organizations can simplify compliance and risk mitigation while promoting accountability. Custom forms and a user-friendly workflow engine enable efficient case management, improving visibility and collaboration across teams.`,
      progress: "75%",
      image: require("../../assets/Profile/sharePointImageBg.png"),
    },
  };

  // const handleClick = () => {
  //   // Navigate to the '/allProjects' route with state
  //   console.log("activeTab", activeTab,tabContent[activeTab]);
  //   navigate("/allProjects");
  // };
  // const handleClick = () => {
  //   const sectionId = "Policy Management"; // Example
  //   const url = `/allProjects?sectionId=${encodeURIComponent(sectionId)}`;
  //   window.location.href = url; // Navigate to the new page with query parameters
  // };

  return (
    <motion.section
      className="max-w-4xl mx-auto text-center leading-8 sm:mb-0 scroll-mt-28  px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <section id="services" className="our-services-area pt-20">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
              <div className="section-title text-center">
                <h6 className="sub-title text-sm font-semibold uppercase pb-2">
                  Projects works
                </h6>
                <h4 className="title text-xl md:text-2xl lg:text-3xl font-bold">
                  Professional Work Experience & <span>Key Projects</span>
                </h4>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div className="flex items-center justify-between gap-4 border-b overflow-x-auto py-3">
              {/* Left Arrow */}
              <div className="flex gap-4">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleArrowClick("left");
                  }}
                  className="text-gray-500 hover:text-teal-600 transition duration-300"
                  aria-label="Previous Tab"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </a>

                {/* Right Arrow */}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleArrowClick("right");
                  }}
                  className="text-gray-500 hover:text-teal-600 transition duration-300"
                  aria-label="Next Tab"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </a>
                {/* Active Tab Label */}
                <p className="text-xl font-semibold tracking-wide text-teal-500">
                  {tabs.find((tab) => tab.id === activeTab)?.label}
                </p>
              </div>

              {/* Tab Count */}
              <p className="text-gray-600 font-medium text-lg">
                {tabs.findIndex((tab) => tab.id === activeTab) + 1}/
                {tabs.length}
              </p>
            </div>

            {/* <motion.ul
              className="flex justify-center lg:space-x-24  border-b overflow-x-auto flex-wrap px-4 py-3"
              id="myTab"
              role="tablist"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {[
                { id: "policy", label: "SP Policy Center" },
                { id: "contract", label: "SP Contract Portal" },
                { id: "incident", label: "SP Incident Tracker" },
              ].map((tab) => (
                <motion.li
                  key={tab.id}
                  className="nav-item flex flex-col items-center space-y-2 w-24 sm:w-28 lg:w-32"
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="#"
                    className={`block text-center ${
                      activeTab === tab.id ? "text-teal-500" : "text-gray-500"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(tab.id);
                    }}
                  >
                    <div className="flex flex-row  mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>

                      <span className="text-center text-sm sm:text-base lg:text-lg">
                        {tab.label}
                      </span>
                    </div>
                  </a>
                </motion.li>
              ))}
            </motion.ul> */}

            <motion.div
              className="tab-content mt-8"
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap items-center justify-center">
                <motion.div
                  className="w-full sm:w-1/2 lg:w-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="our-services-image mt-8 lg:mt-0">
                    <motion.img
                      src={tabContent[activeTab].image}
                      alt="service"
                      className="w-full h-auto"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="w-full sm:w-1/2 lg:w-1/2 mt-8 lg:mt-0 lg:pl-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="our-services-content">
                    <motion.h3
                      className="services-title text-xl md:text-2xl font-bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {tabContent[activeTab].title}
                    </motion.h3>
                    <motion.p
                      className="text mt-4 text-gray-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {tabContent[activeTab].description}
                    </motion.p>

                    <motion.div
                      className="our-services-progress flex items-center mt-8 relative"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="progress-content w-full">
                        <motion.div
                          // className="link-container mt-2 flex justify-center md:justify-end md:absolute md:right-0"
                          className="link-container mt-2  md:static md:mt-4 flex justify-center md:right-0 md:justify-end"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <Link
                            // to="/allProjects"
                            to={`/allProjects`}
                            // state={{
                            //   sectionId: { title: "Policy Management" },
                            //   fromSection: "policy-section", // Unique section identifier
                            // }}
                            state={{ sectionId: tabContent[activeTab] }}
                            className="inline-flex items-center px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
                          >
                            Explore here
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-5 h-5 ml-2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                              />
                            </svg>
                          </Link>
                          {/* <button
                            onClick={handleClick}
                            className="inline-flex items-center px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
                          >
                            Explore here
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-5 h-5 ml-2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                              />
                            </svg>
                          </button> */}
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}
