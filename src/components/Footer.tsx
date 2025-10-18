import { useTranslations } from "next-intl";
import Image from "next/image";
import { FooterIcon } from "./FooterIcon";
import { FooterNavTab } from "./FooterNavTab";
const links = ["instagram", "facebook", "x", "tiktok"];
const navs = [
  "home",
  "about",
  "projects",
  "service-solution",
  "clients-partners",
  "news-insights",
];
export function Footer() {
  const t = useTranslations("footer");
  return (
    <div className="bg-[#0D1421] p-[var(--sectionPadding)] flex items-start justify-between w-full text-white gap-[2rem]">
      <div className="flex flex-col items-start justify-start gap-[1rem]">
        <Image
          alt="logo"
          src="/logo.png"
          width={50}
          height={50}
          className="w-[6rem] aspect-square"
        />
        <p className="text-[1rem] leading-[1.375rem] font-normal">
          {t("mainPra")}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[2rem] ">
        {navs.map((nav) => (
          <FooterNavTab name={nav} key={nav} />
        ))}
      </div>
      <div className="flex flex-col items-start justify-start gap-[2rem]">
        <p className="text-[1rem] leading-[1.375rem] font-semibold">
          {t("forChat")}
        </p>
        <p className="text-[1rem] leading-[1.375rem] font-semibold">
          {t("email")}
        </p>
        <div className="flex items-center justify-center gap-[1rem]">
          {links.map((link) => (
            <FooterIcon name={link} key={link} />
          ))}
        </div>
      </div>
    </div>
  );
}
