"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Nav from "./Nav/Nav";

const links = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/projects", name: "Projects" },
  { href: "/news", name: "News" },
  { href: "/contact", name: "Contact" },
];

const Header = () => {
  const [hovered, setHovered] = useState(false);
  const [navActive, setNavActive] = useState(false);
  return (
    <header className="absolute right-0 left-0 top-[40px] z-[60]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link
            className="flex justify-center items-center relative z-[60]"
            href="/"
          >
            <div
              className="relative inline-block"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <h3 className="h3 text-white relative flex gap-2 left-2">
                <span className="text-accent relative z-10">Okan</span>
                <span className="relative">&</span>
                <span className="relative">Design</span>
              </h3>
              {/* Üst Çizgi */}
              <span
                className={`text-accent absolute left-0 top-0 h-[1px] bg-current transition-all duration-500 ${
                  hovered ? "w-[40%]" : "w-0"
                }`}
              ></span>
              {/* Alt Çizgi */}
              <span
                className={`text-accent absolute left-0 bottom-0 h-[1px] bg-current transition-all duration-500 ${
                  hovered ? "w-[40%]" : "w-0"
                }`}
              ></span>
              <span
                className={`text-accent absolute  left-0 top-0 w-[1px] bg-current transition-all duration-500 ${
                  hovered ? "h-full" : "h-0"
                }`}
              ></span>
            </div>
          </Link>
          <div>
            <div className="hidden md:flex relative items-center space-x-4 ">
              {links.map((link, index) => {
                return (
                  <Link
                    className="relative font-primary text-xl font-semibold text-accent items-center uppercase overflow-hidden hover:text-white transition-all"
                    href={link.href}
                    key={index}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className="block md:hidden">
              <button
                onClick={() => setNavActive(!navActive)}
                className="w-8 h-6 text-accent relative  flex items-center justify-center z-[60] outline-none"
              >
                <span
                  className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${
                    navActive ? "top-1/2 rotate-45" : "top-0 translate-y-0"
                  }`}
                ></span>
                <span
                  className={`w-full h-[1.5px] bg-current absolute left-0  transition-opacity duration-300 ${
                    navActive ? "opacity-0" : "top-1/2"
                  }`}
                ></span>
                <span
                  className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${
                    navActive ? "top-1/2 -rotate-45" : "bottom-0 translate-y-0"
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{navActive && <Nav />}</AnimatePresence>
    </header>
  );
};

export default Header;
