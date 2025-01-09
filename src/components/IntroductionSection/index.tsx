import { motion } from "framer-motion";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaSquareGithub } from "react-icons/fa6";
import { fadeIn } from "../../Common/Variants";
export default function Introduction() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <img
              // src={"data:image/jpeg;base64,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"}
              src={require("../../assets/Profile/myProfile.jpg")}
              // src={require("../../assets/Profile/myProfile_White.png")}
              alt="Muralidharan K"
              width="172"
              height="172"
              // quality="95"
              // priority={true}
              className="h-40 w-40 rounded-full object-cover border-2 border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-5 right-5 text-2xl text-2xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.div
        transition={{
          type: "tween",
          duration: 0.2,
        }}
        initial="hidden"
        variants={fadeIn("up", 0.2)}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="pb-12"
      >
        <h1
          className="mb-6 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
          // initial={{ opacity: 0, y: 100 }}
          // animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">I'm Muralidharan K,</span> a{" "}
          <span className="font-bold">Software developer</span> with{" "}
          <span className="font-bold">3 years</span> of experience, specializing
          in <span className="font-bold">frontend development</span>. I focus on{" "}
          <span className="underline">React.js</span> and have expertise as a
          <span className="font-bold"> SharePoint Developer</span>.
        </h1>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          // initial="hidden"
          // animate={{ opacity: 1, y: 0 }}
          // transition={{
          //   type: "tween",
          //   duration: 0.2,
          // }}
          // variants={fadeIn("up", 0.2)}
          // whileInView={"show"}
        >
          <Link
            to="#contact"
            className="group bg-gray-900 text-white px-5 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              window.scrollTo(0, document.body.scrollHeight);
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white px-5 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href={require("../../assets/Resume/Resume.pdf")}
            download
          >
            Download CV{" "}
            {/* <HiDownload className="opacity-60 group-hover:translate-y-1 transition" /> */}
          </a>

          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/muralidharank280698/"
            target="_blank"
          >
            <BsLinkedin color="#0077B5" />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/muralidharank28698"
            target="_blank"
          >
            <FaSquareGithub color="#0077B5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
