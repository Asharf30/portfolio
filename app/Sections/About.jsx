"use client";
import { useRef } from "react";
import DotGrid from "../components/Hero/BgGlow"
import { LuCode, LuDatabase, LuRocket } from "react-icons/lu";

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
        {/* Image / Visual */}
        <div className="flex justify-center lg:justify-start">
          <div className="about-float">
            <div className="about-image-frame relative w-85 h-85 md:w-120 md:h-120">
              <div
                className="about-back-glow about-glow-pulse-anim"
                aria-hidden="true"
              />
              <div
                className="gradient-ring gradient-ring-rotate"
                aria-hidden="true"
              />

              <div className="w-85 h-85 relative md:w-120 md:h-120 rounded-2xl bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center">
                <div className="inset-0 absolute rounded-2xl bg-primary/10 blur-2xl" />
                <div
                  ref={aboutImageGlowRef}
                  className="about-image-shell flex items-center justify-center"
                  onPointerMove={handleAboutPointerMove}
                >
                  {/* Abstract Decorative Visual (DotGrid) */}
                  <div className="w-[85%] h-[85%] relative rounded-2xl overflow-hidden bg-surface flex items-center justify-center z-10">
                    {/* Ambient Glow */}
                    <div className="absolute inset-0 bg-primary/15 blur-2xl rounded-full animate-ambient-drift" />

                    {/* Dot Grid Layer */}
                    <div className="inset-0 absolute opacity-60">
                      <DotGrid
                        dotSize={2}
                        gap={10}
                        baseColor="#2F293A"
                        activeColor="#20b2a6"
                        proximity={80}
                        shockRadius={150}
                        shockStrength={4}
                        resistance={600}
                        returnDuration={1}
                      />
                    </div>

                    {/* Glass Overlay for Depth */}
                    <div className="absolute inset-0 bg-surface/20 backdrop-blur-[2px] border border-border/30 rounded-2xl pointer-events-none" />
                  </div>
                  <div className="about-cursor-glow" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Text */}
        <div className="space-y-6">
          <span className="animated-badge text-sm bg-primary/10 px-4 py-1.5 rounded-e-full inline-block">
            <span className="badge-text">About Me</span>
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
            <div className="group p-4 rounded-xl bg-surface border border-border flex flex-col items-center justify-center text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(32,178,166,0.15)] hover:border-primary/40 cursor-pointer">
              <LuCode className="mx-auto mb-2 text-primary w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
              <p className="text-text text-sm transition-colors duration-300 group-hover:text-white"> Clean Code</p>
            </div>
            <div className="group p-4 rounded-xl bg-surface border border-border flex flex-col items-center justify-center text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(32,178,166,0.15)] hover:border-primary/40 cursor-pointer">
              <LuDatabase className="mx-auto mb-2 text-primary w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
              <p className="text-text text-sm transition-colors duration-300 group-hover:text-white"> Responsive Design</p>
            </div>
            <div className="group p-4 rounded-xl bg-surface border border-border flex flex-col items-center justify-center text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(32,178,166,0.15)] hover:border-primary/40 cursor-pointer">
              <LuRocket className="mx-auto mb-2 text-primary w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:translate-x-1 group-hover:-translate-y-1" />
              <p className="text-text text-sm transition-colors duration-300 group-hover:text-white"> Fast Performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
