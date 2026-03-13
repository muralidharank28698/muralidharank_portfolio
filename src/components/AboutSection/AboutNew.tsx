import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────────────────────
   ABOUT  –  Centered Premium Portfolio Section
   Stack : React + Tailwind CSS + Framer Motion
   Fonts : Cabinet Grotesk (display) · Instrument Sans (body)
   Layout: Fully centered, balanced, scroll-reveal on every block
───────────────────────────────────────────────────────────────────────────── */

// ── Data ──────────────────────────────────────────────────────────────────────
const PILLS = [
  "React.js",
  "React Native",
  "SharePoint 365",
  "Power Automate",
  "Power Apps",
  "SPFx · PnP JS",
  "Fluent UI",
];

// const STATS = [
//   { value: "4+", label: "Years Experience" },
//   { value: "10+", label: "Projects Shipped" },
//   { value: "15+", label: "Enterprise App" },
//   // { value: "5★", label: "Client Rating" },
//   { value: "10+", label: "Certifications Earned" }
// ];
const STATS = [
  { value: "4+", label: "Experience" },
  { value: "10+", label: "Projects" },
  { value: "15+", label: "Applications" },
  { value: "10+", label: "Certifications" },
];

// ── Animation helpers ─────────────────────────────────────────────────────────
/**
 * Reusable scroll-reveal variant.
 * Uses `whileInView` + `viewport` on every <motion.*> element — this means each
 * element only starts its entrance when it actually enters the viewport.
 */
const reveal = {
  hidden: { opacity: 0, y: 32 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.16, 1, 0.3, 1], // custom spring-like ease
    },
  }),
};

// Shared viewport config — trigger when 20 % of the element is visible, fire once
const VP = { once: true, amount: 0.2 } as const;

// ── Sub-components ────────────────────────────────────────────────────────────
function Pill({ label }: { label: string }) {
  return (
    <span
      className="
        inline-flex items-center px-3.5 py-1.5 rounded-full
        text-xs font-semibold tracking-wide
        border border-[#57d5ff]/25 bg-[#57d5ff]/6
        text-[#2eafd6] dark:text-[#57d5ff]
        transition-colors duration-200
      "
    >
      {label}
    </span>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        rounded-2xl px-6 py-5
        border border-slate-200/80 dark:border-white/[0.07]
        bg-white/65 dark:bg-white/[0.035]
        backdrop-blur-md shadow-sm
        transition-all duration-300
        hover:border-[#57d5ff]/40 hover:shadow-[0_0_24px_rgba(87,213,255,0.08)]
        hover:-translate-y-0.5
      "
    >
      <span
        className="about-display text-3xl font-black leading-none text-slate-900 dark:text-white"
        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
      >
        {value}
      </span>
      <span className="mt-1.5 text-[11px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 text-center">
        {label}
      </span>
    </div>
  );
}

// function CTAButton() {
//   return (
//     <motion.a
//       href="#contact"
//       className="
//         group relative inline-flex items-center gap-3 overflow-hidden
//         rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-lg
//         focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#57d5ff]
//       "
//       whileHover={{
//         scale: 1.03,
//         boxShadow: "0 6px 30px rgba(87,213,255,0.45)",
//       }}
//       whileTap={{ scale: 0.97 }}
//       transition={{ type: "spring", stiffness: 360, damping: 24 }}
//     >
//       {/* gradient fill */}
//       <span
//         aria-hidden="true"
//         className="absolute inset-0 bg-gradient-to-r from-[#2eafd6] via-[#57d5ff] to-[#38b2e8] transition-transform duration-500 group-hover:scale-110"
//       />
//       {/* shimmer sweep */}
//       <span
//         aria-hidden="true"
//         className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
//       />
//       <span className="relative">Get in touch</span>
//       <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
//         <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
//           <path
//             d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
//             stroke="white"
//             strokeWidth="1.7"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </span>
//     </motion.a>
//   );
// }

// function ResumeLink() {
//   return (
//     <motion.a
//       href="/resume.pdf"
//       download
//       className="
//         group inline-flex items-center gap-2 text-sm font-medium
//         text-slate-500 dark:text-slate-400
//         hover:text-[#2eafd6] dark:hover:text-[#57d5ff]
//         transition-colors duration-200
//       "
//       whileHover={{ x: 3 }}
//       transition={{ type: "spring", stiffness: 400, damping: 20 }}
//     >
//       <svg
//         width="14"
//         height="14"
//         viewBox="0 0 16 16"
//         fill="none"
//         className="transition-transform duration-300 group-hover:-translate-y-0.5"
//       >
//         <path
//           d="M8 2v8M5 7l3 3 3-3M3 12h10"
//           stroke="currentColor"
//           strokeWidth="1.6"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//       Download résumé
//     </motion.a>
//   );
// }

// ── Main Component ─────────────────────────────────────────────────────────────
export default function About() {
  return (
    <div className="relative overflow-hidden pt-8 sm:pt-10 md:pt-12">
      {/* ── Font import ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@700;800;900&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        .about-font { font-family: 'Instrument Sans', sans-serif; }
      `}</style>

      <section
        aria-labelledby="about-heading"
        className="
          about-font relative isolate overflow-hidden
          px-5 sm:px-8 md:px-12
        "
      >
        {/* ── Dot grid ── */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.32] dark:opacity-[0.16]"
          style={
            {
              // backgroundImage:
              //   "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
              // backgroundSize: "32px 32px",
            }
          }
        />
        {/* Radial vignette — light */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={
            {
              // background:
              //   "radial-gradient(ellipse 85% 65% at 50% 50%, transparent 25%, #f5f9fc 100%)",
            }
          }
        />
        {/* Radial vignette — dark */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 hidden dark:block"
          style={
            {
              // background:
              //   "radial-gradient(ellipse 85% 65% at 50% 50%, transparent 25%, #07090f 100%)",
            }
          }
        />

        {/* ── Accent glows ── */}
        <div
          aria-hidden="true"
          className="absolute -z-10 -top-40 left-1/2 -translate-x-1/2 w-[640px] h-[400px] rounded-full opacity-[0.11] dark:opacity-[0.08]"
          // style={{ background: "#59c2e8", filter: "blur(100px)" }}
        />
        <div
          aria-hidden="true"
          className="absolute -z-10 bottom-0 right-0 w-[360px] h-[360px] rounded-full opacity-[0.07]"
          style={{ background: "#818cf8", filter: "blur(90px)" }}
        />
        <div
          aria-hidden="true"
          className="absolute -z-10 bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-[0.06]"
          style={{ background: "#57d5ff", filter: "blur(80px)" }}
        />

        {/* ════════════════════════════════════════
            CENTERED CONTENT WRAPPER
        ════════════════════════════════════════ */}
        <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* ── 1. Eyebrow label ── */}
          <motion.div
            className="flex items-center justify-center mb-6 pt-8"
            initial="hidden"
            whileInView="show"
            viewport={VP}
            variants={reveal}
            custom={0}
          >
            <div
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full
    bg-sky-400/10 dark:bg-sky-400/10
    border border-sky-400/25"
            >
              <span className="text-xs">✨</span>
              <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-sky-400">
                About My Journey
              </span>
            </div>
          </motion.div>

          {/* ── 2. Headline ── */}
          <motion.h2
            id="about-heading"
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.04] tracking-tight text-slate-900 dark:text-white mb-6"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            variants={reveal}
            custom={0.07}
          >
            Crafting digital{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#2eafd6] to-[#57d5ff]">
                experiences
              </span>
              {/* wavy underline */}
              <svg
                aria-hidden="true"
                viewBox="0 0 260 14"
                className="absolute -bottom-2 left-0 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 10 C40 3,90 13,130 7 C170 1,220 11,258 5"
                  stroke="url(#wGrad)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="wGrad" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#2eafd6" />
                    <stop offset="100%" stopColor="#57d5ff" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            that matter.
          </motion.h2>

          {/* ── 3. Status badge ── */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-300/40 dark:border-emerald-500/20 bg-emerald-50 dark:bg-emerald-500/5 mb-8"
            initial="hidden"
            whileInView="show"
            viewport={VP}
            variants={reveal}
            custom={0.13}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              Open to new opportunities
            </span>
          </motion.div>

          {/* ── 4. Body copy ── */}
          <motion.p
            className="text-base md:text-[1.075rem] leading-[1.85] text-slate-600 dark:text-slate-400 mb-4 max-w-[52ch]"
            initial="hidden"
            whileInView="show"
            viewport={VP}
            variants={reveal}
            custom={0.18}
          >
            <strong className="font-semibold text-slate-800 dark:text-slate-200">
              Front-end developer
            </strong>{" "}
            with 4+ years crafting high-performance web and mobile experiences
            at the intersection of clean engineering and thoughtful design.
          </motion.p>

          <motion.p
            className="text-base md:text-[1.075rem] leading-[1.85] text-slate-600 dark:text-slate-400 mb-10 max-w-[52ch]"
            initial="hidden"
            whileInView="show"
            viewport={VP}
            variants={reveal}
            custom={0.24}
          >
            I build enterprise solutions on{" "}
            <strong className="font-semibold text-slate-800 dark:text-slate-200">
              Microsoft SharePoint 365
            </strong>{" "}
            using SPFx, PnP JS &amp; Fluent UI, automate workflows with{" "}
            <strong className="font-semibold text-slate-800 dark:text-slate-200">
              Power Automate
            </strong>
            , and integrate{" "}
            <strong className="font-semibold text-slate-800 dark:text-slate-200">
              Azure AI
            </strong>{" "}
            services to create genuinely intelligent digital products.
          </motion.p>

          {/* ── 5. Skill pills ── */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-10"
            initial="hidden"
            whileInView="show"
            viewport={VP}
            variants={reveal}
            custom={0.3}
          >
            {PILLS.map((label) => (
              <Pill key={label} label={label} />
            ))}
          </motion.div>

          {/* ── 6. CTA buttons ── */}
          {/* <motion.div
            className="flex items-center justify-center gap-5 flex-wrap mb-16"
            initial="hidden"
            whileInView="show"
            viewport={VP}
            variants={reveal}
            custom={0.36}
          >
            <CTAButton />
            <ResumeLink />
          </motion.div> */}

          {/* ── Divider ── */}
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-slate-300/70 dark:via-white/10 to-transparent mb-12"
            initial="hidden"
            whileInView="show"
            viewport={VP}
            variants={reveal}
            custom={0.4}
          />

          {/* ── 7. Stats row ── */}
          <motion.div
            className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
            initial="hidden"
            whileInView="show"
            viewport={VP}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.08, delayChildren: 0.44 },
              },
            }}
          >
            {STATS.map((s) => (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.97 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                <StatCard value={s.value} label={s.label} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* end centered wrapper */}
      </section>
    </div>
  );
}
