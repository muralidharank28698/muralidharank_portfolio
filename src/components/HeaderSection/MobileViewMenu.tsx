import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

interface LinkItem {
  name: string;
}

interface MobileViewMenuProps {
  closeMenu: () => void;
  links: LinkItem[] | any;
  activeSection: string;
  handleScrollToSection: any;
  setActiveSection?: any;
  setIsMenuOpen?: any;
  isMenuOpen?: any;
}

export const MobileViewMenu: React.FC<MobileViewMenuProps> = ({
  closeMenu,
  links,
  activeSection,
  handleScrollToSection,
  setActiveSection,
  setIsMenuOpen,
  isMenuOpen,
}) => {
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen, closeMenu]);
  return (
    <>
      <div
        className="fixed inset-x-4 top-8 mt-10 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-zinc-900 dark:ring-zinc-800"
        id="headlessui-popover-panel-:Rrmiqja:"
        tabIndex={-1}
        data-headlessui-state="open"
        data-open=""
        style={{ "--button-width": "88.71875px" } as React.CSSProperties}
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <button
            aria-label="Close menu"
            className="-m-1 p-1"
            type="button"
            onClick={closeMenu} // Close menu on click
            data-headlessui-state="open active"
            data-open=""
            data-active=""
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
            >
              <path
                d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
            {links.map((link: any, index: number) => (
              <li key={index}>
                <Link
                  to={`#${link.name}`}
                  className={clsx(
                    "relative block px-3 py-2 transition",
                    {
                      "text-teal-500 dark:text-teal-400":
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
                    closeMenu(); // Close the menu on link click
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
        </nav>
      </div>

      <div
        className="backdrop-blur-sm bg-zinc-800/40 h-screen data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in duration-150 fixed inset-0 z-40" // Lower z-index than the modal
        id="headlessui-popover-backdrop-:Rjmiqja:"
        aria-hidden="true"
        data-headlessui-state="open"
        data-open=""
      ></div>
    </>
  );
};
