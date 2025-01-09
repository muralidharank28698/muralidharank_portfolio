import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="max-w-4xl text-center leading-8 sm:mb-0 scroll-mt-28 pt-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      // transition={{
      //   type: "tween",
      //   duration: 0.2,
      // }}
      // initial="hidden"
      // variants={fadeIn("up", 0.2)}
      // whileInView={"show"}
      // viewport={{ once: false, amount: 0.7 }}
    >
      <h2 className="text-3xl font-bold capitalize text-center pt-12 text-gray-800 dark:text-gray-200">
        Profile{" "}
        <span className="text-blue-600 dark:text-blue-400">Summary</span>
      </h2>
      <hr className="w-16 h-1 mx-auto my-4 bg-blue-600 border-0" />
      <p className="mb-3">
        I am a professional{" "}
        <span className="font-medium">Software Developer</span> with over 3
        years of experience specializing in{" "}
        <span className="font-medium">front-end development</span>. My expertise
        lies in JavaScript UI frameworks, particularly{" "}
        <span className="font-medium">React</span>, with a focus on creating
        exceptional user experiences. I have strong skills in building mobile
        applications using <span className="font-medium">React Native</span> and
        am experienced in{" "}
        <span className="font-medium">
          Microsoft SharePoint 365 development
        </span>
        , utilizing{" "}
        <span className="font-medium">SPFx Framework, PnP JS, CAML Query</span>,
        and developing SharePoint{" "}
        <span className="font-medium">SPFx libraries</span> for integration and
        consumption in our products, for high-quality solutions. I also
        integrate <span className="font-medium">Azure AI services</span> to
        enhance functionality and drive innovation.
      </p>

      <p className="mb-3">
        With an <span className="font-medium">MCA degree</span> from Pondicherry
        Engineering College, I am passionate about translating business
        requirements into technical solutions and launching new projects using
        diverse tech stacks. I am always eager to stay updated on industry
        trends and dedicated to continuous learning. I'm excited about
        collaborating with fellow professionals to contribute to innovative,
        impactful projects.
      </p>
    </motion.section>
  );
}
