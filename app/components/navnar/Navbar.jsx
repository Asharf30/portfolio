"use client";
import { useEffect, useState, useRef } from "react";
import Logo from "./Logo";
import Link from "next/link";
import LinkButton from "../ui/LinkButton";
import { MdDownload } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import { LuX } from "react-icons/lu";
import MobileNav from "./MobileNav";

export const navLinks = [
  { href: "#home", label: "Home", lable: "Home" },
  { href: "#about", label: "About", lable: "About" },
  { href: "#skills", label: "Skills", lable: "Skills" },
  { href: "#projects", label: "Projects", lable: "Projects" },
  { href: "#contact", label: "Contact", lable: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const SCROLL_THRESHOLD = 8; // px delta before reacting

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;

        // Background transition threshold
        setScrolled(currentY > 50);

        if (currentY < 60) {
          // Always visible near the top
          setHidden(false);
        } else {
          const delta = currentY - lastScrollY.current;
          if (Math.abs(delta) > SCROLL_THRESHOLD) {
            if (delta > 0) {
              setHidden(true); // scrolling DOWN → hide
            } else {
              setHidden(false); // scrolling UP   → show
            }
          }
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/*
        Outer bar: full-width, carries glass bg + border + hardware-accelerated
        transform/opacity animation only — no layout properties animated.
      */}
      <div
        className="fixed top-2 left-0 w-full z-60"
        style={{
          transform:
            hidden && !isMobileMenuOpen ? "translateY(-100%)" : "translateY(0)",
          opacity: hidden && !isMobileMenuOpen ? 0 : 1,
          filter: hidden && !isMobileMenuOpen ? "blur(4px)" : "blur(0px)",
          transition:
            "transform 400ms cubic-bezier(0.16, 1, 0.3, 1), opacity 400ms cubic-bezier(0.16, 1, 0.3, 1), filter 400ms cubic-bezier(0.16, 1, 0.3, 1)",
          willChange: "transform, opacity, filter",
        }}
      >
        {/* Inner row — constrained to max-w-7xl, aligns with Hero content */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <Logo />

          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-1 py-2.5 px-1 rounded-full bg-surface/60 backdrop-blur-xl border border-border">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:text-primary hover:bg-surface"
                  >
                    {link.lable}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <LinkButton
              iconPosition="left"
              icon={MdDownload}
              download
              href="https://drive.google.com/uc?export=download&id=1y2yv063urwXCP2_O9gKNj7HOcZZL6nL6"
              target="_blank"
              rel="noopener noreferrer"
              text="Download CV"
              rounded
            />
          </div>

          <button
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className={`z-50 cursor-pointer lg:hidden relative w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] active:scale-90 ${
              isMobileMenuOpen
                ? "border-primary bg-primary/15 text-primary shadow-[0_0_25px_rgba(37, 99, 235, 0.45)] rotate-180"
                : "border-border bg-surface/60 text-text hover:border-primary/60 hover:text-primary hover:shadow-[0_0_15px_rgba(37, 99, 235, 0.2)] rotate-0"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span
                className={`absolute transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center ${
                  isMobileMenuOpen
                    ? "opacity-0 scale-0 -rotate-90"
                    : "opacity-100 scale-100 rotate-0"
                }`}
              >
                <LuMenu size={24} />
              </span>
              <span
                className={`absolute transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center ${
                  isMobileMenuOpen
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-0 rotate-90"
                }`}
              >
                <LuX size={24} />
              </span>
            </div>
          </button>
        </div>
      </div>

      <MobileNav
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </>
  );
};

export default Navbar;
