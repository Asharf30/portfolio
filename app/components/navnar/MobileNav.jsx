import { navLinks } from "./Navbar";
import Link from "next/link";
const MobileNav = ({ isMobileMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-40 lg:hidden bg-background/70 backdrop-blur-sm transition-all duration-500 
        ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[80%] sm:w-[60%] lg:hidden bg-surface/95 
            backdrop-blur-md border-l border-border flex flex-col items-center justify-center 
            space-y-2 px-6 transition-all duration-500 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className=" block w-full text-center py-4 px-6 rounded-lg text-lg font-medium
                text-text  border border-transparent transition-all duration-300
                hover:bg-primary/10
                hover:text-primary
                hover:border-border
                "
              >
                {link.lable}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default MobileNav;
