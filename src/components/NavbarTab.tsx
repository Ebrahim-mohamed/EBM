"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { LinkButton } from "./LinkButton";
import { usePathname } from "next/navigation";
import { LanguageButton } from "./LanguageButtotn";

export function NavbarTab({
  name,
  onClose,
}: {
  name: string;
  onClose?: () => void;
}) {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const path = usePathname();
  if (name === "contact") {
    return <LinkButton name={t(name)} to={name} onClose={onClose} />;
  }
  if (name === "lang") {
    return <LanguageButton />;
  }
  return (
    <Link
      onClick={onClose}
      href={name === "home" ? `/${locale}` : `/${locale}/${name}`}
      className={`text-[1rem] max-[950px]:text-[1.5rem] ${
        (path == `/${locale}` && name === "home") ||
        (path !== `/${locale}` &&
          name !== "home" &&
          path === `/${locale}/${name}`)
          ? " text-[#A8CF38] "
          : " text-white  "
      } font-[350] hover:animate-pulse`}
    >
      {t(name)}
    </Link>
  );
}
