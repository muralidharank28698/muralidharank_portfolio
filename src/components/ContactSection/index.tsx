import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSearchLocation, FaLaptopCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import { DiGithubBadge } from "react-icons/di";
import { BiLogoWhatsapp } from "react-icons/bi";
import emailjs from "@emailjs/browser";

/* ─────────────────────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────────────────────── */
interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  company: string;
  message: string;
}
type EmailJSParams = Record<string, unknown>;
interface FormErrors {
  [key: string]: string;
}
type AlertType = "success" | "error" | "info";
const EMPTY: ContactFormData = {
  firstname: "",
  lastname: "",
  email: "",
  company: "",
  message: "",
};

/* ─────────────────────────────────────────────────────────────────────────────
   ANIMATION SYSTEM
───────────────────────────────────────────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;

function useReveal(margin = "-48px") {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { rootMargin: margin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);
  return { ref, on };
}

const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}> = ({ children, delay = 0, y = 24, className }) => {
  const { ref, on } = useReveal();
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={on ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

const StaggerWrap: React.FC<{
  children: React.ReactNode;
  className?: string;
  gap?: number;
}> = ({ children, className, gap = 0.09 }) => {
  const { ref, on } = useReveal("-32px");
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="off"
      animate={on ? "on" : "off"}
      variants={{ off: {}, on: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
};

const Stag: React.FC<{
  children: React.ReactNode;
  className?: string;
  y?: number;
}> = ({ children, className, y = 20 }) => (
  <motion.div
    className={className}
    variants={{
      off: { opacity: 0, y },
      on: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
    }}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────────────────────
   TOAST
───────────────────────────────────────────────────────────────────────────── */
const Toast: React.FC<{
  type: AlertType;
  message: string;
  onClose: () => void;
}> = ({ type, message, onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 4500);
    return () => clearTimeout(t);
  }, [onClose]);

  const cfg: Record<AlertType, { stripe: string; text: string; bg: string }> = {
    success: {
      stripe: "bg-emerald-400",
      text: "text-emerald-300",
      bg: "bg-neutral-950/95",
    },
    error: {
      stripe: "bg-red-400",
      text: "text-red-300",
      bg: "bg-neutral-950/95",
    },
    info: {
      stripe: "bg-[#57d5ff]",
      text: "text-[#57d5ff]",
      bg: "bg-neutral-950/95",
    },
  };
  const c = cfg[type];

  return (
    <motion.div
      initial={{ opacity: 0, x: 32, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 32, scale: 0.95 }}
      transition={{ duration: 0.3, ease: EASE }}
      className={`flex items-stretch rounded-2xl overflow-hidden border border-white/[0.07]
        ${c.bg} backdrop-blur-2xl shadow-[0_12px_48px_rgba(0,0,0,0.55)]
        max-w-[calc(100vw-3rem)]`}
    >
      <div className={`w-[3px] flex-shrink-0 ${c.stripe}`} />
      <div
        className={`flex items-center gap-3 px-4 py-3 text-xs font-medium ${c.text}`}
      >
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-1 opacity-30 hover:opacity-80 transition-opacity flex-shrink-0"
        >
          <svg
            className="w-3 h-3"
            viewBox="0 0 10 10"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" d="M1 1l8 8M9 1L1 9" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   FIELD
───────────────────────────────────────────────────────────────────────────── */
interface FieldProps {
  name: string;
  label: string;
  type?: string;
  value: string;
  error?: string;
  autoComplete?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  multiline?: boolean;
  rows?: number;
}

const Field: React.FC<FieldProps> = ({
  name,
  label,
  type = "text",
  value,
  error,
  autoComplete,
  onChange,
  multiline = false,
  rows = 4,
}) => {
  const hasErr = !!error;

  const base =
    "w-full rounded-xl border px-4 py-3 text-[14px] transition-all duration-200 outline-none";

  const style = hasErr
    ? "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/20"
    : "border-neutral-300 dark:border-neutral-700 focus:border-[#57d5ff] focus:ring-2 focus:ring-[#57d5ff]/20";

  const colors =
    "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400";

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className={`text-[12px] font-medium tracking-wide ${
          hasErr
            ? "text-red-400"
            : "text-neutral-500 dark:text-neutral-400"
        }`}
      >
        {hasErr ? error : label}
      </label>

      {multiline ? (
        <textarea
          id={name}
          name={name}
          value={value}
          rows={rows}
          autoComplete={autoComplete}
          onChange={onChange}
          placeholder={label}
          className={`${base} ${style} ${colors} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          autoComplete={autoComplete}
          onChange={onChange}
          placeholder={label}
          className={`${base} ${style} ${colors}`}
          /* prevent iOS zoom on focus (font-size must be >= 16px equivalent) */
          style={{ fontSize: "16px" }}
        />
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   SOCIAL PILL
───────────────────────────────────────────────────────────────────────────── */
const SocialPill: React.FC<{
  href: string;
  label: string;
  icon: React.ReactNode;
}> = ({ href, label, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.96 }}
    transition={{ duration: 0.18 }}
    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium
      border border-neutral-200 dark:border-neutral-700/70
      text-neutral-600 dark:text-neutral-400
      hover:text-neutral-900 dark:hover:text-white
      hover:border-neutral-400 dark:hover:border-neutral-500
      transition-colors duration-200 select-none
      min-h-[44px]"
  >
    {icon}
    {label}
  </motion.a>
);

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────────────────────── */
export default function Contact() {
  const [form, setForm] = useState<ContactFormData>({ ...EMPTY });
  const [status, setStatus] = useState("");
  const [alertType, setAlert] = useState<AlertType>("info");
  const [errors, setErrors] = useState<FormErrors>({});
  const [busy, setBusy] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.firstname.trim()) e.firstname = "First name required";
    if (!form.lastname.trim()) e.lastname = "Last name required";
    if (!form.email.trim()) e.email = "Email required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.company.trim()) e.company = "Company / project required";
    if (!form.message.trim()) e.message = "Message required";
    return e;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setBusy(true);
    const params: EmailJSParams = { ...form };
    emailjs
      .send("service_4sdqvzx", "template_y9g94p1", params, "RwEWjLHQw99_Z6lZQ")
      .then(() => {
        setAlert("success");
        setStatus("Message sent! I'll be in touch soon.");
        setForm({ ...EMPTY });
        setBusy(false);
      })
      .catch(() => {
        setAlert("error");
        setStatus("Couldn't send — please try again.");
        setBusy(false);
      });
  };

  return (
    <section id="Contact" className="relative scroll-mt-24 pt-14 pb-16 sm:pt-20 sm:pb-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2
          w-[min(600px,100vw)] h-[360px] rounded-full bg-[#57d5ff]
          opacity-[0.05] dark:opacity-[0.08] blur-[110px]"
      />

      {/* ── HEADER ─────────────────────────────────────────────────── */}
      <StaggerWrap className="mb-10 sm:mb-14">
        <Stag>
          <p
            className="inline-flex items-center gap-2.5 text-[11px] font-semibold
              tracking-[0.25em] uppercase text-[#57d5ff] mb-5 sm:mb-6 select-none"
          >
            <span className="w-5 h-px bg-[#57d5ff] opacity-70" />
            Get in touch
          </p>
        </Stag>

        <Stag y={28}>
          <h1
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight
              leading-[1.05] text-neutral-900 dark:text-white mb-5 sm:mb-6"
          >
            Let's work
            <br />
            <span className="relative inline-block">
              together
              <svg
                aria-hidden
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 340 10"
                fill="none"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2 7 C 60 2, 120 9, 180 5 S 280 1, 338 6"
                  stroke="#57d5ff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                />
              </svg>
            </span>
          </h1>
        </Stag>

        <Stag>
          <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 max-w-lg leading-relaxed">
            Whether you have a product idea, need a new web experience, or just
            want to say hi — my inbox is always open.
          </p>
        </Stag>
      </StaggerWrap>

      {/* ── SPLIT GRID ─────────────────────────────────────────────── */}
      {/*
        Mobile: single column (form below info)
        Desktop (lg): two-column side-by-side
        items-start keeps both columns top-aligned
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-start">

        {/* LEFT — profile + info + socials */}
        <div>
          {/* Profile card */}
          <Reveal delay={0.12}>
            <div className="flex items-center gap-4 mb-8 sm:mb-10">
              <div className="relative flex-shrink-0">
                <img
                  src={require("../../assets/Profile/PA3.png")}
                  alt="Muralidharan"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover"
                />
                <span
                  className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full
                    bg-emerald-400 border-2 border-white dark:border-neutral-950 shadow-sm"
                />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 dark:text-white text-sm sm:text-base">
                  Muralidharan
                </p>
                <p className="text-xs sm:text-sm text-[#57d5ff] font-medium mt-0.5">
                  Software Developer · Available for work
                </p>
              </div>
            </div>
          </Reveal>

          {/* Info items */}
          <div className="space-y-6 sm:space-y-7 mb-10 sm:mb-12">
            {[
              {
                icon: <FaSearchLocation size={13} />,
                label: "Location",
                value: "Chennai, India",
                delay: 0.14,
              },
              {
                icon: <FaLaptopCode size={13} />,
                label: "Open to",
                value: "Freelance, Remote & Full-time",
                delay: 0.17,
              },
              {
                icon: <MdEmail size={13} />,
                label: "Email",
                value: (
                  <a
                    href="mailto:muralidharank28698@gmail.com"
                    className="hover:text-[#57d5ff] transition-colors duration-200 break-all"
                  >
                    muralidharank28698@gmail.com
                  </a>
                ),
                delay: 0.2,
              },
            ].map(({ icon, label, value, delay }) => (
              <Reveal key={label} delay={delay}>
                <div className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center
                      rounded-lg bg-[#57d5ff]/10 text-[#57d5ff] mt-0.5"
                  >
                    {icon}
                  </span>
                  <div className="min-w-0">
                    <p
                      className="text-[10px] font-semibold tracking-[0.18em] uppercase
                        text-neutral-400 dark:text-neutral-500 mb-0.5"
                    >
                      {label}
                    </p>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 break-words">
                      {value}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Socials */}
          <Reveal delay={0.23}>
            <p
              className="text-[10px] font-semibold tracking-[0.18em] uppercase
                text-neutral-400 dark:text-neutral-500 mb-4"
            >
              Elsewhere
            </p>
            <div className="flex flex-wrap gap-3">
              <SocialPill
                href="https://wa.me/918098633412"
                label="WhatsApp"
                icon={<BiLogoWhatsapp size={16} className="text-[#25D366]" />}
              />
              <SocialPill
                href="https://www.linkedin.com/in/muralidharank280698/"
                label="LinkedIn"
                icon={<TiSocialLinkedin size={17} className="text-[#0A66C2]" />}
              />
              <SocialPill
                href="https://github.com/muralidharank28698"
                label="GitHub"
                icon={
                  <DiGithubBadge
                    size={17}
                    className="text-neutral-700 dark:text-neutral-300"
                  />
                }
              />
            </div>
          </Reveal>
        </div>

        {/* RIGHT — contact form card */}
        <Reveal delay={0.1} y={32}>
          <div
            className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800
              bg-white dark:bg-neutral-900 overflow-hidden
              shadow-[0_2px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_32px_rgba(0,0,0,0.3)]"
          >
            {/* Brand accent bar */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#57d5ff]/60 to-transparent" />

            {/* Glow orb — hidden on small screens for performance */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 -right-16
                w-48 h-48 rounded-full bg-[#57d5ff]/[0.07] blur-3xl hidden sm:block"
            />

            <div className="p-3 sm:p-7">
              {/* Form header */}
              <div className="mb-5 sm:mb-6">
                <h2
                  className="text-base sm:text-[15px] font-semibold text-neutral-900 dark:text-white
                    tracking-tight"
                >
                  Send a message
                </h2>
                <p className="text-xs text-neutral-400 dark:text-neutral-600 mt-0.5">
                  I typically reply within 24 hours.
                </p>
              </div>

              {/* ── FIELDS ── */}
              <div className="space-y-4">
                {/*
                  Name row:
                  - Mobile: stacks vertically (grid-cols-1)
                  - sm+: side by side (grid-cols-2)
                */}
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                  <Field
                    name="firstname"
                    label="First name"
                    value={form.firstname}
                    error={errors.firstname}
                    onChange={handleChange}
                    autoComplete="given-name"
                  />
                  <Field
                    name="lastname"
                    label="Last name"
                    value={form.lastname}
                    error={errors.lastname}
                    onChange={handleChange}
                    autoComplete="family-name"
                  />
                </div>

                <Field
                  name="email"
                  label="Work email"
                  type="email"
                  value={form.email}
                  error={errors.email}
                  onChange={handleChange}
                  autoComplete="email"
                />

                <Field
                  name="company"
                  label="Company / Project"
                  value={form.company}
                  error={errors.company}
                  onChange={handleChange}
                  autoComplete="organization"
                />

                <Field
                  name="message"
                  label="How can I help you?"
                  value={form.message}
                  error={errors.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                />

                {/* Submit */}
                <div className="pt-1">
                  <motion.button
                    onClick={handleSubmit}
                    disabled={busy}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="
                      w-full h-12 sm:h-12 rounded-xl
                      bg-[#57d5ff]
                      text-sm font-semibold text-white
                      flex items-center justify-center gap-2
                      shadow-lg shadow-[#57d5ff]/30
                      hover:shadow-[#57d5ff]/50
                      transition-all duration-200
                      disabled:opacity-50 disabled:cursor-not-allowed
                      min-h-[48px]
                    "
                  >
                    {busy ? "Sending..." : "Send Message"}
                  </motion.button>

                  <p className="mt-3 text-center text-[11px] text-neutral-400 dark:text-neutral-600">
                    Your details stay private and are never shared.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <Reveal delay={0.05}>
        <div
          className="mt-16 sm:mt-24 pt-6 sm:pt-8 border-t border-neutral-200/70 dark:border-neutral-800
            flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6"
        >
          <div>
            <p className="text-base font-bold tracking-tight text-neutral-900 dark:text-white">
              Muralidharan
            </p>
            <p
              className="text-xs font-mono tracking-widest uppercase
                text-neutral-400 dark:text-neutral-600 mt-1"
            >
              Frontend · SharePoint Developer
            </p>
          </div>
          <p className="text-xs text-neutral-400 dark:text-neutral-600">
            © 2025 <span className="text-[#57d5ff]">Muralidharan</span>. All
            rights reserved.
          </p>
        </div>
      </Reveal>

      {/* ── TOAST ── */}
      {/* <AnimatePresence> */}
        {status && (
          <motion.div
            key="contact-toast"
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-[calc(100vw-2rem)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Toast
              type={alertType}
              message={status}
              onClose={() => setStatus("")}
            />
          </motion.div>
        )}
      {/* </AnimatePresence> */}
    </section>
  );
}
