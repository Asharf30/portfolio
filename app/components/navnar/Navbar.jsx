"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import LinkButton from "../ui/LinkButton";
import { MdDownload } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import { LuX } from "react-icons/lu";
import MobileNav from "./MobileNav";

export const navLinks = [
  { href: "#home", lable: "Home" },
  { href: "#about", lable: "About" },
  { href: "#skills", lable: "Skills" },
  { href: "#projects", lable: "Projects" },
  { href: "#contact", lable: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-3 left-0 w-full z-60 transition-all duration-300 ${
          scrolled ? "bg-black/70 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="w-[95%] lg:w-[90%] mx-auto h-16 flex items-center justify-between gap-4">
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
              href="/Ashraf_Osama_Frontend_CV.pdf"
              text="Download CV"
              rounded
            />
          </div>
          <button
            className="z-50 transition cursor-pointer lg:hidden w-10 h-10 rounded-lg flex items-center justify-center
        border border-border bg-surface/60 text-text hover:border-primary hover:text-primary
        "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <LuX /> : <LuMenu size={22} />}
          </button>
        </div>
      </div>

<MobileNav isMobileMenuOpen={isMobileMenuOpen} />
    </>
  );
};

export default Navbar;
