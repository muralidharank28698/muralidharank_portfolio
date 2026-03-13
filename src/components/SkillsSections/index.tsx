import React from "react";
import {
  MicrosoftSharePointSPFXTechnologyStack,
  TechnologyStack,
  versionControlTools,
} from "../../lib/data";
import "./index.css";
import LogoLoop from "./LogoLoop";

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
      {/* ===== HEADING SECTION ===== */}
      <div className="flex flex-col items-center text-center">
        {/* Pill badge */}
        <div
          className="inline-flex items-center gap-1.5 px-3 rounded-full
          bg-sky-400/10 dark:bg-sky-400/10
          border border-sky-400/25
          mb-4 sm:mb-6"
        >
          <span className="text-xs">⚡</span>
          <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-sky-400">
            Tech Stack
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="text-neutral-900 dark:text-white transition-colors duration-300">
            Explore{" "}
          </span>
          <span
            style={{
              background: "linear-gradient(90deg, #38bdf8, #34d399)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            My Skillset
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
          A curated collection of tools, frameworks, and technologies I've
          worked with across projects.
        </p>
      </div>

      {/* ===== DEVELOPMENT TOOLS LOOP ===== */}
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
        {/* <div className="flex items-center justify-center gap-2">
          <button className="flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 px-4 py-1">
            <span className="text-xs font-medium capitalize whitespace-nowrap">
              Development Tools
            </span>
          </button>
        </div> */}
        <div
          className="w-full overflow-hidden
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

      {/* ===== TWO COLUMN LOGO LOOPS ===== */}
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
        {/* Left: Version Control Tools */}
        <div
          className="
            rounded-xl
            sm:p-4 sm:p-5 md:p-6
            flex flex-col items-center
            w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto
          "
        >
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

        {/* Right: SharePoint SPFx Toolkit */}
        <div
          className="
            rounded-lg
            sm:p-4 sm:p-5 md:p-6
            flex flex-col items-center justify-center
            w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto
          "
        >
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
