import { EndSection } from "@/components/endSection";
import { Hero } from "@/components/Hero";
import { HeatingAndDHWAndClimateControlSection } from "@/components/hvacPage/HeatingAndDHWAndClimateControlSection";
import { HvacSystemSection } from "@/components/hvacPage/HvacSystemSection";
import { ProfessionalKitchenSection } from "@/components/hvacPage/ProfessionalKitchenSection";
import { TrustSection } from "@/components/hvacPage/TrustSection";
import { VentilationSection } from "@/components/hvacPage/VentilationSection";
import { useTranslations } from "next-intl";

export default function Hvac() {
  const heroT = useTranslations("hvacPage.heroSection");
  const endT = useTranslations("hvacPage.endSection");
  return (
    <div>
      <Hero
        header={heroT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        button1={heroT("button")}
        to1="service-solution"
        location="hvacPage"
      />
      <HvacSystemSection />
      <TrustSection />
      <VentilationSection />
      <ProfessionalKitchenSection />
      <HeatingAndDHWAndClimateControlSection />
      <EndSection
        button={endT("button")}
        header={endT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        to="contact"
        pageName="hvacPage"
      />
    </div>
  );
}
