"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FooterIcon } from "./FooterIcon";
import { FooterNavTab } from "./FooterNavTab";
import { useEffect, useState } from "react";
const links = [
  { name: "instagram", to: "https://www.instagram.com/ebmksa/" },
  { name: "facebook", to: "https://www.facebook.com/EBMSaudiArabia/" },
  {
    name: "linkedIn",
    to: "https://www.linkedin.com/company/energy-building-masters/",
  },
];
const navs = [
  "home",
  "about",
  "projects",
  "service-solution",
  "clients-partners",
  "interior-architectural",
  "terms",
];

type ContactInfoType = {
  address: { en: string; ar: string };
  phone: { en: string; ar: string };
  email: string;
};
export function Footer() {
  const t = useTranslations("footer");
  const [contactData, setContactData] = useState<ContactInfoType>();
  useEffect(() => {
    fetch("https://api.ebmksa.com/contact-info")
      .then((data) => data.json())
      .then((finalData) => setContactData(finalData));
  }, []);
  return (
    <div className="bg-[#0D1421] p-[var(--sectionPadding)] flex items-start justify-between w-full text-white gap-[2rem] max-[930px]:flex-col">
      <div className="flex flex-col items-start justify-start gap-[1rem]">
        <Image
          alt="logo"
          src="/logo.png"
          width={50}
          height={50}
          className="w-[6rem]"
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
          {contactData?.email}
        </p>
        <div className="flex items-center justify-center gap-[1rem]">
          {links.map((link) => (
            <FooterIcon name={link.name} key={link.name} to={link.to} />
          ))}
        </div>
      </div>
    </div>
  );
}
