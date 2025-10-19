"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Navbar } from "./Navbar";

export function WebsiteHeader() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("#hero-section");
    const heroHeight = hero?.clientHeight || 0;

    const handleScroll = () => {
      if (window.scrollY > heroHeight - 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` flex items-center justify-between w-full top-0 left-0 z-50 transition-all duration-300 ${
        isSticky
          ? "fixed bg-[#0D1421]/80 backdrop-blur-lg px-[2rem] "
          : "absolute px-[2rem] py-[1rem]"
      }`}
    >
      <Image
        alt="logo"
        src="/logo.png"
        width={50}
        height={50}
        className="w-[8rem] aspect-square"
      />
      <Navbar />
    </div>
  );
}
