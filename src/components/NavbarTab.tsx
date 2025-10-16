"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { LinkButton } from "./LinkButton";
import { usePathname } from "next/navigation";

export function NavbarTab({ name }: { name: string }) {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const path = usePathname();
  const isIn =
    name !== "home" ? path.match(locale) : path.match(`/${locale}/${name}`);
  if (name === "contact") {
    return <LinkButton name={t(name)} to={name} />;
  }
  return (
    <Link
      href={name === "home" ? `/${locale}` : `/${locale}/${name}`}
      className={`text-[1rem] ${
        isIn ? " text-white " : " text-[#A8CF38] "
      } font-[350] hover:animate-pulse`}
    >
      {t(name)}
    </Link>
  );
}
