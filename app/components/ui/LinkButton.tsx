"use client";

import Link from "next/link";
import { useRef, useCallback } from "react";
import { gsap } from "gsap";
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

  const wrapperRef = useRef<HTMLDivElement>(null);

  /* ── GSAP hover animation ── */
  const handleMouseEnter = useCallback(() => {
    if (disabled || !wrapperRef.current) return;
    gsap.to(wrapperRef.current, {
      scale: 1.05,
      boxShadow: "0 0 28px rgba(20, 184, 166, 0.45)",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [disabled]);

  const handleMouseLeave = useCallback(() => {
    if (!wrapperRef.current) return;
    gsap.to(wrapperRef.current, {
      scale: 1,
      boxShadow: "0 0 0px rgba(20, 184, 166, 0)",
      duration: 0.3,
      ease: "power2.inOut",
    });
  }, []);

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

  /*
   * FIX: Tailwind v4 arbitrary values must use underscores for spaces.
   * The old syntax shadow-[0_0_15px_rgba(37, 99, 235, 0.3)] broke because
   * the spaces after commas split the class into multiple invalid tokens.
   * Now using rgba(20,184,166,...) — teal #14B8A6 — with no spaces.
   */
  const variants = {
    primary: `bg-gradient-to-r from-[#14B8A6] via-primary to-[#14B8A6] text-background shadow-[0_0_15px_rgba(20,184,166,0.3)]`,
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
      group-hover:shadow-[0_0_10px_rgba(20,184,166,0.15)]
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
      group-hover:shadow-[0_0_8px_rgba(20,184,166,0.12)]
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
      ref={wrapperRef}
      className={`link-btn-ring group relative inline-flex ${
        rounded ? "rounded-full" : "rounded-xl"
      } ${fullWidth ? "w-full" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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