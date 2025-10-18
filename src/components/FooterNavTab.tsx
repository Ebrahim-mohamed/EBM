"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export function FooterNavTab({ name }: { name: string }) {
  const t = useTranslations("navbar");
  const locale = useLocale();
  return (
    <Link
      href={name === "home" ? `/${locale}` : `/${locale}/${name}`}
      className={`text-[1rem] text-white font-[350] hover:animate-pulse  `}
    >
      {t(name)}
    </Link>
  );
}
