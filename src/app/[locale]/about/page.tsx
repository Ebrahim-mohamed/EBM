import { StorySection } from "@/components/aboutPage/StorySection";
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
    </div>
  );
}
