import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { links } from "../../lib/data";
import clsx from "clsx";
import { MobileViewMenu } from "./MobileViewMenu";
import { NavigationLinks } from "./NavigationLinks";
import { GgMenuRight } from "../../assets/icons";

type SectionName =
  | "Intro"
  | "Story"
  | "Skills"
  | "Education"
  | "Journey"
  | "Work"
  | "Connect";

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
  const [, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScrollToSection = (sectionName: SectionName) => {
    switch (sectionName) {
      case "Intro":
        scrollHandler(refs.introductionRef);
        break;
      case "Story":
        scrollHandler(refs.aboutRef);
        break;
      case "Skills":
        scrollHandler(refs.skillsRef);
        break;
      case "Education":
        scrollHandler(refs.educationRef);
        break;
      case "Journey":
        scrollHandler(refs.experienceRef);
        break;
      case "Work":
        scrollHandler(refs.projectsRef);
        break;
      case "Connect":
        scrollHandler(refs.contactRef);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <style>{`
        .logo-avatar {
          height: 1.8rem;
          width: 1.8rem;
          border-radius: 9999px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .logo-avatar:hover {
          transform: scale(1.05);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.18),
            0 0 54px 5px rgba(56,189,248,0.45),
            0 3px 10px rgba(0,0,0,0.28);
        }
        .logo-avatar:active {
          transform: scale(0.95);
        }
      `}</style>
      <div className="px-3">
        <header
          className={clsx(
            "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 mx-4",
          )}
        >
          <div className="flex items-center justify-between h-16 pt-5">
            <div className="flex items-center" />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex">
              <NavigationLinks
                activeSection={activeSection}
                links={links}
                handleScrollToSection={handleScrollToSection}
                setActiveSection={setActiveSection}
              />
            </nav>

            {/* Mobile: Logo */}
            <div className="md:hidden">
              <Link
                to="#Intro"
                aria-label="Intro"
                onClick={() => {
                  setActiveSection("Intro");
                  handleScrollToSection("Intro");
                }}
              >
                <div className="logo-avatar">
                  <img
                    alt="Logo"
                    className="rounded-full h-full w-full object-cover"
                    src={require("../../assets/Profile/aaa.png")}
                  />
                </div>
              </Link>
            </div>

            {/* Mobile: Hamburger */}
            <div className="md:hidden ml-auto">
              <GgMenuRight onClick={toggleMenu} width={36} height={36} />
            </div>

            <div className="flex items-center" />
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
    </>
  );
};

export default Header;
