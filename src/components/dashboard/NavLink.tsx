"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ name, to }: { name: string; to: string }) {
  const path = usePathname();
  console.log(path);
  return (
    <Link
      href={`/dashboard/${to}`}
      className={`text-black ${
        path.includes(to) ? " font-bold " : " font-normal "
      } text-[1.5rem]  `}
    >
      {name}
    </Link>
  );
}
