"use client";
import { serviceAndSolutionSectionBoxType } from "@/types/homePage/types";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";

export function ServiceAndSolutionSectionBox(
  service: serviceAndSolutionSectionBoxType
) {
  const [isIn, setIsIn] = useState(false);
  const locale = useLocale();
  return (
    <Link
      href={`/${locale}/${service.to}`}
      className="p-[2rem] flex flex-col justify-end gap-[1.5rem] text-white rounded-[1rem] min-w-[21rem] min-h-[25rem] bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(/homePage/${service.img}.png)` }}
      onMouseEnter={() => setIsIn(true)}
      onMouseOut={() => setIsIn(false)}
    >
      <h2
        className={`text-[1.5rem] font-black transition-all duration-[0.5s] ${
          isIn ? " -translate-y-[400%] " : " translate-y-0 "
        } `}
      >
        {service.header}
      </h2>
      <p
        className={`text-[1rem] font-bold absolute transition-all duration-[0.5s] ${
          isIn ? " translate-y-0 " : " translate-y-[130%] "
        }`}
      >
        {service.pra}
      </p>
    </Link>
  );
}
