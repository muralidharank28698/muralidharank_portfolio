import React, { ReactNode } from "react";

interface TooltipProps {
  content: string;
  children: ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  return (
    <div className="relative inline-flex items-center justify-center group">
      {children}

      <span
        className="
        pointer-events-none
        absolute left-1/2 -translate-x-1/2 -top-9
        whitespace-nowrap
        text-xs font-medium
        px-3 py-1.5
        rounded-md shadow-md
        opacity-0 translate-y-1
        group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-200 ease-out
        z-50
        
        bg-gray-900 text-white
        dark:bg-white dark:text-gray-900
      "
      >
        {content}

        {/* Tooltip Arrow */}
        {/* <span
          className="
          absolute left-1/2 -translate-x-1/2 top-full
          w-2 h-2 rotate-45
          bg-gray-900
          dark:bg-white
        "
        /> */}
      </span>
    </div>
  );
};