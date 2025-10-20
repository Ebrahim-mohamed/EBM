import { EndSection } from "@/components/endSection";
import { Hero } from "@/components/Hero";
import { CoreSection } from "@/components/interiorArchitecturePage/CoreSection";
import { DivisionSection } from "@/components/interiorArchitecturePage/DivisionSection";
import { SectorsSection } from "@/components/interiorArchitecturePage/SectorsSection";
import { WhySection } from "@/components/interiorArchitecturePage/WhySection";
import { useTranslations } from "next-intl";

export default function InteriorArchitectural() {
  const heroT = useTranslations("interiorArchitecturePage.heroSection");
  const endT = useTranslations("interiorArchitecturePage.endSection");
  return (
    <div>
      <Hero
        isCenter
        header={heroT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        location="interiorArchitecturalPage"
      />
      <DivisionSection />
      <CoreSection />
      <SectorsSection />
      <WhySection />
      <EndSection
        button={endT("button")}
        header={endT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        to="contact"
        pageName="interiorArchitecturalPage"
      />
    </div>
  );
}
