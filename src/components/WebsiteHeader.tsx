"use client";
import Image from "next/image";
import { Navbar } from "./Navbar";

export function WebsiteHeader() {
  return (
    <div className="p-[2rem] flex items-center justify-between w-full absolute top-0 left-0">
      <Image
        alt="logo"
        src="/logo.png"
        width={50}
        height={50}
        className="w-[6rem] aspect-square"
      />
      <Navbar />
    </div>
  );
}
