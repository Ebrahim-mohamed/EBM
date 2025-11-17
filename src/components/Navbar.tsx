"use client";
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
export function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-[2rem]">
      {navbarTabs.map((tab) => (
        <NavbarTab name={tab} key={tab} />
      ))}
    </nav>
  );
}
