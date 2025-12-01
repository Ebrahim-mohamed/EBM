import Image from "next/image";
import { NavLink } from "./NavLink";

export function DashboardNavbar() {
  return (
    <div className="flex flex-col gap-[1.5rem] py-[2rem]   h-dvh w-[20rem] bg-[#111827]">
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
      <NavLink name="Contact info" to="contacts" />
      <NavLink name="Company profile" to="company-profile" />
      <NavLink name="Inter contact Info" to="inter-contact" />
      <NavLink
        name="Interior architectural Company profile"
        to="interior-architectural-profile"
      />
    </div>
  );
}
