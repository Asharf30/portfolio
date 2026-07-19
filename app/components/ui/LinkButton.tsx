import Link from "next/link";
import { IconType } from "react-icons";

interface LinkButtonProps {
  href: string;
  text: string;
  icon?: IconType;
  iconPosition?: "left" | "right";
  rounded?: boolean;
  download?: boolean;
  variant?: "primary" | "outline";
  onClick?: () => void;
}

const LinkButton = ({
  href,
  text,
  icon: Icon,
  iconPosition = "right",
  rounded,
  download = false,
  variant = "primary",
  onClick,
}: LinkButtonProps) => {
  const baseStyles = `
    relative
    px-7 py-3.5
    font-semibold
    ${rounded ? "rounded-full" : "rounded-xl"}
    inline-flex items-center justify-center gap-2.5
    overflow-hidden text-text
    border
    transition-all duration-500 ease-out
    transform group-hover:-translate-y-1 group-active:translate-y-0 group-active:scale-[0.98]
  `;

  const variants = {
    primary: `bg-gradient-to-r from-primary via-[#26c5b8] to-primary text-background border-primary/40 shadow-[0_0_20px_rgba(32,178,166,0.35)] group-hover:shadow-[0_0_35px_rgba(32,178,166,0.7)] animate-pulse-glow`,
    outline: `bg-background/80 backdrop-blur-md text-text border-border group-hover:text-primary group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-[0_0_25px_rgba(32,178,166,0.5)]`,
  };

  return (
    <div className="relative inline-flex group">
      {/* Outer Ambient Glow Ring / Halo */}
      <span
        className={`absolute -inset-1 ${
          rounded ? "rounded-full" : "rounded-xl"
        } bg-gradient-to-r from-primary via-primary/80 to-primary opacity-40 blur-md transition-all duration-500 ease-out group-hover:opacity-100 group-hover:blur-lg group-hover:scale-105 ${
          variant === "primary" ? "animate-pulse-glow" : "opacity-0 group-hover:opacity-75"
        }`}
      />

      {/* Main Link Button */}
      {download ? (
        <a
          className={`${baseStyles} ${variants[variant]}`}
          href={href}
          download
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {Icon && iconPosition === "left" && (
            <Icon className="z-10 text-xl transition-all duration-300 ease-out group-hover:-translate-x-1 group-hover:scale-110" />
          )}

          <span className="z-10 relative tracking-wide transition-colors duration-300">
            {text}
          </span>

          {Icon && iconPosition === "right" && (
            <Icon className="z-10 text-xl transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" />
          )}
        </a>
      ) : (
        <Link
          className={`${baseStyles} ${variants[variant]}`}
          href={href}
          onClick={onClick}
        >
          {Icon && iconPosition === "left" && (
            <Icon className="z-10 text-xl transition-all duration-300 ease-out group-hover:-translate-x-1 group-hover:scale-110" />
          )}

          <span className="z-10 relative tracking-wide transition-colors duration-300">
            {text}
          </span>

          {Icon && iconPosition === "right" && (
            <Icon className="z-10 text-xl transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" />
          )}
        </Link>
      )}
    </div>
  );
};

export default LinkButton;
