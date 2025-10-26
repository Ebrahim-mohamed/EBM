"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Navbar } from "./Navbar";
import { NavbarMobile } from "./NavbarMobile";

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
  const [isShow, setIsShow] = useState(false);
  function closeNav() {
    setIsShow(false);
  }
  return (
    <div
      className={` flex items-center justify-between w-full top-0 left-0 z-50 transition-all duration-300 ${
        isSticky
          ? "fixed bg-[#0D1421]/80 backdrop-blur-lg p-[2rem] "
          : "absolute p-[2rem] "
      }`}
    >
      <Image
        alt="logo"
        src="/logo.png"
        width={50}
        height={50}
        className="w-[6rem] aspect-square max-[550px]:w-[4.5rem]"
      />
      <div className="max-[950px]:hidden">
        <Navbar />
      </div>

      {isShow && <NavbarMobile onClose={closeNav} />}

      <button onClick={() => setIsShow(true)} className="min-[950px]:hidden">
        <Image
          alt="menu icon"
          width={50}
          height={50}
          src="/menu.png"
          className=" w-[3rem] aspect-square "
        />
      </button>
    </div>
  );
}
