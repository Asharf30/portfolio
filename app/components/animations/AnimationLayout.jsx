"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const AnimationLayout = ({ children }) => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 600,
        easing: "ease-out-cubic",
        once: true,
        offset: 60,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return <div>{children}</div>;
};

export default AnimationLayout;
