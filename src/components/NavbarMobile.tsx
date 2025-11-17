"use client";
import Image from "next/image";
import { NavbarTab } from "./NavbarTab";

const navbarTabs = [
  "home",
  "about",
  "projects",
  "service-solution",
  "clients-partners",
  "interior-architectural",
  "lang",
  "contact",
];
export function NavbarMobile({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex justify-start items-start absolute top-0 left-0 h-dvh w-dvw bg-black p-[2rem] z-100">
      <button onClick={onClose}>
        <Image
          alt="close icon"
          width={50}
          height={50}
          src="/close.png"
          className="w-[3rem] aspect-square z-100 absolute top-8 left-8"
        />
      </button>
      <nav className="flex flex-col items-center justify-center gap-[2rem] w-full h-full">
        {navbarTabs.map((tab) => (
          <NavbarTab name={tab} key={tab} onClose={onClose} />
        ))}
      </nav>
    </div>
  );
}
