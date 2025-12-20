import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { links } from "../../lib/data";
import clsx from "clsx";
import Headroom from "react-headroom";
import { MobileViewMenu } from "./MobileViewMenu";
import { NavigationLinks } from "./NavigationLinks";
import { GgMenuRight } from "../../assets/icons";
// import { HugeiconsMenu02 } from "../../assets/icons/Hamburgar";
// import { HugeiconsMenu03 } from "../../assets/icons/Hamburgar";
// import Hamburger from 'hamburger-react'

// Define a union type for valid section names
type SectionName =
  | "Profile"
  | "About"
  | "Skills"
  | "Education"
  | "Projects"
  | "Experience"
  | "Contact";

interface HeaderProps {
  activeSection: SectionName;
  setActiveSection: (section: SectionName) => void;
  scrollHandler: (sectionRef: React.RefObject<HTMLElement | null>) => void;
  refs: {
    introductionRef: React.RefObject<HTMLElement | null>;
    aboutRef: React.RefObject<HTMLElement | null>;
    skillsRef: React.RefObject<HTMLElement | null>;
    educationRef: React.RefObject<HTMLElement | null>;
    projectsRef: React.RefObject<HTMLElement | null>;
    experienceRef: React.RefObject<HTMLElement | null>;
    contactRef: React.RefObject<HTMLElement | null>;
  };
}

const Header: React.FC<HeaderProps> = ({
  activeSection,
  setActiveSection,
  scrollHandler,
  refs,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  // Handle scroll visibility logic based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // User is scrolling down and passed 50px from the top
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // User is scrolling up
        setIsVisible(true);
      }

      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleScrollToSection = (sectionName: SectionName) => {
    switch (sectionName) {
      case "Profile":
        scrollHandler(refs.introductionRef);
        break;
      case "About":
        scrollHandler(refs.aboutRef);
        break;
      case "Skills":
        scrollHandler(refs.skillsRef);
        break;
      case "Education":
        scrollHandler(refs.educationRef);
        break;
      case "Projects":
        scrollHandler(refs.projectsRef);
        break;
      case "Experience":
        scrollHandler(refs.experienceRef);
        break;
      case "Contact":
        scrollHandler(refs.contactRef);
        break;
      default:
        break;
    }
  };

  return (
    <div className="px-3">
      <header 
      // className={clsx("relative z-50", { hidden: !isVisible })}
      
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 mx-4",
        // {
        //   "transform translate-y-0": isVisible, // Menu is visible when scrolling up
        //   "transform -translate-y-full": !isVisible, // Menu is hidden when scrolling down
        // }
      )}
      >
        <div className="flex items-center justify-between h-16 pt-5">
          <div className="flex items-center">
            {/* <Link to="/" aria-label="Home">
              <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg dark:bg-zinc-800/90 dark:ring-white/10">
                <img
                  alt="Logo"
                  className="rounded-full h-9 w-9 object-cover"
                  src="path-to-your-logo"
                />
              </div>
            </Link> */}
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex">
            {/* <ul className="py-1 flex space-x-4 rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.name}
                    className={clsx(
                      "relative block px-3 py-2 transition",
                      {
                        "text-teal-500 dark:text-teal-400":
                          activeSection === link.name,
                      },
                      {
                        "hover:text-teal-500 dark:hover:text-teal-400":
                          activeSection !== link.name,
                      }
                    )}
                    onClick={() =>
                      handleScrollToSection(link.name as SectionName)
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul> */}
            <NavigationLinks
              activeSection={activeSection}
              links={links}
              handleScrollToSection={handleScrollToSection}
              setActiveSection={setActiveSection}
            />
          </nav>

          {/* Menu Button for Mobile */}
          <div className="md:hidden">
            <Link to="#Profile" aria-label="Profile" onClick={() => {
              setActiveSection("Profile");
              handleScrollToSection("Profile");
            }}>
              <div className="h-10 w-10 rounded-full p-0.5 border border-indigo-200 dark:ring-white/10">
                <img
                  alt="Logo"
                  className="rounded-full h-9 w-9 object-cover"
                  src={require("../../assets/Profile/logo_m.png")}
                />
              </div>
            </Link>
          </div>
          <div className="md:hidden ml-auto">
            <GgMenuRight onClick={toggleMenu} />
            {/* <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} /> */}
            {/* <button
              onClick={toggleMenu}
              className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg dark:bg-zinc-800/90 dark:text-zinc-200"
            >
              Menu
              <svg
                viewBox="0 0 8 6"
                aria-hidden="true"
                className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
              >
                <path
                  d="M1.75 1.75 4 4.25l2.25-2.5"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button> */}
          </div>

          {/* Dark/Light Mode Switcher */}
          <div className="flex items-center">
            {/* <button
              type="button"
              aria-label="Switch theme"
              className="group rounded-full bg-white/90 px-3 py-2 shadow-lg dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 hidden dark:block"
                aria-hidden="true"
              >
                <path
                  d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 dark:hidden"
                aria-hidden="true"
              >
                <path
                  d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                  fill="none"
                />
              </svg>
            </button> */}
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <MobileViewMenu
          closeMenu={closeMenu}
          links={links}
          activeSection={activeSection}
          handleScrollToSection={handleScrollToSection}
          setActiveSection={setActiveSection}
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />
      )}
    </div>
  );
};

export default Header;

// ------------------------------------------------------------------------------------------------------------------

// old

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { links } from "../../lib/data";
// import clsx from "clsx";
// import Headroom from "react-headroom";

// // Define a union type for valid section names
// type SectionName =
//   | "Home"
//   | "About"
//   | "Skills"
//   | "Education"
//   | "Projects"
//   | "Experience"
//   | "Contact";

// interface HeaderProps {
//   activeSection: SectionName;
//   setActiveSection: (section: SectionName) => void;
//   scrollHandler: (sectionRef: React.RefObject<HTMLElement | null>) => void;
//   refs: {
//     introductionRef: React.RefObject<HTMLElement | null>;
//     aboutRef: React.RefObject<HTMLElement | null>;
//     skillsRef: React.RefObject<HTMLElement | null>;
//     educationRef: React.RefObject<HTMLElement | null>;
//     projectsRef: React.RefObject<HTMLElement | null>;
//     experienceRef: React.RefObject<HTMLElement | null>;
//     contactRef: React.RefObject<HTMLElement | null>;
//   };
// }

// const Header: React.FC<HeaderProps> = ({
//   activeSection,
//   setActiveSection,
//   scrollHandler,
//   refs,
// }) => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

//   // Handle scroll visibility logic based on scroll direction
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY && currentScrollY > 50) {
//         // User is scrolling down and passed 50px from the top
//         setIsVisible(false);
//       } else if (currentScrollY < lastScrollY) {
//         // User is scrolling up
//         setIsVisible(true);
//       }

//       // Update last scroll position
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY]);

//   const handleScrollToSection = (sectionName: SectionName) => {
//     switch (sectionName) {
//       case "Home":
//         scrollHandler(refs.introductionRef);
//         break;
//       case "About":
//         scrollHandler(refs.aboutRef);
//         break;
//       case "Skills":
//         scrollHandler(refs.skillsRef);
//         break;
//       case "Education":
//         scrollHandler(refs.educationRef);
//         break;
//       case "Projects":
//         scrollHandler(refs.projectsRef);
//         break;
//       case "Experience":
//         scrollHandler(refs.experienceRef);
//         break;
//       case "Contact":
//         scrollHandler(refs.contactRef);
//         break;
//       // Add other sections as needed
//       default:
//         break;
//     }
//   };

//   return (
//     // <div className="shadow-xs rounded-3xl px-3">
//     <header className="z-[999] relative">
//       {/* Motion div for the header background */}
//       <motion.div
//         className={clsx(
//           "fixed top-0  transform -translate-x-1/2 h-[4.5rem]",
//           "rounded-none sm:rounded-full border-gray border-opacity-40",
//           // "left-1/2 sm:w-[36rem] w-full  dark:border-black/40",
//           // "rounded-b-full p-10 m-16 shadow-lg",
//           // "backdrop-blur-md bg-opacity-80 bg-white border-gray-100 dark:bg-gray-950 dark:bg-opacity-75 dark:border-black/40 p-12 rounded-b-full shadow-lg sm:h-[3.25rem] sm:top-6 sm:w-[86rem top-0"
//           "bg-white bg-opacity-80 backdrop-blur-md",
//           "sm:top-6 sm:h-[3.25rem]  dark:bg-opacity-75"
//         )}
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
//         transition={{ type: "spring", stiffness: 300, damping: 30 }}
//         exit={{ y: -100, opacity: 0 }}
//       />

//       {/* Navigation */}
//       {/* shadow-xs rounded-3xl px-3  */}
//       <nav className="flex fixed top-[0.15rem] left-1/2 transform -translate-x-1/2 h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
//         <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
//           {links.map((link) => (
//             <motion.li
//               className="h-3/4 flex items-center justify-center relative"
//               key={link.hash}
//               initial={{ y: -100, opacity: 0 }}
//               animate={{
//                 y: isVisible ? 0 : -100,
//                 opacity: isVisible ? 1 : 0,
//               }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             >
//               <Link
//                 className={clsx(
//                   "flex w-full items-center justify-center px-3 py-3 h transition",
//                   {
//                     "text-gray-950 dark:text-gray-200":
//                       activeSection === link.name,
//                   }
//                 )}
//                 to={link.hash}
//                 onClick={() => {
//                   setActiveSection(link.name as SectionName);
//                   handleScrollToSection(link.name as SectionName);
//                 }}
//               >
//                 {link.name}
//                 {link.name === activeSection && (
//                   <motion.span
//                     className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
//                     layoutId="activeSection"
//                     transition={{
//                       type: "spring",
//                       stiffness: 380,
//                       damping: 30,
//                     }}
//                   />
//                 )}
//               </Link>
//             </motion.li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//     // </div>
//   );
// };

// export default Header;
