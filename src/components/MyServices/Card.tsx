import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

interface CardProps {
  title: string;
  subtitle?: string;
  image?: string;
  price?: string;
  des?: string;
  url?: string;
}

export default function Card({
  title,
  subtitle,
  image,
  des,
  url,
}: CardProps) {
  return (
    <div
      className="relative w-full sm:w-[260px] rounded-lg border border-neutral-200/40 dark:border-neutral-700/40
      overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-none animate-fadeIn
      bg-transparent"
    >
      {/* Title + Subtitle + Icon */}
      <div className="p-3 relative bg-transparent">
        <h3 className="text-base font-semibold">{title}</h3>
        {subtitle && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {subtitle}
          </p>
        )}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition focus:outline-none focus-visible:outline-none"
          aria-label="linkedin"
        >
          <HiOutlineExternalLink size={18} />
        </button>
      </div>

      {/* Image Section */}
      {image && (
        <div className="w-full aspect-[16/9] overflow-hidden bg-transparent">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}

      {/* Footer Section */}
      <div className="flex items-center justify-between p-3 bg-transparent">
        {/* <span className="text-xs text-gray-600 dark:text-gray-300 truncate">
          {des}
        </span> */}
        <a
          href={url}
          rel="noopener noreferrer"
          target="_blank"
          className="ml-auto bg-[rgb(87,213,255)] text-white text-xs font-semibold px-3 py-1.5 rounded-md transition 
           hover:bg-[rgb(87,193,245)] focus:outline-none"
        >
          Explore
        </a>
      </div>
    </div>
  );
}
