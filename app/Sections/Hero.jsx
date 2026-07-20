"use client";
import DotGrid from "../components/Hero/BgGlow";
import LinkButton from "../components/ui/LinkButton";
import { LuArrowRight } from "react-icons/lu";
import profile from "../../public/images/profile.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen w-full relative overflow-hidden flex items-center pt-30 py-10"
    >
      {/* bg glow */}
      <div
        className="top-1/4 absolute left-1/3 translate-x-1/2 w-80 h-80 rounded-full
      blur-3xl bg-primary/10
      "
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
      <div
        className=" relative z-10 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2
      gap6 items-center
      "
      >
        <div className="space-y-6">
          <span
            className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary
          text-sm border border-border
          "
          >
            {" "}
            Frontend Developer • React & Next.js
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  leading-tight text-text/90">
            Building modern web experiences with <br />
            <span className="text-primary/70">Clean Code</span>
          </h1>
          <p className="text-gray-400 tracking-wide text-balance">
            I am Ashraf Osama, a Frontend Developer focused on building
            responsive, high performance web applications using React, Next.js,
            TypeScript, and Tailwind CSS.Focused on performance, clean UI, and
            real-world products.
          </p>
          <div className="items-center flex gap-4 pt-2 ">
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
        <div className="flex justify-center lg:justify-end ">
          <div
            className="relative w-85 h-85 md:w-110 md:h-110 rounded-full bg-surface/80 
          backdrop-blur-md border border-border flex items-center justify-center"
          >
            <div className="inset-0 absolute rounded-full bg-primary/20 blur-3xl "  />
            <Image
              src={profile}
              fill
              alt="Profile"
              className="z-10 object-cover rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
