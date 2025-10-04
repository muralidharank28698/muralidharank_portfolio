import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      // className="max-w-4xl leading-8 sm:mb-0 scroll-mt-28 pt-12"
      className="max-w-4xl text-center leading-8 sm:mb-0 scroll-mt-28 pt-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <h2 className="text-2xl font-bold capitalize pt-12">
        Profile{" "}
        <span className="text-[#57d5ff] dark:text-[#57d5ff]">Summary</span>
      </h2>
      <hr className="w-16 h-1 mx-auto my-4 bg-[#57d5ff] border-0" />
      <p className="mb-3">
        With <span className="font-medium">3+ years</span> of professional
        experience, I specialize in{" "}
        <span className="font-medium">front-end development</span> using modern
        JavaScript frameworks, particularly{" "}
        <span className="font-medium">React.js</span>, to build engaging and
        high-performance web applications. I have strong expertise in developing{" "}
        <span className="font-medium">cross-platform mobile apps</span> with{" "}
        <span className="font-medium">React Native</span> and extensive
        experience in{" "}
        <span className="font-medium">Microsoft SharePoint 365</span>{" "}
        development, leveraging{" "}
        <span className="font-medium">
          SPFx Framework, PnP JS, CAML Query, and Fluent UI
        </span>{" "}
        to deliver scalable enterprise solutions. Additionally, I am skilled in{" "}
        <span className="font-medium">Microsoft Power Automate</span>, creating
        automated workflows that streamline processes and enhance productivity.
        My work includes developing{" "}
        <span className="font-medium">SharePoint SPFx lists and libraries</span>{" "}
        for seamless integration, ensuring efficiency and exceptional user
        experiences. I also integrate{" "}
        <span className="font-medium">Azure AI services</span> to enhance
        functionality and drive innovation.
      </p>

      <p className="mb-3">
        Beyond front-end expertise, I integrate Azure AI services to deliver
        intelligent, innovative solutions that add measurable business value. I
        am passionate about transforming complex business requirements into
        practical, robust technical solutions and excel in collaborative,
        fast-paced environments. Dedicated to continuous learning and staying
        ahead of industry trends, I strive to contribute to impactful projects
        that combine cutting-edge technology with outstanding user experience.
      </p>
    </motion.section>
  );
}
