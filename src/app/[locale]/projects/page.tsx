import { EndSection } from "@/components/endSection";
import { Hero } from "@/components/Hero";
import { useTranslations } from "next-intl";

export default function ProjectsPage() {
  const heroT = useTranslations("projectsPage.heroSection");
  const endT = useTranslations("projectsPage.endSection");
  return (
    <div>
      <Hero
        isCenter
        header={heroT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        pra={heroT("des")}
        location="projectsPage"
      />
      <EndSection
        button={endT("button")}
        header={endT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        to="contact"
        pageName="projectsPage"
      />
    </div>
  );
}
