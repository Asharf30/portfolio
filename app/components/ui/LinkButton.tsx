import Link from "next/link";
import { IconType } from "react-icons";

interface LinkButtonProps {
  href: string;
  text: string;
  icon?: IconType;
  iconPosition?: "left" | "right";
  rounded?: boolean;
  download?: boolean;
  variant?: "primary" | "outline" | "outline-subtle" | "glass";
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
    transition-all duration-300 ease-out
    transform group-hover:-translate-y-0.5 group-active:translate-y-0 group-active:scale-[0.98]
  `;

  const variants = {
    primary: `bg-gradient-to-r from-primary via-[#26c5b8] to-primary text-background border-primary/40 shadow-[0_0_15px_rgba(32,178,166,0.3)] group-hover:shadow-[0_0_35px_rgba(32,178,166,0.7)]`,
    outline: `bg-background/80 backdrop-blur-md text-text border-border group-hover:text-primary group-hover:border-primary group-hover:bg-primary/10`,
    "outline-subtle": `
  bg-background/80
  backdrop-blur-md
  text-text
  border-border/60
  shadow-none
  transition-all
  duration-300
  ease-out

  group-hover:border-primary/70
  group-hover:bg-primary/[0.04]
  group-hover:text-primary
  group-hover:shadow-[0_0_10px_rgba(32,178,166,0.15)]
`,
    glass: `
bg-background/80
backdrop-blur-md
border-primary/40
text-text
shadow-none

transition-all
duration-300

group-hover:border-primary/80
group-hover:bg-primary/[0.05]
group-hover:shadow-[0_0_8px_rgba(32,178,166,0.12)]
`,
  };

  return (
    <div className="relative inline-flex group">
      {/* Rotating gradient border */}
      <span
        className={`link-btn-border absolute inset-0 pointer-events-none ${
          rounded ? "rounded-full" : "rounded-xl"
        }`}
        aria-hidden="true"
      />

      {/* Outer Ambient Glow Ring / Halo */}
      <span
        className={`absolute -inset-0.5 ${
          rounded ? "rounded-full" : "rounded-xl"
        } bg-primary
  opacity-0
  blur-sm
  transition-all
  duration-300
  group-hover:opacity-15
  ${variant === "primary" ? "group-hover:opacity-20" : "pointer-events-none"}`}
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
