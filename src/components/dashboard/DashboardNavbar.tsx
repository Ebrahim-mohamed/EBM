import Image from "next/image";
import { NavLink } from "./NavLink";

export function DashboardNavbar() {
  return (
    <div className="flex flex-col gap-[1.5rem] py-[2rem] border-r-[2px]  h-dvh min-w-[14rem] bg-[#111827]">
      <div className="w-[12rem] p-[2rem]">
        <Image
          alt="logo image"
          src="/logo.png"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
      <NavLink name="Projects" to="projects" />
      <NavLink name="contact Info" to="contacts" />
      <NavLink name="inter contact Info" to="inter-contact" />
    </div>
  );
}
