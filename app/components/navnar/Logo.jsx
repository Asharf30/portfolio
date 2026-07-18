import Link from "next/link";
import { LuCodeXml } from "react-icons/lu";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center
       bg-surface border border-border text-primary shadow-sm group-hover:scale-105
        group-hover:border-primary transition-all duration-300"
      >
        <LuCodeXml className="w-5 h-5 " />
      </div>
      <p
        className="hidden sm:block font-semibold text-lg md:text-xl 
      tracking-wide text-gray-300 group-hover:text-primary 
      transition-colors duration-300"
      >
        {" "}
        Asharf Osama
      </p>
    </Link>
  );
};

export default Logo;
