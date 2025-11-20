"use client";
import { useLocale, useTranslations } from "next-intl";
import { ContactInformationFormTab } from "./ContactInformationFormTab";
import { useEffect, useState } from "react";
const contacts = [
  { header: "addressHeader", content: "address", img: "location" },
  { header: "phoneHeader", content: "phone", img: "location" },
  { header: "emailHeader", content: "email", img: "location" },
];
type ContactInfoType = {
  address: { en: string; ar: string };
  phone: { en: string; ar: string };
  email: string;
};
export function InterContactInformationSection() {
  const t = useTranslations("contactPage.contactInfo");
  const locale = useLocale();
  const [contactData, setContactData] = useState<ContactInfoType>();
  useEffect(() => {
    fetch("http://localhost:3001/inter-contact-info")
      .then((data) => data.json())
      .then((finalData) => setContactData(finalData));
  }, []);
  return (
    <div className="p-[var(--sectionPadding)] flex w-full items-start justify-between  max-[1250px]:flex-col">
      <h1 className="text-[4rem] text-[#A8CF38] font-black max-[1250px]:mb-[1.5rem] max-[600px]:text-[2.5rem] ">
        {t("header")}
      </h1>
      <div className="flex flex-1 justify-end">
        <div className="flex flex-col gap-[1.5rem]">
          {/* {contacts.map((contact) => (
            <ContactInformationFormTab
              key={contact.header}
              header={t(contact.header)}
              pra={
                locale === "en"
                  ? contactData?.[contact.content].en
                  : contactData?.[contact.content].ar
              }
              image={contact.img}
            />
          ))} */}
          <ContactInformationFormTab
            key={contacts[0].header}
            header={t(contacts[0].header)}
            pra={
              locale === "en"
                ? contactData?.address.en
                : contactData?.address.ar
            }
            image={contacts[0].img}
          />
          <ContactInformationFormTab
            key={contacts[1].header}
            header={t(contacts[1].header)}
            pra={
              locale === "en" ? contactData?.phone.en : contactData?.phone.ar
            }
            image={contacts[1].img}
          />
          <ContactInformationFormTab
            key={contacts[2].header}
            header={t(contacts[2].header)}
            pra={contactData?.email}
            image={contacts[2].img}
          />
        </div>
      </div>
    </div>
  );
}
