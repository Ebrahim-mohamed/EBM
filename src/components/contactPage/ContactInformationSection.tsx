import { useTranslations } from "next-intl";
import { ContactInformationFormTab } from "./ContactInformationFormTab";
const contacts = [
  { header: "addressHeader", content: "address", img: "location" },
  { header: "phoneHeader", content: "phone", img: "location" },
  { header: "emailHeader", content: "email", img: "location" },
];
export function ContactInformationSection() {
  const t = useTranslations("contactPage.contactInfo");
  return (
    <div className="p-[var(--sectionPadding)] flex w-full items-start justify-between  ">
      <h1 className="text-[4rem] text-[#A8CF38] font-black ">{t("header")}</h1>
      <div className="flex flex-1 justify-end">
        <div className="flex flex-col gap-[1.5rem]">
          {contacts.map((contact) => (
            <ContactInformationFormTab
              key={contact.header}
              header={t(contact.header)}
              pra={t(contact.content)}
              image={contact.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
