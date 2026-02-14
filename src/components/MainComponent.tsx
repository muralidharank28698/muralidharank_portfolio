import React, { useRef } from "react";
// import { BrowserRouter } from "react-router-dom";
import { useActiveSectionContext } from "../context/active-section-context";
// import { useSectionInView } from "../lib/hooks";
import Header from "./HeaderSection";
import Introduction from "./IntroductionSection";
import About from "./AboutSection";
import Skills from "./SkillsSections";
import Education from "./EducationSection";
import Projects from "./ProjectsSection";
import Experience from "./ExperienceSection";
import Contact from "./ContactSection";
import StickyTabs from "./MyServices/StickyTabs";
// import Tools from "./Tools";
// import TestimonialSection from "./EducationSection";
// import "./MainComponent.css";

const MainComponent: React.FC = () => {
  const { activeSection, setActiveSection } = useActiveSectionContext();
  console.log("activeSectionactiveSectionactiveSection--", activeSection);

  // Refs for sections
  const introductionRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const educationRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  // Hook to track section visibility
  //   useSectionInView(introductionRef, setActiveSection, "Home");
  //   useSectionInView(aboutRef, setActiveSection, "About");

  const scrollHandler = (sectionRef: React.RefObject<HTMLElement | null>) => {
    if (sectionRef?.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* <Headroom> */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        scrollHandler={scrollHandler}
        refs={{
          introductionRef,
          aboutRef,
          skillsRef,
          educationRef,
          projectsRef,
          experienceRef,
          contactRef,
        }}
      />
      {/* </Headroom> */}
      <section
        ref={introductionRef}
        className="flex flex-col items-center pt-16 px-5"
      >
        <Introduction />
      </section>
      <section
        ref={aboutRef}
        // className="flex flex-col items-center px-5 pt-2 mb-12"
        className="relative flex flex-col items-center px-5 overflow-hidden px-5 pt-2 mt-16 pb-12"
      >
        {/* top-left soft glow */}
        {/* <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#c7f8ff]/5 blur-[280px]" /> */}

        {/* bottom-right soft glow */}
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#57d5ff]/5 blur-[160px]" />

        <About />
      </section>
      <section
        ref={skillsRef}
        className="relative flex flex-col items-center px-5 overflow-hidden"
      >
        {/* top-left soft glow */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#57d5ff]/5 blur-[160px]" />

        {/* bottom-right soft glow */}
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#57d5ff]/5 blur-[160px]" />

        <Skills />
      </section>

      <section
        ref={educationRef}
        className="relative flex flex-col items-center overflow-hidden"
      >
        {/* top-left soft glow */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#57d5ff]/5 blur-[160px]" />

        {/* bottom-right soft glow */}
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#57d5ff]/5 blur-[160px]" />

        <Education />
      </section>
      <section ref={experienceRef} 
      // className="flex flex-col items-center px-4"
        className="relative flex flex-col items-center overflow-hidden px-4"

      >
        {/* top-left soft glow */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#57d5ff]/5 blur-[160px]" />

        {/* bottom-right soft glow */}
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#57d5ff]/5 blur-[160px]" />
        <Experience />
      </section>

      <section ref={projectsRef} className="flex flex-col items-center w-full">
        <div className="w-full sm:max-w-4xl">
          {/* full width on mobile, max 4xl on desktop */}
          <Projects />
          <StickyTabs />
        </div>
      </section>
      {/* <section ref={projectsRef} className="flex flex-col items-center w-full">
        <div className="w-full sm:max-w-4xl">
          <StickyTabs />
        </div>
      </section> */}

      <section
        ref={contactRef}
        // className="flex flex-col items-center w-full
        //      border border-gray-200 dark:border-gray-700
        //      py-10 px-4 rounded-t-[4rem]"
        className="flex flex-col items-center w-full 
             border border-neutral-200/40 dark:border-neutral-700/40 
             py-10 px-4 rounded-t-[4rem] 
             shadow-sm shadow-neutral-200/40 dark:shadow-neutral-800/40"
      >
        <Contact />
      </section>
    </>
  );
};

export default MainComponent;

