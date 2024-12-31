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
      {links.map((link:any, index:any) => (
        <li key={index}>
          <Link
            to={`#${link.name}`} // Navigate to the section with the corresponding ID
            smooth // Enables smooth scrolling
            className={clsx(
              "relative block px-3 py-2 transition",
              {
                "text-teal-500 dark:text-teal-400 bg-gradient-to-r":
                  activeSection === link.name,
              },
              {
                "hover:text-teal-500 dark:hover:text-teal-400":
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
              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};
