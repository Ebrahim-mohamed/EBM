import { EndSection } from "@/components/endSection";
import { Hero } from "@/components/Hero";
import { PartnersSection } from "@/components/homePage/PartnersSection";
import { ProjectsSection } from "@/components/homePage/projectsSection";
import { ServiceAndSolutionSection } from "@/components/homePage/ServiceAndSolutionSection";
import { StorySection } from "@/components/homePage/StorySection";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const heroT = useTranslations("homePage.heroSection");
  const endT = useTranslations("homePage.endSection");
  return (
    <div>
      <Hero
        header={heroT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        pra={heroT("des")}
        location="homePage"
        button1={heroT("button1")}
        to1="services-solutions"
        button2={heroT("button2")}
        to2="contact"
      />
      <StorySection />
      <ServiceAndSolutionSection />
      <PartnersSection />
      <ProjectsSection />
      <EndSection
        button={endT("button")}
        header={endT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        to="contact"
        pageName="homePage"
      />
    </div>
  );
}
