import { EndSection } from "@/components/endSection";
import { Hero } from "@/components/Hero";
import { MistingSystemSection } from "@/components/specialProjectsPage/MistingSystemSection";
import { SpecialProjectsSection } from "@/components/specialProjectsPage/SpecialProjectsSection";
import { useTranslations } from "next-intl";

export default function SpecialProjects() {
  const heroT = useTranslations("specialProjectsPage.heroSection");
  const endT = useTranslations("specialProjectsPage.endSection");
  return (
    <div>
      <Hero
        header={heroT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        location="specialProjectsPage"
      />
      <MistingSystemSection />
      <SpecialProjectsSection />
      <EndSection
        button={endT("button")}
        header={endT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        to="contact"
        pageName="specialProjectsPage"
      />
    </div>
  );
}
