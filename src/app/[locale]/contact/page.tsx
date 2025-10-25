"use client";
import { ContactInformationSection } from "@/components/contactPage/ContactInformationSection";
import { FormSection } from "@/components/contactPage/FormSection";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const heroT = useTranslations("contactPage.heroSection");
  return (
    <div className=" bg-[url('/contactPage/heroSectionBg.png')] min-h-dvh w-full bg-no-repeat">
      <div className=" min-h-dvh gap-[3rem] flex flex-col justify-center items-center w-full">
        <div className="flex flex-col gap-[0.5rem] justify-center items-center p-[2rem]">
          <h1 className="text-[#A8CF38] text-[4rem] font-black mt-[9rem]">
            {heroT("header")}
          </h1>
          <p className="text-white text-[1.5rem] font-[350] text-center">
            {heroT("des")}
          </p>
        </div>
        <FormSection />
        <ContactInformationSection />
      </div>
    </div>
  );
}
