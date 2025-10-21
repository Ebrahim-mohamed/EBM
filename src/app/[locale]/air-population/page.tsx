import { ServicesSection } from "@/components/airPopulationPage/ServicesSection";
import { EndSection } from "@/components/endSection";
import { Hero } from "@/components/Hero";
import { useTranslations } from "next-intl";

export default function AirPopulation() {
  const heroT = useTranslations("airPopulationPage.heroSection");
  const endT = useTranslations("airPopulationPage.endSection");
  return (
    <div>
      <Hero
        header={heroT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        button1={heroT("button")}
        to1="service-solution"
        location="airPopulationPage"
      />
      <ServicesSection />
      <EndSection
        button={endT("button")}
        header={endT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        to="contact"
        pageName="airPopulationPage"
      />
    </div>
  );
}
