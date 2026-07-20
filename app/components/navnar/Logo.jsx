"use client";
import { LuCodeXml } from "react-icons/lu";

const scrollToTop = () => {
  if (window.scrollY === 0) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Logo = () => {
  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="flex items-center gap-3 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-full"
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center
        bg-surface border border-border text-primary shadow-sm
        group-hover:scale-105 group-hover:border-primary
        transition-all duration-300"
      >
        <LuCodeXml className="w-5 h-5" />
      </div>
      <p
        className="hidden sm:block font-semibold text-lg md:text-xl
        tracking-wide text-gray-300 group-hover:text-primary
        transition-colors duration-300"
      >
        {" "}
        Asharf Osama
      </p>
    </button>
  );
};

export default Logo;
