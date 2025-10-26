import Image from "next/image";
import { NavLink } from "./NavLink";

export function DashboardNavbar() {
  return (
    <div className="flex flex-col gap-[1.5rem] p-[2rem] border-r-[2px] border-r-black h-dvh min-w-[14rem]">
      <div className="bg-black">
        <Image
          alt="logo image"
          src="/logo.png"
          width={500}
          height={500}
          className="w-[6rem]"
        />
      </div>
      <NavLink name="Projects" to="projects" />
      <NavLink name="contact Info" to="contacts" />
    </div>
  );
}
