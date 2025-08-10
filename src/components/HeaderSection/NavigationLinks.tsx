import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import clsx from "clsx";

interface NavigationLinksProps {
  activeSection: string;
  links: any;
  handleScrollToSection: any;
  setActiveSection?: any;
}

export const NavigationLinks: React.FC<NavigationLinksProps> = ({
  activeSection,
  links,
  handleScrollToSection,
  setActiveSection,
}) => {
  return (
    <ul className="py-1 flex space-x-4 rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
      {links.map((link: any, index: any) => (
        <li key={index}>
          <Link
            to={`#${link.name}`} // Navigate to the section with the corresponding ID
            smooth // Enables smooth scrolling
            className={clsx(
              "relative block px-3 py-2 transition",
              {
                "text-[#57d5ff] dark:text-[#57d5ff] bg-gradient-to-r":
                  activeSection === link.name,
              },
              {
                "hover:text-[#57d5ff] dark:hover:text-[#57d5ff]":
                  activeSection !== link.name,
              }
            )}
            onClick={() => {
              setActiveSection(link.name);
              handleScrollToSection(link.name);
            }}
          >
            {link.name}
            {activeSection === link.name && (
              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-[#57d5ff]/0 via-[#57d5ff]/40 to-[#57d5ff]/0 dark:from-[#57d5ff]/0 dark:via-[#57d5ff]/40 dark:to-[#57d5ff]/0"></span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};
