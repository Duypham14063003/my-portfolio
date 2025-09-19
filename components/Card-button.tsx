"use client";
import React from "react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

export function HoverBorderGradientDemo({
  Content,
}: {
  Content: React.ReactNode;
}) {
  return (
    <div>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="lg:text-lg md:text-sm opacity-10 transition-opacity duration-1000 ease-in-out hover:opacity-100 hover:scale-105 active:scale-95 px-4 py-2 flex items-center space-x-2 text-sm font-medium bg-white dark:bg-black text-black dark:text-white cursor-pointer"
      >
        <span>{Content}</span>
      </HoverBorderGradient>
    </div>
  );
}

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HoverBorderGradientDemo;
