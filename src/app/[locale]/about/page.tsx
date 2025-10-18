import { MessageSection } from "@/components/aboutPage/MessageSection";
import { MissionAndVisionSection } from "@/components/aboutPage/MissionAndVisionSection";
import { OffersSection } from "@/components/aboutPage/OffersSection";
import { StorySection } from "@/components/aboutPage/StorySection";
import { SustainabilitySection } from "@/components/aboutPage/SustainabilitySection";
import { WhoSection } from "@/components/aboutPage/Who";
import { YearVision } from "@/components/aboutPage/YearVision";
import { EndSection } from "@/components/endSection";
import { Hero } from "@/components/Hero";
import { useTranslations } from "next-intl";

export default function About() {
  const heroT = useTranslations("aboutPage.heroSection");
  const endT = useTranslations("aboutPage.endSection");
  return (
    <div>
      <Hero
        header={heroT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        location="aboutPage"
        isCenter
      />
      <StorySection />
      <MessageSection />
      <WhoSection />
      <MissionAndVisionSection />
      <SustainabilitySection />
      <YearVision />
      <OffersSection />
      <EndSection
        button={endT("button")}
        header={endT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        to="contact"
        pageName="aboutPage"
      />
    </div>
  );
}
