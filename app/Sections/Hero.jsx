"use client";
import { useRef } from "react";
import DotGrid from "../components/Hero/BgGlow";
import LinkButton from "../components/ui/LinkButton";
import { LuArrowRight } from "react-icons/lu";
import profile from "../../public/images/profile.jpg";
import Image from "next/image";

const Hero = () => {
  const imageGlowRef = useRef(null);

  const handleProfilePointerMove = (event) => {
    const target = imageGlowRef.current;
    if (!target) return;

    const rect = target.getBoundingClientRect();
    target.style.setProperty(
      "--profile-glow-x",
      `${event.clientX - rect.left}px`
    );
    target.style.setProperty(
      "--profile-glow-y",
      `${event.clientY - rect.top}px`
    );
  };

  return (
    <div
      id="home"
      className="min-h-screen w-full relative overflow-hidden flex items-center pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-16"
    >
      {/* bg glow */}
      <div
        className="top-1/4 absolute left-1/3 translate-x-1/2 w-80 h-80 rounded-full
        blur-3xl bg-primary/10"
      />

      {/* background dot grid */}
      <div className="inset-0 absolute">
        <DotGrid
          dotSize={2}
          gap={15}
          baseColor="#2F293A"
          activeColor="#21b6aa"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="relative z-10 w-[90%] mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center">

        {/* ── Text + Buttons — always first in DOM (mobile + desktop) ── */}
        <div className="flex flex-col gap-6 sm:gap-7 text-center lg:text-left items-center lg:items-start">
          <span
            className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary
            text-sm border border-border"
          >
            {" "}
            Frontend Developer • React &amp; Next.js
          </span>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] text-text/90
            max-w-[20ch] lg:max-w-none text-pretty"
          >
            Building modern web experiences with{" "}
            <span className="text-primary/70">Clean Code</span>
          </h1>

          <p className="text-gray-400 tracking-wide text-balance leading-relaxed max-w-[52ch]">
            I am Ashraf Osama, a Frontend Developer focused on building
            responsive, high-performance web applications using React, Next.js,
            TypeScript, and Tailwind CSS. Focused on performance, clean UI, and
            real-world products.
          </p>

          {/* CTA Buttons — side by side ≥360px, stacked below */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full max-[359px]:[&>*]:w-full min-[360px]:[&>*]:w-auto">
            <LinkButton
              text="Get in Touch"
              href="#contact"
              rounded
              icon={LuArrowRight}
            />
            <LinkButton
              text="View My Work"
              href="#projects"
              rounded
              variant="outline-subtle"
            />
          </div>
        </div>

        {/* ── Profile image — below buttons on mobile, right column on desktop ── */}
        <div className="flex justify-center lg:justify-end mt-14 sm:mt-16 md:mt-18 lg:mt-0">
          <div className="profile-float">
            <div
              className="profile-frame relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80
                lg:w-[340px] lg:h-[340px] xl:w-[420px] xl:h-[420px]"
            >
              <div className="profile-back-glow glow-pulse-anim" aria-hidden="true" />
              <div className="profile-gradient-ring ring-rotate" aria-hidden="true" />

              <div
                ref={imageGlowRef}
                className="profile-image-shell"
                onPointerMove={handleProfilePointerMove}
              >
                <Image
                  src={profile}
                  fill
                  alt="Profile photo of Ashraf Osama"
                  className="profile-image object-cover rounded-full"
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, (max-width: 1280px) 340px, 420px"
                  priority
                />
                <div className="profile-cursor-glow" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
