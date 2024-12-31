import React, { useRef } from "react";
import ThemeContextProvider from "./context/theme-context";
import ThemeSwitch from "./components/theme-switch";
import Header from "./components/HeaderSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ActiveSectionContextProvider, {
  useActiveSectionContext,
} from "./context/active-section-context";
import Introduction from "./components/IntroductionSection";
import About from "./components/AboutSection";
import { useSectionInView } from "./lib/hooks";
import MainComponent from "./components/MainComponent";
import "./index.css";
import { ProjectsDetails } from "./components/ProjectsSection/Projects/ProjectsDetails";
import { ProfessionalExperience } from "./components/ExperienceSection/ProfessionalExperience";

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <BrowserRouter>
        {/* <MainComponent /> */}
          {/* <Routes> */}
            {/* <Route path="/" element={<MainComponent />} /> */}
            {/* <Route path="/allProjects" element={<ProjectsDetails />} /> */}
          {/* </Routes> */}
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/allProjects" element={<ProjectsDetails />} />
            <Route path="/professionalExperience" element={<ProfessionalExperience />} />
          </Routes>
        </BrowserRouter>
        <ThemeSwitch />
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
};

export default App;

// import React from "react";
// import ThemeContextProvider from "./context/theme-context";
// import ThemeSwitch from "./components/theme-switch";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ActiveSectionContextProvider from "./context/active-section-context";
// import MainComponent from "./components/MainComponent";
// import { ProjectsDetails } from "./components/ProjectsSection/Projects/ProjectsDetails";
// import "./index.css";

// const App: React.FC = () => {
//   return (
//     <ThemeContextProvider>
//       <ActiveSectionContextProvider>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<MainComponent />} />
//             <Route path="/education" element={<MainComponent />} />
//             <Route path="/projects" element={<MainComponent />} />
//             <Route path="/education/skills" element={<MainComponent />} />
//             <Route path="/allProjects/:sectionId" element={<ProjectsDetails />} />
//             <Route path="/allProjects" element={<ProjectsDetails />} />
//           </Routes>
//           <ThemeSwitch />
//         </BrowserRouter>
//       </ActiveSectionContextProvider>
//     </ThemeContextProvider>
//   );
// };

// export default App;
