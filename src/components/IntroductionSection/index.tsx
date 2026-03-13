import React, { useEffect, useRef } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { TiSocialLinkedin } from "react-icons/ti";
import { DiGithubBadge } from "react-icons/di";
import { BiLogoWhatsapp } from "react-icons/bi";
import Typewriter from "typewriter-effect";
import { IconType } from "react-icons";

/* ─── Animation Variants ─── */
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── Types ─── */
interface OrbProps {
  className: string;
  delay?: number;
}

interface SocialBtnProps {
  href: string;
  icon: IconType;
  label: string;
}

interface CTAButtonProps {
  href: string;
  download?: boolean;
  primary?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

/* ─── Animated gradient orbs ─── */
function Orb({ className, delay = 0 }: OrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      animate={{
        scale: [1, 1.12, 0.96, 1],
        opacity: [0.55, 0.75, 0.55],
      }}
      transition={{
        duration: 7 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

/* ─── Floating particles ─── */
function Particles() {
  const dots = Array.from({ length: 28 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full bg-[#57d5ff]/40 dark:bg-[#57d5ff]/30"
          style={{
            left: `${(i * 37.3) % 100}%`,
            top: `${(i * 53.7) % 100}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            delay: (i * 0.3) % 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Badge pill ─── */
// function Badge({ children }: { children: React.ReactNode }) {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
//         border border-[#57d5ff]/30 bg-[#57d5ff]/5 backdrop-blur-md
//         text-[#57d5ff] text-xs font-semibold tracking-widest uppercase
//         shadow-[0_0_20px_rgba(87,213,255,0.12)]"
//     >
//       <span className="w-1.5 h-1.5 rounded-full bg-[#57d5ff] animate-pulse" />
//       {children}
//     </motion.div>
//   );
// }

/* ─── Social icon button ─── */
function SocialBtn({ href, icon: Icon, label }: SocialBtnProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex items-center justify-center w-10 h-10 rounded-full
        border border-white/10 bg-white/5 backdrop-blur-md text-[#57d5ff]
        hover:shadow-[0_0_20px_4px_rgba(87,213,255,0.25)]
        hover:border-[#57d5ff]/50 hover:bg-[#57d5ff]/10
        transition-all duration-300"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.92 }}
    >
      <Icon size={20} />
    </motion.a>
  );
}

/* ─── CTA Button ─── */
function CTAButton({
  href,
  download,
  primary,
  children,
  onClick,
}: CTAButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300";

  if (primary) {
    return (
      <motion.a
        variants={fadeUp}
        href={href}
        download={download}
        className={`${base} bg-[#57d5ff] text-slate-900 shadow-[0_0_30px_rgba(87,213,255,0.4)] hover:shadow-[0_0_50px_rgba(87,213,255,0.6)]`}
        whileHover={{ scale: 0.97 }}
        whileTap={{ scale: 0.93 }}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
          initial={{ x: "-100%" }}
          whileHover={{ x: "200%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </motion.a>
    );
  }

  return (
    <motion.a
      variants={fadeUp}
      href={href}
      onClick={onClick}
      className={`${base} border border-white/15 text-slate-700 dark:text-slate-200 bg-white/5 backdrop-blur-md hover:border-[#57d5ff]/40 hover:bg-[#57d5ff]/8 hover:text-[#57d5ff]`}
      whileHover={{ scale: 0.97 }}
      whileTap={{ scale: 0.93 }}
    >
      {children}
    </motion.a>
  );
}

/* ══════════════════════════════
   Main Component
══════════════════════════════ */
export default function Introduction() {
  const ref = useRef<HTMLElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[92vh] flex flex-col items-center justify-center scroll-mt-20 overflow-hidden px-4 py-20"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10">
        <Orb
          delay={0}
          className="w-[500px] h-[500px] -top-32 -left-32
            bg-[radial-gradient(ellipse,rgba(87,213,255,0.18)_0%,transparent_70%)]"
        />
        <Orb
          delay={2}
          className="w-[400px] h-[400px] -bottom-20 -right-20
            bg-[radial-gradient(ellipse,rgba(87,213,255,0.12)_0%,transparent_70%)]"
        />
        <Orb
          delay={4}
          className="w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-[radial-gradient(ellipse,rgba(87,213,255,0.07)_0%,transparent_70%)]"
        />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(87,213,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(87,213,255,1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <Particles />
      </div>

      {/* ── Content ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full gap-6"
      >
        {/* Badge */}
        {/* <Badge>Available for new projects</Badge> */}

        {/* Avatar */}
        <motion.div variants={fadeIn} className="relative mt-2">
          <div className="relative">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#57d5ff]/40 via-[#57d5ff]/10 to-transparent blur-md animate-spin-slow" />
            <motion.img
              src={require("../../assets/Profile/PA3.png")}
              alt="Muralidharan K"
              className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover
                border-2 border-[#57d5ff]/40
                shadow-[0_0_40px_rgba(87,213,255,0.25)]"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            />
          </div>
          <motion.span
            className="absolute -bottom-1 -right-1 text-2xl"
            animate={{ rotate: [0, 14, -10, 14, -6, 8, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "70% 70%" }}
          >
            👋
          </motion.span>
        </motion.div>

        {/* Headline */}
        <motion.div variants={fadeUp} className="space-y-3">
          <h1 className="font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-slate-900 dark:text-white">
            Hey, I'm{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#57d5ff] via-[#38bdf8] to-[#93c5fd] drop-shadow-[0_0_30px_rgba(87,213,255,0.5)]">
              Muralidharan
            </span>
          </h1>
          <div className="inline-flex items-center gap-3 text-lg md:text-2xl font-medium text-slate-500 dark:text-slate-400">
            <span>A</span>
            <span className="text-[#57d5ff] font-semibold min-w-[220px] text-left">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Sharepoint SPFx Dev",
                    "UI/UX Enthusiast",
                    "React Specialist",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 65,
                  deleteSpeed: 40,
                  cursor: "|",
                }}
              />
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="max-w-xl text-base md:text-lg leading-relaxed text-slate-500 dark:text-slate-400"
        >
          Passionate about crafting{" "}
          <span className="text-slate-700 dark:text-slate-200 font-medium">
            pixel-perfect
          </span>
          , high-performance digital experiences. I write clean, scalable code
          that drives{" "}
          <span className="text-slate-700 dark:text-slate-200 font-medium">
            real impact
          </span>
          .
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3 mt-1"
        >
          <CTAButton
            href={require("../../assets/Resume/Resume.pdf")}
            download
            primary
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M12 16l-5-5 1.4-1.4 2.6 2.6V4h2v8.2l2.6-2.6L17 11l-5 5zm-7 2h14v2H5v-2z" />
            </svg>
            Download CV
          </CTAButton>
          <CTAButton href="#contact">
            Get in Touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CTAButton>
        </motion.div>

        {/* Socials */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 mt-1">
          <SocialBtn
            href="https://www.linkedin.com/in/muralidharank280698/"
            icon={TiSocialLinkedin}
            label="LinkedIn"
          />
          <SocialBtn
            href="https://github.com/muralidharank28698"
            icon={DiGithubBadge}
            label="GitHub"
          />
          <SocialBtn
            href="https://wa.me/918098633412"
            icon={BiLogoWhatsapp}
            label="WhatsApp"
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center gap-1.5 mt-6 text-slate-400 dark:text-slate-500"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">
            Scroll
          </span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-[#57d5ff]/60 to-transparent rounded-full"
            animate={{ scaleY: [1, 0.4, 1], opacity: [0.8, 0.3, 0.8] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
