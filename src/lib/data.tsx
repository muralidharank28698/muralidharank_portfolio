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
  Postman,
  Jira,
  Prettier,
} from "../assets/icons";

// export const links = [
//   {
//     name: "Profile",
//     hash: "#home",
//   },
//   {
//     name: "About",
//     hash: "#about",
//   },
//   {
//     name: "Skills",
//     hash: "#skills",
//   },
//   {
//     name: "Education",
//     hash: "#education",
//   },
//   {
//     name: "Experience",
//     hash: "#experience",
//   },
//   {
//     name: "Projects",
//     hash: "#projects",
//   },
//   {
//     name: "Contact",
//     hash: "#contact",
//   },
// ] as const;

export const links = [
  { name: "Intro",     hash: "#home"       },
  { name: "Story",     hash: "#about"      },
  { name: "Skills",    hash: "#skills"     },
  { name: "Education", hash: "#education"  },
  { name: "Journey",   hash: "#experience" },
  { name: "Work",      hash: "#projects"   },
  { name: "Connect",   hash: "#contact"    },
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
    icon: <AkarIconsHtmlFill width={28} height={28} />,
  },
  {
    name: "CSS",
    icon: <AkarIconsCssFill width={28} height={28} />,
  },
  {
    name: "Javascript (ES6+)",
    icon: <AkarIconsJavascriptFill width={28} height={28} />,
  },
  {
    name: "React",
    icon: <DeviconReact width={28} height={28} />,
  },
  {
    name: "React Storybook",
    icon: <VscodeIconsFileTypeStorybook width={28} height={28} />,
  },
  {
    name: "TypeScript",
    icon: <LogosTypescriptIcon width={28} height={28} />,
  },
  {
    name: "Redux",
    icon: <SkillIconsRedux width={28} height={28} />,
  },
  {
    name: "React Native",
    icon: <TablerBrandReactNative width={28} height={28} />,
  },
  {
    name: "Material UI",
    icon: <SkillIconsMaterialuiLight width={28} height={28} />,
  },
  {
    name: "Fluent UI",
    icon: <FluentFluent24Regular width={28} height={28} />,
  },
  {
    name: "Tailwind CSS",
    icon: <SkillIconsTailwindcssLight width={28} height={28} />,
  },
  {
    name: "Bootstrap",
    icon: <DeviconBootstrap width={28} height={28} />,
  },
  {
    name: "PNP JS",
    icon: <LucideFileJson2 width={28} height={28} />,
  },
];

export const MicrosoftSharePointSPFXTechnologyStack: ILibrariesAndFramework[] =
  [
    {
      name: "SPFX List & Libraries",
      icon: <SimpleIconsLibrariesdotio width={28} height={28} />,
    },
    {
      name: "SPFX Webpart",
      icon: <LucideFileJson2 width={28} height={28} />,
    },
    // {
    //   name: "SPFX Libraries",
    //   icon: <SimpleIconsLibrariesdotio />,
    // },
    {
      name: "Power Automate",
      icon: <SimpleIconsMicrosoftpowerautomate width={28} height={28} />,
    },
    {
      name: "Azure AI services",
      icon: <DeviconAzure width={28} height={28} />,
    },
  ];

export const EditorTools: IEditorTools[] = [
  {
    name: "Visual Studio Code",
    icon: <MdiMicrosoftSharepoint width={28} height={28} />,
  },
  {
    name: "VS Code",
    icon: <AkarIconsCssFill width={28} height={28} />,
  },
];

export const versionControlTools: IEditorTools[] = [
  {
    name: "Git",
    icon: <SkillIconsGit width={28} height={28} />,
  },
  // {
  //   name: "GitHub",
  //   icon: <SkillIconsGit />,
  // },
  {
    name: "Postman",
    icon: <Postman width={28} height={28} />,
  },
  {
    name: "Bitbucket",
    icon: <SkillIconsBitbucket width={28} height={28} />,
  },
  {
    name: "Jira",
    icon: <Jira width={28} height={28} />,
  },
  {
    name: "Prettier",
    icon: <Prettier width={28} height={28} />,
  },
];
