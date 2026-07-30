"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGreensock,
  SiFramer,
} from "react-icons/si";

const ICONS = [
  { Icon: SiReact, color: "#61DAFB", name: "React" },
  { Icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js" },
  { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
  { Icon: SiGreensock, color: "#88CE02", name: "GSAP" },
  { Icon: SiFramer, color: "#0055FF", name: "Framer Motion" },
];

export default function TechStackOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const controls = useAnimation();

  // IntersectionObserver to pause animation when off-screen for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    } else {
      // Pause animations when not in view to avoid unnecessary reflows/GPU usage
      controls.stop();
    }
  }, [isInView, controls]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative flex items-center justify-center bg-surface overflow-hidden rounded-2xl"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />

      {/* Central Anchor */}
      <motion.div
        className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-surface/90 border border-primary/30 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.2)] backdrop-blur-md"
        variants={{
          animate: {
            y: [-6, 6],
            rotate: [-2, 2],
            transition: {
              y: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
                ease: "easeInOut",
              },
              rotate: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut",
              },
            },
          },
        }}
        animate={controls}
      >
        <span className="text-primary font-bold text-xl md:text-2xl font-mono opacity-80">
          &lt;/&gt;
        </span>
      </motion.div>

      {/* Orbiting Icons */}
      {ICONS.map((item, index) => {
        // Distribute icons evenly in a circle
        const angle = (index / ICONS.length) * 360;
        const radian = (angle * Math.PI) / 180;

        // Radius of the orbit (percentage of parent container)
        // Kept responsive: works well on both mobile (smaller container) and desktop
        const radiusPercent = 36;

        const leftPos = (50 + Math.cos(radian) * radiusPercent).toFixed(2);
        const topPos = (50 + Math.sin(radian) * radiusPercent).toFixed(2);

        return (
          <motion.div
            key={item.name}
            // Position absolutely based on calculated circle percentage
            className="absolute w-12 h-12 md:w-14 md:h-14 -ml-6 -mt-6 md:-ml-7 md:-mt-7 bg-surface border border-border/60 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm z-20 group cursor-default"
            style={{
              left: `${leftPos}%`,
              top: `${topPos}%`,
            }}
            variants={{
              animate: {
                y: [-8, 8],
                x: [-4, 4],
                rotate: [-6, 6],
                transition: {
                  y: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    // Staggered and slightly irregular durations for an organic float
                    duration: 1.5 + (index % 3) * 0.25,
                    delay: index * 0.08,
                    ease: "easeInOut",
                  },
                  x: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2 + (index % 2) * 0.25,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  },
                  rotate: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2.5,
                    delay: index * 0.05,
                    ease: "easeInOut",
                  },
                },
              },
            }}
            animate={controls}
          >
            {/* Tooltip */}
            <div className="absolute -top-8 md:-top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-surface border border-border/50 rounded-md text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl whitespace-nowrap z-30">
              {item.name}
            </div>

            {/* Inner Glow on hover */}
            <div 
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" 
              style={{ backgroundColor: item.color }} 
            />
            
            <item.Icon
              className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:scale-110"
              style={{ color: item.color }}
              aria-label={item.name}
            />
          </motion.div>
        );
      })}

      {/* Optional: Add a subtle rotating dashed ring for the orbit path */}
      <motion.div 
        className="absolute w-[72%] h-[72%] rounded-full border border-dashed border-border/40 pointer-events-none"
        variants={{
          animate: {
            rotate: 360,
            transition: {
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            },
          },
        }}
        animate={controls}
      />
    </div>
  );
}
