import React from "react";
import { IEditorTools, ILibrariesAndFramework } from "./types";
import {
  AkarIconsCssFill,
  AkarIconsHtmlFill,
  AkarIconsJavascriptFill,
  DeviconAzure,
  DeviconBootstrap,
  DeviconReact,
  FluentFluent24Regular,
  LogosTypescriptIcon,
  MdiMicrosoftSharepoint,
  LucideFileJson2,
  SimpleIconsLibrariesdotio,
  SkillIconsGit,
  SkillIconsMaterialuiLight,
  SkillIconsRedux,
  SkillIconsTailwindcssLight,
  TablerBrandReactNative,
  VscodeIconsFileTypeStorybook,
  SkillIconsBitbucket,
  SimpleIconsMicrosoftpowerautomate,
} from "../assets/icons";

export const links = [
  {
    name: "Profile",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

// export const projectsData = [
//   {
//     title: "CorpComment",
//     description:
//       "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
//     tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//     imageUrl: corpcommentImg,
//   },
//   {
//     title: "rmtDev",
//     description:
//       "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//     imageUrl: rmtdevImg,
//   },
//   {
//     title: "Word Analytics",
//     description:
//       "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
//     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//     imageUrl: wordanalyticsImg,
//   },
// ] as const;

export const TechnologyStack: ILibrariesAndFramework[] = [
  {
    name: "HTML",
    icon: <AkarIconsHtmlFill />,
  },
  {
    name: "CSS",
    icon: <AkarIconsCssFill />,
  },
  {
    name: "Javascript (ES6+)",
    icon: <AkarIconsJavascriptFill />,
  },
  {
    name: "React",
    icon: <DeviconReact />,
  },
  {
    name: "React Storybook",
    icon: <VscodeIconsFileTypeStorybook />,
  },
  {
    name: "TypeScript",
    icon: <LogosTypescriptIcon />,
  },
  {
    name: "Redux",
    icon: <SkillIconsRedux />,
  },
  {
    name: "React Native",
    icon: <TablerBrandReactNative />,
  },
  {
    name: "Material UI",
    icon: <SkillIconsMaterialuiLight />,
  },
  {
    name: "Fluent UI",
    icon: <FluentFluent24Regular />,
  },
  {
    name: "Tailwind CSS",
    icon: <SkillIconsTailwindcssLight />,
  },
  {
    name: "Bootstrap",
    icon: <DeviconBootstrap />,
  },
  {
    name: "PNP JS",
    icon: <LucideFileJson2 />,
  },
];

export const MicrosoftSharePointSPFXTechnologyStack: ILibrariesAndFramework[] =
  [
    {
      name: "SPFX Webpart",
      icon: <LucideFileJson2 />,
    },
    {
      name: "SPFX List",
      icon: <SimpleIconsLibrariesdotio />,
    },
    {
      name: "SPFX Libraries",
      icon: <SimpleIconsLibrariesdotio />,
    },
    {
      name: "Power Automate",
      icon: <SimpleIconsMicrosoftpowerautomate />,
    },
    {
      name: "Azure AI services",
      icon: <DeviconAzure />,
    },
  ];

export const EditorTools: IEditorTools[] = [
  {
    name: "Visual Studio Code",
    icon: <MdiMicrosoftSharepoint />,
  },
  {
    name: "VS Code",
    icon: <AkarIconsCssFill />,
  },
];

export const versionControlTools: IEditorTools[] = [
  {
    name: "Git",
    icon: <SkillIconsGit />,
  },
  {
    name: "GitHub",
    icon: <SkillIconsGit />,
  },
  {
    name: "Bitbucket",
    icon: <SkillIconsBitbucket />,
  },
];
