import React, { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"; // Using react-icons for the back arrow

export const ProfessionalExperience: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { sectionId } = location.state || {}; // Get sectionId from state
  console.log("sectionIdsectionId---", sectionId);

  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page before the browser paints the screen
  }, []);

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="p-10">
      <button
        onClick={handleBack}
        className="flex items-center mb-4 text-blue-500 hover:text-blue-700 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
      {sectionId === "ConvergePoint" && (
        <>
          {/* <div className="bg-cover bg-center relative" style={{ backgroundImage: "url('/path/to/cover-image.jpg')" }}>
            <div className="p-0 md:p-10 rounded-lg flex flex-col md:flex-row">
            <div className="md:w-2/3 p-4">
              <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">ConvergePoint India Private</h1>
              <p className="text-lg mb-2 text-black dark:text-white"><span className="font-semibold">Roles and Responsibilities:</span> Managed the development and deployment of SharePoint solutions, collaborated with cross-functional teams, and ensured project deliverables met quality standards.</p>
              <p className="text-lg mb-2 text-black dark:text-white"><span className="font-semibold">Technologies Used:</span> React, Redux, Node.js, SharePoint SPFx framework, PnP JS, CAML Query, Tailwind CSS, HTML, CSS, JavaScript, TypeScript, Git, GitHub, Microsoft Teams, Agile methodology, Scrum.</p>
              <p className="text-lg mb-2 text-black dark:text-white"><span className="font-semibold">Duration:</span> January 2020 - December 2021</p>
              <p className="text-lg mb-2 text-black dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            </div>
            // rc="https://www.sokawakata.com/med/SPOLUEALF_prd_1280x720-1024x576.jpg" />
            </div>
          </div>
        </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-4">
            <div>
              <h2 className="text-sm font-medium text-gray-500 text-3xl font-bold mb-2 text-black dark:text-white flex justify-between">
                <div> Software Developer | SharePoint Developer</div>
                <div>Feb 2024 - Present</div>
              </h2>
              <h2
                className="text-4xl font-bold text-gray-900 text-3xl font-bold mb-4 text-black dark:text-white"
                style={{ maxWidth: "500px" }}
              >
                ConvergePoint India{" "}
                <span className="text-blue-600">Private Limited</span>
              </h2>
              <p className="text-md mb-2 text-black dark:text-white text-justify flex items-start">
                <span className="mr-2">•</span>
                Developed custom SharePoint web parts using SPFx (SharePoint
                Framework) with React.js, translating complex Figma designs into
                functional components to enhance user experience.
              </p>
              <p className="text-md mb-2 text-black dark:text-white text-justify flex items-start">
                <span className="mr-2">•</span>
                Leveraged modern web development techniques including TypeScript
                and SASS within the SPFx ecosystem, ensuring robust, scalable,
                and performance-optimized SharePoint solutions.
              </p>
              <p className="text-md mb-2 text-black dark:text-white text-justify flex items-start">
                <span className="mr-2">•</span>
                Created and managed SharePoint lists and libraries tailored to
                product requirements, integrating CAML query and PnP JS to
                interact with SharePoint APIs, enabling efficient retrieval and
                updates.
              </p>
              <p className="text-md mb-2 text-black dark:text-white text-justify flex items-start">
                <span className="mr-2">•</span>
                Integrated AI capabilities using Azure AI services, developing a
                standalone AI container library that seamlessly integrates with
                SharePoint to enhance functionality.
              </p>
              <p className="text-md mb-2 text-black dark:text-white text-justify flex items-start">
                <span className="mr-2">•</span>
                Developed reusable web part components based on design
                specifications, ensuring consistency and efficiency across
                different products.
              </p>
              <p className="text-md mb-2 text-black dark:text-white text-justify flex items-start">
                <span className="mr-2">•</span>
                Created and packaged custom SharePoint libraries for deployment,
                integrating them into products to streamline development
                processes.
              </p>
            </div>
            <div className="flex flex-col space-y-4 p-2">
              <div className="md:w-full flex justify-center items-center">
                {/* <img
                  src="https://www.sokawakata.com/med/SPOLUEALF_prd_1280x720-1024x576.jpg"
                  className="w-full h-auto object-cover"
                /> */}
              </div>
                <p className="text-2xl font-medium text-blue-600">Technologies Used</p>
              <div className="flex items-center space-x-4 p-4 border rounded-lg">
                {/* hover:bg-gray-100 */}
                {/* <FiArrowLeft className="text-blue-500" /> */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Git",
                      "CSS3",
                      "Swagger API",
                      "RTK Query",
                      "Sharepoint Framework (SPFx)",
                      "React-Router-DOM",
                      "PNP Js",
                      "Sharepoint Libraries",
                      "React Hooks",
                      "JavaScript",
                      "LangString",
                      "Azure Devops",
                      "Bootstrap (Framework)",
                      "Redux",
                      "React.js",
                      "Postman API",
                      "Fluent UI",
                      "REST APIs",
                      "Azure DevOps Services",
                      "HTML5",
                      "npm",
                      "Chart.js",
                      "TypeScript",
                      "Sharepoint Lists",
                      "Griffel.js",
                      "CAML Query",
                      "Redux Toolkit",
                      "UI Components",
                      "Microsoft Sharepoint 365",
                      "PdfHighlighter",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 border rounded-md text-sm text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {sectionId === "FocusCraftTech" && (
        // <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        //   <div>
        //     <h2 className="text-sm font-medium text-gray-500">
        //       Design resources
        //     </h2>
        //     <h2
        //       className="text-4xl font-bold text-gray-900"
        //       style={{ maxWidth: "500px" }}
        //     >
        //       Enhance your{" "}
        //       <span className="text-blue-600">design workflow</span>
        //     </h2>
        //     <p className="text-lg text-gray-700">
        //       Reach out for the Figma Design Kit and the Sync plugin to bridge
        //       the gap between development and design when using Material UI.
        //     </p>
        //   </div>
        //   <div className="flex flex-col space-y-4">
        //     <button className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-100">
        //       <FiArrowLeft className="text-blue-500" />
        //       <div>
        //         <p className="text-lg font-medium text-gray-900">Design Kit</p>
        //         <p className="text-sm text-gray-600">
        //           Get many Material UI components with states, variations,
        //           colors, typography, and icons on your preferred design tool.
        //         </p>
        //       </div>
        //     </button>
        //     <button className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-100">
        //       <FiArrowLeft className="text-blue-500" />
        //       <div>
        //         <p className="text-lg font-medium text-gray-900">Sync plugin</p>
        //         <p className="text-sm text-gray-600">
        //           Quickly generate a Material UI theme file with token and
        //           component customizations done on Figma.
        //         </p>
        //       </div>
        //     </button>
        //   </div>
        // </div>
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-4">
            <div>
              <h2 className="text-sm font-medium text-gray-500 text-3xl font-bold mb-2 text-black dark:text-white flex justify-between">
                <div>Software Developer | Frontend Developer</div>
                <div>Nov 2021 - Dec 2023</div>
              </h2>
              <h2
                className="text-4xl font-bold text-gray-900 text-3xl font-bold mb-4 text-black dark:text-white"
                style={{ maxWidth: "500px" }}
              >
                Focuscraft Tech{" "}
                <span className="text-blue-600">Private Limited</span>
              </h2>
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                Roles and Responsibilities:
              </h3>
              <p className="text-md mb-2 text-black dark:text-white text-justify flex items-start">
                <span className="mr-2">•</span>
                Developed UI components per design specs, integrated third-party
                APIs, and maintained bug-free performance. Collaborated with
                teams to create responsive, user-friendly web applications.
              </p>
              <p className="text-md mb-2 text-black dark:text-white text-justify flex items-start">
                <span className="mr-2">•</span>
                Utilized React.js for interactive web elements, enhancing user
                experience. Ensured API correctness using Swagger UI.
              </p>
              <p className="text-md mb-2 text-black dark:text-white text-justify flex items-start">
                <span className="mr-2">•</span>
                Leveraged Storybook for UI development, creating reusable UI
                packages. Managed state with Redux and Redux Toolkit, using
                Redux DevTools for debugging.
              </p>
              <p className="text-md mb-2 text-black dark:text-white text-justify flex items-start">
                <span className="mr-2">•</span>
                Built applications with microservices architecture using React.
                Ensured application reliability with Jest automated testing.
              </p>
              <p className="text-md mb-2 text-black dark:text-white text-justify flex items-start">
                <span className="mr-2">•</span>
                Designed reusable components with customization capabilities.
                Troubleshot and debugged front-end issues, ensuring
                cross-browser compatibility.
              </p>
              <p className="text-md mb-2 text-black dark:text-white text-justify flex items-start">
                <span className="mr-2">•</span>
                Enhanced website performance by optimizing load times and page
                speed. Managed projects from initiation to completion, ensuring
                timely delivery.
              </p>
            </div>
            <div className="flex flex-col space-y-4 p-2">
              <div className="md:w-fullflex justify-center items-center">
                {/* <img
                  src="https://www.sokawakata.com/med/SPOLUEALF_prd_1280x720-1024x576.jpg"
                  className="w-full h-auto object-cover"
                /> */}
              </div>
              <p className="text-2xl font-medium text-blue-600">
                Technologies Used
              </p>
              <div className="flex items-center space-x-4 p-4 border rounded-lg">
                {/* hover:bg-gray-100 */}
                {/* <FiArrowLeft className="text-blue-500" /> */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Git",
                      "Redux Thunk",
                      "CSS3",
                      "Swagger API",
                      "Storybooks",
                      "Jira",
                      "Redux.js",
                      "Front-End Development",
                      "React-Router-DOM",
                      "Material-UI",
                      "Yarn",
                      "GraphQL",
                      "React Hooks",
                      "JavaScript",
                      "React.js",
                      "Jest",
                      "React Native",
                      "Postman API",
                      "React Testing Library",
                      "HTML5",
                      "npm",
                      "TypeScript",
                      "i18next",
                      "Bitbucket",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 border rounded-md text-sm text-gray-600 dark:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </>
      )}
    </div>
  );
};
