"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
  }, []);

  return (
    <div className="h-full owerflow-x-hidden">
      <Hero />
      <About />
      <div className="h-[4000px]"></div>
    </div>
  );
};

export default Home;
