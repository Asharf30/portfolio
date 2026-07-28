import Link from "next/link";
import type { IconType } from "react-icons";
import type { ReactNode } from "react";

type LinkButtonBaseProps = {
  text: string;
  icon?: IconType | ReactNode;
  iconPosition?: "left" | "right";
  rounded?: boolean;
  variant?: "primary" | "outline" | "outline-subtle" | "glass";
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

type LinkButtonLinkProps = LinkButtonBaseProps & {
  href: string;
  as?: "link";
  download?: boolean;
};

type LinkButtonButtonProps = LinkButtonBaseProps & {
  as: "button";
  type?: "button" | "submit" | "reset";
};

type LinkButtonProps = LinkButtonLinkProps | LinkButtonButtonProps;

const LinkButton = (props: LinkButtonProps) => {
  const {
    text,
    icon,
    iconPosition = "right",
    rounded,
    variant = "primary",
    fullWidth = false,
    onClick,
    disabled = false,
  } = props;

  const baseStyles = `
    relative
    px-7 py-3.5
    font-semibold
    ${rounded ? "rounded-full" : "rounded-xl"}
    inline-flex items-center justify-center gap-2.5
    overflow-hidden text-text
    border-0
    transition-all duration-300 linear
    transform group-hover:-translate-y-0.5 group-active:translate-y-0 group-active:scale-[0.98]
    ${fullWidth ? "w-full" : ""}
    ${
      disabled
        ? "cursor-not-allowed opacity-70 pointer-events-none"
        : "cursor-pointer"
    }
  `;

  const variants = {
    primary: `bg-gradient-to-r from-primary via-[#26c5b8] to-primary text-background shadow-[0_0_15px_rgba(32,178,166,0.3)] group-hover:shadow-[0_0_35px_rgba(32,178,166,0.7)]`,
    outline: `bg-background/80 backdrop-blur-md text-text group-hover:text-primary group-hover:border-primary group-hover:bg-primary/10`,
    "outline-subtle": `
      bg-background/80
      backdrop-blur-md
      text-text
      shadow-none
      transition-all
      duration-300
      linear
      group-hover:border-primary/70
      group-hover:bg-primary/[0.04]
      group-hover:text-primary
      group-hover:shadow-[0_0_10px_rgba(32,178,166,0.15)]
    `,
    glass: `
      bg-background/80
      backdrop-blur-md
      text-text
      shadow-none
      transition-all
      duration-300
      group-hover:border-primary/80
      group-hover:bg-primary/[0.05]
      group-hover:shadow-[0_0_8px_rgba(32,178,166,0.12)]
    `,
  };

  const renderIcon = () => {
    if (!icon) return null;

    if (typeof icon === "function") {
      const Icon = icon as IconType;

      return (
        <Icon
          className={`z-10 text-xl transition-all duration-300 linear ${
            iconPosition === "left"
              ? "group-hover:-translate-x-1 group-hover:scale-110"
              : "group-hover:translate-x-1 group-hover:scale-110"
          }`}
        />
      );
    }

    return icon;
  };

  const content = (
    <>
      {icon && iconPosition === "left" && renderIcon()}

      <span className="z-10 relative tracking-wide transition-colors duration-300">
        {text}
      </span>

      {icon && iconPosition === "right" && renderIcon()}
    </>
  );

  const buttonClassName = `${baseStyles} ${variants[variant]} relative z-10`;

  return (
    <div
      className={`link-btn-ring group relative inline-flex ${
        rounded ? "rounded-full" : "rounded-xl"
      } ${fullWidth ? "w-full" : ""}`}
    >
      {props.as === "button" ? (
        <button
          className={buttonClassName}
          type={props.type ?? "button"}
          onClick={onClick}
          disabled={disabled}
        >
          {content}
        </button>
      ) : props.download ? (
        <a
          className={buttonClassName}
          href={props.href}
          download
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {content}
        </a>
      ) : (
        <Link
          className={buttonClassName}
          href={props.href}
          onClick={onClick}
        >
          {content}
        </Link>
      )}
    </div>
  );
};

export default LinkButton;