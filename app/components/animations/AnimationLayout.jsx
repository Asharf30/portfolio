"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const AnimationLayout = ({ children }) => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return <div>{children}</div>;
};

export default AnimationLayout;
