import { MessageSection } from "@/components/aboutPage/MessageSection";
import { MissionAndVisionSection } from "@/components/aboutPage/MissionAndVisionSection";
import { StorySection } from "@/components/aboutPage/StorySection";
import { SustainabilitySection } from "@/components/aboutPage/SustainabilitySection";
import { WhoSection } from "@/components/aboutPage/Who";
import { Hero } from "@/components/Hero";
import { useTranslations } from "next-intl";

export default function About() {
  const heroT = useTranslations("aboutPage.heroSection");
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
    </div>
  );
}
