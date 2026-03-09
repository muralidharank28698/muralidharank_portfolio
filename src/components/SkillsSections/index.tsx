import React from "react";
import {
  MicrosoftSharePointSPFXTechnologyStack,
  TechnologyStack,
  versionControlTools,
} from "../../lib/data";
import "./index.css";
import LogoLoop from "./LogoLoop";
// const fadeInAnimationVariants = {
//   initial: {
//     opacity: 0,
//     y: 100,
//   },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.05 * index,
//     },
//   }),
// };

export default function Skills() {
  const frontendLogos = (TechnologyStack ?? []).map((item) => ({
    node: item.icon as React.ReactNode,
    title: item.name,
    href: "#",
  }));

  const toolsLogos = versionControlTools?.map((item) => ({
    node: item.icon,
    title: item.name,
    href: "#",
  }));

  const spfxLogos = MicrosoftSharePointSPFXTechnologyStack?.map((item) => ({
    node: item.icon,
    title: item.name,
    href: "#",
  }));
  return (
    <section
      className="
    max-w-5xl 
    leading-8 
    sm:mb-0 
    scroll-mt-28  
    sm:px-4 md:px-32 lg:px-8 
    pt-20 
    text-center
  "
    >
      {/* <h1 className="text-3xl font-bold capitalize pt-12">
        Explore{" "}
        <span className="text-[#57d5ff] dark:text-[#57d5ff]">My Skillset</span>
      </h1>
      <hr className="w-16 h-1 mx-auto my-4 bg-[#57d5ff] border-0" /> */}
      {/* <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6"> */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
        Explore <span className="text-[#57d5ff]">My Skillset</span>
        <hr className="w-16 h-1 mx-auto my-4 bg-[#57d5ff] border-0" />
      </h1>
      <div
        className="
    rounded-xl sm:rounded-none
    sm:p-0 sm:p-5
    md:p-6
    md:px-8
    flex flex-col items-center
    sm:flex sm:flex-col
    w-full sm:w-auto
    max-w-xs sm:max-w-none
    mx-auto sm:mx-0
  "
      >
        {/* <div className="flex items-center justify-center gap-2 py-1">
          <span className="w-4 h-px bg-gray-300"></span>
          <h2 className="text-xs font-small capitalize text-center whitespace-nowrap">
            UI Tooling
          </h2>
          <span className="w-4 h-px bg-gray-300"></span>
        </div> */}
        <div className="flex items-center justify-center gap-2">
          <button className="flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 px-4 py-1">
            <span className="text-xs font-medium capitalize whitespace-nowrap">
              Development Tools
            </span>
          </button>
        </div>
        <div
          className="pt-2 w-full overflow-hidden
        [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
        [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
      "
        >
          <LogoLoop
            logos={frontendLogos}
            speed={10}
            direction="left"
            pauseOnHover
            scaleOnHover
          />
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
        {/* Left Box: SharePoint SPFx Development Expertise */}
        <div
          className="
            rounded-xl
            sm:p-4 sm:p-5 md:p-6
            flex flex-col items-center
            w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto
          "
        >
          {/* <div className="flex flex-col items-center justify-center py-2 w-full">
            <div className="flex items-center justify-center gap-2">
              <button className="flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 px-4 py-1">
                <span className="text-xs font-medium capitalize whitespace-nowrap">
                  Tools & Processes
                </span>
              </button>
            </div>
          </div> */}
          <div
            className="
          relative w-full overflow-hidden
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
        "
          >
            <LogoLoop
              logos={toolsLogos}
              speed={10}
              direction="right"
              pauseOnHover
              scaleOnHover
            />
          </div>
        </div>
        {/* Right Box: You can add another box here for grid layout */}

        <div
          className="rounded-lg
          sm:p-4 sm:p-5 md:p-6
          flex flex-col items-center justify-center
          w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto
          "
        >
          {/* <div className="flex flex-col items-center justify-center py-2 w-full">
            <div className="flex items-center justify-center gap-2">
              <button className="flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 px-4 py-1">
                <span className="text-xs font-medium capitalize whitespace-nowrap">
                  SharePoint Toolkit
                </span>
              </button>
            </div>
          </div> */}
          <div
            className="
        relative w-full overflow-hidden
        [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
        [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
        "
          >
            <LogoLoop
              logos={spfxLogos}
              speed={10}
              direction="left"
              pauseOnHover
              scaleOnHover
            />
          </div>
        </div>
      </div>
    </section>
  );
}
