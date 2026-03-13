"use client";

import React, { useState, useCallback } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { IoClose } from "react-icons/io5";
import { LuArrowUpRight, LuPlay } from "react-icons/lu";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Tag {
  label: string;
  color?: string;
}

export interface ExternalLink {
  label: string;
  url: string;
  icon?: "github" | "demo" | "external";
}

export interface CardProps {
  title: string;
  subtitle?: string;
  image?: string;
  /** Short description shown on the card */
  des?: string;
  url?: string;
  tags?: Tag[];
  links?: ExternalLink[];
  /** Longer description shown only inside the modal */
  longDescription?: string;
}

// ─── Animation Variants ───────────────────────────────────────────────────────

const MODAL_VARIANTS = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 320, damping: 28, mass: 0.8 },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 16,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const BACKDROP_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const ICON_MAP: Record<string, React.ReactNode> = {
  github: <SiGithub size={15} />,
  demo: <LuPlay size={14} />,
  external: <HiOutlineExternalLink size={15} />,
};

// ─── TagPill ──────────────────────────────────────────────────────────────────

function TagPill({ label, color }: Tag) {
  if (color) {
    return (
      <span
        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide backdrop-blur-sm"
        style={{
          background: `${color}20`,
          color: color,
          border: `1px solid ${color}40`,
        }}
      >
        {label}
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide backdrop-blur-sm
        bg-neutral-100 text-neutral-500 border border-neutral-200
        dark:bg-white/[0.06] dark:text-white/70 dark:border-white/10"
    >
      {label}
    </span>
  );
}

// ─── LinkButton ───────────────────────────────────────────────────────────────

function LinkButton({ label, url, icon = "external" }: ExternalLink) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold
        transition-all duration-200 backdrop-blur-sm
        bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-700 hover:text-neutral-900
        dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:hover:border-white/20
        dark:text-white/80 dark:hover:text-white"
    >
      {ICON_MAP[icon]}
      {label}
      <LuArrowUpRight
        size={13}
        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
      />
    </a>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────

interface ModalProps extends CardProps {
  isOpen: boolean;
  onClose: () => void;
}

function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  image,
  des,
  longDescription,
  tags,
  links,
}: ModalProps) {
  return (
    <>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            variants={BACKDROP_VARIANTS}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 z-50"
            style={{
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(10px)",
            }}
          />

          {/* Modal panel */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              key="modal"
              variants={MODAL_VARIANTS}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="pointer-events-auto relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl
                bg-white border border-neutral-200/80
                dark:bg-[rgba(14,14,22,0.98)] dark:border-white/10"
              style={{
                boxShadow:
                  "0 40px 80px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
            >
              {/* Ambient top glow — dark mode only */}
              <div
                className="absolute inset-0 opacity-0 dark:opacity-25 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(87,213,255,0.2) 0%, transparent 70%)",
                }}
              />

              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full flex items-center justify-center
                  transition-all duration-200
                  bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-500 hover:text-neutral-800
                  dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-white/60 dark:hover:text-white"
              >
                <IoClose size={16} />
              </button>

              {/* Image */}
              {image && (
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient fade — light */}
                  <div
                    className="absolute inset-0 dark:hidden"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 40%, rgba(255,255,255,1) 100%)",
                    }}
                  />
                  {/* Gradient fade — dark */}
                  <div
                    className="absolute inset-0 hidden dark:block"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 40%, rgba(14,14,22,1) 100%)",
                    }}
                  />

                  {/* "Project" badge */}
                  <div
                    className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-lg text-[11px] font-semibold
                      tracking-widest uppercase backdrop-blur-sm"
                    style={{
                      background: "rgba(87,213,255,0.15)",
                      border: "1px solid rgba(87,213,255,0.35)",
                      color: "rgb(60,170,210)",
                    }}
                  >
                    Project
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 px-6 pb-6 pt-4 space-y-4">
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    {title}
                  </h2>
                  {subtitle && (
                    <p className="text-sm mt-0.5 font-medium text-neutral-400 dark:text-white/40">
                      {subtitle}
                    </p>
                  )}
                </div>

                {tags && tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag, i) => (
                      <TagPill key={i} {...tag} />
                    ))}
                  </div>
                )}

                {(longDescription ?? des) && (
                  <p className="text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                    {longDescription ?? des}
                  </p>
                )}

                <div className="h-px w-full bg-neutral-100 dark:bg-white/[0.06]" />

                <div className="flex flex-wrap gap-2">
                  {links && links.length > 0 ? (
                    links.map((link, i) => <LinkButton key={i} {...link} />)
                  ) : (
                    <button
                      onClick={() => {
                        // handle live demo action here
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold
  transition-all duration-200
  bg-[rgba(87,213,255,0.1)] hover:bg-[rgba(87,213,255,0.18)]
  border border-[rgba(87,213,255,0.3)]
  text-[rgb(30,155,200)] dark:text-[rgb(87,213,255)]"
                    >
                      <LuPlay size={13} />
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

export default function Card({
  title,
  subtitle,
  image,
  des,
  url,
  tags,
  links,
  longDescription,
}: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightBg = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(87,213,255,0.07), transparent 80%)`;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY],
  );

  return (
    <>
      <motion.div
        onMouseMove={handleMouseMove}
        onClick={() => setIsModalOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
        className="
          relative w-full sm:w-[260px] rounded-2xl overflow-hidden cursor-pointer group
          transition-shadow duration-300
          /* Light */
          bg-white border border-neutral-200/80
          shadow-[0_2px_16px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]
          hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]
          /* Dark */
          dark:bg-transparent dark:border-white/[0.08]
          dark:shadow-[0_4px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]
          dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.55)]
        "
      >
        {/* Dark glass background */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl hidden dark:block"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
          }}
        />

        {/* Spotlight */}
        <motion.div
          className="absolute inset-0 z-10 rounded-2xl pointer-events-none
            opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: spotlightBg }}
        />

        {/* Top shimmer */}
        <div
          className="absolute inset-x-0 top-0 h-px z-20
            opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(87,213,255,0.6), transparent)",
          }}
        />

        {/* Image */}
        {image && (
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            {/* Fade — light */}
            <div
              className="absolute inset-0 dark:hidden"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.95) 100%)",
              }}
            />
            {/* Fade — dark */}
            <div
              className="absolute inset-0 hidden dark:block"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 50%, rgba(10,10,18,0.9) 100%)",
              }}
            />
            {/* "View Details" hover pill */}
            <div
              className="absolute inset-0 flex items-center justify-center
                opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white"
                style={{
                  background: "rgba(8,8,18,0.65)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(87,213,255,0.35)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                <LuArrowUpRight size={14} className="text-[rgb(87,213,255)]" />
                View Details
              </div>
            </div>
          </div>
        )}

        {/* Body */}
        <div className="relative z-10 p-4 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold leading-snug truncate text-neutral-900 dark:text-white/90">
                {title}
              </h3>
              {subtitle && (
                <p className="text-xs mt-0.5 truncate text-neutral-400 dark:text-white/40">
                  {subtitle}
                </p>
              )}
            </div>

            <div
              className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300
                bg-neutral-100 border border-neutral-200 text-neutral-400
                group-hover:bg-[rgba(87,213,255,0.08)] group-hover:border-[rgba(87,213,255,0.35)] group-hover:text-[rgb(30,155,200)]
                dark:bg-white/5 dark:border-white/10 dark:text-white/40
                dark:group-hover:bg-[rgba(87,213,255,0.08)] dark:group-hover:border-[rgba(87,213,255,0.3)] dark:group-hover:text-[rgb(87,213,255)]"
            >
              <HiOutlineExternalLink size={13} />
            </div>
          </div>

          {des && (
            <p className="text-xs leading-relaxed line-clamp-2 text-neutral-500 dark:text-white/40">
              {des}
            </p>
          )}

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags.slice(0, 3).map((tag, i) => (
                <TagPill key={i} {...tag} />
              ))}
              {tags.length > 3 && (
                <span className="text-[10px] self-center text-neutral-400 dark:text-white/30">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}

          <div className="flex items-center justify-between pt-2 border-t border-neutral-100 dark:border-white/[0.05]">
            <span className="text-[10px] font-medium tracking-wider uppercase text-neutral-300 dark:text-white/20">
              Project
            </span>
            <div
              className="flex items-center gap-1 text-xs font-semibold
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                text-[rgb(30,155,200)] dark:text-[rgb(87,213,255)]"
            >
              Explore
              <LuArrowUpRight size={11} />
            </div>
          </div>
        </div>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        subtitle={subtitle}
        image={image}
        des={des}
        longDescription={longDescription}
        tags={tags}
        links={links}
        url={url}
      />
    </>
  );
}
