import { EndSection } from "@/components/endSection";
import { FireFightingComp } from "@/components/FfireFightingPage/FireFightingComp";
import { Hero } from "@/components/Hero";
import { SectionTowSecondaryPages } from "@/components/SectionTowSecondaryPages";
import { useTranslations } from "next-intl";

export default function FireFighting() {
  const heroT = useTranslations("fireFightingPage.heroSection");
  const endT = useTranslations("fireFightingPage.endSection");
  const secondT = useTranslations("fireFightingPage.secondSection");
  return (
    <div>
      <Hero
        header={heroT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        pra={heroT("des")}
        location="fireFightingPage"
      />
      <SectionTowSecondaryPages
        header={secondT("header")}
        pra={secondT("des")}
        pageName="fireFightingPage"
        button={secondT("button")}
        to="service-solution"
      />
      <FireFightingComp location="smokeSection" />
      <FireFightingComp location="smokeFansSection" />
      <FireFightingComp location="fireShutterSection" />
      <EndSection
        button={endT("button")}
        header={endT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        to="contact"
        pageName="fireFightingPage"
      />
    </div>
  );
}
