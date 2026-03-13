"use client";

import { useState, useEffect, useRef, CSSProperties, RefObject } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface EducationItem {
  year: string;
  place: string;
  title: string;
  short: string;
  desc: string;
  grade: string;
  tag: string;
  duration: string;
  color: string;
}

interface StatItem {
  label: string;
  value: string;
  icon: string;
}

interface GradientOrbProps {
  style: CSSProperties;
}

interface CardProps {
  edu: EducationItem;
  index: number;
}

interface StatsRowProps {
  headerInView: boolean;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const education: EducationItem[] = [
  {
    year: "2022",
    place: "Puducherry Technological University",
    title: "Master of Computer Applications",
    short: "MCA",
    desc: "Advanced focus on algorithms, system design, software engineering methodologies, and full-stack development.",
    grade: "8.2 CGPA",
    tag: "Post Graduate",
    duration: "2019 – 2022",
    color: "#38bdf8",
  },
  {
    year: "2019",
    place: "Saradha Gangadharan Arts & Science College",
    title: "Bachelor of Computer Applications",
    short: "BCA",
    desc: "Core foundations in databases, web technologies, object-oriented programming, and software development.",
    grade: "6.12 CGPA",
    tag: "Under Graduate",
    duration: "2016 – 2019",
    color: "#34d399",
  },
];

const stats: StatItem[] = [
  { label: "Years Studied", value: "6+", icon: "📚" },
  { label: "Degrees Earned", value: "2", icon: "🏅" },
  { label: "Top CGPA", value: "8.2", icon: "⭐" },
];

// ── Custom hook ───────────────────────────────────────────────────────────────

function useInView(
  ref: RefObject<Element | null>,
  options: IntersectionObserverInit = {}
): boolean {
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );

    obs.observe(el);
    return () => obs.disconnect();
  });

  return inView;
}

// ── Sub-components ────────────────────────────────────────────────────────────

function GradientOrb({ style }: GradientOrbProps) {
  return (
    <div
      style={{
        position: "absolute",
        borderRadius: "50%",
        filter: "blur(80px)",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}

function Card({ edu, index }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [hovered, setHovered] = useState<boolean>(false);

  const delay: number = index * 180;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0px) scale(1)"
          : "translateY(48px) scale(0.97)",
        filter: inView ? "blur(0px)" : "blur(8px)",
        transition: `
          opacity   0.7s cubic-bezier(.22,1,.36,1) ${delay}ms,
          transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}ms,
          filter    0.7s cubic-bezier(.22,1,.36,1) ${delay}ms,
          background 0.4s ease
        `,
        borderRadius: 24,
        padding: "2px",
        background: hovered
          ? `linear-gradient(135deg, ${edu.color}55, ${edu.color}22, transparent)`
          : undefined,
        cursor: "default",
      }}
      className={
        !hovered
          ? "bg-white/[0.06] dark:bg-white/[0.06] light:bg-black/[0.07]"
          : ""
      }
    >
      {/* Inner card */}
      <div
        className={`
          rounded-[22px] relative overflow-hidden
          transition-colors duration-300
          ${hovered
            ? "bg-[rgba(15,23,35,0.95)] dark:bg-[rgba(15,23,35,0.95)]"
            : "bg-[rgba(15,23,35,0.90)] dark:bg-[rgba(15,23,35,0.90)]"}
          backdrop-blur-xl
        `}
        style={{ padding: "28px 28px 24px" }}
      >
        {/* Shimmer glow on hover */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${edu.color}20 0%, transparent 70%)`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.5s ease",
            pointerEvents: "none",
          }}
        />

        {/* Top row: tag + duration + grade */}
        <div className="flex items-center gap-2 mb-[18px] flex-wrap">
          {/* Tag chip */}
          <span className="text-[10px] font-bold tracking-[0.12em] uppercase px-[10px] py-1 rounded-md bg-white/[0.07] dark:bg-white/[0.07] text-slate-400 border border-white/10 dark:border-white/10">
            {edu.tag}
          </span>

          {/* Duration chip */}
          <span
            className="text-[10px] font-semibold tracking-[0.06em] px-[10px] py-1 rounded-md"
            style={{
              background: `${edu.color}15`,
              color: edu.color,
              border: `1px solid ${edu.color}30`,
            }}
          >
            {edu.duration}
          </span>

          {/* Grade pill — pushed right */}
          <div className="ml-auto flex items-center gap-1.5">
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: edu.color,
                display: "inline-block",
                boxShadow: `0 0 8px ${edu.color}`,
                animation: "cgpa-pulse 2s infinite",
              }}
            />
            <span
              className="text-xs font-bold tracking-[0.04em]"
              style={{ color: edu.color }}
            >
              {edu.grade}
            </span>
          </div>
        </div>

        {/* Degree title */}
        {/* <h3
          className="text-[clamp(16px,4vw,20px)] font-bold leading-snug tracking-tight mb-1 text-slate-900 dark:text-slate-100"
          style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
        >
          {edu.title}
          <span
            className="ml-2 text-[13px] font-semibold opacity-90"
            style={{ color: edu.color }}
          >
            ({edu.short})
          </span>
        </h3> */}
        <h3
          className="text-[clamp(16px,4vw,20px)] font-bold leading-snug tracking-tight mb-1 text-slate-100 dark:text-slate-100"
          style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
        >
          {edu.title}
          <span
            className="ml-2 text-[13px] font-semibold opacity-90"
            style={{ color: edu.color }}
          >
            ({edu.short})
          </span>
        </h3>

        {/* Institution */}
        <p
          className="text-[13px] font-medium mb-4 opacity-85"
          style={{ color: edu.color }}
        >
          {edu.place}
        </p>

        {/* Divider */}
        <div className="h-px bg-white/[0.07] dark:bg-white/[0.07] mb-[14px] rounded" />

        {/* Description */}
        <p className="text-[13px] leading-[1.7] text-slate-400 dark:text-slate-400 m-0">
          {edu.desc}
        </p>

        {/* Bottom accent bar — slides in on hover */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            borderRadius: "0 0 22px 22px",
            background: `linear-gradient(90deg, ${edu.color}, ${edu.color}40)`,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition:
              "opacity 0.4s ease, transform 0.4s cubic-bezier(.22,1,.36,1)",
          }}
        />
      </div>
    </div>
  );
}

function StatsRow({ headerInView }: StatsRowProps) {
  return (
    <div
      className="grid grid-cols-3 gap-3 mt-7"
      style={{
        opacity: headerInView ? 1 : 0,
        transform: headerInView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s",
      }}
    >
      {stats.map((s: StatItem, i: number) => (
        <div
          key={i}
          className="text-center py-[18px] px-2 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.07] backdrop-blur-xl"
        >
          <div className="text-[22px] mb-1.5">{s.icon}</div>
          <div
            className="text-[clamp(18px,5vw,26px)] font-extrabold tracking-tight"
            style={{
              background: "linear-gradient(135deg, #38bdf8, #34d399)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {s.value}
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-500 font-medium mt-0.5 tracking-[0.04em]">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function Education() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef);

  return (
    <section
      id="education"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {/* Scoped keyframes */}
      <style>{`
        @keyframes cgpa-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.4); }
        }
      `}</style>

      {/* Ambient orbs */}
      <GradientOrb
        style={{
          top: -100,
          left: "10%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(56,189,248,0.08), transparent 70%)",
        }}
      />
      <GradientOrb
        style={{
          bottom: -80,
          right: "5%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(52,211,153,0.07), transparent 70%)",
        }}
      />
      <GradientOrb
        style={{
          top: "40%",
          left: "50%",
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(129,140,248,0.05), transparent 70%)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div
        className="relative max-w-[680px] mx-auto"
        style={{ padding: "0 clamp(16px, 5vw, 32px) 0" }}
      >
        {/* ── Section Header ───────────────────────────────────────────── */}
        <div
          ref={headerRef}
          className="text-center mb-[clamp(40px,8vw,64px)]"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(30px)",
            filter: headerInView ? "blur(0)" : "blur(6px)",
            transition:
              "opacity 0.8s cubic-bezier(.22,1,.36,1), transform 0.8s cubic-bezier(.22,1,.36,1), filter 0.8s ease",
          }}
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-400/10 dark:bg-sky-400/10 border border-sky-400/25 mb-5">
            <span className="text-sm">🎓</span>
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-sky-400">
              Academic Background
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-[clamp(32px,8vw,52px)] font-extrabold tracking-tight leading-[1.1] mb-4 text-slate-900 dark:text-slate-100"
            style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
          >
            Career{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #38bdf8, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Journey
            </span>
          </h2>

          {/* Animated underline */}
          <div className="flex justify-center mb-5">
            <div
              style={{
                height: 3,
                borderRadius: 3,
                background: "linear-gradient(90deg, #38bdf8, #34d399)",
                width: headerInView ? 64 : 0,
                transition: "width 1s cubic-bezier(.22,1,.36,1) 0.4s",
              }}
            />
          </div>

          <p className="text-[clamp(14px,3.5vw,16px)] leading-[1.7] text-slate-500 dark:text-slate-500 max-w-[420px] mx-auto">
            A snapshot of my academic milestones — from undergraduate
            foundations to post-graduation mastery.
          </p>
        </div>

        {/* ── Cards ────────────────────────────────────────────────────── */}
        <div className="flex flex-col gap-5">
          {education.map((edu: EducationItem, i: number) => (
            <Card key={i} edu={edu} index={i} />
          ))}
        </div>

        {/* ── Stats row ────────────────────────────────────────────────── */}
        <StatsRow headerInView={headerInView} />

        {/* ── Footer caption ───────────────────────────────────────────── */}
        <div
          className="text-center mt-12"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.8s, transform 0.7s ease 0.8s",
          }}
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] dark:bg-white/[0.04] border border-white/[0.08] dark:border-white/[0.08]">
            <span className="text-xs">✨</span>
            <span className="text-xs text-slate-500 dark:text-slate-500 font-medium">
              Continuously learning · Always building
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
