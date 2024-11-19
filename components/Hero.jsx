"use client";

import Badge from "./Badge";
import { useState } from "react";
import Separator from "./Separator";

const Hero = () => {
  return (
    <section className="h-[80vh] xl:h-screen relative text-white">
      <div className="bg-hero-overlay absolute w-full h-full z-10 bg-primary/[0.80]"></div>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/hero/video.mp4" type="video/mp4" />
      </video>

      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative">
        <div
          data-scroll
          data-scroll-speed="0.4"
          className="flex-1 flex flex-col text-center justify-center items-center xl:pb-12 gap-10 h-full"
        >
          <div className="flex flex-col items-center mt-10">
            <Badge containerStyles="hidden xl:flex xl:w-[180px] xl:h-[180px]" />
            <h1 className="h1 text-white">
              <span className="text-accent">Okan</span> & Design
            </h1>
          </div>

          <Separator />
          <p className="lead font-light max-w-[300px] md:max-w-[430px] xl:max-w-[560px] mb-4">
            Hayal ettiğiniz yaşam alanını bir adım öteye taşıyoruz. Size özel,
            size özgü, hayatınıza anlam katacak mekanlar yaratıyoruz
          </p>
          <button className="btn">Projelerimiz</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
