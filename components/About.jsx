"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Badge from "./Badge";
import Separator from "./Separator";

const data = [
  {
    imgSrc: "/assets/about/photo-1.jpg",
    title: "Our Journey",
    description:
      "Founded in 2000, ZenStudio began as a small architectural office with a vision for innovative and timeless designs. Today, we are a trusted name in architecture, celebrated for our commitment to excellence and sustainability. Driven by creativity, we transform spaces into meaningful experiences. Join us as we continue shaping the future of architecture, one project at a time.",
  },
  {
    imgSrc: "/assets/about/photo-2.jpg",
    title: "Our Promise",
    description:
      "At Okan Studio, we promise exceptional architectural solutions that make a positive impact. We approach each project with a deep respect for people and the environment, ensuring our designs are both sustainable and socially responsible. Our meticulous attention to detail guarantees a rich and fulfilling experience for our clients. We are committed to quality, sustainability, and enhancing the communities we serve.",
  },
  {
    imgSrc: "/assets/about/photo-3.jpg",
    title: "Our Team",
    description:
      "At Okan Studio, our dedicated team is behind every successful project. Our skilled architects and designers work with passion and precision, making each architectural endeavor unique. Meet the people who bring creativity and care to every project and discover their unique stories.",
  },
];

const About = () => {
  const scrollableSectionRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animation = gsap.fromTo(
      scrollableSectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: scrollTriggerRef.current,
          start: "top top",
          end: "1800vw top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-primary ">
      <div ref={scrollTriggerRef}>
        <div
          ref={scrollableSectionRef}
          className="h-screen w-[300vw] flex relative"
        >
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-screen h-screen flex flex-col justify-center items-center relative"
              >
                <div className="container mx-auto">
                  <div className="flex gap-[30px] relative">
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <Badge containerStyles="w-[180px] h-[180px]" />
                      <div className="max-w-[560px] text-center">
                        <h2 className="h2 text-white mb-4">
                          <span className="mr-4">
                            {item.title.split(" ")[0]}
                          </span>
                          <span className="text-accent">
                            {item.title.split(" ")[1]}
                          </span>
                        </h2>
                        <div className="mb-8">
                          <Separator />
                        </div>
                        <p className="leading-relaxed mb-16 px-8 xl:px-0">
                          {item.description}
                        </p>
                        <button className="btn">See more</button>
                      </div>
                    </div>
                    <div className="hidden xl:flex flex-1 w-full h-[70vh] relative">
                      <Image
                        src={item.imgSrc}
                        fill
                        className="object-cover"
                        quality={100}
                        priority
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
