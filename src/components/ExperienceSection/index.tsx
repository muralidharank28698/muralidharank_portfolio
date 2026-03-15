import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ─── Types ─────────────────────────────────────────────────────────────────

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  stack: string[];
  side: "left" | "right";
  accentColor: string;
  imageSrc: string;
  imageAlt: string;
  sectionId: string;
}

// ─── Custom hook: replaces framer-motion useInView (added in v6) ────────────

function useInView(
  ref: React.RefObject<Element>,
  options: { threshold?: number; once?: boolean } = {}
): boolean {
  const { threshold = 0.2, once = true } = options;
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold, once]);

  return inView;
}

// ─── Data ──────────────────────────────────────────────────────────────────

const experiences: ExperienceItem[] = [
  {
    id: "cognizant",
    role: "Associate Developer",
    company: "Cognizant Technology Solutions India Private Limited",
    period: "Jul 2025 – Present",
    stack: ["SPFx", "SharePoint", "TypeScript", "React"],
    side: "right",
    accentColor: "#38bdf8",
    imageSrc: require("../../assets/ExperienceImages/Ex3.webp"),
    imageAlt: "Cognizant logo",
    sectionId: "Cognizant",
  },
  {
    id: "convergepoint",
    role: "Software Developer",
    company: "ConvergePoint India Private Limited",
    period: "Feb 2024 – Jul 2025",
    stack: ["SPFx", "SharePoint", "PnP.js", "REST API"],
    side: "left",
    accentColor: "#34d399",
    imageSrc: require("../../assets/ExperienceImages/Ex5.webp"),
    imageAlt: "ConvergePoint logo",
    sectionId: "ConvergePoint",
  },
  {
    id: "focuscraft",
    role: "Software Developer",
    company: "Focuscraft Tech Private Limited",
    period: "Nov 2021 – Dec 2023",
    stack: ["React", "TypeScript", "React Native", "Redux", "Storybook"],
    side: "right",
    accentColor: "#818cf8",
    imageSrc: require("../../assets/ExperienceImages/Ex4.webp"),
    imageAlt: "Focuscraft logo",
    sectionId: "FocusCraftTech",
  },
];

// ─── TimelineStem ───────────────────────────────────────────────────────────

const TimelineStem: React.FC<{ color: string; index: number }> = ({ color, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.5 });

  return (
    <div ref={ref} className="relative flex flex-col items-center select-none h-full">
      <motion.div
        className="relative z-10 flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.15 }}
      >
        {/* Pulsing outer ring */}
        <motion.div
          className="absolute rounded-full"
          style={{ background: color, opacity: 0.18 }}
          animate={{ width: [28, 42, 28], height: [28, 42, 28] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Inner dot */}
        <div
          className="relative w-3 h-3 rounded-full border-2 border-white dark:border-neutral-900 z-10"
          style={{ background: color, boxShadow: `0 0 12px 2px ${color}55` }}
        />
      </motion.div>

      {/* Line segment below (skip on last item) */}
      {index < experiences.length - 1 && (
        <motion.div
          className="w-px flex-1 mt-2 origin-top"
          style={{ background: `linear-gradient(to bottom, ${color}55, transparent)` }}
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        />
      )}
    </div>
  );
};

// ─── GhostNumber ────────────────────────────────────────────────────────────

const GhostNumber: React.FC<{
  index: number;
  color: string;
  align: "left" | "right";
}> = ({ index, color, align }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={`hidden lg:flex ${align === "right" ? "justify-end pr-8" : "justify-start pl-8"}`}
      initial={{ opacity: 0, x: align === "right" ? 20 : -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: align === "right" ? 20 : -20 }}
      transition={{ duration: 0.5 }}
    >
      <span
        className="text-6xl font-black leading-none select-none"
        style={{ color, opacity: 0.06 }}
      >
        0{index + 1}
      </span>
    </motion.div>
  );
};

// ─── ExperienceCard ─────────────────────────────────────────────────────────

const ExperienceCard: React.FC<{
  item: ExperienceItem;
  direction: "left" | "right";
}> = ({ item, direction }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.15 });
  const [hovered, setHovered] = useState(false);

  const slideVariant = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -40 : 40,
      y: 10,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col gap-5 w-full"
      variants={slideVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`
          relative rounded-2xl overflow-hidden
          bg-white dark:bg-neutral-900
          border border-neutral-200/80 dark:border-neutral-800/80
          transition-transform transition-shadow duration-500 ease-out
          ${hovered ? "-translate-y-1" : ""}
        `}
        style={{
          boxShadow: hovered
            ? `0 20px 48px -12px ${item.accentColor}22, 0 4px 16px -4px rgba(0,0,0,0.08)`
            : "0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        {/* Accent bar */}
        <motion.div
          className="absolute top-0 left-0 h-0.5"
          style={{ background: `linear-gradient(90deg, ${item.accentColor}, transparent)` }}
          initial={{ width: "30%" }}
          animate={{ width: hovered ? "100%" : "30%" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />

        {/* Image */}
        <div className="relative w-full overflow-hidden" style={{ height: 160 }}>
          <motion.img
            src={item.imageSrc}
            alt={item.imageAlt}
            className="w-full h-full object-contain bg-neutral-50 dark:bg-neutral-950 px-8 py-4"
            animate={{ scale: hovered ? 1.03 : 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90 dark:to-neutral-900/90 pointer-events-none" />
        </div>

        {/* Body */}
        <div className="px-6 pb-6 pt-2 space-y-3">
          <div>
            <h3 className="text-base font-semibold text-neutral-900 dark:text-white leading-snug">
              {item.role}
            </h3>
            <p
              className="text-xs font-medium mt-0.5 truncate"
              style={{ color: item.accentColor }}
              title={item.company}
            >
              {item.company}
            </p>
          </div>

          {/* Pills */}
          <div className="flex flex-wrap gap-1.5">
            {item.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide transition-colors duration-200"
                style={
                  hovered
                    ? { background: `${item.accentColor}18`, color: item.accentColor }
                    : { background: "rgb(243 244 246)", color: "rgb(107 114 128)" }
                }
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-1.5 border-t border-neutral-100 dark:border-neutral-800">
            <span className="inline-flex items-center gap-1.5 text-[11px] text-neutral-400 dark:text-neutral-500">
              <svg
                className="w-3 h-3 flex-shrink-0"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="2" y="3" width="12" height="11" rx="2" />
                <path d="M2 7h12M5 1v4M11 1v4" strokeLinecap="round" />
              </svg>
              {item.period}
            </span>

            <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
              <Link
                to="/professionalExperience"
                state={{ sectionId: item.sectionId }}
                className="inline-flex items-center gap-1 text-[11px] font-semibold transition-colors duration-200"
                style={{ color: item.accentColor }}
              >
                View more
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8h10M8 3l5 5-5 5" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Footer CTA ─────────────────────────────────────────────────────────────

// const FooterCTA: React.FC = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   const inView = useInView(ref, { threshold: 0.5 });

//   return (
//     <motion.div
//       ref={ref}
//       className="flex justify-center mt-16"
//       initial={{ opacity: 0, y: 20 }}
//       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//       transition={{ duration: 0.55 }}
//     >
//       <Link
//         to="/professionalExperience"
//         className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full
//           text-sm font-semibold
//           border border-neutral-200 dark:border-neutral-700
//           text-neutral-600 dark:text-neutral-400
//           hover:border-sky-400/50 hover:text-sky-500 dark:hover:text-sky-400
//           transition-all duration-300"
//       >
//         Full experience details
//         <motion.span
//           className="inline-block"
//           animate={{ x: [0, 4, 0] }}
//           transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
//         >
//           →
//         </motion.span>
//       </Link>
//     </motion.div>
//   );
// };

// ─── Main Component ────────────────────────────────────────────────────────

export default function Experience() {
  return (
    <motion.section
      className="relative max-w-5xl mx-auto sm:px-6 lg:px-8 pt-10 pb-20 scroll-mt-28"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-96 h-96 rounded-full opacity-[0.04] dark:opacity-[0.06] blur-3xl bg-sky-400" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-[0.04] dark:opacity-[0.07] blur-3xl bg-emerald-400" />
        <div className="absolute bottom-24 left-1/3 w-72 h-72 rounded-full opacity-[0.03] dark:opacity-[0.05] blur-3xl bg-indigo-400" />
      </div>

      {/* Heading */}
      <div className="relative flex flex-col items-center text-center mb-12 sm:mb-20">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5
            border border-sky-400/25 bg-sky-400/10"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <span className="text-xs">💼</span>
          <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-sky-500 dark:text-sky-400">
            Professional Experience
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none tracking-tight"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.55 }}
        >
          <span className="text-neutral-900 dark:text-white">Where I've </span>
          <span
            style={{
              background: "linear-gradient(100deg, #38bdf8 10%, #34d399 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Worked
          </span>
        </motion.h1>

        <motion.div
          className="w-10 h-0.5 mt-4 mb-5 rounded-full"
          style={{ background: "linear-gradient(90deg, #38bdf8, #34d399)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />

        <motion.p
          className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs sm:max-w-sm leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Three organizations. Production-grade solutions built with modern
          tooling and collaborative teams.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Desktop center line */}
        <div
          aria-hidden
          className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #38bdf830 20%, #34d39930 80%, transparent)",
          }}
        />

        <div className="flex flex-col gap-10 sm:gap-20">
          {experiences.map((item, index) => (
            <div
              key={item.id}
              className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-8"
            >
              {/* Left column — card if side=left; ghost number (desktop only) if side=right */}
              <div className={item.side === "right" ? "hidden lg:block" : "lg:order-first"}>
                {item.side === "left" ? (
                  <ExperienceCard item={item} direction="left" />
                ) : (
                  <GhostNumber index={index} color={item.accentColor} align="right" />
                )}
              </div>

              {/* Center stem — desktop only */}
              <div className="hidden lg:flex flex-col items-center self-stretch py-1">
                <TimelineStem color={item.accentColor} index={index} />
              </div>

              {/* Right column — card if side=right; ghost number (desktop only) if side=left */}
              <div className={item.side === "left" ? "hidden lg:block" : ""}>
                {item.side === "right" ? (
                  <ExperienceCard item={item} direction="right" />
                ) : (
                  <GhostNumber index={index} color={item.accentColor} align="left" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <FooterCTA /> */}
    </motion.section>
  );
}
