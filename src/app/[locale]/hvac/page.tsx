import { EndSection } from "@/components/endSection";
import { Hero } from "@/components/Hero";
import { HvacSystemSection } from "@/components/hvacPage/HvacSystemSection";
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
