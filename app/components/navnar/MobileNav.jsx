import { navLinks } from "./Navbar";
import Link from "next/link";
import LinkButton from "../ui/LinkButton";
import { MdDownload } from "react-icons/md";

const MobileNav = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <div
      className={`absolute -top-2 left-0 w-screen h-[100dvh] z-40 lg:hidden bg-background/70 backdrop-blur-sm transition-all duration-500 
        ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(false)}
    >
      <aside
        className={`absolute top-0 right-0 z-50 h-[100dvh] w-[80%] sm:w-[60%] lg:hidden bg-surface/95 
            backdrop-blur-md border-l border-border flex flex-col items-center justify-center 
            space-y-6 px-6 transition-all duration-500 ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="w-full space-y-2">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`w-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-5 scale-95"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen
                  ? `${150 + index * 60}ms`
                  : "0ms",
              }}
            >
              <Link
                href={link.href}
                onClick={() =>
                  setIsMobileMenuOpen && setIsMobileMenuOpen(false)
                }
                className="block w-full text-center py-3.5 px-6 rounded-lg text-lg font-medium text-text border border-transparent transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:border-border hover:scale-[1.02]"
              >
                {link.label || link.lable}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className={`pt-4 w-full flex justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-6 scale-90"
          }`}
          style={{
            transitionDelay: isMobileMenuOpen
              ? `${150 + navLinks.length * 60}ms`
              : "0ms",
          }}
        >
          <LinkButton
            iconPosition="left"
            icon={MdDownload}
            download
            href="https://drive.google.com/uc?export=download&id=1y2yv063urwXCP2_O9gKNj7HOcZZL6nL6"
            target="_blank"
            rel="noopener noreferrer"
            text="Download CV"
            rounded
            onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(false)}
          />
        </div>
      </aside>
    </div>
  );
};

export default MobileNav;
