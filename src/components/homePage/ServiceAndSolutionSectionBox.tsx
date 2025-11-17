"use client";
import { serviceAndSolutionSectionBoxType } from "@/types/homePage/types";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export function ServiceAndSolutionSectionBox(
  service: serviceAndSolutionSectionBoxType
) {
  // const [isIn, setIsIn] = useState(false);
  const locale = useLocale();
  const t = useTranslations("homePage.servicesAndSolutions");
  return (
    <Link
      href={`/${locale}/${service.to}`}
      className="p-[2rem] flex flex-col justify-end gap-[1.5rem] text-white rounded-[1rem] min-w-[21rem] min-h-[25rem] bg-cover bg-no-repeat relative flex-1"
      style={{ backgroundImage: `url(/homePage/${service.img}.png)` }}
      // onMouseEnter={() => setIsIn(true)}
      // onMouseOut={() => setIsIn(false)}
    >
      <h2 className={`text-[1.5rem] font-black `}>{t(service.header)}</h2>
      {/* <p
        className={`text-[1rem] font-bold absolute transition-all duration-[0.5s] ${
          isIn ? " translate-y-0 " : " translate-y-[130%] "
        }`}
      >
        {service.pra}
      </p> */}
    </Link>
  );
}
