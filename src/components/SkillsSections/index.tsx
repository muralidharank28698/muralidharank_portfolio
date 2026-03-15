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
        pt-20
        text-center
        px-6 sm:px-8 md:px-10 lg:px-12
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
      {/*
        Key fix: remove overflow-hidden from the outer wrapper so the LogoLoop's
        own px padding is not clipped. The mask handles the fade edges — it does
        NOT need overflow-hidden on the parent to work.
        The mask's transparent stops (10% / 90%) naturally leave breathing room
        on both sides, but we also add mx-auto + a negative mx trick so the
        fade reaches the padded edge of the section.
      */}
      <div className="w-full mt-8">
        <div
          className="
            w-full
            [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]
            [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]
          "
        >
          <LogoLoop
            logos={frontendLogos}
            speed={10}
            direction="left"
            pauseOnHover
          />
        </div>
      </div>

      {/* ===== TWO COLUMN LOGO LOOPS ===== */}
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
        {/* Left: Version Control Tools */}
        <div className="w-full">
          <div
            className="
              w-full
              [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]
              [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]
            "
          >
            <LogoLoop
              logos={toolsLogos}
              speed={10}
              direction="right"
              pauseOnHover
            />
          </div>
        </div>

        {/* Right: SharePoint SPFx Toolkit */}
        <div className="w-full">
          <div
            className="
              w-full
              [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]
              [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]
            "
          >
            <LogoLoop
              logos={spfxLogos}
              speed={10}
              direction="left"
              pauseOnHover
            />
          </div>
        </div>
      </div>
    </section>
  );
}
