import { EndSection } from "@/components/endSection";
import { Hero } from "@/components/Hero";
import { ServicesAndSolutionsSection } from "@/components/servicesAndSolutionsPage/ServicesAndSolutionsSection";
import { useTranslations } from "next-intl";

export default function ServiceAndSolution() {
  const heroT = useTranslations("ServiceAndSolutionsPage.heroSection");
  const endT = useTranslations("ServiceAndSolutionsPage.endSection");
  return (
    <div>
      <Hero
        header={heroT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        location="ServicesAndSolutionsPage"
      />
      <ServicesAndSolutionsSection />
      <EndSection
        button={endT("button")}
        header={endT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        to="contact"
        pageName="ServicesAndSolutionsPage"
      />
    </div>
  );
}
