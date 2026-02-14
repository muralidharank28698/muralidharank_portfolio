import React from "react";
import { motion } from "framer-motion";
import { FaSearchLocation, FaLaptopCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import { DiGithubBadge } from "react-icons/di";
import { BiLogoWhatsapp } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";
import Alert from "../../Common/Alert";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = React.useState("");
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let newErrors: { [key: string]: string } = {};

    if (!formData.firstname.trim()) {
      newErrors.firstname = "First name is required.";
    }
    if (!formData.lastname.trim()) {
      newErrors.lastname = "Last name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company / Project name is required.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    // If errors exist, stop submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    setStatus("Sending...");

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = "service_4sdqvzx";
    const TEMPLATE_ID = "template_y9g94p1";
    const PUBLIC_KEY = "RwEWjLHQw99_Z6lZQ";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Message sent successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          company: "",
          message: "",
        });
      },
      (err) => {
        console.error("FAILED...", err);
        setStatus("Failed to send message.");
      },
    );
  };

  return (
    <motion.section
      className="max-w-5xl mx-auto text-left leading-8 scroll-mt-28 pt-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <h1 className="text-3xl text-center  font-bold capitalize">
        Get In <span className="text-[#57d5ff] dark:text-[#57d5ff]">Touch</span>
      </h1>
      <hr className="w-16 h-1 mx-auto my-4 bg-[#57d5ff] border-0" />

      <section
        id="contact"
        className="bg-gray-900 text-[hsl(215,15%,75%)] py-20 px-6 relative overflow-hidden rounded-3xl mt-10"
      >
        {/* Background Image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 md:left-0 md:translate-x-0">
          <img
            src={require("../../assets/Profile/Footer.png")}
            alt="Laptop Illustration"
            className="max-w-md md:max-w-xl"
          />
        </div>

        <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div className="space-y-6 text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Let’s build something amazing{" "}
              <span className="text-[#57d5ff] dark:text-[#57d5ff]">
                together
              </span>
            </h2>
            <p className="max-w-md">
              I’m{" "}
              <span className="text-[#57d5ff] dark:text-[#57d5ff]">
                Muralidharan
              </span>
              , a passionate{" "}
              <span className="text-[#57d5ff] dark:text-[#57d5ff]">
                Software Developer
              </span>{" "}
              specializing in creating modern, responsive, and user-friendly web
              applications. Whether you have a project, an idea, or just want to
              connect—drop me a message!
            </p>

            {/* Profile Section */}
            <div className="flex items-center space-x-4 pt-4">
              <img
                src={require("../../assets/Profile/myProfile.jpg")}
                alt="Muralidharan photo"
                className="w-20 h-20 rounded-full shadow-lg object-cover"
              />
              <p>
                <span className="font-semibold">Muralidharan</span>
                <br />
                <span className="text-[#57d5ff] dark:text-[#57d5ff]">
                  Software Developer
                </span>
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <p className="flex items-center gap-2">
                <FaSearchLocation className="text-[#57d5ff] dark:text-[#57d5ff]" />
                Based in: Chennai, India
              </p>
              <p className="flex items-start gap-2">
                <FaLaptopCode className="text-[#57d5ff] text-lg flex-shrink-0 mt-1" />
                <span className="leading-snug">
                  Open to: Freelance, Remote & Full-time opportunities
                </span>
              </p>
              <p className="flex items-center gap-2">
                <MdEmail className="text-[#57d5ff]" />
                muralidharank28698@gmail.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-gray-900 rounded-3xl shadow-lg p-4 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First Name */}
                <input
                  type="text"
                  name="firstname"
                  placeholder={
                    errors.firstname ? errors.firstname : "First name*"
                  }
                  className={`w-full px-4 py-3 rounded-xl border border-gray-300 
    focus:border-[#57d5ff] focus:ring-1 focus:ring-[#57d5ff] 
    ${errors.firstname ? "placeholder-red-500" : "placeholder-gray-400"}`}
                  value={formData.firstname}
                  onChange={handleChange}
                />

                {/* Last Name */}
                <input
                  type="text"
                  name="lastname"
                  placeholder={errors.lastname ? errors.lastname : "Last name*"}
                  className={`w-full px-4 py-3 rounded-xl border border-gray-300 
    focus:border-[#57d5ff] focus:ring-1 focus:ring-[#57d5ff] 
    ${errors.lastname ? "placeholder-red-500" : "placeholder-gray-400"}`}
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder={errors.email ? errors.email : "Your email*"}
                className={`w-full px-4 py-3 rounded-xl border border-gray-300 
    focus:border-[#57d5ff] focus:ring-1 focus:ring-[#57d5ff] 
    ${errors.email ? "placeholder-red-500" : "placeholder-gray-400"}`}
                value={formData.email}
                onChange={handleChange}
              />

              {/* Company */}
              <input
                type="text"
                name="company"
                placeholder={
                  errors.company ? errors.company : "Company / Project name"
                }
                className={`w-full px-4 py-3 rounded-xl border border-gray-300 
    focus:border-[#57d5ff] focus:ring-1 focus:ring-[#57d5ff] 
    ${errors.company ? "placeholder-red-500" : "placeholder-gray-400"}`}
                value={formData.company}
                onChange={handleChange}
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder={
                  errors.message
                    ? errors.message
                    : "Tell me about your project*"
                }
                rows={4}
                className={`w-full px-4 py-3 rounded-xl border border-gray-300 
    focus:border-[#57d5ff] focus:ring-1 focus:ring-[#57d5ff] 
    ${errors.message ? "placeholder-red-500" : "placeholder-gray-400"}`}
                value={formData.message}
                onChange={handleChange}
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 text-white font-semibold rounded-xl shadow-md transition 
      focus:outline-none focus:ring-0 active:outline-none active:ring-0"
                style={{ backgroundColor: "#57d5ff" }}
              >
                Send Message
              </button>
            </form>
            {status && (
              <div className="fixed bottom-6 left-6 right-6 z-50 md:bottom-6 md:left-6 md:right-auto md:w-[90%] md:max-w-xl mx-auto md:mx-0 md:translate-x-0">
                <Alert
                  type={
                    status === "Message sent successfully!"
                      ? "success"
                      : status === "Failed to send message."
                        ? "error"
                        : "info"
                  }
                  message={status}
                  onClose={() => setStatus("")}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Social Footer */}

      {/* Social Footer */}
      <section className="py-10">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-0">
          <div className="border-t border-neutral-200/40 dark:border-neutral-700/40 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
              {/* LEFT SIDE CONTENT */}
              <div className="space-y-0">
                <h2 className="text-3xl font-semibold text-[#57d5ff]">
                  Muralidharan
                </h2>
                <p className="text-gray-600 dark:text-gray-300 font-medium tracking-wide">
                  FRONTEND / SHAREPOINT DEVELOPER
                </p>
                <p className="max-w-lg text-gray-600 dark:text-gray-400 py-4">
                  I turn ideas into clean, scalable interfaces — built to
                  perform, built to impress.
                </p>
                <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                  © 2025 Designed & Built by{" "}
                  <span className="text-[#57d5ff] font-medium">
                    Muralidharan
                  </span>
                  . All rights reserved.
                </p>
              </div>

              {/* RIGHT SIDE SOCIAL ICONS */}
              <div className="flex flex-col md:items-end gap-6">
                <div className="flex gap-4">
                  <a
                    className="border p-3 rounded-2xl bg-white dark:bg-gray-800 dark:border-gray-800 shadow-sm hover:shadow-md transition"
                    href="https://wa.me/918098633412"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLogoWhatsapp size={26} className="text-[#25D366]" />
                  </a>

                  <a
                    className="border p-3 rounded-2xl bg-white dark:bg-gray-800 dark:border-gray-800 shadow-sm hover:shadow-md transition"
                    href="https://www.linkedin.com/in/muralidharank280698/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TiSocialLinkedin size={26} className="text-[#0A66C2]" />
                  </a>

                  <a
                    className="border p-3 rounded-2xl bg-white dark:bg-gray-800 dark:border-gray-800 shadow-sm hover:shadow-md transition"
                    href="https://github.com/muralidharank28698"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DiGithubBadge
                      size={26}
                      className="text-black dark:text-white"
                    />
                  </a>
                </div>
                <Fade direction="up" duration={1800} delay={100} damping={0.15}>
                  <a
                    href="https://www.linkedin.com/in/muralidharank280698/"
                    target="_blank"
                    rel=""
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[rgb(87,213,255)] text-white font-semibold shadow-xl transition-all duration-300 group relative overflow-hidden"
                  >
                    Initiate Chat
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 19"
                      className="w-6 h-6 bg-gray-50 text-gray-800 rounded-full border border-gray-400 p-1 ml-1 rotate-0 group-hover:rotate-90 transition-transform duration-300"
                    >
                      <path
                        className="fill-gray-800"
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      />
                    </svg>
                  </a>
                </Fade>
              </div>
            </div>
          </div>

          {/* COPYRIGHT TEXT */}
        </div>
      </section>
    </motion.section>
  );
}
