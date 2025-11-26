import { AwardSection } from "@/components/clientsAndPartenersPage/AwardSection";
import { FaqSection } from "@/components/clientsAndPartenersPage/FaqSection";
import { MangersSection } from "@/components/clientsAndPartenersPage/MangersSection";
import { EndSection } from "@/components/endSection";
import { Hero } from "@/components/Hero";
import { PartnersSection } from "@/components/homePage/PartnersSection";
import { useTranslations } from "next-intl";

export default function ClientsAndPartnersPage() {
  const heroT = useTranslations("clientsAndPartnersPage.heroSection");
  const endT = useTranslations("clientsAndPartnersPage.endSection");
  return (
    <div>
      <Hero
        isCenter
        header={heroT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        location="clientsAndPartnersPage"
      />
      {/* <AwardSection /> */}
      {/* <MangersSection /> */}
      <PartnersSection isNotHomePage />
      <FaqSection />
      <EndSection
        button={endT("button")}
        header={endT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        to="contact"
        pageName="clientsAndPartnersPage"
      />
    </div>
  );
}
