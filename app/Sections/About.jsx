"use client";
import { useRef } from "react";

import Image from "next/image";
import about from "../../public/images/about.png";
import { LuCode } from "react-icons/lu";
import { LuDatabase } from "react-icons/lu";
import { LuRocket } from "react-icons/lu";

const About = () => {
  const aboutImageGlowRef = useRef(null);

  const handleAboutPointerMove = (event) => {
    const target = aboutImageGlowRef.current;
    if (!target) return;

    const rect = target.getBoundingClientRect();
    target.style.setProperty(
      "--about-glow-x",
      `${event.clientX - rect.left}px`,
    );
    target.style.setProperty("--about-glow-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div className="py-24 overflow-hidden relative" id="about">
      <div
        className="top-1/4 absolute left-1/3 translate-x-1/2 w-80 h-80 rounded-full
        blur-3xl bg-primary/10"
      />
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="about-float">
            <div className="about-image-frame relative w-85 h-85 md:w-120 md:h-120">
              <div
                className="about-back-glow about-glow-pulse-anim"
                aria-hidden="true"
              />
              <div
                className="about-gradient-ring about-ring-rotate"
                aria-hidden="true"
              />

              <div
                ref={aboutImageGlowRef}
                className="about-image-shell"
                onPointerMove={handleAboutPointerMove}
              >
                <Image
                  src={about}
                  alt="About"
                  fill
                  className="about-image object-cover rounded-2xl"
                />
                <div className="about-cursor-glow" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
        {/* Text */}
        <div className="space-y-6">
          <span className="text-sm text-primary bg-primary/10 px-4 py-1.5 rounded-e-full border border-border inline-block">
            About Me
          </span>
          <h2 className="text-3xl font-bold text-text leading-tight">
            I build scalable and user-focused web applications{" "}
          </h2>
          <p className="text-gray-400 max-w-xl ">
            I&apos;m a Front-End Developer specializing in React and Next.js,
            with a focus on crafting smooth, animated, and highly responsive
            user interfaces. I enjoy turning designs into interactive
            experiences using tools like TypeScript, Tailwind CSS, GSAP, and
            Framer Motion — always aiming for clean code and pixel-perfect
            details.
          </p>
          <p className="text-gray-400 max-w-xl ">
            I&apos;m a fourth-year Information Systems student who enjoys
            building real projects and exploring AI-assisted development tools.
            I&apos;m actively looking for internship opportunities to grow and
            contribute to real products.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 ">
            <div className="p-4 rounded-xl bg-surface border border-border text-center">
              <LuCode className="mx-auto mb-2 text-primary w-6 h-6 " />
              <p className="text-text text-sm"> Clean Code</p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border text-center">
              <LuDatabase className="mx-auto mb-2 text-primary w-6 h-6 " />
              <p className="text-text text-sm"> Responsive Design</p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border text-center">
              <LuRocket className="mx-auto mb-2 text-primary w-6 h-6 " />
              <p className="text-text text-sm"> Fast Performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
